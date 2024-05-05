import React, { useState, useEffect } from 'react';

function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((time) => time + 10);  // increment the time by 10 milliseconds
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handleStop = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = () => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    return `${seconds}:${getMilliseconds}`;
  };

  return (
    <div>
      <h2>Timer</h2>
      <div id="display-timer">{formatTime()}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default StopWatch;
