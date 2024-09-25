import React from 'react';
import '../Styles/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                <p><strong>Correo electrónico:</strong> <a href="mailto:globoartecr@gmail.com">globoartecr@gmail.com</a></p>
                <p>Teléfono: +506 8524-8401</p>
                </div>

                <div className="footer-social">
                    <h4>Síguenos en Redes Sociales</h4>
                    <a href="https://www.facebook.com/profile.php?id=100084134667538&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.instagram.com/globarte.cr?igsh=aTJrYndrODltZXVn" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.tiktok.com/@globartecr?_t=8newd7mTiI2&_r=1" target="_blank" rel="noopener noreferrer">TikTok</a>
                </div>

                <div className="footer-legal">
                    <h4>Enlaces</h4>
                    <a href="http://localhost:5173/about">Contacto</a>
                    <a href="http://localhost:5173/location">Ubicacion</a>
                </div>
            </div>

            <div className="copyRight">
                <p>&copy; {new Date().getFullYear()} GlobArte decora tu Fiesta. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;