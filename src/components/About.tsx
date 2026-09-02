import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, Network, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { interestsData, personalInfo } from '../data/portfolioData';

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
    <section id="about" className="py-10 md:py-14 overflow-hidden flex flex-col justify-center min-h-[calc(100vh-170px)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0071e3] mb-3.5">
            01 / About me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            Building with a <span className="text-slate-400 font-normal italic">wide-angle</span> view.
          </h2>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-5 text-slate-600"
          >
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
          </motion.div>

          {/* Right Interest Grid with Staggered Sliding Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interestsData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="p-6 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/90 hover:border-blue-200 shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50/80 group-hover:bg-blue-50 border border-blue-100/60 grid place-items-center mb-4 transition-transform group-hover:scale-110">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed m-0">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
