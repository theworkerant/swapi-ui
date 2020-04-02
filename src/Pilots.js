import React, { useState, useEffect } from 'react';

function Pilots(props) {
  const [loading, setLoading] = useState(false);
  const [pilots, setPilots] = useState([]);

  useEffect(() => {
    setLoading(true);
    const allPilotRequests = props.ship.pilots.map((url) => {
      return fetch(url).then(response => response.json())
    });

    Promise.all(allPilotRequests).then(data => {
      const allPilots = data.reduce((all, pilot) => {
        return all.concat(pilot);
      }, []);
      setPilots(allPilots);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      alert('Fetching data failed!:' + error);
    });
  }, [props.ship, props.ship.pilots]);

  return (
    loading
      ? <h3>Loading Pilots!</h3>
      :
        <ul className="pilots">
          {pilots.map((pilot) =>
            <li key={pilot.name}>
              <h2>{pilot.name}</h2>
            </li>
          )}
        </ul>
  );
}

export default Pilots;
