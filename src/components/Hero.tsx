import React, { useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  LayoutTemplate,
  ShieldCheck,
  MapPin,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onNavigate?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'stack' | 'status'>('profile');

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

  const handleCopyCommand = () => {
    navigator.clipboard.writeText('npx ragul-gandhi');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[760px] pt-32 pb-16 md:pt-40 md:pb-24 flex items-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Intro & Headline with Sliding Window Entrance */}
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
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071e3]"></span>
              </span>
              <span>Available for opportunities</span>
            </motion.div>

            {/* Greeting Kicker */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#0071e3] m-0"
            >
              Hello, I’m
            </motion.p>

            {/* User Name as the Main Big Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[86px] font-black tracking-tight text-slate-900 leading-[0.95]"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Quote / Tagline (Smaller & refined) */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="space-y-2 pt-1 border-l-2 border-blue-500/30 pl-4"
            >
              <p className="text-base sm:text-lg font-medium text-slate-700 italic tracking-tight">
                “{personalInfo.headline} {personalInfo.headlineAccent}”
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#0071e3] tracking-wide">
                {personalInfo.role}
              </p>
            </motion.div>

            {/* Intro paragraph (Smaller, readable) */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-xl"
            >
              {personalInfo.intro}
            </motion.p>

            {/* Actions / CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex flex-wrap items-center gap-5 pt-2"
            >
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
            </motion.div>

            {/* Location & Status Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex items-center gap-3 pt-6 text-xs text-slate-500 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>{personalInfo.status}</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Developer Architecture & Code Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-[420px]">
              {/* Clean Framed Card with Subtle Hover Lift */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl shadow-slate-950/20 text-slate-100 flex flex-col"
              >
                {/* Window Titlebar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 bg-slate-900/90 p-0.5 rounded-lg border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setActiveTab('profile')}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-all cursor-pointer ${
                        activeTab === 'profile'
                          ? 'bg-[#0071e3] text-white shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      config.ts
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('stack')}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-all cursor-pointer ${
                        activeTab === 'stack'
                          ? 'bg-[#0071e3] text-white shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      stack.json
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('status')}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-all cursor-pointer ${
                        activeTab === 'status'
                          ? 'bg-[#0071e3] text-white shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      terminal
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                    v2.6
                  </span>
                </div>

                {/* Tab Content Display */}
                <div className="p-5 min-h-[260px] flex flex-col justify-between font-mono text-xs">
                  {activeTab === 'profile' && (
                    <div className="space-y-2 text-slate-300">
                      <div className="text-slate-500">// Developer Profile Spec</div>
                      <div>
                        <span className="text-purple-400 font-bold">export const</span>{' '}
                        <span className="text-blue-400 font-bold">developer</span> = &#123;
                      </div>
                      <div className="pl-4 space-y-1">
                        <div>
                          <span className="text-slate-400">name:</span>{' '}
                          <span className="text-emerald-300">"{personalInfo.name}"</span>,
                        </div>
                        <div>
                          <span className="text-slate-400">role:</span>{' '}
                          <span className="text-emerald-300">"CSE / Full-Stack"</span>,
                        </div>
                        <div>
                          <span className="text-slate-400">focus:</span> [
                          <span className="text-amber-300">"Frontend UI"</span>,{' '}
                          <span className="text-amber-300">"Cyber Defense"</span>],
                        </div>
                        <div>
                          <span className="text-slate-400">status:</span>{' '}
                          <span className="text-sky-300">"{personalInfo.status}"</span>,
                        </div>
                        <div>
                          <span className="text-slate-400">location:</span>{' '}
                          <span className="text-emerald-300">"{personalInfo.location}"</span>
                        </div>
                      </div>
                      <div>&#125;;</div>
                    </div>
                  )}

                  {activeTab === 'stack' && (
                    <div className="space-y-3">
                      <div className="text-slate-500">// Core Engineering Pillars</div>
                      <div className="grid grid-cols-2 gap-2 font-sans">
                        <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                          <div className="flex items-center gap-1.5 text-blue-400 text-xs font-bold mb-1">
                            <Code2 className="w-3.5 h-3.5" />
                            <span>Frontend</span>
                          </div>
                          <p className="text-[11px] text-slate-400 m-0">React, TypeScript, Tailwind, Motion</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                          <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold mb-1">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Security</span>
                          </div>
                          <p className="text-[11px] text-slate-400 m-0">Cyber Defense, Networking, Cryptography</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                          <div className="flex items-center gap-1.5 text-purple-400 text-xs font-bold mb-1">
                            <Cpu className="w-3.5 h-3.5" />
                            <span>Backend</span>
                          </div>
                          <p className="text-[11px] text-slate-400 m-0">Node.js, Express, Python, REST APIs</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                          <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold mb-1">
                            <Layers className="w-3.5 h-3.5" />
                            <span>Core CS</span>
                          </div>
                          <p className="text-[11px] text-slate-400 m-0">Data Structures, Algorithms, OS</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'status' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-slate-800">
                        <span>Terminal session</span>
                        <span className="flex items-center gap-1 text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Connected
                        </span>
                      </div>
                      <div className="space-y-1 text-slate-300">
                        <p className="text-slate-400 m-0">
                          <span className="text-emerald-400">➜</span> ~ npx ragul-gandhi
                        </p>
                        <p className="text-blue-400 m-0">✔ Initialized developer runtime</p>
                        <p className="text-slate-400 m-0">✔ 6+ Verified Certifications loaded</p>
                        <p className="text-slate-400 m-0">✔ Sliding-window UI & Constellation ready</p>
                        <p className="text-emerald-300 font-semibold m-0">🚀 Status: Ready for collaboration</p>
                      </div>
                    </div>
                  )}

                  {/* Terminal CLI Copy Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <Terminal className="w-3.5 h-3.5 text-blue-400" />
                      <span className="font-mono text-slate-300">npx ragul-gandhi</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyCommand}
                      className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded-md transition-colors cursor-pointer"
                      title="Copy command"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Open to Work</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500">Node v20.x</span>
                    <span className="text-[#0071e3] font-semibold">Ready</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge with gentle float motion */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md text-xs font-semibold text-slate-700"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" />
                <span>Open for Collab</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
