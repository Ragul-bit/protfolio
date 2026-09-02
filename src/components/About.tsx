import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, Network, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { interestsData, personalInfo } from '../data/portfolioData';
import { CinematicReveal } from './CinematicReveal';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#0071e3]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#0071e3]" />;
      case 'Network':
        return <Network className="w-5 h-5 text-[#0071e3]" />;
      case 'Globe':
      default:
        return <Globe className="w-5 h-5 text-[#0071e3]" />;
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <CinematicReveal showGlow glowColor="blue">
          {/* Section Header */}
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-[#0071e3] text-[11px] font-bold tracking-[0.14em] uppercase mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] animate-pulse"></span>
              01 / About me
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              Building with a <span className="text-slate-400 font-normal italic">wide-angle</span> view.
            </h2>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5 text-slate-600">
              <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug tracking-tight">
                I like understanding the whole picture — from the first pixel on screen to the systems that make it work.
              </p>
              <p className="text-[15px] leading-relaxed">
                My interests move between frontend design, backend logic, cybersecurity, and networking. I’m a hands-on learner who enjoys turning an idea into something people can actually use, then asking how it can be made clearer, faster, and safer.
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#0071e3] transition-colors group"
                >
                  <span>Let’s connect</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0071e3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="p-6 rounded-2xl bg-white/85 hover:bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group backdrop-blur-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50/90 group-hover:bg-blue-100/80 border border-blue-100 grid place-items-center mb-4 transition-transform group-hover:scale-110 shadow-xs">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2 group-hover:text-[#0071e3] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed m-0">
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
