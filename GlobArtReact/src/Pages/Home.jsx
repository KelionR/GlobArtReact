import Header from '../Components/Header';
import Carrrusel from '../Components/Carrusel'
import '../Styles/Home.css'
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <img src="\src\imgs\Flamingos.jpg" alt="" className='Portada'/>
      <main>
        <br />
        <h1 className='Bienvenidos'>Bienvenido a GlobArte</h1>
        <Carrrusel/>
        {/* promociones */}
      </main>
      <Footer/>
    </>
  );
};

export default Home;

