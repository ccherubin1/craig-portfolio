const ImpactValues = () => {
  const values = [
    {
      title: "Sustainability",
      icon: "🌱",
      description: "Environmental stewardship through regenerative practices"
    },
    {
      title: "Community Ownership",
      icon: "🤝",
      description: "Empowering local stakeholders as primary decision-makers"
    },
    {
      title: "Tech Accessibility",
      icon: "📱",
      description: "Democratizing advanced agricultural technologies"
    },
    {
      title: "Systems Thinking",
      icon: "🔄",
      description: "Holistic approach to interconnected challenges"
    },
    {
      title: "Resilience",
      icon: "💪",
      description: "Building adaptive capacity for future challenges"
    }
  ];

  const testimonials = [
    {
      quote: "Before this plan, our farm tools were everywhere. Now we have structure and efficiency that saves us hours every week.",
      author: "Maria Rodriguez",
      role: "Farm Coordinator"
    },
    {
      quote: "The training program opened our eyes to possibilities we never knew existed. We're not just farming - we're innovating.",
      author: "James Thompson",
      role: "Community Farmer"
    },
    {
      quote: "This systematic approach has transformed how we think about agriculture. It's not just about crops - it's about building a sustainable future.",
      author: "Dr. Sarah Chen",
      role: "Agricultural Specialist"
    }
  ];

  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#40a63a] mb-6">
            Impact & Values
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Core principles driving meaningful change in agricultural communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl mb-4 group-hover:animate-bounce">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-[#40a63a] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-[#40a63a] text-center mb-12">
            Community Voices
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#F8F8F8] to-white p-6 rounded-2xl border-l-4 border-[#58e551] hover:shadow-lg transition-shadow duration-300"
              >
                <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-[#40a63a]">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-[#58e551] mb-2">35%</div>
            <div className="text-sm text-gray-600">Efficiency Improvement</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-[#2196F3] mb-2">90%</div>
            <div className="text-sm text-gray-600">Skill Enhancement</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-[#40a63a] mb-2">60%</div>
            <div className="text-sm text-gray-600">Community Engagement</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-[#58e551] mb-2">25%</div>
            <div className="text-sm text-gray-600">Cost Reduction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactValues; 