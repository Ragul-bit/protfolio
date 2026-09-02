import React from 'react';
import { X, Award, ShieldCheck, CheckCircle2, Calendar, FileText, ExternalLink } from 'lucide-react';
import { Certification } from '../types';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certification,
  onClose,
}) => {
  if (!certification) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0071e3] to-blue-600 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md grid place-items-center border border-white/20">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 block">
                Verified Credential
              </span>
              <h4 className="text-base font-bold text-white tracking-tight">
                {certification.issuer}
              </h4>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-5">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {certification.title}
            </h3>
            <p className="text-sm font-semibold text-[#0071e3] mt-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              {certification.issuer}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-600">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Timeline / Status
              </span>
              <span className="font-semibold text-slate-800">{certification.date}</span>
            </div>

            {certification.credentialId && (
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1 flex items-center gap-1">
                  <FileText className="w-3 h-3" /> Credential Identifier
                </span>
                <span className="font-mono text-slate-800 font-medium break-all">
                  {certification.credentialId}
                </span>
              </div>
            )}
          </div>

          {certification.skillsLearned && certification.skillsLearned.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Core Domains & Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {certification.skillsLearned.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-800 border border-blue-100 rounded-lg text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#0071e3]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
            >
              Close
            </button>

            {certification.verificationLink ? (
              <a
                href={certification.verificationLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0071e3] hover:bg-blue-600 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Open Certificate Document</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs text-slate-400">Verified via issuer academy</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
