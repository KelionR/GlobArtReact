import React, { useState, useEffect } from 'react';
import '../Styles/Carrusel.css';


const AdminGlobos = () => {

  const [indice, setIndice] = useState(0);
  const [globos, setGlobos] = useState([]);
  const [archivo, setArchivo] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);

  useEffect(() => {
    const cargarGlobos = async () => {
      const response = await fetch('http://localhost:3000/globos'); // Realiza una solicitud GET a la API
      const data = await response.json();
      setGlobos(data);
    };
    cargarGlobos();
  }, []);


  const siguiente = () => {
    setIndice((indice + 1) % globos.length);
  };


  const anterior = () => {
    setIndice((indice - 1 + globos.length) % globos.length);
  };

  // Función para agregar un nuevo globo (CRUD: CREATE)
  const agregarGlobo = async () => { 
    if (archivo) { 
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result; 
        const nuevoGlobo = { src: base64data }; 

        await fetch('http://localhost:3000/globos', { // Realiza una solicitud POST a la API para agregar un nuevo globo
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(nuevoGlobo),
        });

        setGlobos([...globos, nuevoGlobo]); 
        setArchivo(null); 
      };
      reader.readAsDataURL(archivo);
    }
  };

  // Función para eliminar un globo existente (CRUD: DELETE)
  const eliminarGlobo = async () => { 
    if (globos.length > 0) { 
      const globoAEliminar = globos[indice];

      await fetch(`http://localhost:3000/globos/${globoAEliminar.id}`, { // Realiza una solicitud DELETE a la API usando el ID del globo
        method: 'DELETE',
      });

      const nuevosGlobos = globos.filter((_, i) => i !== indice);
      setGlobos(nuevosGlobos); 
      setIndice(0); 
    }
  };

  // Función para editar un globo existente (CRUD: UPDATE)
  const editarGlobo = async () => {
    if (archivo && globos.length > 0) {
      const reader = new FileReader(); 
      reader.onloadend = async () => {
        const base64data = reader.result; 
        const globoAEditar = globos[indice]; 

        await fetch(`http://localhost:3000/globos/${globoAEditar.id}`, { // Realiza una solicitud PUT a la API usando el ID del globo a editar
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ src: base64data }), 
        });

        const nuevosGlobos = [...globos]; 
        nuevosGlobos[indice].src = base64data;
        setGlobos(nuevosGlobos); 
        setArchivo(null); 
        setModoEdicion(false); 
      };
      reader.readAsDataURL(archivo); 
    }
  };

  return (
    <div className="carrusel"> 
      <button onClick={anterior}>Anterior</button>
      {globos.length > 0 && <img src={globos[indice].src} alt={`Globo ${indice + 1}`} />} 
      <button onClick={siguiente}>Siguiente</button> 

      <div>
        <input
          type="file" 
          accept="image/*"
          onChange={(e) => setArchivo(e.target.files[0])} 
        />
        
        {modoEdicion ? ( 
          <>
            <button onClick={editarGlobo}>Guardar Cambios</button> 
            <button onClick={() => setModoEdicion(false)}>Cancelar Edición</button>
          </>
        ) : ( 
          <>
            <button onClick={agregarGlobo}>Agregar Globo</button> 
            <button onClick={eliminarGlobo}>Eliminar Globo</button> 
            <button onClick={() => setModoEdicion(true)}>Editar Globo</button> 
          </>
        )}
      </div>

      <div>
        <p>Índice actual: {indice + 1} / {globos.length}</p> 
      </div>
    </div>
  );
};

export default AdminGlobos;