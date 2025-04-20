import { useEffect, useRef } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aos from 'aos';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });

    setTimeout(() => {
      Aos.refresh();
    }, 500);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on reload
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white font-sans">
      <Navbar
        onScrollToHero={() => scrollToSection(heroRef)}
        onScrollToAbout={() => scrollToSection(aboutRef)}
        onScrollToSkills={() => scrollToSection(skillsRef)}
        onScrollToProjects={() => scrollToSection(projectsRef)}
        onScrollToContact={() => scrollToSection(contactRef)}
      />
      <div ref={heroRef}>
        <HeroSection onScrollToProjects={() => scrollToSection(projectsRef)} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
