import React, { useState, useEffect } from "react";

function Carousel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/images')
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div>
      {images.length > 0 ? (
        <div className="carousel">
          {images.map((image) => (
            <div key={image.id} className="carousel-item">
              <img src={image.src} alt={`Slide ${image.id}`} />
            </div>
          ))}
        </div>
      ) : (
        <p>sin imagenes disponibles</p>
      )}
    </div>
  );
}

export default Carousel;