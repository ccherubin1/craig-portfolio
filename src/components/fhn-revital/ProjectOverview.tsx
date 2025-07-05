const ProjectOverview = () => {
  return (
    <section id="project" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/basecamp.JPG" 
                alt="Smart Farm Technology" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#58e551]/20 to-[#2196F3]/20"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-[#58e551] text-white p-4 rounded-xl shadow-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-[#2196F3] text-white p-4 rounded-xl shadow-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-[#40a63a] mb-6">
                Project Overview
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  The Smart Farm Revitalization Initiative represents a comprehensive systems-based approach to 
                  transforming agricultural operations through the integration of <strong className="text-[#58e551]">
                  hybrid hydroponic and soil-based farming techniques</strong>. Our mission centers on creating 
                  sustainable, efficient farming systems that serve both environmental stewardship and community prosperity.
                </p>
                
                <p>
                  By leveraging <strong className="text-[#2196F3]">industrial engineering principles</strong>, 
                  operations research methodologies, and community-centered design thinking, this initiative 
                  addresses critical challenges in modern agriculture: resource optimization, labor efficiency, 
                  knowledge transfer, and community engagement. Each component is designed to work synergistically, 
                  creating a resilient agricultural ecosystem.
                </p>
                
                <p>
                  The project's impact extends beyond immediate operational improvements, establishing a 
                  <strong className="text-[#40a63a]"> replicable framework</strong> for agricultural 
                  revitalization that can be adapted across diverse farming communities. Through systematic 
                  planning, continuous optimization, and community empowerment, we're building pathways to 
                  food security and agricultural sustainability.
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#58e551] mb-2">4</div>
                <div className="text-sm text-gray-600">Core Components</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2196F3] mb-2">14</div>
                <div className="text-sm text-gray-600">Week Timeline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview; 