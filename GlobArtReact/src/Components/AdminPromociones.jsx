import React, { useState, useEffect } from 'react';
import '../Styles/Carrusel.css';

const AdminPromociones = () => {
  const [indice, setIndice] = useState(0);
  const [promociones, setPromociones] = useState([]); 
  const [archivo, setArchivo] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);

  useEffect(() => {
    const cargarPromociones = async () => {
      const response = await fetch('http://localhost:3000/promociones'); 
      const data = await response.json();
      setPromociones(data);
    };
    cargarPromociones();
  }, []);

  const siguiente = () => {
    setIndice((indice + 1) % promociones.length);
  };

  const anterior = () => {
    setIndice((indice - 1 + promociones.length) % promociones.length);
  };

  const agregarPromocion = async () => { 
    if (archivo) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result;
        const nuevaPromocion = { src: base64data };

        await fetch('http://localhost:3000/promociones', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(nuevaPromocion),
        });

        setPromociones([...promociones, nuevaPromocion]); 
        setArchivo(null);
      };
      reader.readAsDataURL(archivo);
    }
  };

  const eliminarPromocion = async () => { 
    if (promociones.length > 0) {
      const promocionAEliminar = promociones[indice]; 

      await fetch(`http://localhost:3000/promociones/${promocionAEliminar.id}`, { 
        method: 'DELETE',
      });

      const nuevasPromociones = promociones.filter((_, i) => i !== indice);
      setPromociones(nuevasPromociones); 
      setIndice(0);
    }
  };

  const editarPromocion = async () => { 
    if (archivo && promociones.length > 0) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result;
        const promocionAEditar = promociones[indice];

        await fetch(`http://localhost:3000/promociones/${promocionAEditar.id}`, { 
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ src: base64data }),
        });

        const nuevasPromociones = [...promociones];
        nuevasPromociones[indice].src = base64data; 
        setPromociones(nuevasPromociones); 
        setArchivo(null);
        setModoEdicion(false);
      };
      reader.readAsDataURL(archivo);
    }
  };

  return (
    <div className="carrusel">
      <button onClick={anterior}>Anterior</button>
      {promociones.length > 0 && <img src={promociones[indice].src} alt={`Promoción ${indice + 1}`} />}
      <button onClick={siguiente}>Siguiente</button>

      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setArchivo(e.target.files[0])}
        />
        
        {modoEdicion ? (
          <>
            <button onClick={editarPromocion}>Guardar Cambios</button>
            <button onClick={() => setModoEdicion(false)}>Cancelar Edición</button>
          </>
        ) : (
          <>
            <button onClick={agregarPromocion}>Agregar Promoción</button>
            <button onClick={eliminarPromocion}>Eliminar Promoción</button> 
            <button onClick={() => setModoEdicion(true)}>Editar Promoción</button>
          </>
        )}
      </div>

      <div>
        <p>Índice actual: {indice + 1} / {promociones.length}</p> 
      </div>
    </div>
  );
};

export default AdminPromociones;