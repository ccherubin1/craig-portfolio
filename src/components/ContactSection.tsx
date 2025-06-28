import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="cyber-grid absolute inset-0 opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-orbitron font-black text-white mb-2">
            <span className="text-cyber-blue">[</span>CONTACT<span className="text-cyber-blue">]</span>
          </h2>
          <div className="w-24 h-px bg-cyber-blue"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-cyber-blue text-lg uppercase tracking-wider mb-6 terminal-prompt">
                Communication Channels
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 bg-gray-900/30 border border-cyber-blue/20">
                  <div className="text-cyber-blue">@</div>
                  <div>
                    <div className="text-white text-sm">Email</div>
                    <a 
                      href="mailto:craig.cherubin@gmail.com" 
                      className="text-gray-400 text-sm hover:text-cyber-blue transition-colors duration-200"
                    >
                      craig.cherubin@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 bg-gray-900/30 border border-cyber-blue/20">
                  <div className="text-cyber-blue">§</div>
                  <div>
                    <div className="text-white text-sm">LinkedIn</div>
                    <a 
                      href="https://www.linkedin.com/in/craig-cherubin/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm hover:text-cyber-blue transition-colors duration-200"
                    >
                      https://www.linkedin.com/in/craig-cherubin/
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 bg-gray-900/30 border border-cyber-blue/20">
                  <div className="text-cyber-blue">#</div>
                  <div>
                    <div className="text-white text-sm">GitHub</div>
                    <a 
                      href="https://github.com/ccherubin1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm hover:text-cyber-blue transition-colors duration-200"
                    >
                      https://github.com/ccherubin1
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="text-cyber-blue text-lg uppercase tracking-wider mb-4">
                Availability
              </h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p className="terminal-prompt">Open to research collaborations</p>
                <p className="terminal-prompt">Available for consulting projects</p>
                <p className="terminal-prompt">Seeking internship opportunities</p>
              </div>
            </div>
          </div>

          {/* System Status Display */}
          <div className="space-y-6">
            <div className="bg-black/50 border border-cyber-blue/30 p-6">
              <div className="text-cyber-blue text-sm uppercase tracking-wider mb-4">System Status</div>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Research.Active</span>
                  <span className="text-matrix-green">ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Collaboration.Available</span>
                  <span className="text-matrix-green">ACTIVE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Response.Time</span>
                  <span className="text-terminal-amber">&lt; 24hrs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location.Status</span>
                  <span className="text-cyber-blue">UNIVERSITY OF CENTRAL FLORIDA</span>
                </div>
              </div>
            </div>

            {/* Quote/Philosophy */}
            <div className="bg-gray-900/50 border border-gray-700 p-6">
              <div className="text-gray-400 text-sm italic leading-relaxed">
                "The the purpose of a system is what it does. There is after all, no point in claiming that
                 the purpose of a system is to do what it constantly fails to do."
              </div>
              <div className="text-cyber-blue text-xs mt-3 text-right">— Stafford Beer</div>
            </div>

            {/* Terminal-style footer */}
            <div className="bg-black border border-cyber-blue/30 p-4 font-mono text-xs">
              {/* <div className="text-cyber-blue mb-2">$ whoami</div>
              <div className="text-gray-400">industrial.engineer@simulation.systems</div>*/}
              <div className="text-cyber-blue mt-2">$ currently</div>
              <div className="text-gray-400">researching virtual_statecraft...</div> 
              <div className="text-cyber-blue mt-2 animate-pulse">_</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
