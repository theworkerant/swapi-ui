import React from 'react';

function Ship(props) {
  return (
    <div className="ship">
      <h2>{props.ship.name}</h2>
      <h3>{props.ship.model}</h3>
    </div>
  );
}

export default Ship;
