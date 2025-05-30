import { useEffect, useState } from "react";
import { INIT_MIN } from "../utils/constants";
import Title from "../layout/Title";
import Dials from "../features/timer/Dials";
import VisualTimer from "../features/timer/VisualTimer";
import getFormatTime from "../features/timer/functions/getFormatTime";
import TimeSetting from "../features/timer/TimeSetting";
import StartStopButton from "../features/timer/StartStopButton";
import ResetButton from "../features/timer/ResetButton";

function HomePage(){
  const [remainingTime, setRemainingTime] = useState<number>(INIT_MIN * 60);
  const [selectedTime, setSelectedTime] = useState<number>(INIT_MIN);
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


  return (
    <>
    <Title pageName={getFormatTime(remainingTime)} />
    <div className="w-screen-85 max-w-350 m-auto pt-5 flex flex-col justify-center items-center">
      <div className="relative w-11/12 max-h-80 mb-7 aspect-square">
        <Dials />
        <VisualTimer remainingTime={remainingTime} />
      </div>
      <div className="
        w-full text-center flex justify-center items-center
        py-2 px-4
        rounded-md
        bg-white/60 backdrop-opacity-5 backdrop-invert
      ">
        <div className="flex-1 flex-col h-auto">
          <h2 className="text-5xl font-bold">{getFormatTime(remainingTime)}</h2>
          <TimeSetting 
            setRemainingTime={setRemainingTime}
            setSelectedTime={setSelectedTime}
            selectedTime={selectedTime}
          />
        </div>
        <div className="flex-1 ml-3">
          <StartStopButton setIsRunning={setIsRunning} isRunning={isRunning} />
          <ResetButton setRemainingTime={setRemainingTime} selectedTime={selectedTime} />
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;