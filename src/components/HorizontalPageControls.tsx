import React from 'react';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface PageInfo {
  id: string;
  name: string;
  num: string;
  label: string;
}

interface HorizontalPageControlsProps {
  pages: PageInfo[];
  currentIndex: number;
  onSelectPage: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const HorizontalPageControls: React.FC<HorizontalPageControlsProps> = ({
  pages,
  currentIndex,
  onSelectPage,
  onPrev,
  onNext,
}) => {
  const currentPage = pages[currentIndex] || pages[0];
  const total = pages.length;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  const prevPage = !isFirst ? pages[currentIndex - 1] : null;
  const nextPage = !isLast ? pages[currentIndex + 1] : null;

  return (
    <>
      {/* Floating Edge Navigation Buttons (Desktop) */}
      <AnimatePresence>
        {!isFirst && (
          <motion.button
            type="button"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            whileHover={{ scale: 1.08, x: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPrev}
            id="edge-nav-prev"
            aria-label={`Previous page: ${prevPage?.name}`}
            className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 items-center gap-2 py-3 px-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-900/5 text-slate-700 hover:text-[#0071e3] hover:border-blue-300 transition-colors cursor-pointer group"
          >
            <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-[#0071e3] transition-transform group-hover:-translate-x-0.5" />
            <div className="text-left hidden xl:block pr-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                Prev
              </span>
              <span className="text-xs font-semibold text-slate-800 group-hover:text-[#0071e3] whitespace-nowrap">
                {prevPage?.name}
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLast && (
          <motion.button
            type="button"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            whileHover={{ scale: 1.08, x: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            id="edge-nav-next"
            aria-label={`Next page: ${nextPage?.name}`}
            className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 items-center gap-2 py-3 px-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-900/5 text-slate-700 hover:text-[#0071e3] hover:border-blue-300 transition-colors cursor-pointer group"
          >
            <div className="text-right hidden xl:block pl-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                Next
              </span>
              <span className="text-xs font-semibold text-slate-800 group-hover:text-[#0071e3] whitespace-nowrap">
                {nextPage?.name}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#0071e3] transition-transform group-hover:translate-x-0.5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Bottom Horizontal Control Center */}
      <nav aria-label="Page navigation" className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[92vw]">
        <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/10">
          {/* Previous Slide Button */}
          <button
            type="button"
            onClick={onPrev}
            disabled={isFirst}
            id="bottom-prev-btn"
            aria-label="Previous section"
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
              isFirst
                ? 'opacity-30 cursor-not-allowed text-slate-400 bg-slate-100/50'
                : 'text-slate-700 hover:text-[#0071e3] hover:bg-blue-50/80 bg-slate-50 border border-slate-200/70 hover:border-blue-200'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Center Info Pill */}
          <div className="flex items-center gap-2.5 px-3 py-1 bg-slate-50/90 border border-slate-200/60 rounded-xl">
            <span className="text-[11px] font-mono font-bold text-[#0071e3] bg-blue-50 px-1.5 py-0.5 rounded-md border border-blue-100/80">
              {currentPage.num} / 0{total}
            </span>
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-800 max-w-[140px] truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]"></span>
              <span className="truncate">{currentPage.name}</span>
            </div>
          </div>

          {/* Interactive Page Dots */}
          <div className="flex items-center gap-1.5 px-1.5">
            {pages.map((page, index) => {
              const active = index === currentIndex;
              return (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => onSelectPage(index)}
                  id={`page-dot-${page.id}`}
                  aria-label={`Jump to page ${page.num}: ${page.name}`}
                  title={`${page.num} - ${page.name}`}
                  className="group relative p-1 cursor-pointer focus:outline-hidden"
                >
                  <motion.div
                    animate={{
                      width: active ? 22 : 6,
                      backgroundColor: active ? '#0071e3' : '#cbd5e1',
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="h-1.5 rounded-full"
                  />
                  {/* Tooltip on hover */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-[10px] font-semibold rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-md">
                    {page.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Next Slide Button */}
          <button
            type="button"
            onClick={onNext}
            disabled={isLast}
            id="bottom-next-btn"
            aria-label="Next section"
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
              isLast
                ? 'opacity-30 cursor-not-allowed text-slate-400 bg-slate-100/50'
                : 'text-slate-700 hover:text-[#0071e3] hover:bg-blue-50/80 bg-slate-50 border border-slate-200/70 hover:border-blue-200'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Subtle Shortcut Hint for desktop */}
          <div className="hidden md:flex items-center gap-1 pl-1 text-[10px] font-medium text-slate-400 border-l border-slate-200/80">
            <span className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[9px] font-mono text-slate-500">
              ←
            </span>
            <span className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[9px] font-mono text-slate-500">
              →
            </span>
            <span className="text-[10px] text-slate-400 ml-0.5">Scroll</span>
          </div>
        </div>
      </nav>
    </>
  );
};
