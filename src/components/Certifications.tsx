import React, { useState } from 'react';
import { BadgeCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { certificationsData } from '../data/portfolioData';
import { Certification } from '../types';
import { CertificateModal } from './CertificateModal';
import { CinematicReveal } from './CinematicReveal';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 md:py-32 border-t border-red-950/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <CinematicReveal showGlow glowColor="red">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-500/40 text-red-400 text-[11px] font-bold tracking-[0.14em] uppercase mb-4 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                05 / Certifications
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.05]">
                Proof of <span className="text-red-500 font-normal italic">progress.</span>
              </h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-xs md:text-right">
              Credentials and industry experiences marking achievements in cybersecurity and engineering.
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
                className="p-6 sm:p-7 rounded-2xl bg-[#0e0e14]/90 hover:bg-[#13131c] border border-zinc-800 hover:border-red-500/60 shadow-lg shadow-black/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group backdrop-blur-xs"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-950/70 text-red-500 grid place-items-center shrink-0 group-hover:bg-red-900/60 border border-red-900/50 transition-colors shadow-sm">
                    <BadgeCheck className="w-5 h-5" />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-red-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-zinc-400">
                      {cert.issuer}
                    </p>

                    {/* Metadata Chips */}
                    <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-zinc-400">
                      <span className="px-2.5 py-1 rounded-md bg-[#14141d] border border-red-950/80 font-medium">
                        {cert.date}
                      </span>
                      {cert.credentialId && (
                        <span className="px-2.5 py-1 rounded-md bg-[#14141d] border border-red-950/80 font-mono text-[10px] text-red-400">
                          {cert.credentialId}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors cursor-pointer group/btn"
                  >
                    <span>View certificate details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <span className="text-[10px] font-mono text-zinc-500">
                    Credential Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </CinematicReveal>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
};
