import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styles/Mediaquery.css'

const Location = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Nuestra Ubicación</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.084!3d37.42199999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e4e7e4e7e4e%3A0x1234567890abcdef!2sGoogleplex!5e0!3m2!1sen!2sus!4v1612345678901" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </main>
      <Footer />
    </>
  );
};

export default Location;