import React from 'react'
import TimeSetting from './TimeSetting'
import StartStopButton from './StartStopButton'
import ResetButton from './ResetButton'

interface ControllerProps {
  adjustEndTime: (newRemainingTime: number) => void;
  setSelectedTime: React.Dispatch<React.SetStateAction<number>>;
  selectedTime: number;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  isRunning: boolean;
}

const Controller: React.FC<ControllerProps> = ({
  adjustEndTime,
  setSelectedTime,
  selectedTime,
  setIsRunning,
  isRunning,
}) => {
  return (
    <div className="flex h-auto">
      <div className="w-1/2 mr-5">
        <TimeSetting
          adjustEndTime={adjustEndTime}
          setSelectedTime={setSelectedTime}
          selectedTime={selectedTime}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <StartStopButton setIsRunning={setIsRunning} isRunning={isRunning} />
        <ResetButton adjustEndTime={adjustEndTime} selectedTime={selectedTime} />
      </div>
    </div>
  )
}

export default Controller