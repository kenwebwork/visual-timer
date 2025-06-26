import React, { useEffect, useRef, useState } from "react";
import { TIME_OPTIONS } from "../../features/timer/timerConsts";
import '../../features/timer/scrollbar.css'

interface TimeSettingProps {
  adjustEndTime: (newRemainingTime: number) => void;
  setSelectedTime: React.Dispatch<React.SetStateAction<number>>;
  selectedTime: number;
}

const TimeSetting: React.FC<TimeSettingProps> = ({
  adjustEndTime,
  setSelectedTime,
  selectedTime,
}) => {

  const scrollRef = useRef<HTMLDivElement>(null);
  const radioRefs = useRef<Map<number, HTMLInputElement>>(new Map());
  const [isFocused, setIsFocused] = useState(false);

  const selectOption = (timeValue: number): void => {
    adjustEndTime(timeValue * 60);
    setSelectedTime(timeValue);
  }

  const selectedOptionRef = useRef<HTMLOptionElement | null>(null);
  useEffect(() => {
    if (selectedOptionRef.current) {
      selectedOptionRef.current.scrollIntoView({ block: 'center' });
    }
  }, []);

  const initScrollPos: number = 65;
  
  useEffect(() => {
    const el = scrollRef.current;
    if (el) { el.scrollTop = initScrollPos; }
  }, []);

  // shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'm') {
        const target: HTMLInputElement | undefined = radioRefs.current.get(selectedTime);
        if (target) {
          if (isFocused) {
            target.blur();
            setIsFocused(false);
          } else {
            target.focus({ preventScroll: true });
            setIsFocused(true);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedTime, isFocused]);

  return (
    <div
      ref={scrollRef}
      className="flex flex-col w-full h-[90px] bg-white rounded-md overflow-y-scroll dark:bg-black/60"
    >
    {TIME_OPTIONS.map((timeOption) => (
      <div
        key={timeOption.label}
        onClick={() => selectOption(timeOption.value)}
        className="
          time-setting
          flex items-center
          mx-auto mb-[2px]
          text-md text-center
        "
      >
        <input
          type="radio"
          id={timeOption.label}
          value={timeOption.value}
          checked={timeOption.value === selectedTime}
          ref={(el) => {
            if (el) {
              radioRefs.current.set(timeOption.value, el);
            } else {
              radioRefs.current.delete(timeOption.value);
            }
          }}
        />
        <label htmlFor={timeOption.label} className={`ml-2 dark:text-[#ccc]`}>{timeOption.label}</label>
      </div>
    ))}
    </div>
  );
};

export default TimeSetting;