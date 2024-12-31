import { TIME_OPTIONS } from "../../utils/constants";

function VisualTimer(props: {setRemainingTime: (time: number) => void }){
  
  const selectOption = (event: React.ChangeEvent<HTMLSelectElement>):void => {
    props.setRemainingTime(Number(event.target.value) * 60);
  }

  return (
    <select 
      name="setting"
      id="setting"
      className="mb-3 text-lg bg-transparent"
      onChange={selectOption}
    >
    {TIME_OPTIONS.map((timeOption) => (
      <option
        key={timeOption.value}
        value={timeOption.value}
        selected={timeOption.value === 25 ? true : false}
      >{timeOption.label}</option>
    ))}
    </select>
  );
};

export default VisualTimer;