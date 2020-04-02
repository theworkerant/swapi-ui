import React, { useState, useEffect } from 'react';
import logo from './luke.gif';
import Pilots from './Pilots.js';
import Ships from './Ships.js';
import './App.css';

function App() {
  const [ships, setShips] = useState([]);
  const [ship, setShip] = useState({pilots: []});
  const selectShip = (ship) => {
    setShip(ship);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Famous Ships and Their Pilots</h1>
        <img src={logo} className="App-logo" alt="Luke" />
      </header>

      <div className="pilots-and-ships">
        <Ships ships={ships} selectedShip={ship} selectShip={selectShip}/>
        <Pilots ship={ship} pilots={ship.pilots}/>
      </div>
    </div>
  );
}

export default App;
