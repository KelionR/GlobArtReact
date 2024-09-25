import React, { useState, useEffect } from 'react';
import '../Styles/Carrusel.css';

const Ramos = () => {
  const [ramos, setRamos] = useState([]);
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const cargarRamos = async () => {
      const response = await fetch('http://localhost:3000/ramos');
      const data = await response.json();
      setRamos(data);
    };
    cargarRamos();

    // Cambiar automáticamente cada 3 segundos
    const intervalo = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % ramos.length);
    }, 3000);

    return () => clearInterval(intervalo); // Limpiar el intervalo al desmontar
  }, [ramos.length]);

  const siguiente = () => {
    setIndice((indice + 1) % ramos.length);
  };

  return (
    <div className="carrusel">
      <button onClick={() => siguiente()}>Siguiente</button>
      {ramos.length > 0 && <img src={ramos[indice].src} alt={`Ramo ${indice + 1}`} />}
      
      <div>
        <p>Índice actual: {indice + 1} / {ramos.length}</p>
      </div>
    </div>
  );
};

export default Ramos;