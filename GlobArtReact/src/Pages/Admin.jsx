import Header from '../Components/Header';
import AdminCarrrusel from '../Components/AdminCarrusel'
import '../Styles/Home.css'
import Footer from '../Components/Footer';

const Admin = () => {
  return (
    <>
      <Header />
      <img src="\src\imgs\Flamingos.jpg" alt="" className='Portada'/>
      <main>
        <br />
        <h1 className='Bienvenidos'>Bienvenido a GlobArte</h1>
        <AdminCarrrusel/>
        {/* promociones */}
      </main>
      <Footer/>
    </>
  );
};

export default Admin;