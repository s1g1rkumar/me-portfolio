import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Download, Terminal as TerminalIcon, Volume2, VolumeX, Menu, X, FileText, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

interface NavbarProps {
  activeSection?: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume?: () => void;
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenResume, onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isMuted, setIsMuted] = useState(soundFX.getMuted());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleSound = () => {
    const muted = soundFX.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundFX.playClick();
    }
  };

  const navItems = [
    { id: 'hero', label: 'HERO SELECT' },
    { id: 'skills', label: 'SKILL TREE' },
    { id: 'experience', label: 'QUEST LOG' },
    { id: 'projects', label: 'ACHIEVEMENTS' },
    { id: 'education', label: 'CHAR SHEET' },
    { id: 'contact', label: 'SAVE POINT' }
  ];

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

  const handleMobileNav = (sectionId: string) => {
    soundFX.playClick();
    setIsMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#060911]/90 backdrop-blur-md border-b border-cyan-500/30 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.8)]' 
        : 'bg-gradient-to-b from-[#060911] via-[#060911]/80 to-transparent py-4 sm:py-5'
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
            className="flex items-center space-x-2.5 sm:space-x-3 group focus:outline-none text-left"
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-cyan-400/80 p-0.5 group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all bg-slate-900 shrink-0">
              <img 
                src={PERSONAL_INFO.avatar} 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top rounded-full group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-950 shadow-[0_0_8px_#10b981]" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-xs sm:text-sm tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                SAGAR KUMAR RANA
                <span className="text-[9px] sm:text-[10px] px-1.5 py-0.2 sm:py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-tech">
                  LVL 99
                </span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-tech text-slate-400 group-hover:text-cyan-300/80 transition-colors truncate max-w-[170px] sm:max-w-none">
                SENIOR FULL-STACK DEVELOPER
              </span>
            </div>
          </button>

          {/* Quick CTA Buttons & Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-2.5">
            {/* Audio Toggle Button */}
            <button
              onClick={handleToggleSound}
              className="p-2 text-slate-400 hover:text-cyan-300 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 clip-corner-sm transition-all"
              title={isMuted ? 'Enable Audio FX' : 'Mute Audio FX'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />}
            </button>

            {/* CLI Terminal Launch Button */}
            {onOpenTerminal && (
              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenTerminal();
                }}
                className="hidden sm:flex items-center space-x-1.5 px-3 py-2 text-xs font-tech tracking-wider text-amber-300 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-500/40 hover:border-amber-400 clip-corner-sm transition-all shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                title="Launch Recruiter Cyber Terminal CLI (~)"
              >
                <TerminalIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>CLI (~/K)</span>
              </button>
            )}

            {onOpenResume && (
              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenResume();
                }}
                className="hidden lg:flex items-center space-x-1.5 px-3 py-2 text-xs font-tech tracking-wider text-cyan-300 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 clip-corner-sm transition-all"
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
              onClick={() => {
                soundFX.playClick();
                onNavigate('contact');
              }}
              className="hidden sm:flex items-center space-x-2 px-3.5 sm:px-4 py-2 text-xs font-display font-bold tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 clip-corner-sm transition-all duration-200 shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>START QUEST</span>
            </button>

            {/* Mobile Cyber Menu Button */}
            <button
              onClick={() => {
                soundFX.playClick();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="lg:hidden p-2 text-cyan-400 bg-slate-900/90 border border-cyan-500/40 hover:border-cyan-400 clip-corner-sm transition-all"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Cyber Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#060911]/98 border-b border-cyan-500/40 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          >
            <div className="px-4 py-6 space-y-4 max-w-7xl mx-auto font-tech">
              
              {/* Status Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-cyan-300 font-bold">CYBER HUD MENU // ONLINE</span>
                </div>
                <span className="text-amber-400 text-[10px]">LVL 99 ARCHITECT</span>
              </div>

              {/* Navigation Items Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleMobileNav(item.id)}
                      className={`p-3 text-left clip-corner-sm border transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 font-bold shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                          : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300'
                      }`}
                    >
                      <span>[{item.label}]</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  );
                })}
              </div>

              {/* Mobile Quick Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {onOpenTerminal && (
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setIsMobileMenuOpen(false);
                      onOpenTerminal();
                    }}
                    className="p-3 bg-amber-950/60 border border-amber-500/40 text-amber-300 clip-corner-sm text-xs font-bold flex items-center justify-center space-x-2 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                  >
                    <TerminalIcon className="w-4 h-4 text-amber-400" />
                    <span>LAUNCH TERMINAL CLI (~/K)</span>
                  </button>
                )}

                {onOpenResume && (
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setIsMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="p-3 bg-slate-900 text-cyan-300 border border-cyan-500/40 clip-corner-sm text-xs font-bold flex items-center justify-center space-x-2"
                  >
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span>VIEW RESUME CV</span>
                  </button>
                )}

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Sagar_Kumar_Rana_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-purple-950/60 border border-purple-500/40 text-purple-300 clip-corner-sm text-xs font-bold flex items-center justify-center space-x-2 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                >
                  <Download className="w-4 h-4 text-purple-300" />
                  <span>DOWNLOAD RESUME PDF</span>
                </a>

                <button
                  onClick={() => handleMobileNav('contact')}
                  className="p-3 bg-gradient-to-r from-cyan-500 to-sky-400 text-black clip-corner-sm text-xs font-display font-bold flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>START QUEST / HIRE SAGAR</span>
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

