import React from 'react';

const MatrixBox = () => {
    const matrixStyle = {
        backgroundColor: 'black',
        color: 'lime',
        fontFamily: 'Monospace',
        fontSize: '16px',
        border: '1px solid lime',
        padding: '20px',
        margin: '20px',
        textAlign: 'center'
    };

    return (
        <div style={matrixStyle}>
            <h1>This is where the recorded track is raced against</h1>
        </div>
    );
};

export default MatrixBox;
