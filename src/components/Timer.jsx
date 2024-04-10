import React, { useState, useEffect } from 'react';

function Timer() {
  // State for the timer's time remaining and a boolean for when it's active
  const [seconds, setSeconds] = useState(60); // default to 60 seconds
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(60); // reset to default 60 seconds
    setIsActive(false);
  }

  // Effect runs on every render when `isActive` or `seconds` changes
  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <div>Time Remaining: {seconds}s</div>
      <button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;