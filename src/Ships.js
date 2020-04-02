import React from 'react';
import Ship from './Ship.js';

function Ships(props) {
  const ships = props.ships.map((ship) =>
    <li
      key={ship.model}
      className={props.selectedShip.name === ship.name ? "ship selected" : "ship"}
      onClick={() => props.selectShip(ship)}
    >
      <Ship ship={ship} />
    </li>
  );

  return (
    <ul className="ships">
      {ships}
    </ul>
  );
}

export default Ships;
