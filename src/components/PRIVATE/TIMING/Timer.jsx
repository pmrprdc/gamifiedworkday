import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ initialTime = 0 }) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(initialTime);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else if (isPaused) {
      clearInterval(intervalRef.current);
    } else if (!isActive) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleStop = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimer(initialTime);
  };

  return (
    <div>
      <h1>{timer} seconds</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>{isPaused ? 'Resume' : 'Pause'}</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;
