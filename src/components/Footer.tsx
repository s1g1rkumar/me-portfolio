import React from 'react';
import { ArrowUp, Terminal, Shield, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040711] border-t border-cyan-500/30 text-slate-400 py-12 font-tech text-xs overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00f0ff]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-900">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-5 text-left space-y-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-cyan-950 border border-cyan-400 flex items-center justify-center font-display font-black text-cyan-400 text-sm clip-corner-sm">
                SR
              </div>
              <span className="font-display font-bold text-slate-100 text-base tracking-wider">
                SAGAR KUMAR RANA
              </span>
            </div>
            <p className="text-slate-400 text-xs font-sans max-w-md">
              Senior Full-Stack Developer with 5+ years of experience architecting enterprise web systems, REST APIs, and scalable AWS cloud solutions.
            </p>
          </div>

          {/* Quick HUD Navigation */}
          <div className="md:col-span-4 flex flex-wrap gap-3">
            <button onClick={() => onNavigate('hero')} className="hover:text-cyan-400 transition-colors">
              [HERO SELECT]
            </button>
            <button onClick={() => onNavigate('skills')} className="hover:text-cyan-400 transition-colors">
              [SKILL TREE]
            </button>
            <button onClick={() => onNavigate('experience')} className="hover:text-cyan-400 transition-colors">
              [QUEST LOG]
            </button>
            <button onClick={() => onNavigate('projects')} className="hover:text-cyan-400 transition-colors">
              [ACHIEVEMENTS]
            </button>
            <button onClick={() => onNavigate('education')} className="hover:text-cyan-400 transition-colors">
              [CHAR SHEET]
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-cyan-400 transition-colors">
              [SAVE POINT]
            </button>
          </div>

          {/* Scroll To Top Button */}
          <div className="md:col-span-3 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="px-4 py-2.5 bg-slate-900 hover:bg-cyan-950 text-cyan-400 border border-cyan-500/40 hover:border-cyan-400 clip-corner-sm flex items-center space-x-2 transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)]"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Telemetry */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center space-x-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>&copy; {new Date().getFullYear()} Sagar Kumar Rana. Built with React, TypeScript, Tailwind CSS &amp; Framer Motion.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-cyan-400/80 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              CYBERPUNK RPG UI v2.5
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <Shield className="w-3 h-3 text-emerald-400" />
              ALL SYSTEMS OPTIMAL
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
