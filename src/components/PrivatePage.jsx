import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import MatrixBox from './Racing';
const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 25px; // Adjust the gap between grid items
  margin-bottom: 100px; // Space below the container
  margin-right: 100px;
  margin-left: 100px;
  margin-top: 20px;
  align-items: center; // Vertically aligns all items in their rows to be in the center
`;

const Box = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.bgColor};
  transition: width 1s ease-in-out, height 1s ease-in-out;
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
  font-size: 1em;
`;

const SquareTitle = styled.h2`
  text-align: center;
  color: white;
  font-size: 1.5em;
`;

const VisualTimer = () => {
  const initialColor = 'black';
  const colors = ['#4285F4', '#EA4336', '#33A853', '#FABD05'];
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [boxes, setBoxes] = useState([Array(100).fill(initialColor)]);
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);
  const bottomRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        setActiveColorIndex(prevIndex => (prevIndex + 1) % colors.length);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [colors.length]); // Should depend on colors.length which is static and hence safe

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);  // Increment timer
        setBoxes(prevBoxes => {
          // Update box colors based on timer
          const boxIndex = timer % 100;  // This will be from 0 to 99
          const setIndex = Math.floor(timer / 100);  // Calculate which set of 100 we're updating
  
          if (boxIndex === 99) {
            // If we are at the last box in the current set, prepare to add a new set in the next tick
            return prevBoxes.map((boxSet, index) => {
              if (index === setIndex) {
                let updatedSet = [...boxSet];
                updatedSet[boxIndex] = colors[activeColorIndex];  // Update the last box
                return updatedSet;
              }
              return boxSet;
            }).concat([Array(100).fill(initialColor)]);  // Add a new set of boxes
          } else {
            // Normal update within the set
            return prevBoxes.map((boxSet, index) => {
              if (index === setIndex) {
                let updatedSet = [...boxSet];
                updatedSet[boxIndex] = colors[activeColorIndex];
                return updatedSet;
              }
              return boxSet;
            });
          }
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isActive, timer, activeColorIndex, colors]);
  
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
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

  const colorCount = colors.reduce((acc, color) => {
    acc[color] = boxes.flat().filter(boxColor => boxColor === color).length;
    return acc;
  }, {});

  const getBoxSize = () => Math.max(30 - Math.floor(timer / 100), 50);

  return (
    <div>
      <MatrixBox />
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
        <Button onClick={() => setActiveColorIndex(prevIndex => (prevIndex + 1) % colors.length)}>Change Color</Button>
      </div>
      {boxes.map((boxSet, setIndex) => (
        <div key={setIndex}>
          
          <SquareTitle>GhostRacr {setIndex + 1}</SquareTitle>
          <div style={{display: "flex", flexDirection: "row"}}>
          <div>
        <Button onClick={startTimer}>Start</Button>
        <Button onClick={pauseTimer}>Pause</Button>
        <Button onClick={stopTimer}>Stop</Button>
        <Button onClick={() => setActiveColorIndex(prevIndex => (prevIndex + 1) % colors.length)}>Change Color</Button>
      </div>
          <BoxContainer>
            
            {boxSet.map((boxColor, index) => (
              <Box key={setIndex * 100 + index} bgColor={boxColor} size={getBoxSize()} />
            ))}
          </BoxContainer>
          <Scoreboard>
        {colors.map((color) => (
          <Score key={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}: {colorCount[color]}
          </Score>
        ))}
      </Scoreboard>

          </div>
         
        </div>
      ))}
      <div ref={bottomRef} style={{ height: '1px' }} />  {/* This is an invisible element to scroll into view */}
    </div>
  );
};

export default VisualTimer;

