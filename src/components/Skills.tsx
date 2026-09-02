import React from 'react';
import { Code2, Layout, Database, ShieldCheck, Layers, GitBranch } from 'lucide-react';
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
    <section id="skills" className="py-24 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
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
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="p-6 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/90 hover:border-blue-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/60 grid place-items-center mb-4 transition-transform group-hover:scale-105">
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
                    className="inline-block px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200/80 rounded-full"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
