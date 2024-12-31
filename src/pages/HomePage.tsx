import { useEffect, useState } from "react";
import Title from "../layout/Title";
import Dials from "../features/timer/Dials";
import VisualTimer from "../features/timer/VisualTimer";
import getFormatTime from "../features/timer/functions/getFormatTime";
import TimeSetting from "../features/timer/TimeSetting";

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

  // const selectOption = (event: React.ChangeEvent<HTMLSelectElement>):void => {
  //   setRemainingTime(Number(event.target.value) * 60);
  // }

  const handleClick = ():void => {
    setIsRunning(!isRunning);
  }

  return (
    <>
    <Title pageName={getFormatTime(remainingTime)} />
    <div className="wrapper m-auto pt-5 flex flex-col justify-center items-center">
      <div className="relative w-11/12 max-h-80 mb-7 aspect-square">
        <Dials />
        <VisualTimer remainingTime={remainingTime} />
      </div>
      <div className="w-full text-center flex justify-center items-center py-2 px-4 rounded-md backdrop-opacity-5 backdrop-invert bg-white/60">
        <div className="flex-1 h-auto">
          <h2 className="text-5xl font-bold">{getFormatTime(remainingTime)}</h2>
        </div>
        <div className="flex-1">
          <TimeSetting setRemainingTime={setRemainingTime} />
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