import React, { useState, useEffect } from 'react';
import '../Styles/Carrusel.css';

const AdminSorpresas = () => {
  const [indice, setIndice] = useState(0);
  const [sorpresas, setSorpresas] = useState([]); 
  const [archivo, setArchivo] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);

  useEffect(() => {
    const cargarSorpresas = async () => {
      const response = await fetch('http://localhost:3000/sorpresas'); 
      const data = await response.json();
      setSorpresas(data);
    };
    cargarSorpresas();
  }, []);

  const siguiente = () => {
    setIndice((indice + 1) % sorpresas.length);
  };

  const anterior = () => {
    setIndice((indice - 1 + sorpresas.length) % sorpresas.length);
  };

  const agregarSorpresa = async () => { 
    if (archivo) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result;
        const nuevaSorpresa = { src: base64data }; 

        await fetch('http://localhost:3000/sorpresas', { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(nuevaSorpresa),
        });

        setSorpresas([...sorpresas, nuevaSorpresa]); 
        setArchivo(null);
      };
      reader.readAsDataURL(archivo);
    }
  };

  const eliminarSorpresa = async () => { 
    if (sorpresas.length > 0) {
      const sorpresaAEliminar = sorpresas[indice]; 

      await fetch(`http://localhost:3000/sorpresas/${sorpresaAEliminar.id}`, { 
        method: 'DELETE',
      });

      const nuevasSorpresas = sorpresas.filter((_, i) => i !== indice); 
      setSorpresas(nuevasSorpresas); 
      setIndice(0);
    }
  };

  const editarSorpresa = async () => {
    if (archivo && sorpresas.length > 0) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result;
        const sorpresaAEditar = sorpresas[indice]; 

        await fetch(`http://localhost:3000/sorpresas/${sorpresaAEditar.id}`, { 
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ src: base64data }),
        });

        const nuevasSorpresas = [...sorpresas];
        nuevasSorpresas[indice].src = base64data; 
        setSorpresas(nuevasSorpresas); 
        setArchivo(null);
        setModoEdicion(false);
      };
      reader.readAsDataURL(archivo);
    }
  };

  return (
    <div className="carrusel">
      <button onClick={anterior}>Anterior</button>
      {sorpresas.length > 0 && <img src={sorpresas[indice].src} alt={`Sorpresa ${indice + 1}`} />} 
      <button onClick={siguiente}>Siguiente</button>

      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setArchivo(e.target.files[0])}
        />
        
        {modoEdicion ? (
          <>
            <button onClick={editarSorpresa}>Guardar Cambios</button> 
            <button onClick={() => setModoEdicion(false)}>Cancelar Edición</button>
          </>
        ) : (
          <>
            <button onClick={agregarSorpresa}>Agregar Sorpresa</button> 
            <button onClick={eliminarSorpresa}>Eliminar Sorpresa</button>
            <button onClick={() => setModoEdicion(true)}>Editar Sorpresa</button>
          </>
        )}
      </div>

      <div>
        <p>Índice actual: {indice + 1} / {sorpresas.length}</p>
      </div>
    </div>
  );
};

export default AdminSorpresas;