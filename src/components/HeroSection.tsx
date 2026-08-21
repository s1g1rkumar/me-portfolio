import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, ChevronRight, Terminal, Sparkles, Code2, Database, Cloud, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [taglineText, setTaglineText] = useState('');
  const fullTagline = "Architecting High-Performance Enterprise ERPs, Microservices & Scalable Cloud Solutions.";
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullTagline.length) {
        setTaglineText(fullTagline.slice(0, index));
        index++;
      } else {
        setIsTypingDone(true);
        clearInterval(timer);
      }
    }, 45);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden cyber-grid">
      {/* Ambient Sci-Fi Glows & Particles Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      {/* Cyber Grid Lines & Scanlines Overlay */}
      <div className="absolute inset-0 scanline-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* HUD Top Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-3 mb-8 border-b border-cyan-500/20 pb-4 text-xs font-tech text-cyan-400"
        >
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-slate-300">CHARACTER SELECT // PROFILE LOADED</span>
          </div>
          <div className="flex items-center space-x-4 text-slate-400 text-[11px]">
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
              CLASS: FULL-STACK DEVELOPER
            </span>
            <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300">
              EXP: 5+ YEARS
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Name & Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-950/60 border border-cyan-400/40 clip-corner-sm text-cyan-300 text-xs font-tech mb-4 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>SELECT PLAYER :: SAGAR KUMAR RANA</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-none">
                SAGAR KUMAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500 text-glow-cyan">RANA</span>
              </h1>

              <div className="mt-3 text-lg sm:text-xl font-tech text-cyan-300/90 font-medium tracking-wide">
                {PERSONAL_INFO.taglineSub}
              </div>
            </motion.div>

            {/* Animated Typewriter Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative p-4 bg-slate-900/80 border border-cyan-500/30 clip-corner-tl-br shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              <div className="hud-corner hud-corner-tl" />
              <div className="hud-corner hud-corner-tr" />
              <div className="hud-corner hud-corner-bl" />
              <div className="hud-corner hud-corner-br" />

              <div className="text-xs font-tech text-cyan-400/70 mb-1 flex items-center justify-between">
                <span>SYSTEM SUMMARY LOG</span>
                <span>STATUS: READY</span>
              </div>

              <p className="text-sm sm:text-base font-mono text-slate-300 min-h-[3rem] leading-relaxed">
                &gt; {taglineText}
                <span className={`inline-block w-2 h-4 bg-cyan-400 ml-1 ${isTypingDone ? 'animate-pulse' : ''}`} />
              </p>

              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans border-t border-slate-800 pt-3">
                {PERSONAL_INFO.summary}
              </p>
            </motion.div>

            {/* Quick Stat Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
            >
              <div className="p-2.5 bg-slate-900/60 border border-cyan-500/20 clip-corner-sm text-center">
                <div className="text-xs font-tech text-slate-400">EXPERIENCE</div>
                <div className="text-xl font-display font-bold text-cyan-400">4+ YRS</div>
              </div>
              <div className="p-2.5 bg-slate-900/60 border border-purple-500/20 clip-corner-sm text-center">
                <div className="text-xs font-tech text-slate-400">ENTERPRISE MODS</div>
                <div className="text-xl font-display font-bold text-purple-400">15+</div>
              </div>
              <div className="p-2.5 bg-slate-900/60 border border-emerald-500/20 clip-corner-sm text-center">
                <div className="text-xs font-tech text-slate-400">QUEST RATE</div>
                <div className="text-xl font-display font-bold text-emerald-400">100%</div>
              </div>
              <div className="p-2.5 bg-slate-900/60 border border-amber-500/20 clip-corner-sm text-center">
                <div className="text-xs font-tech text-slate-400">TECH STACK</div>
                <div className="text-xl font-display font-bold text-amber-400">FULL-STACK</div>
              </div>
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-sky-400 text-black font-display font-bold text-sm tracking-wider clip-corner-md shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center space-x-2 group"
              >
                <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
                <span>VIEW QUEST LOG (PROJECTS)</span>
                <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-cyan-300 font-display font-bold text-sm tracking-wider border border-cyan-400/50 hover:border-cyan-400 clip-corner-md shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-200 flex items-center space-x-2"
              >
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>SAVE CHECKPOINT</span>
              </button>

              <a
                href="mailto:sagar.rana.dev@gmail.com?subject=Portfolio%20Inquiry%20-%20Full-Stack%20Role"
                className="px-4 py-3.5 bg-slate-900/40 hover:bg-slate-800/60 text-slate-300 hover:text-white font-tech text-xs tracking-wider border border-slate-700 rounded transition-colors flex items-center space-x-2"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Sci-Fi Character Portrait HUD Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md p-6 bg-slate-900/90 border border-cyan-400/50 clip-corner-tl-br shadow-[0_0_30px_rgba(0,240,255,0.25)] group"
            >
              <div className="hud-corner hud-corner-tl" />
              <div className="hud-corner hud-corner-tr" />
              <div className="hud-corner hud-corner-bl" />
              <div className="hud-corner hud-corner-br" />

              {/* Holographic Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-cyan-500/30 mb-5">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-display text-xs font-bold tracking-wider text-cyan-300">
                    CHARACTER CARD // ID #91109
                  </span>
                </div>
                <span className="font-tech text-[10px] px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded">
                  STATUS: READY FOR HIRE
                </span>
              </div>

              {/* Avatar Holographic Frame */}
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mb-6 flex items-center justify-center">
                {/* Rotating Cyber Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute -inset-2 rounded-full border border-purple-500/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                
                {/* Central Avatar Visual Box */}
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-cyan-950 via-slate-900 to-purple-950 border-2 border-cyan-400 p-1 flex flex-col items-center justify-center text-center shadow-[0_0_25px_rgba(0,240,255,0.4)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-30 scanline-overlay" />
                  <div className="font-display font-black text-4xl text-cyan-300 text-glow-cyan mb-1">
                    SR
                  </div>
                  <span className="font-tech text-[10px] text-cyan-400 tracking-widest uppercase">
                    SENIOR DEV
                  </span>
                  <span className="font-mono text-[9px] text-slate-400 mt-1">
                    REACT · NODE · AWS
                  </span>
                </div>

                {/* Floating Level Badge */}
                <div className="absolute -bottom-2 px-3 py-1 bg-cyan-400 text-black font-display font-black text-xs tracking-widest clip-badge shadow-[0_0_15px_rgba(0,240,255,0.8)]">
                  LVL 99 MASTER
                </div>
              </div>

              {/* Character Attributes Snapshot */}
              <div className="space-y-3 font-tech text-xs border-t border-slate-800 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    Frontend Mastery
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden border border-cyan-500/30">
                      <div className="w-[98%] h-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
                    </div>
                    <span className="text-cyan-300 font-bold">98%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-purple-400" />
                    Backend &amp; SQL API
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden border border-purple-500/30">
                      <div className="w-[95%] h-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                    </div>
                    <span className="text-purple-300 font-bold">95%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Cloud className="w-3.5 h-3.5 text-emerald-400" />
                    AWS Cloud &amp; DevOps
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden border border-emerald-500/30">
                      <div className="w-[90%] h-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                    </div>
                    <span className="text-emerald-300 font-bold">90%</span>
                  </div>
                </div>
              </div>

              {/* Footer status text */}
              <div className="mt-4 pt-3 border-t border-cyan-500/20 text-center text-[10px] font-mono text-cyan-400/80 flex items-center justify-center gap-1.5">
                <Activity className="w-3 h-3 text-cyan-400 animate-spin" />
                <span>AGILE TEAM PLAYER // READY TO DEPLOY</span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
