import React from "react";
import { TIME_OPTIONS } from "../../utils/constants";

interface VisualTimerProps {
  setRemainingTime: React.Dispatch<React.SetStateAction<number>>;
  setSelectedTime: React.Dispatch<React.SetStateAction<number>>;
  selectedTime: number;
}

const VisualTimer: React.FC<VisualTimerProps> = ({
  setRemainingTime,
  setSelectedTime,
  selectedTime,
}) => {
  const selectOption = (event: React.ChangeEvent<HTMLSelectElement>):void => {
    setRemainingTime(Number(event.target.value) * 60);
    setSelectedTime(Number(event.target.value));
  }

  return (
    <select 
      name="setting"
      id="setting"
      className="text-lg bg-transparent"
      onChange={selectOption}
      value={selectedTime}
    >
    {TIME_OPTIONS.map((timeOption) => (
      <option
        key={timeOption.value}
        value={timeOption.value}
      >
        {timeOption.label}
      </option>
    ))}
    </select>
  );
};

export default VisualTimer;