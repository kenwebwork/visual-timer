import React, { useEffect, useRef } from "react";
import { INIT_MIN, TIME_OPTIONS } from "../../utils/constants";

interface VisualTimerProps {
  setRemainingTime: (newRemainingTime: number) => void;
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
    console.log(selectedTime);
  }

  const selectedOptionRef = useRef<HTMLOptionElement | null>(null);
  useEffect(() => {
    if (selectedOptionRef.current) {
      selectedOptionRef.current.scrollIntoView({ block: 'center' });
    }
  }, []);

  return (
    <select 
      name="setting"
      id="setting"
      className="
        w-full h-17
        rounded-md
        bg-transparent
        text-lg text-center
      "
      onChange={selectOption}
      value={selectedTime}
      defaultValue={INIT_MIN}
      multiple
    >
    {TIME_OPTIONS.map((timeOption) => (
      <option
        key={timeOption.value}
        value={timeOption.value}
        className={timeOption.value === selectedTime ? "bg-gray-200" : "bg-white"}
        ref={timeOption.value === selectedTime ? selectedOptionRef : null}
      >
        {timeOption.label}
      </option>
    ))}
    </select>
  );
};

export default VisualTimer;