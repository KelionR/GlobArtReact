import React, { useState, useEffect } from 'react';
import '../Styles/Carrusel.css';

const AdminCarrusel = () => {
  const [indice, setIndice] = useState(0);
  const [imagenes, setImagenes] = useState([]);
  const [archivo, setArchivo] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);

  useEffect(() => {
    const cargarImagenes = async () => {
      const response = await fetch('http://localhost:3000/imagenes');
      const data = await response.json();
      setImagenes(data);
    };
    cargarImagenes();
  }, []);

  const siguiente = () => {
    setIndice((indice + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((indice - 1 + imagenes.length) % imagenes.length);
  };

  const agregarImagen = async () => {
    if (archivo) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result;
        const nuevaImagen = { src: base64data };

        await fetch('http://localhost:3000/imagenes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(nuevaImagen),
        });

        setImagenes([...imagenes, nuevaImagen]);
        setArchivo(null);
      };
      reader.readAsDataURL(archivo);
    }
  };

  const eliminarImagen = async () => {
    if (imagenes.length > 0) {
      const imagenAEliminar = imagenes[indice];

      await fetch(`http://localhost:3000/imagenes/${imagenAEliminar.id}`, {
        method: 'DELETE',
      });

      const nuevasImagenes = imagenes.filter((_, i) => i !== indice);
      setImagenes(nuevasImagenes);
      setIndice(0);
    }
  };

  const editarImagen = async () => {
    if (archivo && imagenes.length > 0) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result;
        const imagenAEditar = imagenes[indice];

        await fetch(`http://localhost:3000/imagenes/${imagenAEditar.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ src: base64data }),
        });

        const nuevasImagenes = [...imagenes];
        nuevasImagenes[indice].src = base64data;
        setImagenes(nuevasImagenes);
        setArchivo(null);
        setModoEdicion(false);
      };
      reader.readAsDataURL(archivo);
    }
  };

  return (
    <div className="carrusel">
      <button onClick={anterior}>Anterior</button>
      {imagenes.length > 0 && <img src={imagenes[indice].src} alt={`Imagen ${indice + 1}`} />}
      <button onClick={siguiente}>Siguiente</button>

      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setArchivo(e.target.files[0])}
        />
        
        {modoEdicion ? (
          <>
            <button onClick={editarImagen}>Guardar Cambios</button>
            <button onClick={() => setModoEdicion(false)}>Cancelar Edición</button>
          </>
        ) : (
          <>
            <button onClick={agregarImagen}>Agregar Imagen</button>
            <button onClick={eliminarImagen}>Eliminar Imagen</button>
            <button onClick={() => setModoEdicion(true)}>Editar Imagen</button>
          </>
        )}
      </div>

      <div>
        <p>Índice actual: {indice + 1} / {imagenes.length}</p>
      </div>
    </div>
  );
};

export default AdminCarrusel;