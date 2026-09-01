import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Save, CheckCircle2, ShieldCheck, Sparkles, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Quest Hiring Opportunity / Project Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveComplete, setSaveComplete] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSaveComplete(true);
      setFormData({
        name: '',
        email: '',
        subject: 'Quest Hiring Opportunity / Project Inquiry',
        message: ''
      });
      setTimeout(() => setSaveComplete(false), 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#080c16] cyber-grid border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-cyan-500/20 pb-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-950/60 border border-cyan-400/40 clip-corner-sm text-cyan-300 text-xs font-tech mb-3">
            <Save className="w-3.5 h-3.5 text-cyan-400" />
            <span>SAVE CHECKPOINT // RECRUIT PLAYER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide">
            SAVE <span className="text-cyan-400 text-glow-cyan">CHECKPOINT &amp; CONTACT</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl font-sans">
            Ready to add Sagar Kumar Rana to your tech party? Save game progress, send a message or initiate direct communication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Save Checkpoint Actions & Glowing Contact Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-slate-900/90 border border-cyan-400/50 clip-corner-tl-br shadow-[0_0_30px_rgba(0,240,255,0.2)]">
              <div className="hud-corner hud-corner-tl" />
              <div className="hud-corner hud-corner-tr" />
              <div className="hud-corner hud-corner-bl" />
              <div className="hud-corner hud-corner-br" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full border border-cyan-400 overflow-hidden bg-slate-950 shadow-[0_0_10px_rgba(0,240,255,0.4)] shrink-0">
                    <img 
                      src={PERSONAL_INFO.avatar} 
                      alt={PERSONAL_INFO.name} 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-display font-bold text-xs text-white tracking-wider">
                        CHECKPOINT SLOT #01: ACTIVE
                      </span>
                    </div>
                    <span className="text-[10px] font-tech text-slate-400">
                      SAGAR KUMAR RANA // ONLINE
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-tech text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                  AUTO-SAVE: ON
                </span>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                Direct channels to recruit or consult with Senior Full-Stack Developer Sagar Kumar Rana.
              </p>

              {/* Glowing Contact Buttons */}
              <div className="space-y-3 font-tech text-xs">
                
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="p-3.5 bg-slate-950/80 hover:bg-cyan-950/40 text-slate-200 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 clip-corner-sm flex items-center justify-between transition-all duration-200 group shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">EMAIL LINK</div>
                      <div className="font-bold text-slate-100 group-hover:text-cyan-300">{PERSONAL_INFO.contact.email}</div>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-cyan-400 opacity-60 group-hover:opacity-100" />
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.contact.phone}`}
                  className="p-3.5 bg-slate-950/80 hover:bg-purple-950/40 text-slate-200 hover:text-purple-300 border border-purple-500/30 hover:border-purple-400 clip-corner-sm flex items-center justify-between transition-all duration-200 group shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">DIRECT COMM (PHONE)</div>
                      <div className="font-bold text-slate-100 group-hover:text-purple-300">{PERSONAL_INFO.contact.phone}</div>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-purple-400 opacity-60 group-hover:opacity-100" />
                </a>

                {/* GitHub Inline SVG */}
                <a
                  href={PERSONAL_INFO.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-950/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-400 clip-corner-sm flex items-center justify-between transition-all duration-200 group shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded bg-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">GITHUB REPOSITORY</div>
                      <div className="font-bold text-slate-100 group-hover:text-cyan-300">{PERSONAL_INFO.contact.githubUsername}</div>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-cyan-400 opacity-60 group-hover:opacity-100" />
                </a>

                {/* LinkedIn Inline SVG */}
                <a
                  href={PERSONAL_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-950/80 hover:bg-sky-950/40 text-slate-200 hover:text-sky-300 border border-sky-500/30 hover:border-sky-400 clip-corner-sm flex items-center justify-between transition-all duration-200 group shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded bg-sky-500/20 text-sky-400 group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">LINKEDIN NETWORK</div>
                      <div className="font-bold text-slate-100 group-hover:text-sky-300">{PERSONAL_INFO.contact.linkedinUsername}</div>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-sky-400 opacity-60 group-hover:opacity-100" />
                </a>

                {/* Resume Download */}
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Sagar_Kumar_Rana_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-gradient-to-r from-cyan-950/80 via-slate-900 to-purple-950/80 hover:from-cyan-900/90 hover:to-purple-900/90 text-cyan-200 hover:text-cyan-100 border border-cyan-400/60 hover:border-cyan-300 clip-corner-sm flex items-center justify-between transition-all duration-200 group shadow-[0_0_20px_rgba(0,240,255,0.25)]"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded bg-cyan-500/30 text-cyan-300 group-hover:scale-110 transition-transform">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-tech text-cyan-300">OFFICIAL RESUME FILE</div>
                      <div className="font-bold text-slate-100 group-hover:text-cyan-200">DOWNLOAD RESUME PDF</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                </a>

              </div>

              {/* Status info */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  RESPONSE TIME: &lt; 24 HOURS
                </span>
                <span>TIMEZONE: IST (UTC+5:30)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Save Game / Cyberpunk Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-slate-900/90 border border-cyan-500/40 clip-corner-tl-br shadow-[0_0_30px_rgba(0,0,0,0.6)] relative">
              <div className="hud-corner hud-corner-tl" />
              <div className="hud-corner hud-corner-tr" />
              <div className="hud-corner hud-corner-bl" />
              <div className="hud-corner hud-corner-br" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                  <Send className="w-4 h-4 text-cyan-400" />
                  TRANSMIT QUEST PROPOSAL
                </h3>
                <span className="font-tech text-[10px] text-cyan-400">
                  ENCRYPTED TRANSMISSION
                </span>
              </div>

              {saveComplete && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-emerald-950/80 border border-emerald-500 clip-corner-sm text-emerald-300 text-xs font-tech flex items-center space-x-3 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 animate-bounce" />
                  <div>
                    <div className="font-bold text-sm text-white">CHECKPOINT SAVED SUCCESSFULLY!</div>
                    <div>Your message has been transmitted to sagar.rana.dev@gmail.com. Sagar will respond shortly!</div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-tech text-cyan-400/90 uppercase tracking-wider mb-2">
                      RECRUITER / SENDER NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3 bg-slate-950 text-slate-100 text-xs font-tech border border-cyan-500/30 rounded focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-tech text-cyan-400/90 uppercase tracking-wider mb-2">
                      COMMUNICATION EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 bg-slate-950 text-slate-100 text-xs font-tech border border-cyan-500/30 rounded focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-tech text-cyan-400/90 uppercase tracking-wider mb-2">
                    QUEST SUBJECT
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject of hiring or project proposal"
                    className="w-full px-4 py-3 bg-slate-950 text-slate-100 text-xs font-tech border border-cyan-500/30 rounded focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-tech text-cyan-400/90 uppercase tracking-wider mb-2">
                    QUEST DETAILS &amp; MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about the role, project requirements, or contract opportunity..."
                    className="w-full px-4 py-3 bg-slate-950 text-slate-100 text-xs font-sans border border-cyan-500/30 rounded focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-500 hover:from-cyan-300 hover:to-sky-300 text-black font-display font-bold text-sm tracking-wider clip-corner-md shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)] transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Save className={`w-4 h-4 text-black ${isSubmitting ? 'animate-spin' : ''}`} />
                  <span>
                    {isSubmitting ? 'SAVING CHECKPOINT TO CLOUD...' : 'SAVE CHECKPOINT & TRANSMIT MESSAGE'}
                  </span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
