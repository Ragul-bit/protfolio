import React, { useState } from 'react';
import {
  ScanSearch,
  Gauge,
  LockKeyhole,
  Fingerprint,
  Play,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Sparkles,
  ArrowUpRight,
  Radio,
} from 'lucide-react';
import { motion } from 'motion/react';
import { projectsData } from '../data/portfolioData';
import keyboardMonitorImg from '../assets/keyboard_monitor.jpg';
import { CinematicReveal } from './CinematicReveal';

export const Projects: React.FC = () => {
  const featured = projectsData.find((p) => p.isFeatured) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => !p.isFeatured);

  const [selectedDemoIndex, setSelectedDemoIndex] = useState(0);
  const [copiedSql, setCopiedSql] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeQueryData, setActiveQueryData] = useState(
    featured.demoQueries ? featured.demoQueries[0] : null
  );

  const handleSelectQuery = (index: number) => {
    setSelectedDemoIndex(index);
    if (featured.demoQueries) {
      setActiveQueryData(featured.demoQueries[index]);
    }
  };

  const handleRunCustomPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;

    setIsGenerating(true);
    setTimeout(() => {
      // Simulate intelligent NL-to-SQL generation
      const generated = {
        prompt: customPrompt,
        sql: `-- Generated query for: "${customPrompt}"\nSELECT u.username, u.email, COUNT(l.id) AS login_attempts, MAX(l.timestamp) AS last_login\nFROM users u\nLEFT JOIN audit_logs l ON u.id = l.user_id\nWHERE u.status = 'active'\nGROUP BY u.id, u.username, u.email\nORDER BY last_login DESC\nLIMIT 10;`,
        resultSummary: 'Translated with Gemini Flash in 14ms · 4 rows matched',
        executionTimeMs: 14,
        rows: [
          { username: 'ragul_admin', email: 'ragul@dev.local', login_attempts: 14, last_login: '2026-08-28 10:14:02' },
          { username: 'sec_auditor', email: 'audit@corp.org', login_attempts: 6, last_login: '2026-08-28 09:30:15' },
          { username: 'dev_analyst', email: 'analyst@team.io', login_attempts: 3, last_login: '2026-08-27 18:45:00' },
        ],
      };
      setActiveQueryData(generated);
      setIsGenerating(false);
    }, 450);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-red-950/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <CinematicReveal showGlow glowColor="red">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-500/40 text-red-400 text-[11px] font-bold tracking-[0.14em] uppercase mb-4 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                03 / Selected work
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.05]">
                Projects with <br />
                <span className="text-red-500 font-normal italic">purpose.</span>
              </h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-xs md:text-right">
              Practical software engineering, defensive security tools, and intelligent systems.
            </p>
          </div>

          {/* Featured Project - Cyber sliding window Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-red-900/40 bg-[#0c0c12] shadow-2xl shadow-black/80 overflow-hidden mb-8 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left: Code Visual & Interactive Demo */}
              <div className="lg:col-span-6 bg-[#08080c] p-6 sm:p-8 flex flex-col justify-between text-white border-b lg:border-b-0 lg:border-r border-red-950/60 relative">
                {/* Header inside mockup */}
                <div className="flex items-center justify-between pb-4 border-b border-red-950/60">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></span>
                    </div>
                    <span className="font-mono text-xs text-zinc-400 ml-2">
                      natural-language-sql.py
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-800/80 px-2 py-0.5 rounded-md">
                    AI × Gemini Flash
                  </span>
                </div>

                {/* Interactive SQL Output Viewer */}
                <div className="my-5 space-y-4">
                  <div className="bg-[#050508] border border-red-950/80 rounded-xl p-4 font-mono text-xs text-zinc-300 relative group">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2.5 pb-2 border-b border-red-950/50">
                      <span className="flex items-center gap-1.5 text-red-400 font-semibold">
                        <Terminal className="w-3.5 h-3.5" />
                        Generated Query
                      </span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(activeQueryData?.sql || featured.codeSnippet?.sql || '')}
                        className="inline-flex items-center gap-1 text-[10px] text-zinc-400 hover:text-white bg-red-950/60 hover:bg-red-900/60 px-2 py-0.5 rounded transition-colors border border-red-800/40 cursor-pointer"
                        title="Copy SQL"
                      >
                        {copiedSql ? (
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

                    <pre className="text-red-300 text-xs font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                      {activeQueryData?.sql || featured.codeSnippet?.sql}
                    </pre>

                    <div className="mt-3 pt-2 border-t border-red-950/50 flex items-center justify-between text-[11px] text-zinc-400">
                      <span className="text-zinc-500">
                        {activeQueryData?.resultSummary || 'Sub-second schema translation'}
                      </span>
                      <span className="text-red-400 flex items-center gap-1 text-[10px] font-semibold">
                        <CheckCircle2 className="w-3 h-3" /> Ready
                      </span>
                    </div>
                  </div>

                  {/* Table Data Preview */}
                  {activeQueryData?.rows && (
                    <div className="bg-[#06060a] border border-red-950/60 rounded-xl p-3.5 text-xs font-mono">
                      <div className="text-[11px] text-zinc-400 mb-2 flex items-center justify-between">
                        <span className="text-zinc-400 font-medium">Execution Results Preview</span>
                        <span className="text-red-400 text-[10px]">
                          {activeQueryData.executionTimeMs}ms execution
                        </span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-[11px] text-zinc-300">
                          <thead>
                            <tr className="border-b border-red-950/60 text-zinc-400">
                              {Object.keys(activeQueryData.rows[0]).map((key) => (
                                <th key={key} className="py-1.5 px-2 font-medium capitalize">
                                  {key.replace('_', ' ')}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-red-950/30">
                            {activeQueryData.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-red-950/20">
                                {Object.values(row).map((val, cIdx) => (
                                  <td key={cIdx} className="py-1.5 px-2 text-zinc-300">
                                    {String(val)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sample Prompts Switcher */}
                <div className="space-y-2 pt-2 border-t border-red-950/60">
                  <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-red-500" />
                    Try prompt samples:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {featured.demoQueries?.map((demo, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectQuery(idx)}
                        className={`text-left text-[11px] px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          selectedDemoIndex === idx
                            ? 'bg-red-600/30 border-red-500/80 text-red-200 font-medium shadow-[0_0_8px_rgba(239,68,68,0.3)]'
                            : 'bg-[#121218] border-zinc-800 text-zinc-400 hover:text-white hover:border-red-900/50'
                        }`}
                      >
                        {demo.prompt.slice(0, 32)}...
                      </button>
                    ))}
                  </div>

                  {/* Custom Query Input */}
                  <form onSubmit={handleRunCustomPrompt} className="flex gap-2 mt-3 pt-2">
                    <input
                      type="text"
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                      placeholder="Ask in plain English (e.g. active users)..."
                      className="flex-1 px-3 py-1.5 bg-[#121218] border border-red-950/80 rounded-lg text-xs text-white placeholder:text-zinc-600 focus:outline-hidden focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                    />
                    <button
                      type="submit"
                      disabled={isGenerating || !customPrompt.trim()}
                      className="px-3.5 py-1.5 bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(239,68,68,0.4)] cursor-pointer"
                    >
                      <Play className="w-3 h-3" />
                      <span>Run</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Right: Project Description & Highlights */}
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between bg-[#0e0e14]">
                <div className="space-y-5">
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-red-500">
                      Featured project
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-2 leading-tight">
                      {featured.title}
                    </h3>
                  </div>

                  <p className="text-[15px] text-zinc-300 leading-relaxed">
                    {featured.description}
                  </p>

                  {/* Feature Bullet Points */}
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-zinc-300 font-medium">
                      <div className="w-6 h-6 rounded-md bg-red-950/70 text-red-400 grid place-items-center flex-shrink-0 border border-red-900/40">
                        <ScanSearch className="w-3.5 h-3.5" />
                      </div>
                      <span>Schema-aware dynamic database schema parsing</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-zinc-300 font-medium">
                      <div className="w-6 h-6 rounded-md bg-red-950/70 text-red-400 grid place-items-center flex-shrink-0 border border-red-900/40">
                        <Gauge className="w-3.5 h-3.5" />
                      </div>
                      <span>Sub-second translation and execution latency</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-zinc-300 font-medium">
                      <div className="w-6 h-6 rounded-md bg-red-950/70 text-red-400 grid place-items-center flex-shrink-0 border border-red-900/40">
                        <LockKeyhole className="w-3.5 h-3.5" />
                      </div>
                      <span>Dynamic prompt guardrails with safe read-only SQL policies</span>
                    </div>
                  </div>
                </div>

                {/* Technologies / Chips */}
                <div className="pt-6 mt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {featured.chips.map((chip) => (
                      <span
                        key={chip}
                        className="px-2.5 py-1 rounded-full bg-[#14141d] border border-red-950/80 text-xs font-medium text-zinc-300"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Ragul-bit"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 hover:underline"
                  >
                    <span>View code on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Projects Grid */}
          <div className="grid grid-cols-1 gap-5">
            {secondaryProjects.map((project, index) => {
              const projectImg =
                project.id === 'keylogger-monitor' || project.id === 'keyboard-monitor'
                  ? keyboardMonitorImg
                  : project.imageUrl;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 sm:p-8 rounded-3xl bg-[#0e0e14]/90 hover:bg-[#12121a] border border-zinc-800 hover:border-red-500/60 shadow-lg shadow-black/60 hover:-translate-y-1 transition-all duration-200 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Left: Project Details */}
                    <div className="lg:col-span-6 space-y-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-red-950/70 text-red-500 grid place-items-center shrink-0 group-hover:bg-red-900/60 border border-red-900/50 transition-colors shadow-sm">
                          <Fingerprint className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 block font-mono">
                            {project.category}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {project.description}
                      </p>

                      {project.points && project.points.length > 0 && (
                        <div className="space-y-1.5 pt-1">
                          {project.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Chips & Link */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-zinc-800">
                        <div className="flex flex-wrap gap-1.5">
                          {project.chips.map((chip) => (
                            <span
                              key={chip}
                              className="px-2.5 py-1 rounded-full bg-[#14141d] border border-red-950/70 text-xs font-medium text-zinc-300"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 hover:underline"
                          >
                            <span>View on GitHub</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: Project Image Preview */}
                    {projectImg && (
                      <div className="lg:col-span-6">
                        <div className="relative overflow-hidden rounded-2xl border border-red-900/40 shadow-2xl bg-black group/img">
                          <img
                            src={projectImg}
                            alt={project.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-56 sm:h-64 object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                          />

                          {/* Subtle ambient bottom gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                          {/* Top Red Telemetry Tag */}
                          <div className="absolute top-3 left-3 py-1 px-2.5 rounded-lg bg-black/80 backdrop-blur-md border border-red-500/50 text-[10px] font-mono text-red-400 flex items-center gap-1.5 shadow-md">
                            <Radio className="w-2.5 h-2.5 text-red-500 animate-pulse" />
                            <span>KEYLOGGER // OS HOOKS & TELEMETRY</span>
                          </div>

                          {/* Corner Brackets in Red */}
                          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-red-500" />
                          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-red-500" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </CinematicReveal>
      </div>
    </section>
  );
};
