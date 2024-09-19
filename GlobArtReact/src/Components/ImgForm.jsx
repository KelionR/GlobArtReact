import React, { useState } from 'react';

const ImageForm = ({ onAdd }) => {
    const [image, setImage] = useState('');

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (image) {
            onAdd(image);
            setImage('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleChange} required />
            <button type="submit">Agregar Imagen</button>
        </form>
    );
};

export default ImageForm;