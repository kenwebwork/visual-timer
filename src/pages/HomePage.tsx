function HomePage(){
  return (
    <>
    <div className="wrapper">
      <div className="circleArea">
        <div className="circle">circle</div>
      </div>
      <div className="counter">
        <div className="countdown">25:00</div>
        <div className="right">
          <div>Minutes → 25 min</div>
          <div className="button">START</div>
        </div>
      </div>
    </div>
      <style jsx>{`
        .wrapper {
          width: 85vw;
          max-width: 350px;
          height: 100%;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: solid 1px black;
        }
        .circleArea {
          height: 85vw;
          max-height: 350px;
          /* width: 60vw;
          max-width: 400px; */
          width: 100%;
          margin: auto;
          margin-bottom: .5rem;
          border: solid 1px black;
        }
        .circle {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: solid 1px black;
        }
        .counter {
          border: solid 1px black;
          width: 100%;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          padding: .5rem 1rem;
        }
        .countdown {
          font-size: 3rem;
          font-weight: bold;
          flex: 1;
        }
        .right {
          flex:1 ;
        }
        .button {
          background-color: blue;
          color: white;
          padding: .5rem 1rem;
          /* text-align: center; */
        }
      `}</style>
    </>
  );
};

export default HomePage;