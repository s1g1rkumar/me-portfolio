import React, { useState, useEffect } from 'react';
import { Sparkles, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection?: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#060911]/90 backdrop-blur-md border-b border-cyan-500/30 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.8)]' 
        : 'bg-gradient-to-b from-[#060911] via-[#060911]/80 to-transparent py-5'
    }`}>
      {/* Top micro tech line */}
      <div className="hidden lg:flex justify-between items-center px-8 pb-1 text-[10px] font-tech text-cyan-400/60 border-b border-cyan-500/10 mb-2">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            SYS.STATUS: ONLINE
          </span>
          <span>NET: SECURE (TLS 1.3)</span>
          <span>REGION: AWS-AP-SOUTH-1</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-cyan-300">USER: RECRUITER_SESSION</span>
          <span className="text-amber-400">LOC: INDIA UTC+5:30 [{currentTime}]</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Player Rank Badge */}
          <button 
            onClick={() => onNavigate('hero')}
            className="flex items-center space-x-3 group focus:outline-none text-left"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-cyan-400/80 p-0.5 group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all bg-slate-900">
              <img 
                src={PERSONAL_INFO.avatar} 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top rounded-full group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-950 shadow-[0_0_8px_#10b981]" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-sm tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-tech">
                  LVL 99
                </span>
              </span>
              <span className="text-[10px] font-tech text-slate-400 group-hover:text-cyan-300/80 transition-colors">
                SENIOR FULL-STACK DEVELOPER
              </span>
            </div>
          </button>

          {/* Quick CTA Buttons */}
          <div className="flex items-center space-x-3">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="hidden sm:flex items-center space-x-1.5 px-3 py-2 text-xs font-tech tracking-wider text-cyan-300 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 clip-corner-sm transition-all"
              >
                <span>VIEW RESUME</span>
              </button>
            )}

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Sagar_Kumar_Rana_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center space-x-1.5 px-3 py-2 text-xs font-tech tracking-wider text-purple-300 bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/40 hover:border-purple-400 clip-corner-sm transition-all shadow-[0_0_10px_rgba(168,85,247,0.2)]"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-purple-300" />
              <span>DOWNLOAD CV</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="flex items-center space-x-2 px-4 py-2 text-xs font-display font-bold tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 clip-corner-sm transition-all duration-200 shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>START QUEST</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
