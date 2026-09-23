import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 280, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Journey', href: '#education', id: 'education' },
    { name: 'Certificates', href: '#certifications', id: 'certifications' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="top-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090c]/90 backdrop-blur-md border-b border-red-950/50 shadow-lg shadow-black/60'
          : 'bg-[#09090c]/60 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-[76px] flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="flex items-center gap-2.5 font-bold tracking-tight text-white group"
          id="brand-logo"
        >
          <span className="w-8 h-8 rounded-lg bg-red-600 text-white grid place-items-center text-xs font-bold tracking-wider shadow-[0_0_12px_rgba(239,68,68,0.6)] group-hover:bg-red-500 transition-colors">
            RG
          </span>
          <span className="text-[15px] font-semibold text-white tracking-wide">
            ragul<span className="text-red-500 font-bold">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`relative text-[13px] font-medium transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
            id="nav-contact-cta"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-zinc-200 bg-[#121218] hover:bg-red-600 hover:text-white border border-red-500/30 hover:border-red-500 rounded-xl transition-all shadow-sm hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]"
          >
            <span>Let’s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-red-400 group-hover:text-white" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white rounded-lg focus:outline-hidden"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-red-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#0c0c12]/98 backdrop-blur-xl border-b border-red-950 px-6 py-4 space-y-2 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.id);
              }}
              className={`block py-2 text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-red-400 font-semibold'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-800">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('contact');
              }}
              className="flex items-center justify-between w-full py-2 text-sm font-semibold text-red-400"
            >
              <span>Let’s talk</span>
              <ArrowUpRight className="w-4 h-4 text-red-400" />
            </a>
          </div>
        </div>
      )}

      {/* Cinematic Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-red-700 via-red-500 to-amber-500 origin-left shadow-[0_0_8px_rgba(239,68,68,0.8)]"
        style={{ scaleX }}
      />
    </header>
  );
};
