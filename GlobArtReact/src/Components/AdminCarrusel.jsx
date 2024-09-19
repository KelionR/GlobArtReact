import React, { useState, useEffect } from "react";

function AdminCarrusel() {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/images')
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  const handleAddImage = () => {
    const newId = images.length ? images[images.length - 1].id + 1 : 1;
    const imageObj = { id: newId, src: newImage };
    
    fetch('http://localhost:3000/images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(imageObj),
    })
    .then(() => setImages([...images, imageObj]))
    .catch(err => console.log(err));
  };

  const handleDeleteImage = (id) => {
    fetch(`http://localhost:3000/images/${id}`, {
      method: 'DELETE',
    })
    .then(() => setImages(images.filter(image => image.id !== id)))
    .catch(err => console.log(err));
  };

  const handleImageChange = (id, newSrc) => {
    const updatedImage = { id, src: newSrc };
    
    fetch(`http://localhost:3000/images/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedImage),
    })
    .then(() => {
      const updatedImages = images.map(image => 
        image.id === id ? updatedImage : image
      );
      setImages(updatedImages);
    })
    .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Admin Carrusel</h2>
      <input
        type="text"
        placeholder="Enter base64 image string"
        value={newImage}
        onChange={(e) => setNewImage(e.target.value)}
      />
      <button onClick={handleAddImage}>Add Image</button>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.src} alt={`Image ${image.id}`} width="100" />
          <input
            type="text"
            value={image.src}
            onChange={(e) => handleImageChange(image.id, e.target.value)}
          />
          <button onClick={() => handleDeleteImage(image.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminCarrusel;