import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Zap, Code2, Server, Database, Cloud, Wrench, FileCode, Sparkles, Award } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import type { SkillItem } from '../types';

export const SkillTreeSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [levelUpTriggered, setLevelUpTriggered] = useState(false);

  const categories = [
    { id: 'ALL', label: 'ALL SKILLS' },
    { id: 'Languages', label: 'LANGUAGES' },
    { id: 'Frontend', label: 'FRONTEND' },
    { id: 'Backend', label: 'BACKEND' },
    { id: 'Databases', label: 'DATABASES' },
    { id: 'Cloud & DevOps', label: 'CLOUD & DEVOPS' },
    { id: 'Tools', label: 'TOOLS' }
  ];

  const filteredSkills = selectedCategory === 'ALL'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(s => s.category === selectedCategory);

  const triggerLevelUpAnimation = () => {
    setLevelUpTriggered(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#a855f7', '#10b981', '#f59e0b']
    });
    setTimeout(() => setLevelUpTriggered(false), 2500);
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Languages': return FileCode;
      case 'Frontend': return Code2;
      case 'Backend': return Server;
      case 'Databases': return Database;
      case 'Cloud & DevOps': return Cloud;
      case 'Tools': return Wrench;
      default: return Zap;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-[#080c16] cyber-grid border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-cyan-500/20 pb-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-950/60 border border-cyan-400/40 clip-corner-sm text-cyan-300 text-xs font-tech mb-3">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>SKILL TREE // RPG XP MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide">
              CHARACTER <span className="text-cyan-400 text-glow-cyan">SKILL TREE</span> &amp; STATS
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl font-sans">
              Mastered technologies, frameworks, cloud architecture tools and database engines gained over 5+ years of enterprise engineering quests.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={triggerLevelUpAnimation}
              className={`px-5 py-2.5 text-xs font-display font-bold tracking-wider clip-corner-sm transition-all duration-300 flex items-center space-x-2 ${
                levelUpTriggered
                  ? 'bg-amber-400 text-black shadow-[0_0_25px_#f59e0b] scale-105'
                  : 'bg-cyan-950/80 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${levelUpTriggered ? 'animate-spin text-black' : 'text-cyan-400'}`} />
              <span>{levelUpTriggered ? '⚡ ALL SKILLS MAXED +100 XP!' : 'BOOST ALL SKILLS (+XP)'}</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-tech tracking-wider clip-corner-sm border transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills XP Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: SkillItem, index: number) => {
            const CatIcon = getCategoryIcon(skill.category);
            const levelValue = levelUpTriggered ? 100 : skill.level;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="p-4 bg-slate-900/80 border border-cyan-500/20 hover:border-cyan-400/60 clip-corner-sm transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] relative"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 group-hover:scale-110 transition-transform">
                      <CatIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-tech text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-tech font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                      {skill.rank || 'EXPERT'}
                    </span>
                  </div>
                </div>

                {/* Description */}
                {skill.description && (
                  <p className="text-xs text-slate-400 mb-3 font-sans line-clamp-2">
                    {skill.description}
                  </p>
                )}

                {/* Animated XP Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[10px] font-tech">
                    <span className="text-slate-400">{skill.xpLabel}</span>
                    <span className="text-cyan-300 font-bold">{levelValue}% XP</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-950 rounded-sm overflow-hidden p-0.5 border border-cyan-500/20">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${levelValue}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                      className={`h-full rounded-sm transition-all duration-500 ${
                        levelValue >= 95
                          ? 'bg-gradient-to-r from-cyan-500 to-sky-400 shadow-[0_0_10px_#00f0ff]'
                          : levelValue >= 90
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-400 shadow-[0_0_10px_#a855f7]'
                          : 'bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_10px_#10b981]'
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Tree Footer Note */}
        <div className="mt-12 p-4 bg-slate-950/60 border border-cyan-500/20 clip-corner-sm flex flex-wrap items-center justify-between text-xs font-tech text-slate-400">
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>FULL-STACK ARCHITECTURE PERK: MULTI-TENANT RBAC &amp; API OPTIMIZATION (+20% SPEED)</span>
          </div>
          <span className="text-cyan-400">CONTINUOUS LEARNING IN PROGRESS</span>
        </div>

      </div>
    </section>
  );
};
