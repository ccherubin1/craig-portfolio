import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
      <div className="cyber-grid absolute inset-0 opacity-20"></div>
      <div className="scan-lines absolute inset-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-cyber-blue text-sm uppercase tracking-widest">
                Industrial Engineering Student
              </div>
              <h1 className="text-4xl md:text-5xl font-orbitron font-black text-white leading-tight">
                OPERATIONS RESEARCH &<br />
                <span className="text-cyber-blue">SIMULATION ENGINEERING</span>
              </h1>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="terminal-prompt">
                Specializing in the intersection of mathematical modeling, simulation systems, 
                and visual culture analysis within industrial contexts.
              </p>
              
              <p>
                Research interests span <span className="text-cyber-blue">Operations Research</span>, 
                advanced <span className="text-cyber-blue">Modeling & Simulation</span> frameworks, 
                and the cultural implications of technological systems.
              </p>
              
              <p>
                Exploring applications in <span className="text-terminal-amber">Virtual Statecraft</span> scenarios 
                and next-generation simulation engineering paradigms.
              </p>
            </div>

            {/* Key Areas */}
            <div className="space-y-3 pt-4">
              <div className="text-cyber-blue text-sm uppercase tracking-wider">Core Competencies</div>
              <div className="flex flex-wrap gap-3">
                {[
                  'Operations Research',
                  'Modeling & Simulation',
                  'Visual Cultures',
                  'Systems Engineering',
                  'Digital Twin',
                  'Cybernetics'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-xs uppercase tracking-wider"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Abstract Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-cyber-blue/20 to-transparent border border-cyber-blue/30 relative overflow-hidden">
              {/* Geometric Pattern */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-px bg-cyber-blue/50"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-cyber-blue/50"></div>
                <div className="absolute top-1/3 left-0 w-full h-px bg-cyber-blue/30"></div>
                <div className="absolute top-2/3 left-0 w-full h-px bg-cyber-blue/30"></div>
                <div className="absolute top-0 left-1/3 w-px h-full bg-cyber-blue/30"></div>
                <div className="absolute top-0 left-2/3 w-px h-full bg-cyber-blue/30"></div>
                
                {/* Center focal point */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-cyber-blue animate-pulse"></div>
                </div>
              </div>
              
              {/* Matrix-style falling characters */}
              <div className="absolute inset-0 overflow-hidden opacity-20">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-cyber-blue text-xs animate-matrix-rain"
                    style={{
                      left: `${20 + i * 15}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + i}s`
                    }}
                  >
                    01101001
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
