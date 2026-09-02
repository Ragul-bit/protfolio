import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
import { HorizontalPageControls, PageInfo } from './components/HorizontalPageControls';

const PAGES: PageInfo[] = [
  { id: 'home', name: 'Home', num: '01', label: 'Introduction' },
  { id: 'about', name: 'About', num: '02', label: 'About Me' },
  { id: 'skills', name: 'Skills', num: '03', label: 'Technical Skills' },
  { id: 'projects', name: 'Projects', num: '04', label: 'Selected Work' },
  { id: 'education', name: 'Journey', num: '05', label: 'Learning Journey' },
  { id: 'certifications', name: 'Certificates', num: '06', label: 'Certifications' },
  { id: 'contact', name: 'Contact', num: '07', label: 'Contact & Connect' },
];

export default function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const isScrollingRef = useRef(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const activePage = PAGES[currentPageIndex] || PAGES[0];

  const goToIndex = useCallback((newIndex: number) => {
    if (newIndex >= 0 && newIndex < PAGES.length) {
      setCurrentPageIndex(newIndex);
    }
  }, []);

  const goToId = useCallback((id: string) => {
    const idx = PAGES.findIndex((p) => p.id === id);
    if (idx !== -1) {
      goToIndex(idx);
    }
  }, [goToIndex]);

  const handleNext = useCallback(() => {
    if (currentPageIndex < PAGES.length - 1) {
      goToIndex(currentPageIndex + 1);
    }
  }, [currentPageIndex, goToIndex]);

  const handlePrev = useCallback(() => {
    if (currentPageIndex > 0) {
      goToIndex(currentPageIndex - 1);
    }
  }, [currentPageIndex, goToIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in form inputs or textarea
      if (
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(
          (document.activeElement as HTMLElement)?.tagName
        )
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToIndex(PAGES.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, goToIndex]);

  // Wheel / Trackpad smooth horizontal slide navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Check if user is scrolling inside an element with its own horizontal scroll (e.g. code snippet/table)
      const target = e.target as HTMLElement;
      if (target && target.closest('pre, table, .overflow-x-auto')) {
        return;
      }

      if (isScrollingRef.current) return;

      const currentSlideEl = document.getElementById(`slide-${activePage.id}`);
      const isAtTop = !currentSlideEl || currentSlideEl.scrollTop <= 5;
      const isAtBottom =
        !currentSlideEl ||
        currentSlideEl.scrollTop + currentSlideEl.clientHeight >=
          currentSlideEl.scrollHeight - 5;

      const deltaX = e.deltaX;
      const deltaY = e.deltaY;

      // Direct horizontal trackpad swipe
      if (Math.abs(deltaX) > 30 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 30) {
          isScrollingRef.current = true;
          handleNext();
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 600);
        } else if (deltaX < -30) {
          isScrollingRef.current = true;
          handlePrev();
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 600);
        }
        return;
      }

      // Vertical wheel delta triggering horizontal page slide when at edge
      if (Math.abs(deltaY) > 35) {
        if (deltaY > 35 && isAtBottom && currentPageIndex < PAGES.length - 1) {
          isScrollingRef.current = true;
          handleNext();
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 600);
        } else if (deltaY < -35 && isAtTop && currentPageIndex > 0) {
          isScrollingRef.current = true;
          handlePrev();
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 600);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activePage.id, currentPageIndex, handleNext, handlePrev]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const diffX = touchStartRef.current.x - e.changedTouches[0].clientX;
    const diffY = touchStartRef.current.y - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
      if (diffX > 50) {
        handleNext();
      } else if (diffX < -50) {
        handlePrev();
      }
    }
    touchStartRef.current = null;
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-[#f7f8fa] text-[#0f172a] bg-tech-grid select-none md:select-auto"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Interactive Constellation Cursor & Particle Mesh */}
      <ConstellationCursor />

      {/* Top Header Navigation */}
      <Navbar
        activeSection={activePage.id}
        currentIndex={currentPageIndex}
        total={PAGES.length}
        onNavigate={goToId}
      />

      {/* Horizontal Sliding Motion Track */}
      <motion.main
        className="flex h-full w-full"
        animate={{ x: `-${currentPageIndex * 100}%` }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Page 01: Home / Hero */}
        <div
          id="slide-home"
          className="w-screen h-full shrink-0 overflow-y-auto pt-20 pb-24 md:pt-24 md:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
        >
          <Hero onNavigate={goToId} />
        </div>

        {/* Page 02: About */}
        <div
          id="slide-about"
          className="w-screen h-full shrink-0 overflow-y-auto pt-20 pb-24 md:pt-24 md:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
        >
          <About />
        </div>

        {/* Page 03: Skills */}
        <div
          id="slide-skills"
          className="w-screen h-full shrink-0 overflow-y-auto pt-20 pb-24 md:pt-24 md:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
        >
          <Skills />
        </div>

        {/* Page 04: Projects */}
        <div
          id="slide-projects"
          className="w-screen h-full shrink-0 overflow-y-auto pt-20 pb-24 md:pt-24 md:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
        >
          <Projects />
        </div>

        {/* Page 05: Journey / Education */}
        <div
          id="slide-education"
          className="w-screen h-full shrink-0 overflow-y-auto pt-20 pb-24 md:pt-24 md:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
        >
          <Journey />
        </div>

        {/* Page 06: Certifications */}
        <div
          id="slide-certifications"
          className="w-screen h-full shrink-0 overflow-y-auto pt-20 pb-24 md:pt-24 md:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
        >
          <Certifications />
        </div>

        {/* Page 07: Contact & Footer */}
        <div
          id="slide-contact"
          className="w-screen h-full shrink-0 overflow-y-auto pt-20 pb-24 md:pt-24 md:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-between"
        >
          <div className="flex-1 flex flex-col justify-center">
            <Contact />
          </div>
          <div className="mt-8 border-t border-slate-200/80 pt-4">
            <Footer />
          </div>
        </div>
      </motion.main>

      {/* Floating Horizontal Navigation & Slide Controls */}
      <HorizontalPageControls
        pages={PAGES}
        currentIndex={currentPageIndex}
        onSelectPage={goToIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
