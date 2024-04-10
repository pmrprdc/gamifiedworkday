import React from 'react';
import Timer from './Timer';

function PrivatePage() {
  return (
    <div>
      <h1>Private Page</h1>
      <Timer />
      <Timer />
      <Timer />
      {/* Add any private page-specific content here */}
    </div>
  );
}

export default PrivatePage;
