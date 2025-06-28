import React, { useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
    // Close mobile menu after navigation
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-cyber-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo/Name */}
          <div className="text-cyber-blue text-lg sm:text-xl font-orbitron font-black tracking-wider group cursor-pointer">
            <span 
              className="glitch-text relative transition-all duration-300 hover:text-shadow-cyan hover:drop-shadow-[0_0_8px_rgba(0,101,175,0.6)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-b after:from-white after:to-cyber-blue after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100" 
              data-text="CRAIG.CHERUBIN"
            >
              CRAIG.CHERUBIN
            </span>
          </div>

          {/* Desktop Navigation Links */}
          {!isMobile && (
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
          )}

          {/* Mobile Hamburger Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className="text-cyber-blue hover:text-white transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        {isMobile && (
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 space-y-4">
              {['about', 'cv', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left text-sm font-orbitron font-bold uppercase tracking-wider transition-colors duration-200 hover:text-cyber-blue py-2 px-4 rounded ${
                    activeSection === section
                      ? 'text-cyber-blue bg-cyber-blue/10 border-l-2 border-cyber-blue'
                      : 'text-gray-400 hover:bg-gray-800/50'
                  }`}
                >
                  {section === 'cv' ? 'CV' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Subtle scan line effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent animate-pulse"></div>
    </nav>
  );
};

export default Navigation;
