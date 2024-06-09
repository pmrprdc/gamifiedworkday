import React, { useState } from 'react';
import Timer from './Timer';
import Scoreboard from './Scoreboard';

const VisualTimer = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Scoreboard tasks={tasks} setTasks={setTasks} />
      <Timer tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default VisualTimer;