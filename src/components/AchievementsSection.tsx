import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS_PROJECTS } from '../data/portfolioData';
import type { ProjectAchievement } from '../types';
import { ProjectModal } from './ProjectModal';

export const AchievementsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectAchievement | null>(null);

  return (
    <section id="projects" className="py-20 relative bg-[#080c16] cyber-grid border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-cyan-500/20 pb-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-950/60 border border-cyan-400/40 clip-corner-sm text-cyan-300 text-xs font-tech mb-3">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>PROJECT SHOWCASE // UNLOCKED ACHIEVEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide">
              FEATURED <span className="text-cyan-400 text-glow-cyan">PROJECT ACHIEVEMENTS</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl font-sans">
              Production-ready enterprise ERPs, cloud document hubs, and high-throughput education management platforms built for clients &amp; organizations.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-right">
            <span className="text-xs font-tech px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 clip-badge">
              4 / 4 MAJOR ACHIEVEMENTS UNLOCKED (100%)
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS_PROJECTS.map((project: ProjectAchievement, index: number) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 clip-corner-tl-br transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] overflow-hidden flex flex-col justify-between"
              >
                <div className="hud-corner hud-corner-tl" />
                <div className="hud-corner hud-corner-tr" />
                <div className="hud-corner hud-corner-bl" />
                <div className="hud-corner hud-corner-br" />

                {/* Top Screenshot Card Area with img Tag */}
                <div>
                  <div className="relative w-full h-56 sm:h-64 bg-slate-950 overflow-hidden border-b border-cyan-500/20">
                    
                    {/* Image tag with exact screenshot path as requested */}
                    <img
                      src={project.imagePlaceholder}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Rarity & Unlocked Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className={`px-2.5 py-1 text-[10px] font-tech font-bold clip-badge ${
                        project.rarity === 'MYTHIC'
                          ? 'bg-amber-400 text-black shadow-[0_0_10px_#f59e0b]'
                          : project.rarity === 'LEGENDARY'
                          ? 'bg-purple-500 text-white shadow-[0_0_10px_#a855f7]'
                          : 'bg-cyan-500 text-black shadow-[0_0_10px_#00f0ff]'
                      }`}>
                        ★ {project.rarity}
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-tech bg-slate-950/80 text-cyan-300 border border-cyan-500/30 rounded">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Glow Reveal Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm p-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-5 py-2.5 bg-cyan-400 text-black font-display font-bold text-xs tracking-wider clip-corner-sm shadow-[0_0_20px_#00f0ff] hover:scale-105 transition-all flex items-center space-x-2"
                      >
                        <Sparkles className="w-4 h-4 text-black" />
                        <span>INSPECT ACHIEVEMENT BRIEF</span>
                      </button>
                    </div>

                  </div>

                  {/* Card Content Area */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-tech text-cyan-400/90 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="pt-2">
                      <div className="text-[10px] font-tech text-slate-400 mb-2 flex items-center gap-1">
                        <Layers className="w-3 h-3 text-purple-400" />
                        <span>STACK:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map(tech => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 text-[10px] font-tech bg-slate-950 text-cyan-300 border border-cyan-500/30 clip-corner-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-tech text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    ACHIEVEMENT UNLOCKED
                  </span>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-tech text-cyan-300 hover:text-cyan-200 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>VIEW DETAILS</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
