import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  background-color: black;
  color: white; 
  border: 2px solid green;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: green;
    color: black;
  }
`;

const Controller = ({ startTimer, pauseTimer, stopTimer, changeColor, tasks }) => {
  return (
    <div>
      <Button onClick={startTimer}>Start</Button>
      <Button onClick={pauseTimer}>Pause</Button>
      <Button onClick={stopTimer}>Stop</Button>
      <Button onClick={changeColor}>Change Color</Button>
    </div>
  );
};

export default Controller;
