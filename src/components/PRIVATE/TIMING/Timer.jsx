import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Controller from './Controller'; // Make sure this path is correct
import Scoreboard from './Scoreboard'; // Make sure this path is correct

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
  margin-bottom: 400px;
  margin-right: 200px;
  margin-left: 100px;
  margin-top: 20px;
  align-items: center;
`;

const Box = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.$bgColor};
  transition: width 1s ease-in-out, height 1s ease-in-out;
  border: 1px solid white;
  margin-right: 2px;
`;

const SquareTitle = styled.h2`
  text-align: left;
  color: white;
  font-size: 1.5em;
  margin-left: 50px;
`;

const Timer = ({ tasks, setTasks }) => {
  const initialColor = 'black';
  const [boxes, setBoxes] = useState([Array(100).fill(initialColor)]);
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const bottomRef = useRef(null);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 60);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    setBoxes(prevBoxes => {
      const boxIndex = timer % 100;
      const setIndex = Math.floor(timer / 100);
      if (boxIndex === 99) {
        return prevBoxes.map((boxSet, index) => {
          if (index === setIndex && tasks[activeColorIndex]) {
            let updatedSet = [...boxSet];
            updatedSet[boxIndex] = tasks[activeColorIndex].color;
            return updatedSet;
          }
          return boxSet;
        }).concat([Array(100).fill(initialColor)]);
      } else {
        return prevBoxes.map((boxSet, index) => {
          if (index === setIndex && tasks[activeColorIndex]) {
            let updatedSet = [...boxSet];
            updatedSet[boxIndex] = tasks[activeColorIndex].color;
            return updatedSet;
          }
          return boxSet;
        });
      }
    });
  }, [timer, tasks, activeColorIndex]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [boxes.length]);

  const getBoxSize = () => Math.max(30 - Math.floor(timer / 20), 20);

  return (
    <div>
      {boxes.map((boxSet, setIndex) => (
        <div key={setIndex}>
          <SquareTitle>GhostRacr {setIndex + 1}</SquareTitle>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Controller
              startTimer={() => setIsActive(true)}
              pauseTimer={() => setIsActive(false)}
              stopTimer={() => {
                setIsActive(false);
                setTimer(0);
                setBoxes([Array(100).fill(initialColor)]);
              }}
              changeColor={() => setActiveColorIndex(prevIndex => (prevIndex + 1) % tasks.length)}
              tasks={tasks}
            />
            <BoxContainer>
              {boxSet.map((boxColor, index) => (
                <Box key={setIndex * 100 + index} $bgColor={boxColor} size={getBoxSize()} />
              ))}
            </BoxContainer>
          </div>
        </div>
      ))}
      <div ref={bottomRef} style={{ height: '1px' }} />
    </div>
  );
};

export default Timer;
