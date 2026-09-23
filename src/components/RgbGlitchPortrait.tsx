import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShieldAlert,
  Radio,
  Zap,
  Terminal,
  Activity,
  Code2,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import ragulImg from '../assets/IMG-20251030-WA0010.jpg';
import { personalInfo } from '../data/portfolioData';

interface RgbGlitchPortraitProps {
  onExploreProjects?: () => void;
}

export const RgbGlitchPortrait: React.FC<RgbGlitchPortraitProps> = () => {
  const [activeTab, setActiveTab] = useState<'portrait' | 'specs'>('portrait');
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText('npx ragul-gandhi');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-[440px]">
      {/* Outer Cyber Glow Frame */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600/30 via-red-900/20 to-red-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

      {/* Main Container Card */}
      <div
        className="relative overflow-hidden rounded-3xl bg-[#0d0d12] border border-red-500/30 shadow-2xl shadow-red-950/40 text-slate-100 flex flex-col backdrop-blur-xl hover:-translate-y-1 transition-transform duration-200"
      >
        {/* Cyber Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#08080c] border-b border-red-900/30">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/60"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/60"></span>
          </div>

          {/* Mode Switch Tabs */}
          <div className="flex items-center gap-1 bg-[#121218] p-0.5 rounded-lg border border-red-950/60">
            <button
              type="button"
              onClick={() => setActiveTab('portrait')}
              className={`px-3 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'portrait'
                  ? 'bg-red-600 text-white shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-3 h-3" />
              <span>Profile</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('specs')}
              className={`px-3 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'specs'
                  ? 'bg-red-600 text-white shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3 h-3" />
              <span>CLI Specs</span>
            </button>
          </div>

          <span className="text-[11px] font-mono text-red-400/80 font-bold hidden sm:inline">
            SEC_SYS
          </span>
        </div>

        {/* Tab 1: Clean, High-Fidelity Portrait Showcase */}
        {activeTab === 'portrait' && (
          <div className="relative flex flex-col p-4 bg-gradient-to-b from-[#0e0e14] to-[#08080c] select-none">
            {/* Top HUD Telemetry Ribbon */}
            <div className="flex items-center justify-between text-[11px] font-mono text-red-400/90 pb-2.5 px-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="tracking-wider uppercase font-bold text-xs text-red-300">
                  SYS_OPERATOR // RG-01
                </span>
              </div>
              <span className="text-zinc-400 font-medium">STATUS: OPERATIONAL</span>
            </div>

            {/* Clean Image Frame (No glitch layers or offsets) */}
            <div className="relative w-full h-[330px] sm:h-[350px] rounded-2xl overflow-hidden bg-black border border-red-500/40 shadow-inner group/photo">
              {/* Clear High-Resolution Image */}
              <img
                src={ragulImg}
                alt="Ragul Gandhi B - Developer & Cybersecurity Researcher"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/photo:scale-105"
              />

              {/* Subtle Ambient Vignette & Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Corner HUD Reticles / Brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red-500 pointer-events-none" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-500 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-500 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-500 pointer-events-none" />

              {/* Status Tag */}
              <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/80 backdrop-blur-md border border-red-500/50 text-[10px] font-mono text-red-400 flex items-center gap-1.5 shadow-md">
                <Radio className="w-3 h-3 text-red-500 animate-pulse" />
                <span>DEV // ACTIVE</span>
              </div>

              {/* Info Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-red-500/30 text-white text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-red-950/80 border border-red-500/40 grid place-items-center text-red-400">
                    <ShieldAlert className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-[11px] leading-tight text-white tracking-wide">
                      {personalInfo.name}
                    </div>
                    <div className="text-[10px] text-red-400 font-mono">
                      Cybersecurity & Full-Stack
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700">
                  CSE
                </span>
              </div>
            </div>

            {/* Audio Wave / Cyber Soundwave Graphic */}
            <div className="mt-3 px-1 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span className="text-zinc-400">FREQ_SYNC:</span>
                <span className="text-red-400 font-bold">144.02 MHz</span>
              </div>
              <div className="flex items-center gap-1">
                {[4, 10, 16, 7, 14, 20, 12, 18, 8, 15, 6, 12].map((height, i) => (
                  <span
                    key={i}
                    className="w-1 bg-gradient-to-t from-red-800 to-red-500 rounded-full"
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Terminal / Specs View (Accessible via CLI Specs Tab) */}
        {activeTab === 'specs' && (
          <div className="p-5 min-h-[350px] flex flex-col justify-between font-mono text-xs bg-[#0b0b10]">
            <div className="space-y-2 text-zinc-300">
              <div className="text-red-400/80 font-semibold">// System Developer Specification</div>
              <div>
                <span className="text-red-400 font-bold">export const</span>{' '}
                <span className="text-zinc-200 font-bold">developer</span> = &#123;
              </div>
              <div className="pl-4 space-y-1">
                <div>
                  <span className="text-zinc-500">name:</span>{' '}
                  <span className="text-red-300">"{personalInfo.name}"</span>,
                </div>
                <div>
                  <span className="text-zinc-500">role:</span>{' '}
                  <span className="text-red-400">"CSE / Full-Stack & Cyber"</span>,
                </div>
                <div>
                  <span className="text-zinc-500">focus:</span> [
                  <span className="text-amber-400">"Frontend UI"</span>,{' '}
                  <span className="text-red-400">"Cyber Defense"</span>],
                </div>
                <div>
                  <span className="text-zinc-500">theme:</span>{' '}
                  <span className="text-red-400">"Black & Red Cyber Aesthetic"</span>,
                </div>
                <div>
                  <span className="text-zinc-500">status:</span>{' '}
                  <span className="text-red-300">"{personalInfo.status}"</span>,
                </div>
                <div>
                  <span className="text-zinc-500">location:</span>{' '}
                  <span className="text-zinc-300">"{personalInfo.location}"</span>
                </div>
              </div>
              <div>&#125;;</div>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-2 font-sans pt-3">
              <div className="p-2 rounded-xl bg-[#14141c] border border-red-900/30">
                <div className="flex items-center gap-1.5 text-red-400 text-xs font-bold mb-0.5">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Frontend</span>
                </div>
                <p className="text-[10px] text-zinc-400 m-0">React, TypeScript, Tailwind</p>
              </div>
              <div className="p-2 rounded-xl bg-[#14141c] border border-red-900/30">
                <div className="flex items-center gap-1.5 text-red-500 text-xs font-bold mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Cyber Security</span>
                </div>
                <p className="text-[10px] text-zinc-400 m-0">Defense, Keylogger, Crypto</p>
              </div>
            </div>

            {/* CLI Bar */}
            <div className="pt-3 mt-3 border-t border-red-950/60 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-mono">
                <Terminal className="w-3.5 h-3.5 text-red-500" />
                <span className="text-zinc-200">npx ragul-gandhi</span>
              </div>
              <button
                type="button"
                onClick={handleCopyCommand}
                className="inline-flex items-center gap-1 text-[11px] text-zinc-300 hover:text-white bg-red-950/60 hover:bg-red-900/60 px-2 py-1 rounded-md transition-colors border border-red-800/40 cursor-pointer"
                title="Copy command"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-red-400" />
                    <span className="text-red-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Bottom Status Ribbon */}
        <div className="px-4 py-2.5 bg-[#07070a] border-t border-red-950/60 flex items-center justify-between text-[11px] text-zinc-400 font-sans">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
            <span className="text-zinc-300 font-medium">System Operator Verified</span>
          </div>
          <div className="flex items-center gap-3 font-mono">
            <span className="text-zinc-500">CBE // IN</span>
            <span className="text-red-500 font-bold animate-pulse">ONLINE</span>
          </div>
        </div>
      </div>

      {/* Floating Cyber Badge */}
      <div
        className="absolute -top-3 -right-2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#160b0e]/95 backdrop-blur-md border border-red-500/50 shadow-lg shadow-red-950/80 text-xs font-semibold text-red-300"
      >
        <Zap className="w-3.5 h-3.5 text-red-500" />
        <span>Full-Stack & Cyber</span>
      </div>
    </div>
  );
};
