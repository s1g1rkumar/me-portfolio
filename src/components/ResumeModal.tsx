import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, ExternalLink, Mail, Phone, Briefcase, GraduationCap, Award, Code2, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, QUESTS_EXPERIENCE, ACHIEVEMENTS_PROJECTS, EDUCATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
        
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-slate-900 border-2 border-cyan-400 clip-corner-tl-br shadow-[0_0_50px_rgba(0,240,255,0.4)] overflow-hidden max-h-[92vh] flex flex-col z-10 text-slate-200"
        >
          <div className="hud-corner hud-corner-tl" />
          <div className="hud-corner hud-corner-tr" />
          <div className="hud-corner hud-corner-bl" />
          <div className="hud-corner hud-corner-br" />

          {/* Header Bar */}
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-cyan-500/30 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-tech text-cyan-400 uppercase tracking-widest block">
                  VERIFIED CV DOCUMENT // SENIOR FULL-STACK DEVELOPER
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  SAGAR KUMAR RANA - RESUME
                </h3>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 bg-cyan-950 hover:bg-cyan-900 text-cyan-300 text-xs font-tech rounded border border-cyan-500/40 flex items-center space-x-1.5 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">PRINT / SAVE PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded border border-transparent hover:border-cyan-500/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Printable Document Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-xs sm:text-sm leading-relaxed print:text-black print:bg-white">
            
            {/* Document Title Header */}
            <div className="border-b border-cyan-500/30 pb-6 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                SAGAR KUMAR RANA
              </h1>
              <p className="text-cyan-400 font-tech font-semibold text-sm mt-1">
                Senior Full-Stack Developer | React.js · TypeScript · Node.js · Angular · AWS
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs font-tech text-slate-300">
                <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="flex items-center gap-1 hover:text-cyan-300">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.contact.email}
                </a>
                <span>•</span>
                <a href={`tel:${PERSONAL_INFO.contact.phone}`} className="flex items-center gap-1 hover:text-purple-300">
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  {PERSONAL_INFO.contact.phone}
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-cyan-300">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  github.com/s1g1rkumar
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-sky-300">
                  <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                  linkedin.com/in/sagar-kumarrana6664
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-tech text-cyan-400 uppercase tracking-widest font-bold border-b border-slate-800 pb-1.5 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-slate-300 font-sans leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Technical Skills Table */}
            <div>
              <h2 className="text-xs font-tech text-cyan-400 uppercase tracking-widest font-bold border-b border-slate-800 pb-1.5 mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-400" />
                TECHNICAL SKILLS
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
                <div className="p-3 bg-slate-950/80 border border-slate-800 clip-corner-sm">
                  <span className="font-tech text-cyan-400 font-bold block mb-1">Languages:</span>
                  <span className="text-slate-300 text-xs">JavaScript (ES6+), TypeScript, HTML5, CSS3</span>
                </div>
                <div className="p-3 bg-slate-950/80 border border-slate-800 clip-corner-sm">
                  <span className="font-tech text-cyan-400 font-bold block mb-1">Frontend:</span>
                  <span className="text-slate-300 text-xs">React.js, React Hooks, Redux Toolkit, Context API, Angular, React Hook Form, Material UI, Bootstrap, Tailwind CSS, Responsive Design</span>
                </div>
                <div className="p-3 bg-slate-950/80 border border-slate-800 clip-corner-sm">
                  <span className="font-tech text-purple-400 font-bold block mb-1">Backend:</span>
                  <span className="text-slate-300 text-xs">Node.js, Express.js, REST API Design, GraphQL, WebSockets, JWT Auth, Passport.js, RBAC</span>
                </div>
                <div className="p-3 bg-slate-950/80 border border-slate-800 clip-corner-sm">
                  <span className="font-tech text-purple-400 font-bold block mb-1">Databases:</span>
                  <span className="text-slate-300 text-xs">MongoDB (Mongoose, Atlas), MySQL, SQL Query Optimization</span>
                </div>
                <div className="p-3 bg-slate-950/80 border border-slate-800 clip-corner-sm">
                  <span className="font-tech text-emerald-400 font-bold block mb-1">Cloud &amp; DevOps:</span>
                  <span className="text-slate-300 text-xs">AWS (EC2, S3), Docker, GitHub Actions, CI/CD, Nginx, PM2</span>
                </div>
                <div className="p-3 bg-slate-950/80 border border-slate-800 clip-corner-sm">
                  <span className="font-tech text-amber-400 font-bold block mb-1">Tools &amp; Practices:</span>
                  <span className="text-slate-300 text-xs">Git/GitHub, Postman, Jira, Figma, Docker, Agile/Scrum</span>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-tech text-cyan-400 uppercase tracking-widest font-bold border-b border-slate-800 pb-1.5 mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                PROFESSIONAL EXPERIENCE
              </h2>

              <div className="space-y-6">
                {QUESTS_EXPERIENCE.map((exp) => (
                  <div key={exp.id} className="p-4 bg-slate-950/60 border border-slate-800/80 rounded">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div>
                        <h3 className="font-display font-bold text-base text-white">
                          {exp.title}
                        </h3>
                        <span className="font-tech text-cyan-400 font-semibold text-xs">
                          {exp.company} | {exp.location}
                        </span>
                      </div>
                      <span className="text-xs font-tech text-slate-400">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-2">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                          <span className="text-cyan-400 font-mono mt-0.5">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-3 pt-2 border-t border-slate-900 flex flex-wrap gap-1.5">
                      <span className="text-[10px] font-tech text-slate-400 mr-1">Stack:</span>
                      {exp.techStack.map(t => (
                        <span key={t} className="px-2 py-0.5 text-[10px] font-tech bg-slate-900 text-cyan-300 rounded border border-cyan-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h2 className="text-xs font-tech text-cyan-400 uppercase tracking-widest font-bold border-b border-slate-800 pb-1.5 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                KEY PROJECTS &amp; LIVE DEMOS
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ACHIEVEMENTS_PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-3.5 bg-slate-950/80 border border-slate-800 clip-corner-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-sm text-white">{proj.title}</h3>
                      {proj.demoUrl && (
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] font-tech px-2 py-0.5 bg-cyan-500/20 text-cyan-300 border border-cyan-400 rounded flex items-center gap-1 hover:bg-cyan-400 hover:text-black transition-colors"
                        >
                          <span>LIVE DEMO</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-slate-300">{proj.description}</p>
                    <div className="text-[10px] font-tech text-purple-300">
                      {proj.techStack.join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-tech text-cyan-400 uppercase tracking-widest font-bold border-b border-slate-800 pb-1.5 mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                EDUCATION
              </h2>

              <div className="space-y-3 font-sans">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.degree} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-slate-950/60 border border-slate-800 rounded">
                    <div>
                      <h3 className="font-display font-bold text-sm text-white">{edu.degree}</h3>
                      <p className="text-xs font-tech text-slate-400">{edu.institution}</p>
                    </div>
                    <div className="sm:text-right mt-1 sm:mt-0">
                      <span className="text-xs font-tech font-bold text-amber-400">{edu.score}</span>
                      <div className="text-[10px] font-tech text-slate-400">{edu.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-slate-950 border-t border-cyan-500/30 flex items-center justify-between">
            <span className="text-xs font-tech text-slate-400">
              Sagar Kumar Rana • Senior Full-Stack Developer
            </span>
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrint}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-tech clip-corner-sm flex items-center space-x-1.5 border border-slate-700"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span>PRINT CV</span>
              </button>
              <a
                href="/assets/resume sagar kumar rana .pdf"
                download="Sagar_Kumar_Rana_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-sky-400 text-black font-display font-bold text-xs tracking-wider clip-corner-sm flex items-center space-x-1.5 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              >
                <Download className="w-3.5 h-3.5 text-black" />
                <span>DOWNLOAD RESUME PDF</span>
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
