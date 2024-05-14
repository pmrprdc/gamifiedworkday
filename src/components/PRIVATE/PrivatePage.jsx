import React from 'react';
import VisualTimer from './TIMING/VisualTimer';  // Adjust the path as necessary
import MatrixEffect from '../MatrixEffect'; // Adjust the path as necessary if it's in a different directory

const PrivatePage = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', opacity:'80%'}}>  
      <MatrixEffect />
      <div style={{ position: 'relative', zIndex: 0 }}>  
        <h1>Private Page</h1>
        <VisualTimer />
      </div>
    </div>
  );
};

export default PrivatePage;

