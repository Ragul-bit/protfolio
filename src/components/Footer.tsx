import React from 'react';
import { Instagram, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-red-950/40 bg-[#08080c]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2.5 font-bold tracking-tight text-white group cursor-pointer"
        >
          <span className="w-7 h-7 rounded-lg bg-red-600 text-white grid place-items-center text-[10px] font-bold tracking-wider shadow-[0_0_8px_rgba(239,68,68,0.6)] group-hover:bg-red-500 transition-colors">
            RG
          </span>
          <span className="text-sm font-semibold tracking-wide">
            ragul<span className="text-red-500 font-bold">.dev</span>
          </span>
        </button>

        {/* Copy */}
        <p className="text-xs text-zinc-400 text-center sm:text-left">
          Designed and built by Ragul Gandhi B. Crafted with Black & Red aesthetic.
        </p>

        {/* Social Icons with Direct Links */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-xl bg-[#121218] hover:bg-red-950/60 border border-zinc-800 hover:border-red-500/50 text-zinc-400 hover:text-red-400 grid place-items-center transition-all shadow-sm hover:scale-105"
            title="Instagram - @__rxgul__01"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-xl bg-[#121218] hover:bg-red-950/60 border border-zinc-800 hover:border-red-500/50 text-zinc-400 hover:text-red-400 grid place-items-center transition-all shadow-sm hover:scale-105"
            title="LinkedIn - Ragul Gandhi"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-xl bg-[#121218] hover:bg-red-950/60 border border-zinc-800 hover:border-red-500/50 text-zinc-400 hover:text-red-400 grid place-items-center transition-all shadow-sm hover:scale-105"
            title="GitHub - Ragul-bit"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
