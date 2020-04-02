import React from 'react';

function Ship({ship: {name, model}}) {
  return (
    <div className="ship">
      <h2>{name}</h2>
      <h3>{model}</h3>
    </div>
  );
}

export default Ship;
