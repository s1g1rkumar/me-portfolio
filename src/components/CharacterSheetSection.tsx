import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award, Shield, Cpu, Check } from 'lucide-react';
import { EDUCATION_DATA, CHARACTER_ATTRIBUTES } from '../data/portfolioData';
import type { EducationItem, CharacterAttribute } from '../types';

export const CharacterSheetSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-[#060911] cyber-grid border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-cyan-500/20 pb-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-950/60 border border-cyan-400/40 clip-corner-sm text-cyan-300 text-xs font-tech mb-3">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>CHARACTER SHEET // ACADEMIC SCROLLS &amp; STATS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide">
            CHARACTER <span className="text-cyan-400 text-glow-cyan">SHEET &amp; EDUCATION</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl font-sans">
            Formal education degrees, academic achievements, and core developer attribute scores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Education Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-tech text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              ACADEMIC DEGREES &amp; QUALIFICATIONS:
            </h3>

            {EDUCATION_DATA.map((edu: EducationItem, index: number) => {
              const Icon = edu.icon === 'GraduationCap' ? GraduationCap : edu.icon === 'BookOpen' ? BookOpen : Award;

              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.12 }}
                  className="p-5 bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 clip-corner-tl-br transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                >
                  <div className="hud-corner hud-corner-tl" />
                  <div className="hud-corner hud-corner-tr" />
                  <div className="hud-corner hud-corner-bl" />
                  <div className="hud-corner hud-corner-br" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-800">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/40 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-xs font-tech text-cyan-400/90">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <span className="inline-block px-3 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/30 font-tech font-bold text-xs clip-badge">
                        {edu.score}
                      </span>
                      <div className="text-[10px] font-tech text-slate-400 mt-1">
                        {edu.period}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Character Attributes & Passive Perks (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-tech text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-4">
              <Cpu className="w-4 h-4 text-purple-400" />
              CORE ATTRIBUTES &amp; PASSIVE BUFFS:
            </h3>

            {/* Attributes List */}
            <div className="p-6 bg-slate-900/90 border border-purple-500/30 clip-corner-tl-br space-y-4 shadow-[0_0_25px_rgba(0,0,0,0.5)]">
              <div className="hud-corner hud-corner-tl" />
              <div className="hud-corner hud-corner-tr" />
              <div className="hud-corner hud-corner-bl" />
              <div className="hud-corner hud-corner-br" />

              <div className="text-xs font-tech text-purple-300 border-b border-slate-800 pb-2 flex justify-between">
                <span>ATTRIBUTE SPECS</span>
                <span>EFFICIENCY SCORE</span>
              </div>

              {CHARACTER_ATTRIBUTES.map((attr: CharacterAttribute) => (
                <div key={attr.name} className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-tech">
                    <span className="text-slate-200">{attr.name}</span>
                    <span className="text-purple-300 font-bold">{attr.score}/100</span>
                  </div>
                  <div className="h-2 w-full bg-slate-950 rounded-sm overflow-hidden p-0.5 border border-purple-500/30">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-sm shadow-[0_0_8px_#a855f7]"
                      style={{ width: `${attr.score}%` }}
                    />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    {attr.trait}
                  </div>
                </div>
              ))}
            </div>

            {/* Passive Perks Card */}
            <div className="p-5 bg-slate-900/90 border border-emerald-500/30 clip-corner-sm space-y-3">
              <div className="text-xs font-tech text-emerald-400 font-bold uppercase tracking-wider flex items-center space-x-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>UNLOCKED PASSIVE DEVELOPER PERKS</span>
              </div>

              <div className="space-y-2 text-xs font-sans text-slate-300">
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span><strong>Clean Architecture:</strong> Zero technical debt code splitting &amp; memoization.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span><strong>Agile Team Lead:</strong> Fast sprint delivery with Jira &amp; Gitflow PR reviews.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span><strong>AWS Infrastructure:</strong> EC2, S3, Docker, Nginx &amp; CI/CD deployment pipelines.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
