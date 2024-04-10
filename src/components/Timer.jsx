import React, { useState, useEffect } from 'react';

function Timer({ initialMinutes = 1, initialSeconds = 0 }) {
  const totalSeconds = initialMinutes * 60 + initialSeconds;
  const [seconds, setSeconds] = useState(totalSeconds);
  const [isActive, setIsActive] = useState(false);

  // Calculate progress percentage
  const progressPercentage = ((totalSeconds - seconds) / totalSeconds) * 100;

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(totalSeconds);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const displayMinutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;

  return (
    <div>
      <div>Time Remaining: {displayMinutes}m : {displaySeconds.toString().padStart(2, '0')}s</div>
      {/* Progress Bar */}
      <div style={{ width: '100%', backgroundColor: '#ddd' }}>
        <div style={{
          height: '20px',
          width: `${progressPercentage}%`,
          backgroundColor: 'green',
          transition: 'width 1s ease-in-out'
        }}></div>
      </div>
      <button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;
