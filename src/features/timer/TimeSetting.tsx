import { TIME_OPTIONS } from "../../utils/constants";

function VisualTimer(
  props: {
    setRemainingTime: (time: number) => void,
    setSelectedTime: (time: number) => void,
    selectedTime: number,
}){
  const selectOption = (event: React.ChangeEvent<HTMLSelectElement>):void => {
    props.setRemainingTime(Number(event.target.value) * 60);
    props.setSelectedTime(Number(event.target.value));
  }

  return (
    <select 
      name="setting"
      id="setting"
      className="text-lg bg-transparent"
      onChange={selectOption}
      value={props.selectedTime}
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