import React from "react";

interface ResetButtonProps {
  adjustEndTime: (newRemainingTime: number) => void;
  selectedTime: number;
}

const ResetButton: React.FC<ResetButtonProps> = ({adjustEndTime, selectedTime}) => {

  return (
    <div 
      className="
        py-1 mt-3 mb-1
        bg-stone-200
        text-block text-center
        rounded-md
        border-b-2 border-stone-500
        cursor-pointer
        hover:border-b-1
      "
      onClick={() => adjustEndTime(selectedTime * 60)}
    >
      Reset
    </div>
  );
};

export default ResetButton;