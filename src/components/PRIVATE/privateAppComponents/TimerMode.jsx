import React, { useState, useEffect } from 'react';

const TimerMode = ({ taskBatches, onTaskBatchDelete, onSavedTimedTask }) => {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 10); // Increment by 10ms
      }, 10); // Update every 10ms for smoother display
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
  };

  const startTimer = () => {
    if (selectedBatch && currentTaskIndex < selectedBatch.tasks.length) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    if (selectedBatch && currentTaskIndex < selectedBatch.tasks.length) {
      const currentTask = selectedBatch.tasks[currentTaskIndex];
      onSavedTimedTask({
        batch: selectedBatch.name,
        taskName: currentTask.name,
        taskColor: currentTask.color,
        duration: elapsedTime,
      });
      setCurrentTaskIndex((prevIndex) => prevIndex + 1);
      setElapsedTime(0);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setCurrentTaskIndex(0);
    setElapsedTime(0);
  };

  const handleBatchChange = (e) => {
    const selectedBatchName = e.target.value;
    const batch = taskBatches.find((batch) => batch.name === selectedBatchName);
    setSelectedBatch(batch);
    resetTimer();
  };

  return (
    <div>
      <h2>Timer Mode</h2>
      <select value={selectedBatch ? selectedBatch.name : ''} onChange={handleBatchChange}>
        <option value="">Select a batch</option>
        {taskBatches.map((batch, index) => (
          <option key={index} value={batch.name}>
            {batch.name} - {batch.timestamp}
          </option>
        ))}
      </select>
      {selectedBatch && currentTaskIndex < selectedBatch.tasks.length && (
        <div>
          <h3>Current Task:</h3>
          <p style={{ color: selectedBatch.tasks[currentTaskIndex].color }}>
            {selectedBatch.tasks[currentTaskIndex].name}
          </p>
          <p>Elapsed Time: {formatTime(elapsedTime)}</p>
          <div>
            <button onClick={startTimer} disabled={isRunning}>
              Start
            </button>
            <button onClick={stopTimer} disabled={!isRunning}>
              Stop
            </button>
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>
      )}
      {selectedBatch && currentTaskIndex === selectedBatch.tasks.length && (
        <div>
          <h3>All tasks completed!</h3>
          <button onClick={() => onTaskBatchDelete(taskBatches.indexOf(selectedBatch))}>
            Delete Batch
          </button>
        </div>
      )}
    </div>
  );
};

export default TimerMode;