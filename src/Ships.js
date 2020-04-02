import React from 'react';
import Ship from './Ship.js';

function Ships(props) {
  const ships = props.ships.map((ship) =>
    <li
      key={ship.name}
      className={props.selectedShip && props.selectedShip.name === ship.name ? "ship selected" : "ship"}
      onClick={() => props.setShip(ship)}
    >
      <Ship ship={ship} />
    </li>
  );

  return (
    <ul className="ships">{ships}</ul>
  );
}

export default Ships;
