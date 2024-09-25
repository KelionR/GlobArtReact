import React, { useState, useEffect } from 'react';
import '../Styles/Carrusel.css';

const AdminRamos = () => {
  const [indice, setIndice] = useState(0);
  const [ramos, setRamos] = useState([]);
  const [archivo, setArchivo] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);

  useEffect(() => {
    const cargarRamos = async () => {
      const response = await fetch('http://localhost:3000/ramos');
      const data = await response.json();
      setRamos(data);
    };
    cargarRamos();
  }, []);

  const siguiente = () => {
    setIndice((indice + 1) % ramos.length);
  };

  const anterior = () => {
    setIndice((indice - 1 + ramos.length) % ramos.length);
  };

  const agregarRamo = async () => {
    if (archivo) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result;
        const nuevoRamo = { src: base64data };

        await fetch('http://localhost:3000/ramos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(nuevoRamo),
        });

        setRamos([...ramos, nuevoRamo]);
        setArchivo(null);
      };
      reader.readAsDataURL(archivo);
    }
  };

  const eliminarRamo = async () => {
    if (ramos.length > 0) {
      const ramoAEliminar = ramos[indice];

      await fetch(`http://localhost:3000/ramos/${ramoAEliminar.id}`, {
        method: 'DELETE',
      });

      const nuevosRamos = ramos.filter((_, i) => i !== indice);
      setRamos(nuevosRamos);
      setIndice(0);
    }
  };

  const editarRamo = async () => {
    if (archivo && ramos.length > 0) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result;
        const ramoAEditar = ramos[indice];

        await fetch(`http://localhost:3000/ramos/${ramoAEditar.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ src: base64data }),
        });

        const nuevosRamos = [...ramos];
        nuevosRamos[indice].src = base64data;
        setRamos(nuevosRamos);
        setArchivo(null);
        setModoEdicion(false);
      };
      reader.readAsDataURL(archivo);
    }
  };

  return (
    <div className="carrusel">
      <button onClick={anterior}>Anterior</button>
      {ramos.length > 0 && <img src={ramos[indice].src} alt={`Ramo ${indice + 1}`} />}
      <button onClick={siguiente}>Siguiente</button>

      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setArchivo(e.target.files[0])}
        />
        
        {modoEdicion ? (
          <>
            <button onClick={editarRamo}>Guardar Cambios</button>
            <button onClick={() => setModoEdicion(false)}>Cancelar Edición</button>
          </>
        ) : (
          <>
            <button onClick={agregarRamo}>Agregar Ramo</button>
            <button onClick={eliminarRamo}>Eliminar Ramo</button>
            <button onClick={() => setModoEdicion(true)}>Editar Ramo</button>
          </>
        )}
      </div>

      <div>
        <p>Índice actual: {indice + 1} / {ramos.length}</p>
      </div>
    </div>
  );
};

export default AdminRamos;