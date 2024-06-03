import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

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

const Button = styled.button`
  width: 100%;
  background-color: black;
  color: white; // Setting the text color to white for visibility
  border: 2px solid green;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;

 
  &:hover {
    background-color: green;
    color: black;
  }
`;

const Scoreboard = styled.div`
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

const SquareTitle = styled.h2`
  text-align: left;
  color: white;
  font-size: 1.5em;
  margin-left:50px;
`;

const VisualTimer = () => {
  const initialColor = 'black';
  const colors = ['#4285F4', '#EA4336', '#33A853', '#FABD05'];
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [boxes, setBoxes] = useState([Array(100).fill(initialColor)]);
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);
  const bottomRef = useRef(null);
  const tasksToTime = [];
  const colorNames = {
    '#4285F4': 'Blue',
    '#EA4336': 'Red',
    '#33A853': 'Green',
    '#FABD05': 'Yellow'
  };

  useEffect(() => {
    // Set focus to the body to ensure key events are captured
    document.body.focus();

    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        setActiveColorIndex(prevIndex => (prevIndex + 1) % colors.length);
      } else if (event.code === 'p') {
        pauseTimer();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [colors.length]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
        setBoxes(prevBoxes => {
          const boxIndex = timer % 100;
          const setIndex = Math.floor(timer / 100);
          if (boxIndex === 99) {
            return prevBoxes.map((boxSet, index) => {
              if (index === setIndex) {
                let updatedSet = [...boxSet];
                updatedSet[boxIndex] = colors[activeColorIndex];
                return updatedSet;
              }
              return boxSet;
            }).concat([Array(100).fill(initialColor)]);
          } else {
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
      }, 60);
    }
    return () => clearInterval(interval);
  }, [isActive, timer, activeColorIndex, colors]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [boxes.length]);

  function startTimer() {
    setIsActive(true);
  }

  function pauseTimer() {
    setIsActive(false);

  }

  function stopTimer() {
    setIsActive(false);
    setTimer(0);
    setBoxes([Array(100).fill(initialColor)]);
  }

  const colorCount = colors.reduce((acc, color) => {
    acc[color] = boxes.flat().filter(boxColor => boxColor === color).length;
    return acc;
  }, {});

  const getBoxSize = () => Math.max(30 - Math.floor(timer / 20), 10);

  return (
    <div >
      <label>
        Insert Task to time
      <input type='text'/>
      </label>
     
      <button>submit</button>
    
    
      {boxes.map((boxSet, setIndex) => (
        <div key={setIndex}>
          <SquareTitle>GhostRacr {setIndex + 1}</SquareTitle>
          <div>
        
      </div>
      
          <div  style={{ display: "flex", flexDirection: "row" }}>
            
          <div >
          <Scoreboard style={{ display: "flex", flexDirection: "row"}} >
        {colors.map((color) => (
          <Score key={color} style={{color: `${color}`}}>
            {colorNames[color]}: {colorCount[color]}
          </Score>
          
        ))}
      </Scoreboard>
        <Button onClick={startTimer}>Start</Button>
        <Button onClick={pauseTimer}>Pause</Button>
        <Button onClick={stopTimer}>Stop</Button>
        <Button onClick={() => setActiveColorIndex(prevIndex => (prevIndex + 1) % colors.length)}>Change Color</Button>
       
      </div>
            <BoxContainer>
              {boxSet.map((boxColor, index) => (
                <Box key={setIndex * 100 + index} $bgColor={boxColor} size={getBoxSize()} />
              ))}
            </BoxContainer >
          </div>
        </div>
      ))}
      <div ref={bottomRef} style={{ height: '1px' }} />
    </div>
  );
};

export default VisualTimer;
