// src/components/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <img src="\src\imgs\Logo.png" className='Logo' alt="" width={150}/> 
      <h2>𝓖𝓵𝓸𝓫𝓐𝓻𝓽𝓮</h2>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Contacto</Link></li>
          <li><Link to="/location">Ubicación</Link></li>
          <li><Link to="/admin">Administración</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;