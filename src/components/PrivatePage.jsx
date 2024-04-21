import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 6px; /* No gap between the boxes */
  margin-bottom: 8px;
`;

const Box = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.bgColor};
`;

const Button = styled.button`
  margin-right: 8px;
`;

const Scoreboard = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

const Score = styled.div`
  margin-right: 16px;
  font-size: 1em; /* Adjust font size as needed */
`;

const SquareTitle = styled.h2`
  text-align: center;
  color: white; /* Adjust the color to fit the theme */
  font-size: 1.5em; /* Adjust title size as needed */
`;

const VisualTimer = () => {
  const initialColor = 'grey';
  const colors = ['green', 'blue', 'yellow', 'pink']; // Array to cycle through the colors
  const [activeColorIndex, setActiveColorIndex] = useState(0); // Index to keep track of current color
  const [boxes, setBoxes] = useState([Array(100).fill(initialColor)]);
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);

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
      }, 1); // 100ms for visual representation; adjust as needed for actual timing
    }
    return () => clearInterval(interval);
  }, [isActive, timer, activeColorIndex, initialColor]);

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

  // Count the occurrences of each color
  const colorCount = colors.reduce((acc, color) => {
    acc[color] = boxes.flat().filter(boxColor => boxColor === color).length;
    return acc;
  }, {});

  return (
    <div>
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
              <Box key={setIndex * 100 + index} bgColor={boxColor} />
            ))}
          </BoxContainer>
        </div>
      ))}
    </div>
  );
};

export default VisualTimer;
