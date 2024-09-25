import React, { useState, useEffect } from 'react';
import '../Styles/Carrusel.css';

const Sorpresas = () => {
  const [sorpresas, setSorpresas] = useState([]);
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const cargarSorpresas = async () => {
      const response = await fetch('http://localhost:3000/sorpresas');
      const data = await response.json();
      setSorpresas(data);
    };
    cargarSorpresas();

    // Cambiar automáticamente cada 3 segundos
    const intervalo = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % sorpresas.length);
    }, 3000);

    return () => clearInterval(intervalo); // Limpiar el intervalo al desmontar
  }, [sorpresas.length]);

  const siguiente = () => {
    setIndice((indice + 1) % sorpresas.length);
  };

  return (
    <div className="carrusel">
      <button onClick={() => siguiente()}>Siguiente</button>
      {sorpresas.length > 0 && <img src={sorpresas[indice].src} alt={`Sorpresa ${indice + 1}`} />}
      
      <div>
        <p>Índice actual: {indice + 1} / {sorpresas.length}</p>
      </div>
    </div>
  );
};

export default Sorpresas;