import React from 'react';
import Timer from './Timer';
import SetupInputs from './setupInputs'
import StopWatch from './StopWatch'
import VisualTimerComponent from './VisualTimer';
import TimerBlocks from './TimerBlocks';

function PrivatePage() {
  return (
    <div>
      <h1>Private Page</h1>
      <VisualTimerComponent />
      <StopWatch />
      <Timer />
      <SetupInputs />
      <TimerBlocks />
    </div>
  );
}

export default PrivatePage;
