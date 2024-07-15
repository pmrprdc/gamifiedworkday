import React, { useState } from 'react';
import TaskManager from './privateAppComponents/TaskManager';
import TimerMode from './privateAppComponents/TimerMode';
import RaceMode from './privateAppComponents/RaceMode';

const PrivatePage = () => {

  const [taskBatches, setTaskBatches] = useState([]);
  const [savedTimedTasks, setSavedTimedTasks] = useState([]);

  const handleTaskBatchAdd = (batchName, newTasks) => {
    const timestamp = new Date().toLocaleString();
    const batchWithTimestamp = {
      name: batchName,
      tasks: newTasks,
      timestamp,
    };
    setTaskBatches([...taskBatches, batchWithTimestamp]);
  };

  const handleTaskBatchDelete = (batchIndex) => {
    const updatedBatches = taskBatches.filter((_, index) => index !== batchIndex);
    setTaskBatches(updatedBatches);
  };

  const handleSavedTimedTask = (timedTask) => {
    setSavedTimedTasks([...savedTimedTasks, timedTask]);
  };

  const handleTaskBatchSave = (updatedBatch) => {
    const updatedBatches = taskBatches.map((batch) => {
      if (batch.name === updatedBatch.name) {
        return updatedBatch;
      }
      return batch;
    });
    setTaskBatches(updatedBatches);
    const updatedTimedTasks = updatedBatch.tasks.map((task) => ({
      batch: updatedBatch.name,
      taskName: task.name,
      taskColor: task.color,
      duration: task.duration,
    }));
    setSavedTimedTasks([...savedTimedTasks, ...updatedTimedTasks]);
  };
  



  return (
    <>

   
     
     
        <h1>Private Page</h1>
        <TaskManager onTaskBatchAdd={handleTaskBatchAdd} />
      <TimerMode
        taskBatches={taskBatches}
        onTaskBatchDelete={handleTaskBatchDelete}
        onSavedTimedTask={handleSavedTimedTask}
      />
      <RaceMode
        taskBatches={taskBatches}
        savedTimedTasks={savedTimedTasks}
        onTaskBatchSave={handleTaskBatchSave}
      />
   
     
  
    </>
  );

};

export default PrivatePage;

