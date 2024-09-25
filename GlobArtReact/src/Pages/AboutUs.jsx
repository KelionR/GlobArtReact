import Header from '../Components/Header';
import About from '../Components/About';
import { ContactUs } from '../Components/Email';
import Footer from '../Components/Footer';
import '../Styles/Mediaquery.css'



const AboutUs = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <ContactUs/>
        <div class="contact-info">
        <p><strong>Teléfono:</strong> 8524-8401</p>
        <p><strong>Correo electrónico:</strong> <a href="mailto:globoartecr@gmail.com">globoartecr@gmail.com</a></p>
        <p><strong>Instagram:</strong> <a href="https://www.instagram.com/globarte.cr" target="_blank">@globarte.cr</a></p>
    </div>

      </main>
      <Footer />
    </>
  );
};

export default AboutUs;