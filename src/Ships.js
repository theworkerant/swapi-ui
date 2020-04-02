import React from 'react';
import Ship from './Ship.js';

function Ships({ships, setShip, selectedShip: selected}) {
  const shipsHtml = ships.map((ship) =>
    <li
      key={ship.name}
      className={selected && selected.name === ship.name ? "ship selected" : "ship"}
      onClick={() => setShip(ship)}
    >
      <Ship ship={ship} />
    </li>
  );

  return (
    <ul className="ships">{shipsHtml}</ul>
  );
}

export default Ships;
