import React from 'react';
import { X, Award, ShieldCheck, CheckCircle2, Calendar, FileText, ExternalLink } from 'lucide-react';
import { Certification } from '../types';

interface CertificateModalProps {
  certification?: Certification | null;
  cert?: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certification,
  cert,
  onClose,
}) => {
  const data = certification || cert;
  if (!data) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0e0e14] rounded-3xl shadow-2xl shadow-red-950/60 border border-red-500/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-red-950 via-red-800 to-red-900 px-6 py-5 text-white flex items-center justify-between border-b border-red-700/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md grid place-items-center border border-white/20 shadow-md">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-red-200 block font-mono">
                Verified Credential
              </span>
              <h4 className="text-base font-bold text-white tracking-tight">
                {data.issuer}
              </h4>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/40 hover:bg-red-600 text-white grid place-items-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-5">
          <div>
            <h3 className="text-xl font-extrabold text-white tracking-tight leading-snug">
              {data.title}
            </h3>
            <p className="text-sm font-semibold text-red-400 mt-1 flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              {data.issuer}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-zinc-300">
            <div className="p-3 rounded-xl bg-[#14141d] border border-red-950/70">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1 flex items-center gap-1 font-mono">
                <Calendar className="w-3 h-3" /> Timeline / Status
              </span>
              <span className="font-semibold text-white">{data.date}</span>
            </div>

            {data.credentialId && (
              <div className="p-3 rounded-xl bg-[#14141d] border border-red-950/70">
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1 flex items-center gap-1 font-mono">
                  <FileText className="w-3 h-3" /> Credential ID
                </span>
                <span className="font-mono text-zinc-200 font-medium break-all">
                  {data.credentialId}
                </span>
              </div>
            )}
          </div>

          {data.skillsLearned && data.skillsLearned.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-2 font-mono">
                Core Domains & Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {data.skillsLearned.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#181822] text-red-300 border border-red-900/50 rounded-lg text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-red-500" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white cursor-pointer"
            >
              Close
            </button>

            {data.verificationLink ? (
              <a
                href={data.verificationLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-red-950/80 transition-all cursor-pointer"
              >
                <span>Open Certificate Document</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs text-zinc-500 font-mono">Verified via issuer academy</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
