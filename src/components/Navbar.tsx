import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

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
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white/50 backdrop-blur-xs border-b border-transparent'
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
          className="flex items-center gap-2.5 font-bold tracking-tight text-slate-900 group"
          id="brand-logo"
        >
          <span className="w-8 h-8 rounded-lg bg-slate-900 text-white grid place-items-center text-xs font-bold tracking-wider group-hover:bg-[#0071e3] transition-colors">
            RG
          </span>
          <span className="text-[15px] font-semibold">
            ragul<span className="text-[#0071e3]">.dev</span>
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
                    ? 'text-slate-900 font-semibold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#0071e3] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
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
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-slate-700 bg-white/80 hover:text-[#0071e3] border border-slate-300/80 hover:border-[#0071e3]/60 rounded-xl transition-all shadow-xs hover:shadow-sm"
          >
            <span>Let’s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0071e3]" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-hidden"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-6 py-4 space-y-2 shadow-lg"
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
                  ? 'text-[#0071e3] font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('contact');
              }}
              className="flex items-center justify-between w-full py-2 text-sm font-semibold text-[#0071e3]"
            >
              <span>Let’s talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* Cinematic Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-[#0071e3] to-cyan-400 origin-left"
        style={{ scaleX }}
      />
    </header>
  );
};
