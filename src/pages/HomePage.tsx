import React, { useEffect, useRef, useState } from "react";
import { INIT_MIN } from "../utils/constants";
import Title from "../layout/Title";
import Dials from "../features/timer/Dials";
import VisualTimer from "../features/timer/VisualTimer";
import getFormatTime from "../features/timer/functions/getFormatTime";
import TimeSetting from "../features/timer/TimeSetting";
import StartStopButton from "../features/timer/StartStopButton";
import ResetButton from "../features/timer/ResetButton";

const HomePage: React.FC = () => {
  const [remainingTime, setRemainingTime] = useState<number>(INIT_MIN * 60);
  const [selectedTime, setSelectedTime] = useState<number>(INIT_MIN);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const startTimeRef = useRef<number | null>(null);
  const endTimeRef = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // handle key down 
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.code === "Space") {
        event.preventDefault();
        setIsRunning((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // timer
  useEffect(() => {
    if (isRunning) {
      const now = Date.now();
      if (!startTimeRef.current || !endTimeRef.current) {
        startTimeRef.current = now;
        endTimeRef.current = now + remainingTime * 1000;
      }

      timerRef.current = setInterval(() => {
        const now = Date.now();
        const diff = Math.max(0, Math.floor((endTimeRef.current! - now) / 1000));
        setRemainingTime(diff);

        if (diff === 0) {
          setIsRunning(false);
          clearInterval(timerRef.current!);
          startTimeRef.current = null;
          endTimeRef.current = null;
        }
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning]);

  // change or reset time
  useEffect(() => {
    if (isRunning) {
      const now = Date.now();
      endTimeRef.current = now + remainingTime * 1000;
    }
  }, [remainingTime]);

  // clear ref
  useEffect(() => {
    if (!isRunning) {
      startTimeRef.current = null;
      endTimeRef.current = null;
    }
  }, [isRunning]);


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