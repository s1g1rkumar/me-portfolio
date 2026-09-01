import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, CornerDownLeft, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, QUESTS_EXPERIENCE, ACHIEVEMENTS_PROJECTS, EDUCATION_DATA } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

interface CyberTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

interface LogEntry {
  id: string;
  type: 'input' | 'output' | 'system' | 'error' | 'success';
  text: string | React.ReactNode;
}

export const CyberTerminalModal: React.FC<CyberTerminalModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: 'init-1',
      type: 'system',
      text: 'CYBER-CLI v2.5 [SAGAR_OS] INITIALIZED. TYPE "help" TO SEE AVAILABLE COMMANDS.'
    },
    {
      id: 'init-2',
      type: 'output',
      text: 'USER: RECRUITER_SESSION // AUTHENTICATED (LEVEL 99 ACCESS)'
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    soundFX.playTerminalBeep();
    const cleanCmd = cmd.toLowerCase();

    // Add input to logs
    const newLogs: LogEntry[] = [
      ...logs,
      { id: Math.random().toString(), type: 'input', text: `$ ${cmd}` }
    ];

    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIdx(-1);
    setInputVal('');

    // Process commands
    switch (cleanCmd) {
      case 'help':
      case '?':
      case 'commands':
        newLogs.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-1 my-1 text-xs font-mono">
              <div className="text-cyan-400 font-bold">AVAILABLE CYBER COMMANDS:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
                <div><span className="text-amber-400 font-bold">bio</span> - View full developer bio &amp; stats</div>
                <div><span className="text-amber-400 font-bold">skills</span> - List core technical skills &amp; ranks</div>
                <div><span className="text-amber-400 font-bold">quests</span> - Display experience quest log</div>
                <div><span className="text-amber-400 font-bold">projects</span> - View enterprise project portfolio</div>
                <div><span className="text-amber-400 font-bold">education</span> - Show degrees &amp; academic history</div>
                <div><span className="text-amber-400 font-bold">contact</span> - Get direct email, phone &amp; GitHub</div>
                <div><span className="text-amber-400 font-bold">resume</span> - Download official resume PDF</div>
                <div><span className="text-amber-400 font-bold">sudo hire</span> - Direct contract &amp; party recruitment</div>
                <div><span className="text-amber-400 font-bold">matrix</span> - Toggle matrix holographic skin</div>
                <div><span className="text-amber-400 font-bold">clear</span> - Clear terminal window</div>
              </div>
            </div>
          )
        });
        break;

      case 'bio':
      case 'about':
        newLogs.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-1.5 text-xs font-mono border-l-2 border-cyan-400 pl-3 py-1 my-1">
              <div className="text-cyan-300 font-bold">{PERSONAL_INFO.name} // {PERSONAL_INFO.title}</div>
              <div className="text-slate-300">{PERSONAL_INFO.summary}</div>
              <div className="text-purple-300">EXP: {PERSONAL_INFO.stats.experienceYears} | CLIENT ORGS: {PERSONAL_INFO.stats.clientOrgs} | USERS: {PERSONAL_INFO.stats.usersServed}</div>
            </div>
          )
        });
        break;

      case 'skills':
        onNavigate('skills');
        newLogs.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-1 my-1 text-xs font-mono">
              <div className="text-cyan-400 font-bold">TOP TECHNICAL MASTERY (NAVIGATED TO SKILLS):</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300">
                {SKILLS_DATA.slice(0, 8).map(s => (
                  <div key={s.name} className="flex justify-between border-b border-slate-800 pb-0.5">
                    <span className="text-slate-200">{s.name}</span>
                    <span className="text-cyan-300 font-bold">{s.level}% [{s.rank}]</span>
                  </div>
                ))}
              </div>
            </div>
          )
        });
        break;

      case 'quests':
      case 'experience':
        onNavigate('experience');
        newLogs.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-2 my-1 text-xs font-mono">
              {QUESTS_EXPERIENCE.map(q => (
                <div key={q.id} className="p-2 bg-slate-950 border border-cyan-500/30 rounded">
                  <div className="text-cyan-300 font-bold">{q.title} @ {q.company}</div>
                  <div className="text-slate-400 text-[11px]">{q.period} | {q.workType}</div>
                  <div className="text-slate-300 mt-1">{q.summary}</div>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'projects':
        onNavigate('projects');
        newLogs.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-2 my-1 text-xs font-mono">
              {ACHIEVEMENTS_PROJECTS.map(p => (
                <div key={p.id} className="p-2 bg-slate-950 border border-purple-500/30 rounded">
                  <div className="text-purple-300 font-bold">{p.title}</div>
                  <div className="text-slate-300">{p.description}</div>
                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" rel="noreferrer" className="text-cyan-400 underline block mt-1">
                      Live URL: {p.demoUrl}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'education':
        onNavigate('education');
        newLogs.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-1.5 my-1 text-xs font-mono">
              {EDUCATION_DATA.map(edu => (
                <div key={edu.degree} className="p-2 bg-slate-950 border border-slate-800 rounded">
                  <div className="text-cyan-300 font-bold">{edu.degree}</div>
                  <div className="text-slate-400">{edu.institution} ({edu.period})</div>
                  <div className="text-amber-400 font-semibold">{edu.score}</div>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'contact':
        newLogs.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-1 my-1 text-xs font-mono text-cyan-300">
              <div>EMAIL: {PERSONAL_INFO.contact.email}</div>
              <div>PHONE: {PERSONAL_INFO.contact.phone}</div>
              <div>GITHUB: {PERSONAL_INFO.contact.github}</div>
              <div>LINKEDIN: {PERSONAL_INFO.contact.linkedin}</div>
            </div>
          )
        });
        break;

      case 'resume':
      case 'download':
        window.open(PERSONAL_INFO.resumeUrl, '_blank');
        newLogs.push({
          id: Math.random().toString(),
          type: 'success',
          text: 'INITIATING DOWNLOAD: Sagar_Kumar_Rana_Resume.pdf ... SUCCESS!'
        });
        break;

      case 'sudo hire':
      case 'sudo hire sagar':
        soundFX.playLevelUp();
        newLogs.push({
          id: Math.random().toString(),
          type: 'success',
          text: (
            <div className="p-3 bg-emerald-950/80 border border-emerald-400 rounded my-1 text-xs font-mono text-emerald-300 space-y-1">
              <div className="font-bold text-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                SUDO HIRE GRANTED! SAGAR KUMAR RANA JOINING YOUR PARTY.
              </div>
              <div>Direct email initiated: {PERSONAL_INFO.contact.email}</div>
              <div>Phone direct line: {PERSONAL_INFO.contact.phone}</div>
            </div>
          )
        });
        break;

      case 'matrix':
        setIsMatrixMode(prev => !prev);
        newLogs.push({
          id: Math.random().toString(),
          type: 'system',
          text: `HOLOGRAPHIC MATRIX SKIN TOGGLED: ${!isMatrixMode ? 'ENABLED (GREEN SCALES)' : 'DISABLED (CYBER CYAN)'}`
        });
        break;

      case 'clear':
      case 'cls':
        setLogs([]);
        return;

      default:
        newLogs.push({
          id: Math.random().toString(),
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for valid command list.`
        });
        break;
    }

    setLogs(newLogs);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIdx + 1 < commandHistory.length ? historyIdx + 1 : historyIdx;
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
        
        {/* Backdrop Click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className={`relative w-full max-w-3xl border-2 shadow-[0_0_50px_rgba(0,240,255,0.3)] clip-corner-tl-br flex flex-col overflow-hidden max-h-[85vh] z-10 ${
            isMatrixMode
              ? 'bg-[#021008] border-emerald-400 text-emerald-300 shadow-[0_0_50px_rgba(16,185,129,0.4)]'
              : 'bg-[#060b18] border-cyan-400 text-slate-200'
          }`}
        >
          <div className="hud-corner hud-corner-tl" />
          <div className="hud-corner hud-corner-tr" />
          <div className="hud-corner hud-corner-bl" />
          <div className="hud-corner hud-corner-br" />

          {/* Header */}
          <div className={`p-3 sm:p-4 flex items-center justify-between border-b ${
            isMatrixMode ? 'bg-[#031c0e] border-emerald-500/40' : 'bg-slate-950 border-cyan-500/30'
          }`}>
            <div className="flex items-center space-x-2">
              <TerminalIcon className={`w-4 h-4 ${isMatrixMode ? 'text-emerald-400' : 'text-cyan-400'}`} />
              <span className="font-tech text-xs font-bold tracking-widest uppercase">
                SAGAR_OS // INTERACTIVE RECRUITER CLI TERMINAL
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMatrixMode(!isMatrixMode)}
                className={`px-2 py-1 text-[10px] font-tech rounded border transition-colors ${
                  isMatrixMode
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50'
                    : 'bg-cyan-950 text-cyan-300 border-cyan-500/50 hover:bg-cyan-900'
                }`}
              >
                {isMatrixMode ? 'MATRIX: ON' : 'CYBER SKIN'}
              </button>

              <button
                onClick={onClose}
                className="p-1 text-slate-400 hover:text-white rounded border border-transparent hover:border-cyan-500/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Terminal Console Logs Body */}
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 font-mono text-xs space-y-2.5 min-h-[300px]">
            {logs.map((log) => (
              <div key={log.id} className="leading-relaxed">
                {log.type === 'input' && (
                  <span className={isMatrixMode ? 'text-emerald-300 font-bold' : 'text-cyan-300 font-bold'}>
                    {log.text}
                  </span>
                )}
                {log.type === 'output' && (
                  <div className="text-slate-300">{log.text}</div>
                )}
                {log.type === 'system' && (
                  <div className={isMatrixMode ? 'text-emerald-400 font-semibold' : 'text-amber-300 font-semibold'}>
                    [SYS] {log.text}
                  </div>
                )}
                {log.type === 'error' && (
                  <div className="text-rose-400 font-semibold">[ERR] {log.text}</div>
                )}
                {log.type === 'success' && (
                  <div className="text-emerald-400 font-semibold">[OK] {log.text}</div>
                )}
              </div>
            ))}
            <div ref={logsEndRef} />
          </div>

          {/* Input Prompt Form */}
          <form onSubmit={handleCommand} className={`p-3 border-t flex items-center space-x-2 ${
            isMatrixMode ? 'bg-[#031c0e] border-emerald-500/40' : 'bg-slate-950 border-cyan-500/30'
          }`}>
            <span className={isMatrixMode ? 'text-emerald-400 font-bold text-sm' : 'text-cyan-400 font-bold text-sm'}>
              &gt;
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type command ('help', 'bio', 'skills', 'projects', 'sudo hire')..."
              className={`w-full bg-transparent outline-none font-mono text-xs tracking-wide ${
                isMatrixMode ? 'text-emerald-300 placeholder-emerald-700' : 'text-cyan-200 placeholder-slate-600'
              }`}
            />
            <button
              type="submit"
              className={`p-1.5 rounded transition-colors ${
                isMatrixMode ? 'bg-emerald-950 text-emerald-400 hover:bg-emerald-900' : 'bg-cyan-950 text-cyan-400 hover:bg-cyan-900'
              }`}
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
