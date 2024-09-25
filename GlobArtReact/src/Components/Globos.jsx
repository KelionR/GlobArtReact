import React, { useState, useEffect } from 'react';
import '../Styles/Carrusel.css';

const Globos = () => {
  const [globos, setGlobos] = useState([]);
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const cargarGlobos = async () => {
      const response = await fetch('http://localhost:3000/globos');
      const data = await response.json();
      setGlobos(data);
    };
    cargarGlobos();

    // Cambiar automáticamente cada 3 segundos
    const intervalo = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % globos.length);
    }, 3000);

    return () => clearInterval(intervalo); // Limpiar el intervalo al desmontar
  }, [globos.length]);

  const siguiente = () => {
    setIndice((indice + 1) % globos.length);
  };

  return (
    <div className="carrusel">
      <button onClick={() => siguiente()}>Siguiente</button>
      {globos.length > 0 && <img src={globos[indice].src} alt={`Globo ${indice + 1}`} />}
      
      <div>
        <p>Índice actual: {indice + 1} / {globos.length}</p>
      </div>
    </div>
  );
};

export default Globos;