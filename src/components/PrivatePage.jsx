import React from 'react';
import Timer from './Timer';
import SetupInputs from './setupInputs'

function PrivatePage() {
  return (
    <div>
      <h1>Private Page</h1>
      <SetupInputs />
      <Timer initialMinutes={2} initialSeconds={30} />
      <Timer initialMinutes={2} initialSeconds={30} />
      <Timer initialMinutes={2} initialSeconds={30} />
      {/* Add any private page-specific content here */}
    </div>
  );
}

export default PrivatePage;
