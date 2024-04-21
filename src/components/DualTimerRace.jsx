import React from 'react';
import VisualTimerComponent from './VisualTimer'; // Adjust the import path as necessary

const DualTimerRace = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'start', height: '100vh' }}>
      <div style={{ width: '50%' }}>
        <h2>Timer 1</h2>
        <VisualTimerComponent />
      </div>
      <div style={{ width: '50%' }}>
        <h2>Timer 2</h2>
        <VisualTimerComponent />
      </div>
    </div>
  );
};

export default DualTimerRace;
