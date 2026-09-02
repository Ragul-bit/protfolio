import React from 'react';
import { Instagram, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2.5 font-bold tracking-tight text-slate-900 group cursor-pointer"
        >
          <span className="w-7 h-7 rounded-lg bg-slate-900 text-white grid place-items-center text-[10px] font-bold tracking-wider group-hover:bg-[#0071e3] transition-colors">
            RG
          </span>
          <span className="text-sm font-semibold">
            ragul<span className="text-[#0071e3]">.dev</span>
          </span>
        </button>

        {/* Copy */}
        <p className="text-xs text-slate-500 text-center sm:text-left">
          Designed and built by Ragul Gandhi B.
        </p>

        {/* Social Icons with Direct Links */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-pink-50 border border-slate-200/80 hover:border-pink-200 text-slate-600 hover:text-pink-600 grid place-items-center transition-all shadow-2xs hover:scale-105"
            title="Instagram - @__rxgul__01"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-200 text-slate-600 hover:text-[#0071e3] grid place-items-center transition-all shadow-2xs hover:scale-105"
            title="LinkedIn - Ragul Gandhi"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300 text-slate-600 hover:text-slate-900 grid place-items-center transition-all shadow-2xs hover:scale-105"
            title="GitHub - Ragul-bit"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
