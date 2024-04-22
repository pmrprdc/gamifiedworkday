import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 6px;
  margin-bottom: 8px;
  width: 100%;
  justify-content: center;
`;

// Box now accepts a size prop
const Box = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.bgColor};
  margin: 0px;
  padding: 0px;
`;

const Button = styled.button`
  margin-right: 20px;
`;

const Scoreboard = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

const Score = styled.div`
  margin-right: 16px;
  font-size: 1em;
`;

const SquareTitle = styled.h2`
  text-align: center;
  color: white;
  font-size: 1.5em;
`;

const VisualTimer = () => {
  const initialColor = 'grey';
  const colors = ['green', 'blue', 'yellow', 'pink'];
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [boxes, setBoxes] = useState([Array(100).fill(initialColor)]);
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);
  const boxContainerRef = useRef(null);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
        setBoxes(prevBoxes => {
          const totalBoxes = prevBoxes.flat().length;
          if (totalBoxes === timer + 1) {
            return [...prevBoxes, Array(100).fill(initialColor)];
          }
          return prevBoxes.map((boxSet, setIndex) => {
            if (setIndex < prevBoxes.length - 1 || totalBoxes === timer) {
              return boxSet;
            }
            const updatedSet = [...boxSet];
            updatedSet[timer % 100] = colors[activeColorIndex];
            return updatedSet;
          });
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isActive, timer, activeColorIndex, initialColor]);

  useEffect(() => {
    if (boxContainerRef.current) {
      boxContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [boxes.length]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const stopTimer = () => {
    setIsActive(false);
    setTimer(0);
    setBoxes([Array(100).fill(initialColor)]);
  };

  const changeColor = () => {
    setActiveColorIndex(prevIndex => (prevIndex + 1) % colors.length);
  };

  const colorCount = colors.reduce((acc, color) => {
    acc[color] = boxes.flat().filter(boxColor => boxColor === color).length;
    return acc;
  }, {});

  // Calculate box size based on timer to decrease over time
  const getBoxSize = () => Math.max(30 - Math.floor(timer / 20), 1); // Decrease size but maintain a minimum of 10px

  return (
    <div ref={boxContainerRef}>
      <Scoreboard>
        {colors.map((color) => (
          <Score key={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}: {colorCount[color]}
          </Score>
        ))}
      </Scoreboard>
      <div>
        <Button onClick={startTimer}>Start</Button>
        <Button onClick={pauseTimer}>Pause</Button>
        <Button onClick={stopTimer}>Stop</Button>
        <Button onClick={changeColor}>Change Color</Button>
      </div>
      {boxes.map((boxSet, setIndex) => (
        <div key={setIndex}>
          <SquareTitle>Square {setIndex + 1}</SquareTitle>
          <BoxContainer>
            {boxSet.map((boxColor, index) => (
              <Box key={setIndex * 100 + index} bgColor={boxColor} size={getBoxSize()} />
            ))}
          </BoxContainer>
        </div>
      ))}
    </div>
  );
};

export default VisualTimer;
