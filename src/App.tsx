import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConstellationCursor } from './components/ConstellationCursor';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Intersection Observer to track active section in viewport
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sectionId = SECTIONS[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#0f172a] bg-tech-grid relative selection:bg-blue-100 selection:text-blue-900">
      {/* Interactive Constellation Cursor & Particle Mesh */}
      <ConstellationCursor />

      {/* Top Header Navigation with Scroll Progress indicator */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content: Vertical Cinematic Flow */}
      <main className="relative z-10">
        {/* Section 01: Hero */}
        <Hero onNavigate={scrollToSection} />

        {/* Section 02: About */}
        <About />

        {/* Section 03: Skills */}
        <Skills />

        {/* Section 04: Projects */}
        <Projects />

        {/* Section 05: Journey / Education */}
        <Journey />

        {/* Section 06: Certifications */}
        <Certifications />

        {/* Section 07: Contact */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
