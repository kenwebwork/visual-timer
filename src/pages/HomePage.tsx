import React, { useEffect, useRef, useState } from "react";
import { INIT_MIN } from "../features/timer/timerConsts";
import Title from "../layout/Title";
import Dials from "../features/timer/Dials";
import VisualTimer from "../features/timer/VisualTimer";
import getFormatTime from "../features/timer/functions/getFormatTime";
import Controller from "../features/timer/Controller";
import useSound from "use-sound";
import Sound from "../assets/sounds/timerEnd.mp3";

const HomePage: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState<number>(INIT_MIN * 60);
  const [selectedTime, setSelectedTime] = useState<number>(INIT_MIN);
  
  const selectedTimeRef = useRef(selectedTime);
  const startTimeRef = useRef<number | null>(null);
  const endTimeRef = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [timerEnd] = useSound(Sound, { volume: 2 });

  // for reset
  useEffect(() => {
    selectedTimeRef.current = selectedTime;
  }, [selectedTime]);

  // timer
  useEffect(() => {
    if (!isRunning) {return}
    
    const now: number = Date.now();
    endTimeRef.current = now + remainingTime * 1000;

    const tick = () => {
      const now: number = Date.now();
      const diff: number = Math.max(0, Math.ceil((endTimeRef.current! - now) / 1000));
      setRemainingTime(diff);

      if (diff === 3) {
        timerEnd();
      }

      if (diff <= 0) {
        setIsRunning(false);
      }
    }

    tick();
    timerRef.current = setInterval(tick, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isRunning]);

  // changing settings
  const adjustEndTime = (newRemainingTime: number) => {
    setRemainingTime(newRemainingTime);
    const now = Date.now();
    endTimeRef.current = now + newRemainingTime * 1000;
  };

  // clear ref
  useEffect(() => {
    if (!isRunning) {
      startTimeRef.current = null;
      endTimeRef.current = null;
    }
  }, [isRunning]);

  const skipSeconds = (isForward: boolean, seconds: number) => {
    const delta: number = isForward ? - seconds : seconds;

    setRemainingTime((prev) => {
      const newTime = Math.max(0, prev + delta);
      const now = Date.now();
      endTimeRef.current = now + newTime * 1000;
      return newTime;
    });
  };

  const reset = () => {
    const newTime = selectedTimeRef.current * 60;
    adjustEndTime(newTime)
  };

  // shrotcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      const key = event.key.toLowerCase();
      if (event.code === "Space" || event.code === "Enter" || key === "k") {
        event.preventDefault();
        setIsRunning((prev) => !prev);
      } else if (key === "l") {
        skipSeconds(true, 10);
      } else if (key === "j") {
        skipSeconds(false, 10);
      } else if (event.code === "ArrowRight") {
        skipSeconds(true, 5);
      } else if (event.code === "ArrowLeft") {
        skipSeconds(false, 5);
      } else if (key === "r") {
        reset();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
    <Title pageName={getFormatTime(remainingTime)} isRunning={isRunning} />
    <div className="w-screen-85 max-w-350 m-auto pt-5 flex flex-col justify-center items-center">
      <section className="relative w-11/12 max-h-80 mb-7 aspect-square">
        <Dials />
        <VisualTimer remainingTime={remainingTime} />
      </section>
      <section className="mt-[10px] pt-2 px-4 pb-3 w-full rounded-md bg-white/60 backdrop-opacity-5 backdrop-invert dark:bg-black/60">
        <h1 className="mb-5 text-6xl text-center font-bold dark:text-[#ccc] font-[M PLUS Rounded 1c]">
          {getFormatTime(remainingTime)}
        </h1>
        <Controller 
          adjustEndTime={adjustEndTime}
          setSelectedTime={setSelectedTime}
          selectedTime={selectedTime}
          setIsRunning={setIsRunning}
          isRunning={isRunning}
          reset={reset}
        />
      </section>
    </div>
    </>
  );
};

export default HomePage;