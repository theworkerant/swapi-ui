import React from 'react';

function Pilots(props) {
  const pilots = props.pilots.map((pilot) =>
    <li key={pilot.name}>
      <h2>{pilot.name}</h2>
    </li>
  );

  return (
    <ul className="pilots">
      {pilots}
    </ul>
  );
}

export default Pilots;
