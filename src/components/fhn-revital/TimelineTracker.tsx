const TimelineTracker = () => {
  const milestones = [
    {
      week: "Week 1-2",
      title: "Charter Drafting",
      icon: "📝",
      description: "Project scope definition and stakeholder alignment",
      category: "Research",
      color: "bg-[#58e551]"
    },
    {
      week: "Week 3-4",
      title: "System Analysis",
      icon: "🔍",
      description: "Current state assessment and gap analysis",
      category: "Research",
      color: "bg-[#58e551]"
    },
    {
      week: "Week 5-7",
      title: "OR Modeling",
      icon: "⚙️",
      description: "Mathematical model development and validation",
      category: "Modeling",
      color: "bg-[#2196F3]"
    },
    {
      week: "Week 8-9",
      title: "Plan Development",
      icon: "📋",
      description: "Comprehensive operational plan creation",
      category: "Modeling",
      color: "bg-[#2196F3]"
    },
    {
      week: "Week 10-12",
      title: "Website Development",
      icon: "💻",
      description: "Digital platform and documentation portal",
      category: "Web Dev",
      color: "bg-[#40a63a]"
    },
    {
      week: "Week 13-14",
      title: "Final Polish",
      icon: "✨",
      description: "Testing, refinement, and presentation preparation",
      category: "Final Polish",
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#40a63a] mb-6">
            Project Timeline
          </h2>
          <p className="text-xl text-gray-700">
            14-week structured approach to agricultural system transformation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#58e551] via-[#2196F3] to-[#40a63a] h-full rounded-full"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${milestone.color}`}>
                        {milestone.category}
                      </span>
                      <span className="text-sm text-gray-500">{milestone.week}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#40a63a] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl border-4 border-[#58e551]">
                    {milestone.icon}
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Image Placeholder */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-12 text-center shadow-lg border-2 border-dashed border-gray-300">
            <h3 className="text-2xl font-bold text-[#40a63a] mb-4">
              Detailed Project Timeline
            </h3>
            <p className="text-gray-600 mb-4">
              [Placeholder for detailed timeline image/chart]
            </p>
            <div className="text-sm text-gray-500">
              Upload your timeline visualization to replace this placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineTracker; 