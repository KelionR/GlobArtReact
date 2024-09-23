import React, { useState, useEffect } from 'react';
import '../Styles/Carrusel.css';

const Carrusel = () => {
  const [imagenes, setImagenes] = useState([]);
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const cargarImagenes = async () => {
      const response = await fetch('http://localhost:3000/imagenes');
      const data = await response.json();
      setImagenes(data);
    };
    cargarImagenes();

    // Cambiar automáticamente cada 3 segundos
    const intervalo = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(intervalo); // Limpiar el intervalo al desmontar
  }, [imagenes.length]);

  const siguiente = () => {
    setIndice((indice + 1) % imagenes.length);
  };

  return (
    <div className="carrusel">
      <button onClick={() => siguiente()}>Siguiente</button>
      {imagenes.length > 0 && <img src={imagenes[indice].src} alt={`Imagen ${indice + 1}`} />}
      
      <div>
        <p>Índice actual: {indice + 1} / {imagenes.length}</p>
      </div>
    </div>
  );
};

export default Carrusel;