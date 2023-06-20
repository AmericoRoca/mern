import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const CoasterDetails = () => {
  const { coasterId } = useParams();
  const navigate = useNavigate();
  const [coaster, setCoaster] = useState(null);

  const loadCoasterDetails = () => {
    fetch(`http://localhost:5005/api/details/${coasterId}`)
      .then(res => res.json())
      .then(coaster => {
        setCoaster(coaster);
      })
      .catch(error => {
        console.log('Error al cargar los detalles del objeto:', error);
      });
  };

  const deleteCoaster = () => {
    fetch(`http://localhost:5005/api/delete/${coasterId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.log('Error al eliminar la montaña rusa:', error);
      });
  };

  useEffect(() => {
    loadCoasterDetails();
  }, []);

  if (!coaster) {
    return <div>Cargando detalles...</div>;
  }

  const handleDelete = () => {
    const confirmed = window.confirm('¿Estás seguro de que deseas eliminar esta montaña rusa?');
    if (confirmed) {
      deleteCoaster();
    }
  };

  return (
    <main>
      <h1>Detalles</h1>
      <hr/>
      <img src={coaster.imageUrl} alt="Coaster" />
      <h3>{coaster.title}</h3>
      <p>{coaster.description}</p>
      <p>{coaster.length}</p>
      <p>{coaster.inversions}</p>
      <button onClick={handleDelete}>Eliminar</button>
      <hr/>
      <Link to="/">Inicio</Link>
    </main>
  );
};

export default CoasterDetails;
