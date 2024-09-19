// src/App.jsx
import React, { useEffect, useState } from 'react';
import Carousel from './Carrusel';
import ImgForm from '../Components/ImgForm';

const App = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        const response = await fetch('http://localhost:3000/images');
        const data = await response.json();
        setImages(data);
    };

    const addImage = async (newImage) => {
        const response = await fetch('http://localhost:3000/images', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image: newImage }),
        });
        const addedImage = await response.json();
        setImages([...images, addedImage]);
    };

    const deleteImage = async (id) => {
        await fetch('http://localhost:3000/images/${id}', {
            method: 'DELETE',
        });
        setImages(images.filter(image => image.id !== id));
    };

    return (
        <div className="App">
            <h1>Carousel de Imágenes</h1>
            <ImgForm onAdd={addImage} />
            <Carousel images={images.map(img => img.image)} onDelete={deleteImage} />
        </div>
    );
};

export default App;