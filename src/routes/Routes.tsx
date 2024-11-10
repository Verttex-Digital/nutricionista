import { Navbar } from '../components/navigation/Navbar';
import { Hero } from '../components/Home';
import { About } from '../components/AboutMe';
import { Services } from '../components/Servicess';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/FormContact';
import { Footer } from '../components/navigation/Footer';

export function Routes() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}