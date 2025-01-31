import "./StopWatch.css";
import { useEffect, useRef, useState } from "react";
import { IoMdPause, IoMdPlay } from "react-icons/io";
const StopWatch = () => {
  const [btnToggle, setBtnToggle] = useState(true);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [rootTimer, setRootTimer] = useState(0);
  const interValIdRef = useRef(null);
  const timeStartRef = useRef(0);

  useEffect(() => {
    if (isTimerRunning) {
      interValIdRef.current = setInterval(() => {
        setRootTimer(Date.now() - timeStartRef.current);
      }, 10);
      return () => {
        clearInterval(interValIdRef.current);
      };
    }
  }, [isTimerRunning]);

  // Start Timer Function
  const startTimer = () => {
    setBtnToggle(false);
    setIsTimerRunning(true);
    timeStartRef.current = Date.now() - rootTimer;
  };

  // Stop Timer Function
  const stopTimer = () => {
    setBtnToggle(true);
    setIsTimerRunning(false);
  };

  // Reset Timer Function
  const resetTimer = () => {
    setBtnToggle(true);
    setRootTimer(0);
    setIsTimerRunning(false);
  };

  const hours = String(Math.floor(rootTimer / (1000 * 60 * 60))).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor((rootTimer / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((rootTimer / 1000) % 60)).padStart(2, "0");
  const miliseconds = String(Math.floor((rootTimer % 1000) / 60)).padStart(
    2,
    "0"
  );

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch Timer</h1>
      <div className="timer-show-box">
        <div className="timer-box">
          <div className="times-number">
            <h1>
              {hours} <span>:</span> {minutes} <span>:</span> {seconds}{" "}
              <span>:</span> {miliseconds}
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
