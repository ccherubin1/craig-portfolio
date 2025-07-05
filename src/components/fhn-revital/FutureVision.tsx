import { useState } from "react";

const FutureVision = () => {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);

  const innovations = [
    {
      title: "Digital Twin Systems",
      description: "Real-time farm monitoring and predictive analytics",
      icon: "🔮",
      gradient: "from-[#58e551] to-[#40a63a]"
    },
    {
      title: "Agricultural Drone Integration",
      description: "Automated crop monitoring and precision agriculture",
      icon: "🚁",
      gradient: "from-[#2196F3] to-[#58e551]"
    },
    {
      title: "Mobile Task Management",
      description: "AI-powered workforce optimization and scheduling",
      icon: "📱",
      gradient: "from-[#40a63a] to-[#2196F3]"
    },
    {
      title: "Closed-Loop Water Systems",
      description: "Zero-waste water recycling and nutrient management",
      icon: "💧",
      gradient: "from-[#58e551] to-[#2196F3]"
    },
    {
      title: "Community Marketplace",
      description: "Direct farmer-to-consumer digital commerce platform",
      icon: "🛒",
      gradient: "from-[#2196F3] to-[#40a63a]"
    }
  ];

  return (
    <section id="innovation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#40a63a] mb-6">
            Future Horizons
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Envisioning the next generation of agricultural innovation through technology integration and community empowerment
          </p>
          <div className="mt-4 text-sm text-[#2196F3] font-medium">
            UNDP × AgTech Innovation Pipeline
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredTile(index)}
              onMouseLeave={() => setHoveredTile(null)}
            >
              <div className={`
                bg-gradient-to-br ${innovation.gradient} 
                rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl 
                transition-all duration-500 transform hover:scale-105
                ${hoveredTile === index ? 'animate-pulse' : ''}
              `}>
                <div className="text-5xl mb-4 text-center opacity-90">
                  {innovation.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-center">
                  {innovation.title}
                </h3>
                
                <p className="text-center opacity-90 leading-relaxed">
                  {innovation.description}
                </p>

                {/* Hover Reveal */}
                <div className={`
                  absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center
                  transition-opacity duration-300
                  ${hoveredTile === index ? 'opacity-100' : 'opacity-0'}
                `}>
                  <div className="text-center text-white">
                    <div className="text-2xl mb-2">✨</div>
                    <div className="text-sm font-medium">Coming Soon</div>
                  </div>
                </div>
              </div>

              {/* Micro-animation dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full shadow-lg animate-bounce delay-100"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full shadow-lg animate-bounce delay-300"></div>
            </div>
          ))}
        </div>

        {/* Innovation Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#58e551]/10 to-[#2196F3]/10 rounded-2xl p-8 border border-[#58e551]/20">
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "The future of agriculture lies not just in what we grow, but in how we cultivate innovation, 
              community, and sustainable systems that nourish both land and people."
            </blockquote>
            <div className="text-[#40a63a] font-medium">
              — Vision Statement, Smart Farm Initiative
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision; 