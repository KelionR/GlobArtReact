import Header from '../Components/Header';
import AdminPromociones from '../Components/AdminPromociones'; 
import AdminGlobos from '../Components/AdminGlobos'; 
import AdminRamos from '../Components/AdminRamos'; 
import AdminSorpresas from '../Components/AdminSorpresas'; 
import '../Styles/Home.css';
import '../Styles/Mediaquery.css'
import Footer from '../Components/Footer';
import { useEffect, useState } from 'react';

const Admin = () => {


  return (
    <>
      <Header />
      <img src="\src\imgs\Flamingos.jpg" alt="" className='Portada'/>
      <main>
        <br />
        <h1 className='Bienvenidos'>Bienvenido a GlobArte</h1>

        {/* Carrusel de Promociones */}
        <div className="carrusel-container">
          <AdminPromociones />
          
        </div>

        {/* Carrusel de Globos */}
        <div className="carrusel-container">
          <AdminGlobos />
         
        </div>

        {/* Carrusel de Ramos */}
        <div className="carrusel-container">
          <AdminRamos />
          
        </div>

        {/* Carrusel de Sorpresas */}
        <div className="carrusel-container">
          <AdminSorpresas />
          
        </div>

      </main>
      <Footer />
    </>
  );
};

export default Admin;