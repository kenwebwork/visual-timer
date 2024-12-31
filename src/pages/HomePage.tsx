import { useEffect, useState } from "react";
import Dials from "../features/timer/Dials";
import Title from "../layout/Title";

function HomePage(){

  const [remainingTime, setRemainingTime] = useState<number>(25 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;

    if (isRunning && remainingTime > 0) {
      timerId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsRunning(false);
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isRunning, remainingTime]);

  const minutes: number = Math.floor(remainingTime / 60);
  const seconds: number = remainingTime % 60;
  const currentDeg:number = remainingTime > 3600 ? 0 : 360 - remainingTime / 10;

  const formatTime: string = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  interface settingOptions {
    value: number;
    label: string;
  }

  const timeOptions: settingOptions[] = [
    { value: 5, label: '5 min'},
    { value: 10, label: '10 min'},
    { value: 15, label: '15 min'},
    { value: 20, label: '20 min'},
    { value: 25, label: '25 min'},
    { value: 30, label: '30 min'},
    { value: 45, label: '45 min'},
    { value: 60, label: '60 min'},
  ];

  const selectOption = (event: React.ChangeEvent<HTMLSelectElement>):void => {
    setRemainingTime(Number(event.target.value) * 60);
  }

  const handleClick = ():void => {
    setIsRunning(!isRunning);
  }

  return (
    <>
    <Title pageName={formatTime} />
    <div className="wrapper m-auto pt-5 flex flex-col justify-center items-center">
      <div className="relative w-11/12 max-h-80 mb-7 aspect-square">
        <Dials />
        <div 
          className="visualTimer w-full h-full rounded-full"
          style={{background: `conic-gradient(#eaeaea ${currentDeg}deg, #061298 ${currentDeg}deg)`}}
        ></div>
      </div>
      <div className="w-full text-center flex justify-center items-center py-2 px-4 rounded-md backdrop-opacity-5 backdrop-invert bg-white/60">
        <h2 className="flex-1 text-5xl font-bold h-auto">
          {formatTime}
        </h2>
        <div className="flex-1">
          <select 
            name="setting"
            id="setting"
            className="mb-3 text-lg bg-transparent"
            onChange={selectOption}
          >
          {timeOptions.map((timeOption) => (
            <option
              key={timeOption.value}
              value={timeOption.value}
              selected={timeOption.value === 25 ? true : false}
            >{timeOption.label}</option>
          ))}
          </select>
          <div 
            className="py-1 bg-blue-600 text-white rounded-md cursor-pointer"
            onClick={handleClick}
          >
            {isRunning ? 'STOP' : 'START'}
          </div>
        </div>
      </div>
    </div>
      <style jsx>{`
        .wrapper {
          width: 85vw;
          max-width: 350px;
        }
      `}</style>
    </>
  );
};

export default HomePage;