function HomePage(){
  return (
    <>
    <div className="wrapper m-auto pt-5 flex flex-col justify-center items-center">
      <div className="w-11/12 max-h-80 mb-7 aspect-square">
        <div className="visualTimer w-full h-full rounded-full"></div>
      </div>
      <div className="w-full text-center flex justify-center items-center py-2 px-4 rounded-md backdrop-opacity-5 backdrop-invert bg-white/60">
        <div className="flex-1 text-5xl font-bold h-auto">25:00</div>
        <div className="flex-1">
          <select name="setting" id="setting" className="mb-3 text-lg bg-transparent">
            <option value="5">5 min</option>
            <option value="10">10 min</option>
            <option value="15">15 min</option>
            <option value="25">25 min</option>
            <option value="30">30 min</option>
            <option value="45">45 min</option>
            <option value="60">60 min</option>
          </select>
          <div className="py-1 bg-blue-600 text-white rounded-md">START</div>
        </div>
      </div>
    </div>
      <style jsx>{`
        .wrapper {
          width: 85vw;
          max-width: 350px;
          /* border: solid 1px black; */
        }
        .visualTimer {
          background: conic-gradient(#eaeaea 195deg, #061298 195deg 18deg);
        }
      `}</style>
    </>
  );
};

export default HomePage;