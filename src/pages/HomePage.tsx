import React, { useEffect, useRef, useState } from "react";
import { INIT_MIN } from "../utils/constants";
import Title from "../layout/Title";
import Dials from "../features/timer/Dials";
import VisualTimer from "../features/timer/VisualTimer";
import getFormatTime from "../features/timer/functions/getFormatTime";
import Controller from "../features/timer/Controller";

const HomePage: React.FC = () => {
  const [remainingTime, setRemainingTime] = useState<number>(INIT_MIN * 60);
  const [selectedTime, setSelectedTime] = useState<number>(INIT_MIN);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const startTimeRef = useRef<number | null>(null);
  const endTimeRef = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // timer
  useEffect(() => {
    if (isRunning) {
      const now = Date.now();
      
      if (!endTimeRef.current) {
        endTimeRef.current = now + remainingTime * 1000;
      }

      timerRef.current = setInterval(() => {
        const now = Date.now();
        const diff = Math.max(0, Math.floor((endTimeRef.current! - now) / 1000));
        setRemainingTime(diff);

        if (diff <= 0) {
          setIsRunning(false);
        }
      }, 250);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isRunning]);

  // manually setting
  const adjustEndTime = (newRemainingTime: number) => {
    setRemainingTime(newRemainingTime);

    if (isRunning) {
      const now = Date.now();
      endTimeRef.current = now + newRemainingTime * 1000;
    }
  };

  // clear ref
  useEffect(() => {
    if (!isRunning) {
      startTimeRef.current = null;
      endTimeRef.current = null;
    }
  }, [isRunning]);

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

  return (
    <>
    <Title pageName={getFormatTime(remainingTime)} />
    <div className="w-screen-85 max-w-350 m-auto pt-5 flex flex-col justify-center items-center">
      <section className="relative w-11/12 max-h-80 mb-7 aspect-square">
        <Dials />
        <VisualTimer remainingTime={remainingTime} />
      </section>
      <section className="pt-2 px-4 pb-3 w-full rounded-md bg-white/60 backdrop-opacity-5 backdrop-invert">
        <h2 className="mb-5 text-6xl text-center font-bold">{getFormatTime(remainingTime)}</h2>
        <Controller 
          adjustEndTime={adjustEndTime}
          setSelectedTime={setSelectedTime}
          selectedTime={selectedTime}
          setIsRunning={setIsRunning}
          isRunning={isRunning}
        />
      </section>
    </div>
    </>
  );
};

export default HomePage;