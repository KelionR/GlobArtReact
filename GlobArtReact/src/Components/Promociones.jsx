import React, { useState, useEffect } from 'react';
import '../Styles/Carrusel.css';

const CarruselVisualizacion = () => {
  const [promociones, setPromociones] = useState([]); 
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const cargarPromociones = async () => {
      const response = await fetch('http://localhost:3000/promociones'); 
      const data = await response.json();
      setPromociones(data);
    };
    cargarPromociones();

    const intervalo = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % promociones.length); 
    }, 3000);

    return () => clearInterval(intervalo); 
  }, [promociones.length]);

  const siguiente = () => {
    setIndice((indice + 1) % promociones.length); 
  };

  return (
    <div className="carrusel">
      <button onClick={() => siguiente()}>Siguiente</button>
      {promociones.length > 0 && <img src={promociones[indice].src} alt={`Promoción ${indice + 1}`} />}
      
      <div>
        <p>Índice actual: {indice + 1} / {promociones.length}</p>
      </div>
    </div>
  );
};

export default CarruselVisualizacion;