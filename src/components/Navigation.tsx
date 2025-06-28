import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'cv', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-cyber-blue/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo/Name */}
          <div className="text-cyber-blue text-xl font-orbitron font-black tracking-wider group cursor-pointer">
            <span 
              className="glitch-text relative transition-all duration-300 hover:text-shadow-cyan hover:drop-shadow-[0_0_8px_rgba(0,101,175,0.6)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-b after:from-white after:to-cyber-blue after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100" 
              data-text="CRAIG.CHERUBIN"
            >
              CRAIG.CHERUBIN
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {['about', 'cv', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-orbitron font-bold uppercase tracking-wider transition-colors duration-200 hover:text-cyber-blue ${
                  activeSection === section
                    ? 'text-cyber-blue border-b border-cyber-blue'
                    : 'text-gray-400'
                }`}
              >
                {section === 'cv' ? 'CV' : section}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle scan line effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent animate-pulse"></div>
    </nav>
  );
};

export default Navigation;
