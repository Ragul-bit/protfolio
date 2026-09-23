import React from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
  Flame,
} from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { RgbGlitchPortrait } from './RgbGlitchPortrait';

interface HeroProps {
  onNavigate?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const scrollToSection = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[780px] pt-32 pb-16 md:pt-40 md:pb-24 flex items-center overflow-hidden"
    >
      {/* Background Ambient Red Radiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headline & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-semibold shadow-[0_0_15px_rgba(239,68,68,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>Available for opportunities</span>
            </motion.div>

            {/* Greeting Kicker */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-red-500 m-0 flex items-center gap-2"
            >
              <Flame className="w-4 h-4 text-red-500 animate-pulse" />
              <span>Hello, I’m</span>
            </motion.p>

            {/* Big Headline Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[84px] font-black tracking-tight text-white leading-[0.95]"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Quote / Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="space-y-2 pt-1 border-l-2 border-red-500/70 pl-4"
            >
              <p className="text-base sm:text-lg font-medium text-zinc-200 italic tracking-tight">
                “{personalInfo.headline} {personalInfo.headlineAccent}”
              </p>
              <p className="text-xs sm:text-sm font-semibold text-red-400 tracking-wide font-mono">
                {personalInfo.role}
              </p>
            </motion.div>

            {/* Intro paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="text-sm sm:text-[15px] text-zinc-300 leading-relaxed max-w-xl"
            >
              {personalInfo.intro}
            </motion.p>

            {/* Actions / CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                id="hero-see-work-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-red-950/80 hover:shadow-red-600/40 hover:-translate-y-0.5 cursor-pointer border border-red-500/50"
              >
                <span>See my work</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                id="hero-conversation-btn"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#121218] hover:bg-[#1a1a24] text-sm font-semibold text-zinc-200 hover:text-white border border-zinc-800 hover:border-red-500/50 transition-all cursor-pointer group shadow-sm"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-4 h-4 text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Location & Status Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex items-center gap-3 pt-6 text-xs text-zinc-400 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                {personalInfo.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
              <span className="text-zinc-300 font-mono">{personalInfo.status}</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Replaced with RGB Glitch Portrait Box */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <RgbGlitchPortrait onExploreProjects={() => scrollToSection('projects')} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
