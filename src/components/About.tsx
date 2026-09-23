import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, Network, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { interestsData, personalInfo } from '../data/portfolioData';
import { CinematicReveal } from './CinematicReveal';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-red-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-red-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-red-500" />;
      case 'Globe':
      default:
        return <Globe className="w-5 h-5 text-red-400" />;
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 border-t border-red-950/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <CinematicReveal showGlow glowColor="red">
          {/* Section Header */}
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-500/40 text-red-400 text-[11px] font-bold tracking-[0.14em] uppercase mb-4 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              01 / About me
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.05]">
              Building with a <span className="text-red-500 font-normal italic">wide-angle</span> view.
            </h2>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5 text-zinc-300">
              <p className="text-xl sm:text-2xl font-medium text-white leading-snug tracking-tight">
                I like understanding the whole picture — from the first pixel on screen to the systems that make it work.
              </p>
              <p className="text-[15px] leading-relaxed text-zinc-400">
                My interests move between frontend design, backend logic, cybersecurity, and networking. I’m a hands-on learner who enjoys turning an idea into something people can actually use, then asking how it can be made clearer, faster, and safer.
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors group"
                >
                  <span>Let’s connect</span>
                  <ArrowUpRight className="w-4 h-4 text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Interest Grid with Staggered Hover Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interestsData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-2xl bg-[#0e0e14]/90 hover:bg-[#13131c] border border-zinc-800/90 hover:border-red-500/60 shadow-lg shadow-black/50 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] hover:-translate-y-1 transition-all duration-200 group backdrop-blur-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-950/70 group-hover:bg-red-900/60 border border-red-800/50 grid place-items-center mb-4 transition-transform group-hover:scale-110 shadow-sm">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-zinc-400 leading-relaxed m-0">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </CinematicReveal>
      </div>
    </section>
  );
};
