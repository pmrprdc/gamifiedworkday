import React, { useState } from 'react';
import StopWatch from '../StopWatch';
import Timer from '../Timer'

function TaskInput() {
  // Initialize the state with one empty task
  const [tasks, setTasks] = useState([{ id: 1, name: '' }]);

  // Handle change for each input
  const handleChange = (id, event) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, name: event.target.value };
      }
      return task;
    });
    setTasks(newTasks);
  };

  // Add a new task input
  const addTask = () => {
    const newId = tasks.length + 1;
    setTasks([...tasks, { id: newId, name: '' }]);
  };

  return (
    <div>
      <form>
        
        {tasks.map(task => (
          <div key={task.id}>
            <label htmlFor={`task-${task.id}`}>
              What is the task named?
            </label>
         
            <input
              type="text"
              id={`task-${task.id}`}
              value={task.name}
              onChange={e => handleChange(task.id, e)}
              aria-label={`Task ${task.id}`}
            />
            
          </div>
         
         
        ))}
        <button type="button" onClick={addTask}>
          Add More Tasks
        </button>
      </form>
    </div>
  );
}

export default TaskInput;
