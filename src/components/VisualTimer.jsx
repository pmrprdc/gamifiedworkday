import React, { useState, useEffect } from 'react';

const VisualTimerComponent = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(false);
  const [boxes, setBoxes] = useState([]);

  // Function to determine color based on time
  const getColor = (time) => {
    const minutes = Math.floor(time / 60000); // Convert time to minutes
    const colorIndex = minutes % 3; // There are three colors, cycle through them
    switch (colorIndex) {
      case 0:
        return 'green';
      case 1:
        return 'blue';
      case 2:
        return 'yellow';
      default:
        return 'green'; // Default color
    }
  };

  useEffect(() => {
    let frame;
    let lastTimestamp = 0;

    const frameFunction = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;

      if (running && !pause && delta >= 1) {
        setTime(prevTime => {
          const updatedTime = prevTime + Math.floor(delta);
          // Add a new box every millisecond (or every 100 milliseconds if you want fewer updates)
          if (Math.floor(updatedTime / 1) > Math.floor(prevTime / 1)) {
            const currentColor = getColor(updatedTime);
            setBoxes(prevBoxes => [
              ...prevBoxes,
              <div key={prevBoxes.length} style={{ width: '10px', height: '10px', margin: '1px', backgroundColor: currentColor }} />
            ]);
          }
          return updatedTime;
        });
        lastTimestamp = timestamp;
      }

      frame = requestAnimationFrame(frameFunction);
    };

    frame = requestAnimationFrame(frameFunction);
    return () => cancelAnimationFrame(frame);
  }, [running, pause]);

  const handleStart = () => setRunning(true);
  const handleStop = () => {
    setRunning(false);
    setTime(0);
    setBoxes([]);
  };
  const handlePause = () => setPause(!pause);

  return (
    <div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handlePause}>{pause ? 'Resume' : 'Pause'}</button>
      </div>
      <div style={{ fontSize: '24px', margin: '20px' }}>{time} ms</div>
      <div style={{ width: '1020px', display: 'flex', flexWrap: 'wrap' }}>
        {boxes}
      </div>
    </div>
  );
};

export default VisualTimerComponent;
