import React, { useEffect, useRef } from "react";
import { TIME_OPTIONS } from "../../utils/constants";

interface TimeSettingProps {
  setRemainingTime: (newRemainingTime: number) => void;
  setSelectedTime: React.Dispatch<React.SetStateAction<number>>;
  selectedTime: number;
}

const TimeSetting: React.FC<TimeSettingProps> = ({
  setRemainingTime,
  setSelectedTime,
  selectedTime,
}) => {

  const selectOption = (timeValue: number):void => {
    setRemainingTime(timeValue * 60);
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
    if (el) {
      el.scrollTop = initScrollPos;
    }
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex flex-col w-full h-24 bg-white rounded-md overflow-y-scroll"
    >
    {TIME_OPTIONS.map((timeOption) => (
      <div
        key={timeOption.label}
        onClick={() => selectOption(timeOption.value)}
        className="flex items-center mb-[2px] pl-6 text-md"
      >
        <input
          type="radio"
          id={timeOption.label}
          value={timeOption.value}
          checked={timeOption.value === selectedTime}
        />
        <label htmlFor={timeOption.label} className="ml-2">{timeOption.label}</label>
      </div>
    ))}
    </div>
  );
};

export default TimeSetting;