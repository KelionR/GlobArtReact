import Header from '../Components/Header';
import Promociones from '../Components/Promociones'; 
import Globos from '../Components/Globos'; 
import Ramos from '../Components/Ramos'; 
import Sorpresas from '../Components/Sorpresas'; 
import '../Styles/Home.css';
import '../Styles/Mediaquery.css'
import Footer from '../Components/Footer';
import { useEffect, useState } from 'react';


const Home = () => {
  const [textoPromociones, setTextoPromociones] = useState("");
  const [textoGlobos, setTextoGlobos] = useState("");
  const [textoRamos, setTextoRamos] = useState("");
  const [textoSorpresas, setTextoSorpresas] = useState("");


  return (
    <>
      <Header />
      <img src="\src\imgs\Flamingos.jpg" alt="" className='Portada'/>
      <main>

        <br />
        <h1 className='Bienvenidos'>Bienvenido a GlobArte</h1>
        <h3 className='Bienvenidos'>𝗘𝗻 𝗚𝗹𝗼𝗯𝗔𝗿𝘁𝗲, 𝗰𝗿𝗲𝗲𝗺𝗼𝘀 𝗾𝘂𝗲 𝗰𝗮𝗱𝗮 𝗺𝗼𝗺𝗲𝗻𝘁𝗼 𝗲𝘀𝗽𝗲𝗰𝗶𝗮𝗹 𝗺𝗲𝗿𝗲𝗰𝗲 𝘀𝗲𝗿 𝗰𝗲𝗹𝗲𝗯𝗿𝗮𝗱𝗼 𝗰𝗼𝗻 𝗰𝗿𝗲𝗮𝘁𝗶𝘃𝗶𝗱𝗮𝗱 𝘆 𝗮𝗹𝗲𝗴𝗿í𝗮. 𝗦𝗼𝗺𝗼𝘀 𝘂𝗻𝗮 𝗲𝗺𝗽𝗿𝗲𝘀𝗮 𝗱𝗲𝗱𝗶𝗰𝗮𝗱𝗮 𝗮 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗿 𝘁𝘂𝘀 𝗶𝗱𝗲𝗮𝘀 𝘆 𝗲𝗺𝗼𝗰𝗶𝗼𝗻𝗲𝘀 𝗲𝗻 𝗱𝗲𝗰𝗼𝗿𝗮𝗰𝗶𝗼𝗻𝗲𝘀 ú𝗻𝗶𝗰𝗮𝘀 𝗾𝘂𝗲 𝗰𝗿𝗲𝗮𝗻 𝗿𝗲𝗰𝘂𝗲𝗿𝗱𝗼𝘀 𝗶𝗻𝗼𝗹𝘃𝗶𝗱𝗮𝗯𝗹𝗲𝘀. 𝗡𝗼𝘀 𝗲𝘀𝗽𝗲𝗰𝗶𝗮𝗹𝗶𝘇𝗮𝗺𝗼𝘀 𝗲𝗻 𝗲𝗹 𝗮𝗿𝘁𝗲 𝗰𝗼𝗻 𝗴𝗹𝗼𝗯𝗼𝘀, 𝗼𝗳𝗿𝗲𝗰𝗶𝗲𝗻𝗱𝗼 𝘂𝗻𝗮 𝗮𝗺𝗽𝗹𝗶𝗮 𝘃𝗮𝗿𝗶𝗲𝗱𝗮𝗱 𝗱𝗲 𝗯𝗼𝘂𝗾𝘂𝗲𝘁𝘀, 𝗿𝗮𝗺𝗼𝘀, 𝗰𝗲𝗻𝘁𝗿𝗼𝘀 𝗱𝗲 𝗺𝗲𝘀𝗮, 𝗰𝗮𝗷𝗶𝘁𝗮𝘀 𝗱𝗲 𝗿𝗲𝗴𝗮𝗹𝗼, 𝗱𝗲𝘀𝗮𝘆𝘂𝗻𝗼𝘀 𝘀𝗼𝗿𝗽𝗿𝗲𝘀𝗮 𝘆 𝗱𝗲𝗰𝗼𝗿𝗮𝗰𝗶𝗼𝗻𝗲𝘀 𝘁𝗲𝗺á𝘁𝗶𝗰𝗮𝘀 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗮𝘀. 𝗖𝗮𝗱𝗮 𝗽𝗿𝗼𝘆𝗲𝗰𝘁𝗼 𝗾𝘂𝗲 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗺𝗼𝘀 𝗲𝘀𝘁á 𝗵𝗲𝗰𝗵𝗼 𝗰𝗼𝗻 𝗽𝗮𝘀𝗶ó𝗻, 𝗰𝘂𝗶𝗱𝗮𝗻𝗱𝗼 𝗰𝗮𝗱𝗮 𝗱𝗲𝘁𝗮𝗹𝗹𝗲 𝗽𝗮𝗿𝗮 𝗾𝘂𝗲 𝘁𝘂 𝗲𝘃𝗲𝗻𝘁𝗼 𝘀𝗲𝗮 𝘁𝗮𝗻 𝗲𝘀𝗽𝗲𝗰𝗶𝗮𝗹 𝗰𝗼𝗺𝗼 𝗹𝗼 𝗶𝗺𝗮𝗴𝗶𝗻𝗮𝘀. 𝗬𝗮 𝘀𝗲𝗮 𝘂𝗻𝗮 𝗯𝗼𝗱𝗮, 𝗰𝘂𝗺𝗽𝗹𝗲𝗮ñ𝗼𝘀, 𝗯𝗮𝗯𝘆 𝘀𝗵𝗼𝘄𝗲𝗿 𝗼 𝗰𝘂𝗮𝗹𝗾𝘂𝗶𝗲𝗿 𝗼𝗰𝗮𝘀𝗶ó𝗻 𝗲𝘀𝗽𝗲𝗰𝗶𝗮𝗹, 𝗻𝘂𝗲𝘀𝘁𝗿𝗼 𝗰𝗼𝗺𝗽𝗿𝗼𝗺𝗶𝘀𝗼 𝗲𝘀 𝗮𝗽𝗼𝗿𝘁𝗮𝗿 𝗲𝗺𝗼𝗰𝗶ó𝗻, 𝗳𝗲𝗹𝗶𝗰𝗶𝗱𝗮𝗱 𝘆 𝗺𝗮𝗴𝗶𝗮 𝗮 𝗰𝗮𝗱𝗮 𝗰𝗲𝗹𝗲𝗯𝗿𝗮𝗰𝗶ó𝗻. 𝗖𝗼𝗻 𝘂𝗻 𝘁𝗼𝗾𝘂𝗲 𝗺𝗼𝗱𝗲𝗿𝗻𝗼 𝘆 𝗲𝗹𝗲𝗴𝗮𝗻𝘁𝗲, 𝘆 𝘀𝗶𝗲𝗺𝗽𝗿𝗲 𝗮 𝗹𝗮 𝘃𝗮𝗻𝗴𝘂𝗮𝗿𝗱𝗶𝗮 𝗲𝗻 𝘁𝗲𝗻𝗱𝗲𝗻𝗰𝗶𝗮𝘀 𝗱𝗲 𝗱𝗲𝗰𝗼𝗿𝗮𝗰𝗶ó𝗻, 𝗲𝗻 𝗚𝗹𝗼𝗯𝗔𝗿𝘁𝗲 𝗰𝗿𝗲𝗮𝗺𝗼𝘀 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮𝘀 𝘃𝗶𝘀𝘂𝗮𝗹𝗲𝘀 𝗾𝘂𝗲 𝗰𝗼𝗻𝗲𝗰𝘁𝗮𝗻 𝗰𝗼𝗻 𝗲𝗹 𝗰𝗼𝗿𝗮𝘇ó𝗻. 𝗡𝗼𝘀 𝗲𝗻𝗼𝗿𝗴𝘂𝗹𝗹𝗲𝗰𝗲 𝘀𝗲𝗿 𝗽𝗮𝗿𝘁𝗲 𝗱𝗲 𝘁𝘂𝘀 𝗺𝗼𝗺𝗲𝗻𝘁𝗼𝘀 𝗺á𝘀 𝗳𝗲𝗹𝗶𝗰𝗲𝘀 𝘆 𝗼𝗳𝗿𝗲𝗰𝗲𝗿 𝗽𝗿𝗼𝗱𝘂𝗰𝘁𝗼𝘀 𝗲𝘅𝗰𝗹𝘂𝘀𝗶𝘃𝗼𝘀 𝗾𝘂𝗲 𝗿𝗲𝗳𝗹𝗲𝗷𝗮𝗻 𝗹𝗼 𝗾𝘂𝗲 𝘀𝗶𝗲𝗻𝘁𝗲𝘀. 𝗚𝗹𝗼𝗯𝗔𝗿𝘁𝗲 𝗲𝘀 𝗺á𝘀 𝗾𝘂𝗲 𝗴𝗹𝗼𝗯𝗼𝘀, ¡𝗲𝘀 𝗹𝗮 𝗺𝗮𝗴𝗶𝗮 𝗱𝗲 𝗰𝗼𝗻𝘃𝗲𝗿𝘁𝗶𝗿 𝗶𝗻𝘀𝘁𝗮𝗻𝘁𝗲𝘀 𝗲𝗻 𝗿𝗲𝗰𝘂𝗲𝗿𝗱𝗼𝘀 𝗶𝗺𝗯𝗼𝗿𝗿𝗮𝗯𝗹𝗲𝘀!</h3>

<h2 className='Promo'>Promociones</h2>

        <div className="Bienvenidos">
          <Promociones />
          <p>Promocion de 30% para globos de cualquier tipo este fin de semana</p>
        </div>

        
        <div className="carrusel-container">
          <h2>Globos</h2>
          <p>perfecto para transformar cualquier evento en una celebración inolvidable. Desde cumpleaños y bodas hasta inauguraciones y fiestas temáticas, estos coloridos elementos permiten crear ambientes festivos y llenos de alegría</p> 
          <Globos />
        </div>

        
        <div className="carrusel-container">
          <h2>Ramos</h2>
          <p>Los ramos de flores son una expresión atemporal de amor, gratitud y celebración. Perfectos para cualquier ocasión, desde aniversarios y cumpleaños hasta disculpas o simplemente para alegrar el día de alguien especial, un ramo bien diseñado puede transmitir emociones que las palabras a veces no logran.</p>
          <Ramos /> 
        </div>

        
        <div className="carrusel-container">
          <h2>Sorpresas</h2>
          <p>Las cajas con sorpresas son la manera perfecta de añadir un toque de emoción y misterio a cualquier celebración. Ideales para cumpleaños, aniversarios, o simplemente para alegrar el día de alguien especial, cada caja está diseñada para sorprender y encantar.</p> 
          <Sorpresas />
        </div>

      </main>
      <Footer />
    </>
  );
};

export default Home;