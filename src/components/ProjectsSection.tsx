import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Feed Hunger Now Revitalization",
      category: "Simulation Engineering",
      description: "Advanced multi-agent simulation system modeling asymmetric conflict scenarios with cultural and technological variables.",
      technologies: ["Python", "Mesa", "NetworkX", "Simulation"],
      status: "In Development",
      highlights: ["Multi-domain operational modeling", "Cultural factor integration", "Predictive analytics"]
    },
    {
      title: "R.A.M. - Reaching Alienated Minds Synthetic Psychological Environment",
      category: "MIT Reality Hack 2025",
      description: "Comprehensive optimization toolkit for industrial systems with focus on resource allocation and process efficiency.",
      technologies: ["MATLAB", "Gurobi", "Linear Programming"],
      status: "Completed",
      highlights: ["20% efficiency improvement", "Real-time optimization", "Scalable architecture"]
    },
    {
      title: "The Ignorant Schoolmaster: Adaptive Synthetic Classroom",
      category: "Simulation Engineering",
      description: "Prototyping an interactive classroom simulation that adapts to individual learning styles and goals.",
      technologies: ["Unity", "Python", "TensorFlow", "Computer Vision"],
      status: "Research Phase",
      highlights: ["VR - Compatible", "Cultural semiotics", "Automated analysis"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="cyber-grid absolute inset-0 opacity-15"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-orbitron font-black text-white mb-2">
            <span className="text-cyber-blue">[</span>PROJECTS<span className="text-cyber-blue">]</span>
          </h2>
          <div className="w-24 h-px bg-cyber-blue"></div>
          <p className="text-gray-400 mt-4">Selected works in simulation, optimization, and cultural analysis</p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/30 border border-cyber-blue/20 p-6 hover:border-cyber-blue/50 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-cyber-blue to-transparent transform rotate-45"></div>
              </div>

              <div className="relative z-10">
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    {project.title === "Feed Hunger Now Revitalization" ? (
                      <Link to="/fhn-revitalization" className="text-white font-bold text-lg group-hover:text-cyber-blue transition-colors duration-200">
                        {project.title}
                      </Link>
                    ) : (
                      <h3 className="text-white font-bold text-lg group-hover:text-cyber-blue transition-colors duration-200">
                        {project.title}
                      </h3>
                    )}
                    <span className={`text-xs px-2 py-1 ${
                      project.status === 'Completed' 
                        ? 'bg-matrix-green/20 text-matrix-green border border-matrix-green/30'
                        : project.status === 'In Development'
                        ? 'bg-terminal-amber/20 text-terminal-amber border border-terminal-amber/30'
                        : 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="text-cyber-blue text-sm uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-4">
                  <div className="text-cyber-blue text-xs uppercase tracking-wider mb-2">Key Features</div>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-center">
                        <span className="text-cyber-blue mr-2">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-black/50 border border-gray-700 text-gray-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-block p-4 bg-gray-900/50 border border-cyber-blue/20">
            <div className="text-cyber-blue text-sm uppercase tracking-wider mb-2">Research Focus</div>
            <p className="text-gray-300 text-sm max-w-2xl">
              Current research explores the convergence of operational systems, simulation engineering, 
              and cultural analysis methodologies within complex adaptive systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
