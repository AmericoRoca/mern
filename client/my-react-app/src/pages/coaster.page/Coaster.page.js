import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const CoasterPage = () => {
  const [coasters, setCoasters] = useState([]);
  const navigate = useNavigate();

  const loadCoaster = () => {
    fetch('http://localhost:5005/api/coaster')
      .then(res => res.json())
      .then(allCoasters => setCoasters(allCoasters));
  };

  const navigateToCoasterDetails = (coasterId) => {
    navigate(`/details/${coasterId}`);
  };

  useEffect(() => {
    loadCoaster();
  }, []);

  return (
    <main>
      <h1>Lista</h1>
      <hr/>
      {coasters.map(eachCoaster => (
        <article className="coaster-card" key={eachCoaster._id}>
          <img src={eachCoaster.imageUrl} alt="Coaster" />
          <h3>{eachCoaster.title}</h3>
          <button onClick={() => navigateToCoasterDetails(eachCoaster._id)}>Detalles</button>
        </article>
      ))}
      <Link to="/">Ir a inicio</Link>
    </main>
  );
};

export default CoasterPage;
