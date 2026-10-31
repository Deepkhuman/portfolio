import { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ThreeWorld from './components/ThreeWorld';
import HeroSection from './components/HeroSection';
import About3D from './components/About3D';
import Skills3D from './components/Skills3D';
import Projects3D from './components/Projects3D';
import Contact3D from './components/Contact3D';
import Footer from './components/Footer';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-400 overflow-x-hidden">
      {/* Global Three.js 3D Universe */}
      <ThreeWorld />

      {/* Floating Modern Mobile-First Glass Navbar */}
      <Navbar
        onScrollToHero={() => scrollToSection(heroRef)}
        onScrollToAbout={() => scrollToSection(aboutRef)}
        onScrollToSkills={() => scrollToSection(skillsRef)}
        onScrollToProjects={() => scrollToSection(projectsRef)}
        onScrollToContact={() => scrollToSection(contactRef)}
      />

      {/* Fully 3D Components */}
      <main className="relative z-10 flex flex-col space-y-10 sm:space-y-16">
        <div ref={heroRef}>
          <HeroSection onScrollToProjects={() => scrollToSection(projectsRef)} />
        </div>

        <div ref={aboutRef}>
          <About3D />
        </div>

        <div ref={skillsRef}>
          <Skills3D />
        </div>

        <div ref={projectsRef}>
          <Projects3D />
        </div>

        <div ref={contactRef}>
          <Contact3D />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
