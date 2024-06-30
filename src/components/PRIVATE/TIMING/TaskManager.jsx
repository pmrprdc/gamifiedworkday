import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskColor, setTaskColor] = useState('blue');
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (editingTask !== null) {
      const updatedTasks = tasks.map((task, index) => {
        if (index === editingTask) {
          return { name: taskName, color: taskColor };
        }
        return task;
      });
      setTasks(updatedTasks);
      setEditingTask(null);
    } else {
      setTasks([...tasks, { name: taskName, color: taskColor }]);
    }
    setTaskName('');
    setTaskColor('blue');
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setTaskName(tasks[index].name);
    setTaskColor(tasks[index].color);
    setEditingTask(index);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <select value={taskColor} onChange={(e) => setTaskColor(e.target.value)}>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
        <option value="grey">Grey</option>
        <option value="magenta">Magenta</option>
      </select>
      <button onClick={addTask}>
        {editingTask !== null ? 'Edit Task' : 'Add Task'}
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ color: task.color }}>
            {task.name}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
