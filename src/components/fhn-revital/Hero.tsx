const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8F8F8] via-white to-[#58e551]/5">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#58e551] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#2196F3] rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Geometric Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#40a63a" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/images/logo.png" 
            alt="Smart Farm Initiative Logo" 
            className="h-24 w-auto mx-auto mb-6 drop-shadow-lg"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#40a63a] mb-6 animate-fade-in delay-200">
          Smart Farm
          <span className="block text-[#2196F3]">Revitalization</span>
          <span className="block text-[#58e551]">Initiative</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-400">
          Transforming agricultural systems through <span className="text-[#58e551] font-semibold">operations research</span>, 
          <span className="text-[#2196F3] font-semibold"> community education</span>, and 
          <span className="text-[#40a63a] font-semibold"> sustainable innovation</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in delay-600">
          <a 
            href="#project" 
            className="bg-[#58e551] hover:bg-[#40a63a] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore the Project
          </a>
          <a 
            href="#about" 
            className="border-2 border-[#2196F3] text-[#2196F3] hover:bg-[#2196F3] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
          >
            Meet the Designers
          </a>
        </div>

        <div className="mt-16 text-sm text-gray-600 animate-fade-in delay-800">
          <p className="italic">Bridging humanitarian impact with cutting-edge agricultural technology</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#40a63a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 