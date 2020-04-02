import React, { useState, useEffect } from 'react';
import logo from './luke.gif';
import Pilots from './Pilots.js';
import Ships from './Ships.js';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [ships, setShips] = useState([]);
  const [ship, setShip] = useState({pilots: []});
  const selectShip = (ship) => {
    setShip(ship);
  };

  useEffect(() => {
    setLoading(true);

    // Get all starship pages! There are 37, 10 per page
    const shipPages = [1,2,3,4];
    const allShipRequests = shipPages.map((page) => {
      return fetch(`https://swapi.co/api/starships/?page=${page}`)
        .then(response => response.json())
    });

    Promise.all(allShipRequests).then(data => {
      const allShips = data.reduce((all, batch) => {
        return all.concat(batch.results);
      }, []);
      setShips(allShips);
      setLoading(false);
    })
    .catch((error) => {
      alert('Fetching data failed!:' + error);
      setLoading(false);
    });

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Famous Ships and Their Pilots</h1>
        <img src={logo} className="App-logo" alt="Luke" />
        { loading ? <h3>Loading!</h3> : "" }
      </header>

      <div className="pilots-and-ships">
        <Ships ships={ships} selectedShip={ship} selectShip={selectShip}/>
        <Pilots ship={ship} pilots={ship.pilots}/>
      </div>
    </div>
  );
}

export default App;
