import React from 'react';
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
          className="flex items-center gap-2.5 font-bold tracking-tight text-slate-900 group"
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

        {/* Links */}
        <div className="flex items-center gap-5 text-xs text-slate-500 font-medium">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0071e3] transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0071e3] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-[#0071e3] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
