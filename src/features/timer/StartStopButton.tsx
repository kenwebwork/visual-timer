function StartStopButton(props: {setIsRunning: (isRunning: boolean) => void, isRunning: boolean }){
  
  const handleClick = ():void => {
    props.setIsRunning(!props.isRunning);
  }

  return (
    <div 
      className={ props.isRunning ?
        "py-1 bg-blue-600 text-white rounded-md cursor-pointer mt-1"
        :
        "py-1 bg-blue-600 text-white rounded-md cursor-pointer border-b-4 border-blue-900"
      }
      onClick={handleClick}
    >
      {props.isRunning ? 'STOP' : 'START'}
    </div>
  );
};

export default StartStopButton;