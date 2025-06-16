import React from "react";

interface ResetButtonProps {
  reset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({reset}) => {

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
        dark:bg-[#1c2f47]
        dark:text-[#ccc]
        dark:border-stone-800
      "
      onClick={reset}
    >Reset</div>
  );
};

export default ResetButton;