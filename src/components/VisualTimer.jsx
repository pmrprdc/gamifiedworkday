import React, { useState, useEffect } from 'react';

const VisualTimerComponent = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let frame;
    let lastTimestamp = 0;

    const frameFunction = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;

      if (running && !pause && delta >= 1) {  // Update every millisecond
        setTime(prevTime => prevTime + Math.floor(delta));
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
  };
  const handlePause = () => setPause(!pause);

  const cubeStyle = {
    width: '10px',
    height: '10px',
    margin: '1px',
    display: 'inline-block',
    backgroundColor: 'green'
  };

  const cubes = [];
  for (let i = 0; i < time / 1000; i++) {
    cubes.push(<div key={i} style={cubeStyle} />);
  }

  return (
    <div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handlePause}>{pause ? 'Resume' : 'Pause'}</button>
      </div>
      <div style={{ fontSize: '24px', margin: '20px' }}>{time} ms</div>
      <div style={{ width: '1020px', display: 'flex', flexWrap: 'wrap' }}>
        {cubes}
      </div>
    </div>
  );
};

export default VisualTimerComponent;
