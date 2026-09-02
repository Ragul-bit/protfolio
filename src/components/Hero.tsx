import React, { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, LayoutTemplate, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ragulPhoto from '../assets/ragul.jpg';

export const Hero: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[760px] pt-32 pb-16 md:pt-40 md:pb-24 flex items-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071e3]"></span>
              </span>
              <span>Available for opportunities</span>
            </div>

            {/* Greeting Kicker */}
            <p className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#0071e3] m-0">
              Hello, I’m
            </p>

            {/* User Name as the Main Big Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[86px] font-black tracking-tight text-slate-900 leading-[0.95]">
              {personalInfo.name}
            </h1>

            {/* Quote / Tagline (Smaller & refined) */}
            <div className="space-y-2 pt-1 border-l-2 border-blue-500/30 pl-4">
              <p className="text-base sm:text-lg font-medium text-slate-700 italic tracking-tight">
                “{personalInfo.headline} {personalInfo.headlineAccent}”
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#0071e3] tracking-wide">
                {personalInfo.role}
              </p>
            </div>

            {/* Intro paragraph (Smaller, readable) */}
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-xl">
              {personalInfo.intro}
            </p>

            {/* Actions / CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                id="hero-see-work-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0071e3] hover:bg-[#005ec2] text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>See my work</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                id="hero-conversation-btn"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-[#0071e3] py-2 transition-colors cursor-pointer group"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0071e3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Location & Status Footer */}
            <div className="flex items-center gap-3 pt-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>{personalInfo.status}</span>
            </div>
          </div>

          {/* Right Column: Original Profile Photo */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              {/* Clean Framed Card */}
              <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/10 p-3">
                {/* Photo container with natural aspect ratio */}
                <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-slate-50">
                  <img
                    src={ragulPhoto}
                    alt={personalInfo.name}
                    referrerPolicy="no-referrer"
                    onLoad={() => setImgLoaded(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  />
                  
                  {/* Subtle glass overlay tag */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 py-2 px-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/80 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-[11px] font-bold tracking-wide text-slate-800 uppercase">
                        {personalInfo.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#0071e3] uppercase bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      CSE / Full-Stack
                    </span>
                  </div>
                </div>

                {/* Focus chips under photo */}
                <div className="grid grid-cols-2 gap-2 pt-2.5">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100/90 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0071e3] grid place-items-center shrink-0">
                      <LayoutTemplate className="w-3.5 h-3.5" />
                    </div>
                    <div className="leading-tight truncate">
                      <span className="text-[10px] text-slate-400 block">Focus</span>
                      <span className="text-xs font-bold text-slate-800">Frontend UI</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100/90 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0071e3] grid place-items-center shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div className="leading-tight truncate">
                      <span className="text-[10px] text-slate-400 block">Security</span>
                      <span className="text-xs font-bold text-slate-800">Cyber Defense</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge: Available for projects */}
              <div className="absolute -top-3 -right-2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md text-xs font-semibold text-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" />
                <span>Open for Collab</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
