import React from 'react';
import { useLocation } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const imageName = location.state?.imageName;

  return (
    <div>
      <h2>Gemstone Analysis Result</h2>
      {imageName ? (
        <div>
          <p>Uploaded File: <strong>{imageName}</strong></p>
          <p><strong>Gem Type:</strong> Sapphire</p>
          <p><strong>Color:</strong> Deep Blue</p>
          <p><strong>Shape:</strong> Oval</p>
          <p><strong>Inclusions:</strong> Minimal</p>
          <p><strong>Estimated Value:</strong> $1,200 - $1,500</p>
        </div>
      ) : (
        <p>No image uploaded.</p>
      )}
    </div>
  );
}

export default Result;
