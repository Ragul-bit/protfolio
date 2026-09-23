import React from 'react';
import { Code2, Layout, Database, ShieldCheck, Layers, GitBranch } from 'lucide-react';
import { motion } from 'motion/react';
import { skillsData } from '../data/portfolioData';
import { CinematicReveal } from './CinematicReveal';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-red-500" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-red-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-red-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-red-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-red-500" />;
      case 'GitBranch':
      default:
        return <GitBranch className="w-5 h-5 text-red-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-red-950/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <CinematicReveal showGlow glowColor="red">
          {/* Header */}
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-500/40 text-red-400 text-[11px] font-bold tracking-[0.14em] uppercase mb-4 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              02 / Technical skills
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.05]">
              Tools for making <br />
              <span className="text-red-500 font-normal italic">good things.</span>
            </h2>
            <p className="text-sm text-zinc-400 mt-3 max-w-md">
              A practical toolkit that keeps growing through real projects and security research.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: 0.08 * index, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-2xl bg-[#0e0e14]/90 hover:bg-[#13131c] border border-zinc-800 hover:border-red-500/60 shadow-lg shadow-black/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group backdrop-blur-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-800/50 grid place-items-center mb-4 transition-transform group-hover:scale-110 shadow-sm">
                    {getIcon(skill.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-red-400 transition-colors">
                    {skill.title}
                  </h3>
                  {skill.description && (
                    <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
                      {skill.description}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {skill.chips.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg bg-[#14141d] border border-red-950/70 text-xs font-medium text-zinc-300 group-hover:border-red-500/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </CinematicReveal>
      </div>
    </section>
  );
};
