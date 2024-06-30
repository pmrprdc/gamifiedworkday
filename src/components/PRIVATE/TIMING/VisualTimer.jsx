import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  text-align: center;
  font-size: 2em;
  color: red;
  font-family: 'Courier New', Courier, monospace;
`;

const Timer = ({ initialTime = 0 }) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(initialTime);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 10);
      }, 10);
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

  const formatTime = (time) => {
    const getMilliseconds = `00${time % 1000}`.slice(-3);
    const seconds = Math.floor(time / 1000) % 60;
    const getSeconds = `0${seconds}`.slice(-2);
    const minutes = Math.floor(time / 60000) % 60;
    const getMinutes = `0${minutes}`.slice(-2);
    return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  return (
    <div>
      <TimerContainer>
        <h1>{formatTime(timer)}</h1>
      </TimerContainer>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>{isPaused ? 'Resume' : 'Pause'}</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;
