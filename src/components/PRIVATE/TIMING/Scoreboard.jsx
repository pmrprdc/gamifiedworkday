import React, { useState } from 'react';
import styled from 'styled-components';

const ScoreboardContainer = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
`;

const Score = styled.div`
  margin-right: 16px;
  font-size: 1rem;
`;

const TaskInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const TaskInputField = styled.input`
  margin-bottom: 10px;
`;

const Scoreboard = ({ tasks, setTasks }) => {
  const [inputText, setInputText] = useState("");
  const [inputColor, setInputColor] = useState("#000000");

  const taskInputHandler = (e) => {
    setInputText(e.target.value);
  };

  const taskColorHandler = (e) => {
    setInputColor(e.target.value);
  };

  const taskSubmitHandler = () => {
    const newTask = { name: inputText, color: inputColor };
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, newTask];
      return updatedTasks;
    });
    setInputText("");
    setInputColor("#000000");
  };

  const taskClearHandler = () => {
    setTasks([]);
  };

  return (
    <div>
      <TaskInput>
        <label>
          Insert Task to time
          <TaskInputField value={inputText} onChange={taskInputHandler} type='text' />
        </label>
        <label>
          Insert Task color
          <TaskInputField value={inputColor} onChange={taskColorHandler} type='color' />
        </label>
        <Button onClick={taskSubmitHandler}>Submit</Button>
        <Button onClick={taskClearHandler}>Clear Tasks</Button>
      </TaskInput>
      <ScoreboardContainer>
        {tasks.map((task, index) => (
          <Score key={index} style={{ color: task.color }}>
            {task.name}: {task.color}
          </Score>
        ))}
      </ScoreboardContainer>
    </div>
  );
};

export default Scoreboard;
