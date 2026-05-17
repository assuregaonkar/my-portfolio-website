import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto w-full">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </>
  );
}
