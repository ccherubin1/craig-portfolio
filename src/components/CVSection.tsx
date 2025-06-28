import React from 'react';
import { File } from 'lucide-react';

const CVSection = () => {
  const education = [
    {
      degree: "B.S. Industrial Engineering, Minor in Philosophy",
      institution: "University of Central Florida",
      period: "2020 - Present",
      focus: "Operations Research & Simulation"
    }
  ];

  const experience = [
    {
      title: "Smart Farm Research & Development Contributor",
      organization: "Feed Hunger Now",
      period: "January 2025 - Present",
      description: "Developing a real-time digital twin for Feed Hunger Now’s hydroponic/aeroponic farm using AI, IoT sensors, and cybernetic systems to optimize efficiency and sustainability"
    },
    {
      title: "Secretary & Founding Member",
      organization: "Valencia Philosophy Society",
      period: "August 2023 - April 2024",
      description: "Researched, authored, and presented philosophy lectures, facilitated discussions, and maintained a database of meeting minutes and 130+ member contacts."
    }
  ];

  const skills = {
    "Modeling & Simulation": ["MATLAB/Simulink", "Arena", "Unity", "Fusion 360" , "AnyLogic"],
    "Operations Research": ["Linear Programming", "Stochastic Processes", "Optimization", "Queueing Theory"],
    "Programming": ["Python", "R", "MATLAB", "C++", "SQL"],
    "Analysis Tools": ["Tableau", "Power BI", "Statistical Analysis", "Data Mining"]
  };

  return (
    <section id="cv" className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="cyber-grid absolute inset-0 opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-orbitron font-black text-white">
              <span className="text-cyber-blue">[</span>CV<span className="text-cyber-blue">]</span>
            </h2>
            
            <a 
              href="/craig-cherubin-cv.pdf" 
              download
              className="flex items-center gap-2 px-4 py-2 bg-transparent border border-cyber-blue text-cyber-blue text-sm font-orbitron font-bold uppercase tracking-wider transition-all duration-200 hover:bg-cyber-blue hover:text-white hover:shadow-[0_0_15px_rgba(0,101,175,0.3)]"
            >
              <File size={16} />
              Download
            </a>
          </div>
          <div className="w-24 h-px bg-cyber-blue"></div>
        </div>

        <div className="space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-cyber-blue text-lg uppercase tracking-wider mb-6 terminal-prompt">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-cyber-blue/30 pl-6 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-semibold">{edu.degree}</h4>
                    <span className="text-terminal-amber text-sm">{edu.period}</span>
                  </div>
                  <div className="text-gray-400 mb-1">{edu.institution}</div>
                  <div className="text-cyber-blue text-sm">{edu.focus}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-cyber-blue text-lg uppercase tracking-wider mb-6 terminal-prompt">
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-cyber-blue/30 pl-6 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-semibold">{exp.title}</h4>
                    <span className="text-terminal-amber text-sm">{exp.period}</span>
                  </div>
                  <div className="text-gray-400 mb-2">{exp.organization}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div>
            <h3 className="text-cyber-blue text-lg uppercase tracking-wider mb-6 terminal-prompt">
              Technical Capabilities
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-gray-900/50 border border-cyber-blue/20 p-4">
                  <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-cyber-blue/10 text-cyber-blue text-xs border border-cyber-blue/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
