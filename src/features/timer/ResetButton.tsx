function ResetButton(props: {setRemainingTime: (selectedTime: number) => void, selectedTime: number}){

  return (
    <div 
      className="
        py-1 mt-3 mb-1
        bg-stone-200
        text-block
        rounded-md
        border-b-2
        border-stone-500
        cursor-pointer
        hover:border-b-1
      "
      onClick={() => props.setRemainingTime(props.selectedTime * 60)}
    >
      Reset
    </div>
  );
};

export default ResetButton;