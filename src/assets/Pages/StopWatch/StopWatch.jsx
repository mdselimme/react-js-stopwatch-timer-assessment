import "./StopWatch.css";
const StopWatch = () => {
  return (
    <div className="stopwatch-container">
      <h1>Stopwatch Timer</h1>
      <div className="timer-box">
        <div className="times-number">
          <p>00</p>
          <span>Hours</span>
        </div>
        <div>
          <p>:</p>
        </div>
        <div className="times-number">
          <p>00</p>
          <p>Minutes</p>
        </div>
        <div>
          <p>:</p>
        </div>
        <div className="times-number">
          <p>00</p>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
