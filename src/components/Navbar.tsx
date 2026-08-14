import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection?: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
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
          <span className="text-cyan-300">USER: PLAYER_1</span>
          <span className="text-amber-400">LOC: INDIA UTC+5:30 [{currentTime}]</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Player Rank Badge */}
          <button 
            onClick={() => onNavigate('hero')}
            className="flex items-center space-x-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-cyan-950/80 border border-cyan-400/50 clip-corner-sm group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all">
              <span className="font-display font-black text-cyan-400 text-lg group-hover:scale-110 transition-transform">
                SR
              </span>
              <div className="hud-corner hud-corner-tl" />
              <div className="hud-corner hud-corner-br" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-sm tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-tech">
                  LVL 99
                </span>
              </span>
              <span className="text-[10px] font-tech text-slate-400 group-hover:text-cyan-300/80 transition-colors">
                FULL-STACK ARCHITECT
              </span>
            </div>
          </button>

          {/* Quick CTA Button */}
          <div className="flex items-center space-x-3">
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
