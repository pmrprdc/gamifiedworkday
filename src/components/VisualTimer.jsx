import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerWrapper = styled.div`
  position: relative;
  width: 1000px; /* Adjust width based on your preference */
`;

const Cube = styled.div`
  width: 10px;
  height: 10px;
  background-color: blue;
  position: absolute;
  display: inline-block;
  border: ${props => (props.index % 100 === 99 ? '1px solid red' : 'none')};
  margin-left: ${props => `${props.index % 100 * 10}px`};
  margin-top: ${props => `${Math.floor(props.index / 100) * 10}px`};
`;

const VisualTimer = () => {
  const [cubes, setCubes] = useState([]);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && !timer) {
        const newTimer = setInterval(() => {
          setCubes(prev => [...prev, {}]);
        }, 10);
        setTimer(newTimer);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timer]);

  return (
    <TimerWrapper>
      {cubes.map((_, index) => (
        <Cube key={index} index={index} />
      ))}
    </TimerWrapper>
  );
};

export default VisualTimer;
