import React, { useState } from 'react';
import {
  ScanSearch,
  Gauge,
  LockKeyhole,
  Fingerprint,
  ShieldAlert,
  Play,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Sparkles,
  ArrowUpRight,
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
    <section id="projects" className="py-24 md:py-32 border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <CinematicReveal showGlow glowColor="cyan">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50/80 border border-cyan-100 text-cyan-700 text-[11px] font-bold tracking-[0.14em] uppercase mb-4 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                03 / Selected work
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
                Projects with <br />
                <span className="text-slate-400 font-normal italic">purpose.</span>
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-xs md:text-right">
              Small experiments, meaningful questions, and a lot of learning along the way.
            </p>
          </div>

        {/* Featured Project - Sliding Window Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-slate-200 bg-white/90 shadow-md shadow-slate-900/5 overflow-hidden mb-8 transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Code Visual & Interactive Demo */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-[#0b1329] to-[#0f172a] p-6 sm:p-8 flex flex-col justify-between text-white relative">
              {/* Header inside mockup */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="font-mono text-xs text-slate-400 ml-2">
                    natural-language-sql.py
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800/80 px-2 py-0.5 rounded-md">
                  AI × Gemini Flash
                </span>
              </div>

              {/* Interactive SQL Output Viewer */}
              <div className="my-5 space-y-4">
                <div className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-4 font-mono text-xs text-slate-300 relative group">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2.5 pb-2 border-b border-slate-800">
                    <span className="flex items-center gap-1.5 text-blue-400">
                      <Terminal className="w-3.5 h-3.5" />
                      Generated Query
                    </span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(activeQueryData?.sql || featured.codeSnippet?.sql || '')}
                      className="inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-2 py-0.5 rounded transition-colors"
                      title="Copy SQL"
                    >
                      {copiedSql ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="text-emerald-300 text-xs font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                    {activeQueryData?.sql || featured.codeSnippet?.sql}
                  </pre>

                  <div className="mt-3 pt-2 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="text-slate-500">
                      {activeQueryData?.resultSummary || 'Sub-second schema translation'}
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1 text-[10px] font-semibold">
                      <CheckCircle2 className="w-3 h-3" /> Ready
                    </span>
                  </div>
                </div>

                {/* Table Data Preview */}
                {activeQueryData?.rows && (
                  <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5 text-xs font-mono">
                    <div className="text-[11px] text-slate-400 mb-2 flex items-center justify-between">
                      <span className="text-slate-400 font-medium">Execution Results Preview</span>
                      <span className="text-blue-400 text-[10px]">
                        {activeQueryData.executionTimeMs}ms execution
                      </span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[11px] text-slate-300">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-400">
                            {Object.keys(activeQueryData.rows[0]).map((key) => (
                              <th key={key} className="py-1.5 px-2 font-medium capitalize">
                                {key.replace('_', ' ')}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                          {activeQueryData.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-900/40">
                              {Object.values(row).map((val, cIdx) => (
                                <td key={cIdx} className="py-1.5 px-2 text-slate-300">
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
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  Try prompt samples:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {featured.demoQueries?.map((demo, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectQuery(idx)}
                      className={`text-left text-[11px] px-2.5 py-1.5 rounded-lg border transition-all ${
                        selectedDemoIndex === idx
                          ? 'bg-blue-600/30 border-blue-500/80 text-blue-200 font-medium'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
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
                    className="flex-1 px-3 py-1.5 bg-slate-900/90 border border-slate-700/80 rounded-lg text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    disabled={isGenerating || !customPrompt.trim()}
                    className="px-3 py-1.5 bg-[#0071e3] hover:bg-blue-600 disabled:opacity-50 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <Play className="w-3 h-3" />
                    <span>Run</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Project Description & Highlights */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between bg-white">
              <div className="space-y-5">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0071e3]">
                    Featured project
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-2 leading-tight">
                    {featured.title}
                  </h3>
                </div>

                <p className="text-[15px] text-slate-600 leading-relaxed">
                  {featured.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-md bg-blue-50 text-[#0071e3] grid place-items-center flex-shrink-0">
                      <ScanSearch className="w-3.5 h-3.5" />
                    </div>
                    <span>Schema-aware dynamic database schema parsing</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-md bg-blue-50 text-[#0071e3] grid place-items-center flex-shrink-0">
                      <Gauge className="w-3.5 h-3.5" />
                    </div>
                    <span>Sub-second translation and execution latency</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-md bg-blue-50 text-[#0071e3] grid place-items-center flex-shrink-0">
                      <LockKeyhole className="w-3.5 h-3.5" />
                    </div>
                    <span>Dynamic prompt guardrails with safe read-only SQL policies</span>
                  </div>
                </div>
              </div>

              {/* Technologies / Chips */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {featured.chips.map((chip) => (
                    <span
                      key={chip}
                      className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-600"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Ragul-bit"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
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
                whileHover={{ y: -4 }}
                className="p-6 sm:p-8 rounded-3xl bg-white/90 hover:bg-white border border-slate-200/90 hover:border-blue-200 shadow-md shadow-slate-900/5 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Left: Project Details */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0071e3] grid place-items-center shrink-0 group-hover:bg-blue-100/80 transition-colors">
                        <Fingerprint className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0071e3] block">
                          {project.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    {project.points && project.points.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        {project.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] mt-1.5 shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Chips & Link */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                      <div className="flex flex-wrap gap-1.5">
                        {project.chips.map((chip) => (
                          <span
                            key={chip}
                            className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-xs font-medium text-slate-600"
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
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:underline"
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
                      <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md bg-slate-950">
                        <img
                          src={projectImg}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-52 sm:h-64 object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <div className="absolute top-3 left-3 py-1 px-2.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                          Keylogger Hooks & OS Telemetry
                        </div>
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
