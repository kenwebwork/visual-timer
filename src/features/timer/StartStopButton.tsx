function StartStopButton(props: {setIsRunning: (isRunning: boolean) => void, isRunning: boolean }){
  
  const handleClick = ():void => {
    props.setIsRunning(!props.isRunning);
  }

  return (
    <div 
      className="py-1 bg-blue-600 text-white rounded-md cursor-pointer"
      onClick={handleClick}
    >
      {props.isRunning ? 'STOP' : 'START'}
    </div>
  );
};

export default StartStopButton;