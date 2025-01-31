import "./StopWatch.css";
import { useState } from "react";
import { IoMdPause, IoMdPlay } from "react-icons/io";
const StopWatch = () => {
  const [btnToggle, setBtnToggle] = useState(true);

  // Start Timer Function
  const startTimer = () => {
    setBtnToggle(false);
    console.log("start timer");
  };

  // Stop Timer Function
  const stopTimer = () => {
    setBtnToggle(true);
    console.log("stop timer");
  };

  // Reset Timer Function
  const resetTimer = () => {
    console.log("reset timer");
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch Timer</h1>
      <div className="timer-show-box">
        <div className="timer-box">
          <div className="times-number">
            <h1>
              00 <span>:</span> 00 <span>:</span> 00 <span>:</span> 00
            </h1>
          </div>
        </div>
        {/* Start and Pause Timer Button Start */}
        <div className="play-pause-btn">
          {btnToggle ? (
            <button type="button" title="Start timer" onClick={startTimer}>
              <IoMdPlay />
            </button>
          ) : (
            <button type="button" title="Pause timer" onClick={stopTimer}>
              <IoMdPause />
            </button>
          )}
        </div>
        {/* Start and Pause Timer Button Start */}
      </div>
      {/* Reset Timer Button  */}
      <div className="reset-timer">
        <button onClick={resetTimer} title="Reset Timer" type="button">
          Reset Timer
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
