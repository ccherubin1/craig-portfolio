const MeetDesigner = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#40a63a] mb-6">
              Meet the Designers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58e551] to-[#2196F3] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-[#58e551]/20 to-[#2196F3]/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👤</div>
                    <div className="text-gray-600">Professional Photo</div>
                    <div className="text-sm text-gray-500 mt-2">
                      [Upload headshot here]
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#58e551] rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#2196F3] rounded-full"></div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  As an <strong className="text-[#40a63a]">Industrial Engineering student</strong> with a passion for 
                  systems optimization and sustainable development, I specialize in applying operations research 
                  methodologies to real-world challenges in agriculture and community development.
                </p>
                
                <p>
                  My approach combines <strong className="text-[#58e551]">quantitative analysis</strong> with 
                  <strong className="text-[#2196F3]"> human-centered design principles</strong>, ensuring that 
                  technological solutions serve community needs while maintaining operational efficiency. This project 
                  represents the intersection of my academic focus on systems engineering and my commitment to 
                  sustainable agricultural practices.
                </p>
                
                <p>
                  Through this Smart Farm Revitalization Initiative, I demonstrate how industrial engineering principles 
                  can drive meaningful change in agricultural systems, creating pathways for <strong className="text-[#40a63a]">
                  scalable, community-owned solutions</strong> that address both immediate operational challenges and 
                  long-term sustainability goals.
                </p>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="bg-[#58e551] hover:bg-[#40a63a] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span>📄</span>
                  <span>Download Resume</span>
                </button>
                
                <button className="border-2 border-[#2196F3] text-[#2196F3] hover:bg-[#2196F3] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>🔗</span>
                  <span>View Portfolio</span>
                </button>
              </div>

              {/* Skills Tags */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
                  Core Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Operations Research",
                    "Systems Engineering",
                    "Project Management",
                    "Data Analysis",
                    "Process Optimization",
                    "Sustainable Design"
                  ].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#F8F8F8] text-[#40a63a] text-sm font-medium rounded-full border border-[#58e551]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Asset Placeholders Section */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-[#40a63a] mb-8 text-center">
            Project Assets & Documentation
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Project Charters", icon: "📋", description: "Comprehensive project documentation and scope definitions" },
              { title: "OR Model Files", icon: "📊", description: "Mathematical models and optimization algorithms" },
              { title: "Implementation Plans", icon: "🔧", description: "Detailed operational and maintenance procedures" },
              { title: "Training Materials", icon: "📚", description: "Educational resources and community guides" },
              { title: "Timeline Documents", icon: "📅", description: "Project schedules and milestone tracking" },
              { title: "Research Papers", icon: "📄", description: "Academic analysis and methodology documentation" }
            ].map((asset, index) => (
              <div key={index} className="bg-[#F8F8F8] rounded-xl p-6 text-center border-2 border-dashed border-gray-300 hover:border-[#58e551] transition-colors duration-300">
                <div className="text-3xl mb-3">{asset.icon}</div>
                <h4 className="font-semibold text-[#40a63a] mb-2">{asset.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{asset.description}</p>
                <div className="text-xs text-gray-500">
                  [Upload {asset.title.toLowerCase()} here]
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetDesigner; 