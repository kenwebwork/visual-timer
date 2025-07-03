import React from "react";

interface VisualTimerProps {
  remainingTime: number;
  isBreakMode: boolean;
}

const VisualTimer: React.FC<VisualTimerProps> = ({remainingTime, isBreakMode}) => {
  function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  const handColor: string = isBreakMode ? "#CC4A22" : "#061298"
  const visualTimerColor: string = isDarkMode() ? "#0C114C" : "#eaeaea"

  const currentDeg: string = String(remainingTime > 3600 ? 0 : 360 - remainingTime / 10) + 'deg';
  
  return (
    <div 
      className="w-full h-full rounded-full"
      style={{background: `conic-gradient(${visualTimerColor} ${currentDeg}, ${handColor} ${currentDeg})`}}
    />
  );
};

export default VisualTimer;