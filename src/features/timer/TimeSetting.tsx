import { useState } from "react";
import { INIT_MIN, TIME_OPTIONS } from "../../utils/constants";

function VisualTimer(props: {setRemainingTime: (time: number) => void }){

  const [selectedValue, setSelectedValue] = useState<number>(INIT_MIN);

  const selectOption = (event: React.ChangeEvent<HTMLSelectElement>):void => {
    props.setRemainingTime(Number(event.target.value) * 60);
    setSelectedValue(Number(event.target.value));
  }

  return (
    <select 
      name="setting"
      id="setting"
      className="mb-3 text-lg bg-transparent"
      onChange={selectOption}
      value={selectedValue}
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