import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, CheckCircle2, ExternalLink, Layers, Calendar, Lock } from 'lucide-react';
import type { ProjectAchievement } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectAchievement | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md">
        
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-slate-900 border-2 border-cyan-400 clip-corner-tl-br shadow-[0_0_40px_rgba(0,240,255,0.4)] overflow-hidden max-h-[90vh] flex flex-col z-10"
        >
          <div className="hud-corner hud-corner-tl" />
          <div className="hud-corner hud-corner-tr" />
          <div className="hud-corner hud-corner-bl" />
          <div className="hud-corner hud-corner-br" />

          {/* Modal Header */}
          <div className="p-4 sm:p-6 bg-slate-950 border-b border-cyan-500/30 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-tech text-cyan-400 uppercase tracking-widest block">
                  ACHIEVEMENT BRIEF // {project.rarity} UNLOCKED
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded border border-transparent hover:border-cyan-500/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6">

            {/* Subtitle & Category */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-2.5 py-1 text-xs font-tech bg-purple-500/20 text-purple-300 border border-purple-500/40 clip-badge">
                  {project.category}
                </span>
                <span className="text-xs font-tech text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  UNLOCKED: {project.unlockedDate}
                </span>
              </div>
              <p className="text-sm font-sans text-slate-300 leading-relaxed">
                {project.fullDetails}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-tech text-cyan-400 tracking-wider uppercase mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                SYSTEM FEATURES &amp; ARCHITECTURAL HIGHLIGHTS:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, i) => (
                  <div key={i} className="p-3 bg-slate-950/80 border border-slate-800 clip-corner-sm flex items-start space-x-2 text-xs text-slate-300">
                    <span className="text-cyan-400 font-tech font-bold">#0{i+1}</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-tech text-cyan-400 tracking-wider uppercase mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                TECHNOLOGY GEAR:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 text-xs font-tech bg-cyan-950 text-cyan-300 border border-cyan-500/40 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-slate-950 border-t border-cyan-500/30 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs font-tech text-slate-400">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>ENTERPRISE CODEBASE IP PROTECTED</span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-tech rounded border border-slate-700"
              >
                CLOSE
              </button>
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-display font-bold text-xs tracking-wider clip-corner-sm flex items-center space-x-2 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                >
                  <span>LAUNCH LIVE SYSTEM</span>
                  <ExternalLink className="w-3.5 h-3.5 text-black" />
                </a>
              ) : (
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}?subject=Live%20Demo%20Request%20-%20${encodeURIComponent(project.title)}`}
                  className="px-5 py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-display font-bold text-xs tracking-wider clip-corner-sm flex items-center space-x-2 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                >
                  <span>REQUEST ARCHITECTURE DEMO</span>
                  <ExternalLink className="w-3.5 h-3.5 text-black" />
                </a>
              )}
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
