import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])

  return (
    <main className='overflow-hidden'>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}

export default App;
