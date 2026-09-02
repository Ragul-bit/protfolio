import React from 'react';
import { Code2, Layout, Database, ShieldCheck, Layers, GitBranch } from 'lucide-react';
import { motion } from 'motion/react';
import { skillsData } from '../data/portfolioData';

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
    <section id="skills" className="py-10 md:py-14 overflow-hidden flex flex-col justify-center min-h-[calc(100vh-170px)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0071e3] mb-3.5">
            02 / Technical skills
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            Tools for making <br />
            <span className="text-slate-400 font-normal italic">good things.</span>
          </h2>
          <p className="text-sm text-slate-500 mt-3 max-w-md">
            A practical toolkit that keeps growing through real projects.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="p-6 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/90 hover:border-blue-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/60 grid place-items-center mb-4 transition-transform group-hover:scale-110">
                  {getIcon(skill.iconName)}
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-1.5">
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
      </div>
    </section>
  );
};
