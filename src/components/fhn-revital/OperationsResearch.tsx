const OperationsResearch = () => {
  const methods = [
    {
      problem: "Labor Scheduling Inefficiency",
      method: "Linear Programming",
      outcome: "40% reduction in idle time, optimized task allocation across 12-hour shifts",
      icon: "📊"
    },
    {
      problem: "Resource Allocation Challenges",
      method: "Integer Programming",
      outcome: "25% improvement in resource utilization, minimized waste generation",
      icon: "🎯"
    },
    {
      problem: "Supply Chain Bottlenecks",
      method: "Network Optimization",
      outcome: "60% reduction in transportation costs, streamlined delivery routes",
      icon: "🔗"
    }
  ];

  return (
    <section id="operations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#40a63a] mb-6">
            Optimizing Agricultural Systems with Operations Research
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Leveraging mathematical modeling and analytical methods to solve complex agricultural challenges
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-[#F8F8F8] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-[#2196F3] mb-2">
                  {method.method}
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2 text-sm uppercase tracking-wide">
                    Challenge
                  </h4>
                  <p className="text-gray-700">{method.problem}</p>
                </div>

                <div className="border-l-4 border-[#58e551] pl-4">
                  <h4 className="font-semibold text-[#58e551] mb-2 text-sm uppercase tracking-wide">
                    Outcome
                  </h4>
                  <p className="text-gray-700 font-medium">{method.outcome}</p>
                </div>
              </div>

              {/* Visual Element */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-center">
                  <div className="w-16 h-2 bg-gradient-to-r from-[#58e551] to-[#2196F3] rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for Flowchart */}
        <div className="mt-16 text-center">
          <div className="bg-gray-100 rounded-2xl p-12 border-2 border-dashed border-gray-300">
            <h3 className="text-2xl font-bold text-[#40a63a] mb-4">
              Operations Research Methodology Flowchart
            </h3>
            <p className="text-gray-600 mb-4">
              [Placeholder for flowchart image showing OR process flow]
            </p>
            <div className="text-sm text-gray-500">
              Upload your flowchart image to replace this placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsResearch; 