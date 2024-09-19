import Header from '../Components/Header';
import About from '../Components/About';
import { ContactUs } from '../Components/Email';



const AboutUs = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <ContactUs/>

      </main>
    </>
  );
};

export default AboutUs;