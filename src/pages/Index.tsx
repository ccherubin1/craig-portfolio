
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import AboutSection from '../components/AboutSection';
import CVSection from '../components/CVSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import PasswordLock from '../components/PasswordLock';

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Check if user was previously authenticated in this session
    const wasUnlocked = sessionStorage.getItem('portfolio-unlocked');
    if (wasUnlocked === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    setIsUnlocked(true);
    sessionStorage.setItem('portfolio-unlocked', 'true');
  };

  if (!isUnlocked) {
    return <PasswordLock onUnlock={handleUnlock} />;
  }

  return (
    <div className="min-h-screen bg-black text-gray-300 font-courier overflow-x-hidden">
      <Navigation />
      <main>
        <AboutSection />
        <CVSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Subtle background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-terminal-amber/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
