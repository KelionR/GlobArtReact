import Header from '../Components/Header';
import Carousel from '../Components/Carrusel';
import '../Styles/Home.css'

const Home = () => {
  return (
    <>
      <Header />
      <img src="\src\imgs\Flamingos.jpg" alt="" className='Portada'/>
      <main>
        <br />
        <h1 className='Bienvenidos'>Bienvenido a GlobArte</h1>
        <Carousel />
        {/* promociones */}
      </main>
    </>
  );
};

export default Home;

