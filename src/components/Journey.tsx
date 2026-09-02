import React from 'react';
import { timelineData } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="education" className="py-24 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0071e3] mb-3.5">
            04 / Learning journey
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            In progress, by <br />
            <span className="text-slate-400 font-normal italic">design.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-300 space-y-12 max-w-3xl">
          {timelineData.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Bullet */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                  item.isCurrent
                    ? 'border-[#0071e3] bg-[#0071e3] ring-4 ring-blue-100 shadow-xs'
                    : 'border-slate-400 bg-white group-hover:border-[#0071e3]'
                }`}
              />

              {/* Year & Score Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                  {item.yearRange}
                </span>
                {item.subLabel && (
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                      item.isCurrent
                        ? 'bg-blue-50 text-[#0071e3] border-blue-200'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    {item.subLabel}
                  </span>
                )}
                {item.statusBadge && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0071e3]">
                    {item.statusBadge}
                  </span>
                )}
              </div>

              {/* Title & Institution */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-1">
                {item.degreeOrTitle}
              </h3>
              <p className="text-sm font-medium text-slate-600 mb-2">
                {item.institution}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
