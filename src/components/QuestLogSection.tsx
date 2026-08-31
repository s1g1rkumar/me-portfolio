import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle2, Calendar, MapPin, ChevronDown, ChevronUp, Layers, Terminal } from 'lucide-react';
import { QUESTS_EXPERIENCE } from '../data/portfolioData';
import type { ExperienceQuest } from '../types';

export const QuestLogSection: React.FC = () => {
  const [expandedQuestId, setExpandedQuestId] = useState<string>('quest-lvl-3');

  const toggleExpand = (id: string) => {
    setExpandedQuestId(prev => prev === id ? '' : id);
  };

  return (
    <section id="experience" className="py-20 relative bg-[#060911] cyber-grid border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-cyan-500/20 pb-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-950/60 border border-cyan-400/40 clip-corner-sm text-cyan-300 text-xs font-tech mb-3">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>QUEST LOG // CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide">
            CAREER <span className="text-cyan-400 text-glow-cyan">QUEST LOG</span> &amp; MILESTONES
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl font-sans">
            Unlocked levels, enterprise missions, and full-stack battle experience from senior developer roles.
          </p>
        </div>

        {/* Quest Timeline Container */}
        <div className="relative pl-4 sm:pl-8 border-l-2 border-cyan-500/30 space-y-12">
          
          {QUESTS_EXPERIENCE.map((quest: ExperienceQuest, index: number) => {
            const isExpanded = expandedQuestId === quest.id;
            const isCurrentRole = quest.status === 'IN PROGRESS';

            return (
              <motion.div
                key={quest.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Level Badge Node */}
                <div className={`absolute -left-[27px] sm:-left-[43px] top-0 w-10 h-10 rounded-full flex items-center justify-center border-2 font-display font-black text-xs transition-all duration-300 ${
                  isCurrentRole
                    ? 'bg-cyan-500 text-black border-cyan-300 shadow-[0_0_20px_#00f0ff] animate-pulse'
                    : 'bg-slate-900 text-cyan-400 border-cyan-500/50 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                }`}>
                  L{quest.level}
                </div>

                {/* Main Quest Card */}
                <div className={`p-6 bg-slate-900/90 border clip-corner-tl-br transition-all duration-300 ${
                  isCurrentRole
                    ? 'border-cyan-400/80 shadow-[0_0_25px_rgba(0,240,255,0.2)]'
                    : 'border-slate-800 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,0,0,0.6)]'
                }`}>
                  <div className="hud-corner hud-corner-tl" />
                  <div className="hud-corner hud-corner-tr" />
                  <div className="hud-corner hud-corner-bl" />
                  <div className="hud-corner hud-corner-br" />

                  {/* Header Row */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                          LEVEL {quest.level}: {quest.title}
                        </span>
                        <span className={`text-[10px] font-tech font-bold px-2 py-0.5 rounded border ${
                          isCurrentRole 
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50' 
                            : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                        }`}>
                          {quest.status}
                        </span>
                        <span className="text-[10px] font-tech px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40">
                          {quest.rarity} QUEST
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-tech text-slate-400 mt-2">
                        <span className="text-cyan-400 font-bold flex items-center gap-1">
                          <Terminal className="w-3.5 h-3.5" />
                          {quest.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {quest.location} ({quest.workType})
                        </span>
                        <span className="flex items-center gap-1 text-slate-300">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          {quest.period}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleExpand(quest.id)}
                      className="px-4 py-2 bg-slate-800/80 hover:bg-slate-800 text-cyan-300 font-tech text-xs border border-cyan-500/30 clip-corner-sm flex items-center justify-between space-x-2 transition-colors self-start lg:self-auto"
                    >
                      <span>{isExpanded ? 'COLLAPSE BRIEF' : 'EXPAND QUEST BRIEF'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-sm text-slate-300 font-sans leading-relaxed">
                    {quest.summary}
                  </p>

                  {/* Expandable Quest Objectives & Accomplishments */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-4">
                          <div className="text-xs font-tech text-cyan-400 flex items-center space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                            <span>QUEST OBJECTIVES CLEARED:</span>
                          </div>

                          <ul className="space-y-2.5">
                            {quest.achievements.map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300 font-sans">
                                <span className="text-cyan-400 font-tech mt-0.5">►</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tech Stack Badges */}
                          <div className="pt-4 border-t border-slate-800/60">
                            <div className="text-[11px] font-tech text-slate-400 mb-2 flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5 text-purple-400" />
                              <span>GEAR &amp; STACK USED IN THIS LEVEL:</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {quest.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 text-[11px] font-tech bg-slate-950 text-cyan-300 border border-cyan-500/30 clip-corner-sm hover:border-cyan-400 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
