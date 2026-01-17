import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
// import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter">
      <Header />
      <Hero />
      <About />
      {/* <Experience /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;