import Seo from './components/Seo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Location from './components/Location';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Divider from './components/Divider';

function App() {
  return (
    <>
      <Seo />
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Features />
        <Divider />
        <Location />
        <Divider />
        <Contact />
      </main>
      <Welcome />
      <Footer />
    </>
  );
}

export default App;
