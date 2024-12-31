function VisualTimer(props: {remainingTime: number}){
  const currentDeg:string = String(props.remainingTime > 3600 ? 0 : 360 - props.remainingTime / 10) + 'deg';

  return (
    <div 
      className="w-full h-full rounded-full"
      style={{background: `conic-gradient(#eaeaea ${currentDeg}, #061298 ${currentDeg})`}}
    ></div>
  );
};

export default VisualTimer;