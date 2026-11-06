import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AISection } from './components/AISection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-darkBg text-slate-100 font-sans selection:bg-cyan-400 selection:text-slate-950">
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />
      <main>
        <HeroSection onOpenResumeModal={() => setResumeModalOpen(true)} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <AISection />
        <SkillsSection />
        <EducationSection />
        <ContactSection onOpenResumeModal={() => setResumeModalOpen(true)} />
      </main>
      <Footer />
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
