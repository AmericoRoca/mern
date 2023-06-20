import { Link } from 'react-router-dom';
import '../index.page/index.page.css';
import { useState } from 'react';

const IndexPage = () => {
    const [coasters, setCoasters] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    length: '',
    inversions: '',
    imageUrl: ''
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    fetch('http://localhost:5005/api/addCoaster', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(coaster => {
        setCoasters([...coasters, coaster]);
        setFormData({
          title: '',
          description: '',
          length: '',
          inversions: '',
          imageUrl: ''
        });

        return (
            <p>Montaña rusa añadida correctamente!</p>
        )
      })
      .catch(error => {
        console.log('Error al enviar la solicitud:', error);
      });
  
    console.log(formData);
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <main>
      <h1>Bienvenido a la Lista de montañas rusas</h1>
      <hr />
      <Link to="/galeria">Ver galeria</Link>
      <hr />
      <h3>Añade una montaña rusa</h3>
      <form>
        <label className="label-form">
          Titulo:
          <input
            type="text"
            placeholder="titulo"
            className="input-form"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <label className="label-form">
          Descripcion:
          <input
            type="text"
            placeholder="descripcion"
            className="input-form"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <label className="label-form">
          Longitud:
          <input
            type="text"
            placeholder="longitud"
            className="input-form"
            name="length"
            value={formData.length}
            onChange={handleInputChange}
          />
        </label>
        <label className="label-form">
          Inversiones:
          <input
            type="text"
            placeholder="inversion"
            className="input-form"
            name="inversions"
            value={formData.inversions}
            onChange={handleInputChange}
          />
        </label>
        <label className="label-form">
          Imagen:
          <input
            type="file"
            placeholder="imagen"
            className="input-form"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="Enviar" className="boton-form" onClick={handleFormSubmit} />
      </form>
    </main>
  );
};

export default IndexPage;
