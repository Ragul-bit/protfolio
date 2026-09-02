import React from 'react';
import { Code2, Layout, Database, ShieldCheck, Layers, GitBranch } from 'lucide-react';
import { motion } from 'motion/react';
import { skillsData } from '../data/portfolioData';
import { CinematicReveal } from './CinematicReveal';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#0071e3]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#0071e3]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#0071e3]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#0071e3]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#0071e3]" />;
      case 'GitBranch':
      default:
        return <GitBranch className="w-5 h-5 text-[#0071e3]" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <CinematicReveal showGlow glowColor="purple">
          {/* Header */}
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50/80 border border-purple-100 text-purple-600 text-[11px] font-bold tracking-[0.14em] uppercase mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse"></span>
              02 / Technical skills
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              Tools for making <br />
              <span className="text-slate-400 font-normal italic">good things.</span>
            </h2>
            <p className="text-sm text-slate-500 mt-3 max-w-md">
              A practical toolkit that keeps growing through real projects.
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
                whileHover={{ y: -6, scale: 1.01 }}
                className="p-6 rounded-2xl bg-white/85 hover:bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 grid place-items-center mb-4 transition-transform group-hover:scale-110 shadow-xs">
                    {getIcon(skill.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight mb-1.5 group-hover:text-[#0071e3] transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-5">
                    {skill.description}
                  </p>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {skill.chips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-block px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200/80 rounded-full transition-colors hover:border-blue-300 hover:text-blue-600"
                    >
                      {chip}
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
