import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillTreeSection } from './components/SkillTreeSection';
import { QuestLogSection } from './components/QuestLogSection';
import { AchievementsSection } from './components/AchievementsSection';
import { CharacterSheetSection } from './components/CharacterSheetSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CyberTerminalModal } from './components/CyberTerminalModal';
import { ToastContainer } from './components/Toast';
import type { ToastMessage } from './components/Toast';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (type: 'success' | 'info' | 'reward', title: string, message: string) => {
    const id = Math.random().toString();
    setToasts(prev => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const handleDismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle terminal on ~ or ` or Cmd/Ctrl + K
      if (e.key === '`' || e.key === '~' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        setIsTerminalOpen(prev => {
          if (!prev) {
            showToast('info', 'CLI TERMINAL ACTIVE', 'Recruiter OS Terminal initialized. Type "help" for commands.');
          }
          return !prev;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#060911] text-slate-200 selection:bg-cyan-500 selection:text-black font-sans relative overflow-x-hidden">
      
      {/* Sci-Fi Global Scanlines Overlay */}
      <div className="fixed inset-0 scanline-overlay z-40 pointer-events-none opacity-40" />

      {/* Futuristic Header Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => {
          setIsTerminalOpen(true);
          showToast('info', 'CLI TERMINAL ACTIVE', 'Recruiter OS Terminal initialized. Type "help" for commands.');
        }}
      />

      {/* Main Single Page Sections */}
      <main>
        {/* Section 1: Hero / Character Select */}
        <HeroSection 
          onNavigate={scrollToSection} 
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Section 2: Skill Tree / Stats */}
        <SkillTreeSection />

        {/* Section 3: Quest Log / Experience Timeline */}
        <QuestLogSection />

        {/* Section 4: Achievements / Projects */}
        <AchievementsSection />

        {/* Section 5: Character Sheet / Education & Attributes */}
        <CharacterSheetSection />

        {/* Section 6: Contact / Save Game Checkpoint */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Resume View / Print Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Recruiter Cyber Terminal CLI Modal */}
      <CyberTerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onNavigate={scrollToSection}
      />

      {/* HUD Micro Toast Alerts Container */}
      <ToastContainer
        toasts={toasts}
        onDismiss={handleDismissToast}
      />

    </div>
  );
}

export default App;
