import React, { useState } from 'react';
import { BadgeCheck, ArrowUpRight, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { certificationsData } from '../data/portfolioData';
import { Certification } from '../types';
import { CertificateModal } from './CertificateModal';
import { CinematicReveal } from './CinematicReveal';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 md:py-32 border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <CinematicReveal showGlow glowColor="emerald">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/80 border border-emerald-200 text-emerald-700 text-[11px] font-bold tracking-[0.14em] uppercase mb-4 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                05 / Certifications
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
                Proof of <span className="text-slate-400 font-normal italic">progress.</span>
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-xs md:text-right">
              Credentials and experiences that mark the journey so far.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="p-6 sm:p-7 rounded-2xl bg-white/85 hover:bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xs"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0071e3] grid place-items-center shrink-0 group-hover:bg-blue-100/70 transition-colors shadow-xs">
                    <BadgeCheck className="w-5 h-5" />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#0071e3] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-500">
                      {cert.issuer}
                    </p>

                    {/* Metadata Chips */}
                    <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-slate-500">
                      <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/70 font-medium">
                        {cert.date}
                      </span>
                      {cert.credentialId && (
                        <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/70 font-mono text-[10px]">
                          {cert.credentialId}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:text-blue-700 transition-colors cursor-pointer group/link"
                  >
                    <span>View certificate details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </button>

                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Award className="w-3 h-3 text-blue-400" />
                    Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </CinematicReveal>
      </div>

      {/* Modal View */}
      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
