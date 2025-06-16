import React, { useEffect, useRef } from "react";
import { TIME_OPTIONS } from "../../utils/constants";

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

  const selectOption = (timeValue: number):void => {
    adjustEndTime(timeValue * 60);
    setSelectedTime(timeValue);
  }

  const selectedOptionRef = useRef<HTMLOptionElement | null>(null);
  useEffect(() => {
    if (selectedOptionRef.current) {
      selectedOptionRef.current.scrollIntoView({ block: 'center' });
    }
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);
  const initScrollPos: number = 65;

  useEffect(() => {
    const el = scrollRef.current;
    if (el) { el.scrollTop = initScrollPos; }
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex flex-col w-full h-24 bg-white rounded-md overflow-y-scroll dark:bg-black/60"
    >
    {TIME_OPTIONS.map((timeOption) => (
      <div
        key={timeOption.label}
        onClick={() => selectOption(timeOption.value)}
        className="
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
        />
        <label htmlFor={timeOption.label} className={`ml-2 dark:text-[#ccc]`}>{timeOption.label}</label>
      </div>
    ))}
    </div>
  );
};

export default TimeSetting;