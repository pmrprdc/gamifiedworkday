import React, { useState } from 'react';
import Timer from './Timer';
import Scoreboard from './Scoreboard';
import Controller from './Controller';

const VisualTimer = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Scoreboard tasks={tasks} setTasks={setTasks} />
      <Timer tasks={tasks} setTasks={setTasks} />
      <Controller />
    </div>
  );
};

export default VisualTimer;