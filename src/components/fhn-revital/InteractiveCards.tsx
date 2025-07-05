import { useState } from "react";

const InteractiveCards = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const cards = [
    {
      title: "Maintenance Plan",
      icon: "🔧",
      problem: "Inconsistent equipment maintenance leading to unexpected breakdowns and productivity loss",
      solution: "Systematic preventive maintenance scheduling with digital tracking and resource optimization",
      impact: "35% reduction in equipment downtime and 20% increase in operational efficiency"
    },
    {
      title: "Operations Plan",
      icon: "⚙️",
      problem: "Inefficient workflow coordination resulting in labor waste and resource misallocation",
      solution: "Operations research modeling for optimal task scheduling and resource distribution",
      impact: "25% improvement in labor productivity and 30% better resource utilization"
    },
    {
      title: "Education & Training Plan",
      icon: "📚",
      problem: "Knowledge gaps in modern farming techniques limiting adoption of best practices",
      solution: "Structured training programs combining theoretical learning with hands-on application",
      impact: "90% participant skill improvement and enhanced technology adoption rates"
    },
    {
      title: "Outreach & Engagement Plan",
      icon: "🤝",
      problem: "Limited community involvement and awareness of sustainable farming benefits",
      solution: "Multi-channel engagement strategy fostering community ownership and participation",
      impact: "60% increase in community participation and stronger local food networks"
    }
  ];

  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#40a63a] mb-6">
            Project Components
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Four interconnected initiatives working together to create a comprehensive agricultural transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                expandedCard === index ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#40a63a] mb-4 text-center">
                  {card.title}
                </h3>
                
                {expandedCard === index ? (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Problem:</h4>
                      <p className="text-sm text-gray-700">{card.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2196F3] mb-2">Solution:</h4>
                      <p className="text-sm text-gray-700">{card.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#58e551] mb-2">Impact:</h4>
                      <p className="text-sm text-gray-700">{card.impact}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600 text-center text-sm">
                    Click to explore details
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveCards; 