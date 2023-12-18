import React, { useEffect, useState } from 'react';
import apiService from './ApiService.js'; 

const StationsComponent = () => {
  const [stations, setStations] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    apiService.getAllStationsForYourRoute()
      .then(data => {
        setStations(data);
      })
      .catch(error => {
        setError(error);
        console.error('There was an error!', error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {stations.map((station, index) => <div key={index}>{station.name}</div>)}
    </div>
  );
};

export default StationsComponent;