import React, { useState, useEffect, useRef } from 'react';

const TimerBlocks = () => {
  const [millisecondsElapsed, setMillisecondsElapsed] = useState(0);
  const [blocks, setBlocks] = useState([Array(10000).fill('green')]); // Large array for 100x100 grid
  const intervalRef = useRef(null);

  // Start the timer
  const startTimer = () => {
    if (intervalRef.current !== null) return; // Prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setMillisecondsElapsed(prev => {
        const newMilliseconds = prev + 10;
        if (newMilliseconds % 10000 === 0) { // When reaching 10000ms, reset milliseconds and add a new grid
          setBlocks(prevBlocks => [...prevBlocks, Array(10000).fill('green')]);
          return 0;
        }
        return newMilliseconds;
      });
    }, 10);
  };

  // Stop the timer
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // Reset the timer and blocks
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setMillisecondsElapsed(0);
    setBlocks([Array(10000).fill('green')]); // Reset blocks to initial state
  };

  // Update the current block's colors based on elapsed milliseconds
  useEffect(() => {
    const newBlocks = blocks.map((block, index) => {
      if (index === blocks.length - 1) { // Only update the last block
        return block.map((_, idx) => idx < (millisecondsElapsed / 10) ? 'red' : 'green');
      }
      return block;
    });
    setBlocks(newBlocks);
  }, [millisecondsElapsed, blocks.length]);

  return (
    <div>
      <div style={{ margin: '10px' }}>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      {blocks.map((block, index) => (
        <div key={index} style={{ display: 'flex', flexWrap: 'wrap',height: '1000px', width: '1000px', marginBottom: '10px' }}>
          {block.map((color, idx) => (
            <div key={idx} style={{
              width: '1px', // Set width and height to fit 100 blocks across
              height: '1px',
              backgroundColor: color,
              border: '1px solid black'
            }} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TimerBlocks;
