import { useEffect, useState } from "react";
import Dials from "../features/timer/Dials";

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

  const handleClick = ():void => {
    setIsRunning(!isRunning);
  }

  return (
    <>
    <div className="wrapper m-auto pt-5 flex flex-col justify-center items-center">
      <div className="relative w-11/12 max-h-80 mb-7 aspect-square">
        <Dials />
        <div 
          className="visualTimer w-full h-full rounded-full"
          style={{background: 'conic-gradient(#eaeaea 210deg, #061298 210deg)'}}
        ></div>
      </div>
      <div className="w-full text-center flex justify-center items-center py-2 px-4 rounded-md backdrop-opacity-5 backdrop-invert bg-white/60">
        <h2 className="flex-1 text-5xl font-bold h-auto">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </h2>
        <div className="flex-1">
          <select name="setting" id="setting" className="mb-3 text-lg bg-transparent">
            <option value="5">5 min</option>
            <option value="10">10 min</option>
            <option value="15">15 min</option>
            <option value="25">25 min</option>
            <option value="30">30 min</option>
            <option value="45">45 min</option>
            <option value="60">60 min</option>
          </select>
          <div 
            className="py-1 bg-blue-600 text-white rounded-md"
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