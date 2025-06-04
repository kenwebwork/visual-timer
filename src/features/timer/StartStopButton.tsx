import React from "react";

interface StartStopButtonProps {
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>,
  isRunning: boolean 
}

const StartStopButton: React.FC<StartStopButtonProps> = ({setIsRunning, isRunning}) => {
  
  const handleClick = ():void => {
    setIsRunning(!isRunning);
  }

  return (
    <div 
      className={ isRunning ?
        "py-1 bg-blue-600 text-white rounded-md cursor-pointer mt-1"
        :
        "py-1 bg-blue-600 text-white rounded-md cursor-pointer border-b-4 border-blue-900"
      }
      onClick={handleClick}
    >
      {isRunning ? 'STOP' : 'START'}
    </div>
  );
};

export default StartStopButton;