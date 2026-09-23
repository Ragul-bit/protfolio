import React from 'react';
import { motion } from 'motion/react';
import { timelineData } from '../data/portfolioData';
import { CinematicReveal } from './CinematicReveal';

export const Journey: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-red-950/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <CinematicReveal showGlow glowColor="red">
          {/* Header */}
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-500/40 text-red-400 text-[11px] font-bold tracking-[0.14em] uppercase mb-4 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              04 / Learning journey
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.05]">
              In progress, by <br />
              <span className="text-red-500 font-normal italic">design.</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative pl-6 sm:pl-8 border-l border-red-950/80 space-y-12 max-w-3xl">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Timeline Marker Bullet */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                    item.isCurrent
                      ? 'border-red-500 bg-red-600 ring-4 ring-red-950/80 shadow-[0_0_10px_rgba(239,68,68,0.8)]'
                      : 'border-zinc-700 bg-zinc-900 group-hover:border-red-500'
                  }`}
                />

                {/* Year & Score Badge */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-tight font-mono">
                    {item.yearRange}
                  </span>
                  {item.subLabel && (
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                        item.isCurrent
                          ? 'bg-red-950/60 text-red-300 border-red-700/60 shadow-sm'
                          : 'bg-[#14141d] text-zinc-400 border-zinc-800'
                      }`}
                    >
                      {item.subLabel}
                    </span>
                  )}
                  {item.statusBadge && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 font-mono">
                      {item.statusBadge}
                    </span>
                  )}
                </div>

                {/* Title & Institution */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1 group-hover:text-red-400 transition-colors">
                  {item.degreeOrTitle}
                </h3>
                <p className="text-sm font-medium text-zinc-400 mb-2">
                  {item.institution}
                </p>

                {/* Description */}
                {item.description && (
                  <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </CinematicReveal>
      </div>
    </section>
  );
};
