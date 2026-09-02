import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, Send, Copy, Check, Sparkles, CheckCircle2, AlertCircle, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { useForm, ValidationError } from '@formspree/react';
import { personalInfo } from '../data/portfolioData';
import { CinematicReveal } from './CinematicReveal';

export const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm('mkjnbnae');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-slate-200/60 relative overflow-hidden bg-gradient-to-b from-[#f7f8fa] via-[#eef5fc]/60 to-[#e8f1fb]/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <CinematicReveal showGlow glowColor="blue">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Intro & Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-[#0071e3] text-[11px] font-bold tracking-[0.14em] uppercase mb-4 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] animate-pulse"></span>
                  06 / Contact
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[0.98]">
                  Let’s make <br />
                  <span className="text-slate-400 font-normal italic">something useful.</span>
                </h2>
              </div>

              <p className="text-[15px] text-slate-600 leading-relaxed">
                Open to internships, freelance collaborations, and conversations about thoughtful technology. If you have an idea or question, I’d love to hear it.
              </p>

              {/* Direct Channels */}
              <div className="space-y-3 pt-2">
                {/* Email Box with Copy Action */}
                <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs flex items-center justify-between group hover:border-blue-200 transition-all">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 text-slate-700 hover:text-[#0071e3] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0071e3] grid place-items-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 font-medium block">Email me directly</span>
                      <b className="text-xs sm:text-sm font-semibold text-slate-900 break-all">
                        {personalInfo.email}
                      </b>
                    </div>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-[#0071e3] bg-slate-50 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs flex items-center gap-3 text-slate-700 hover:text-[#0071e3] hover:border-blue-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0071e3] grid place-items-center flex-shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">Connect on LinkedIn</span>
                    <b className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#0071e3] transition-colors">
                      {personalInfo.linkedinHandle}
                    </b>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs flex items-center gap-3 text-slate-700 hover:text-[#0071e3] hover:border-blue-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0071e3] grid place-items-center flex-shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">Follow on GitHub</span>
                    <b className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#0071e3] transition-colors">
                      {personalInfo.githubHandle}
                    </b>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs flex items-center gap-3 text-slate-700 hover:text-pink-600 hover:border-pink-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 grid place-items-center flex-shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">Follow on Instagram</span>
                    <b className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-pink-600 transition-colors">
                      {personalInfo.instagramHandle}
                    </b>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-900/5">
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-5">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      Send a message
                    </h3>
                    <p className="text-xs text-slate-500 m-0">
                      Messages are delivered directly to my inbox via Formspree.
                    </p>
                  </div>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" /> Direct inbox
                  </span>
                </div>

                {state.succeeded ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 mx-auto grid place-items-center shadow-xs">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="space-y-1.5 max-w-sm mx-auto">
                      <h4 className="text-lg font-bold text-slate-900">Message Received!</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Thank you for reaching out. Your message has been sent successfully and I’ll get back to you as soon as possible.
                      </p>
                    </div>
                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={() => window.location.reload()}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Send another message</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    id="portfolio-contact-form"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="block space-y-1.5 text-xs font-semibold text-slate-700">
                        <span>Name</span>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Your name"
                          required
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-3 focus:ring-blue-100 transition-all"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-rose-600 font-medium" />
                      </label>

                      <label className="block space-y-1.5 text-xs font-semibold text-slate-700">
                        <span>Email</span>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          required
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-3 focus:ring-blue-100 transition-all"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-rose-600 font-medium" />
                      </label>
                    </div>

                    <label className="block space-y-1.5 text-xs font-semibold text-slate-700">
                      <span>Subject</span>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="What can I help with?"
                        required
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-3 focus:ring-blue-100 transition-all"
                      />
                      <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-xs text-rose-600 font-medium" />
                    </label>

                    <label className="block space-y-1.5 text-xs font-semibold text-slate-700">
                      <span>Message</span>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell me about your project, idea, or questions..."
                        required
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-3 focus:ring-blue-100 transition-all resize-y"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-rose-600 font-medium" />
                    </label>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0071e3] hover:bg-[#005ec2] disabled:opacity-60 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md shadow-blue-600/15 hover:shadow-lg cursor-pointer"
                      >
                        <span>{state.submitting ? 'Sending...' : 'Send message'}</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>

                      {state.errors && Object.keys(state.errors).length > 0 && (
                        <p className="text-xs font-medium flex items-center gap-1.5 text-rose-600">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <span>There was an error sending your message. Please try again.</span>
                        </p>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </CinematicReveal>
      </div>
    </section>
  );
};
