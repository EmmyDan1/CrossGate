import { memo } from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Discover Opportunities",
      description: "We research markets and identify viable products.",
      icon: "🔍"
    },
    {
      title: "Match & Verify",
      description: "We connect vetted suppliers and buyers across both continents.",
      icon: "🤝"
    },
    {
      title: "Support End-to-End",
      description: "From documents to shipping, we've got it covered.",
      icon: "🛣️"
    },
    {
      title: "Scale Across Regions",
      description: "Expand your market access with confidence.",
      icon: "📈"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-[#fdfaf5]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#4e3629] mb-4">
            Trade Without Borders
          </h2>
          <p className="text-[#7a5c49] text-lg">
            4-Step Journey to Cross-Continental Trade Success
          </p>
        </div>

        {/* 4-Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-[#e8d6c0]">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-[#f8f4eb] text-[#876e4B] flex items-center justify-center text-xl mr-4 flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#4e3629] mb-2">{step.title}</h3>
                  <p className="text-[#5e4336]">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(HowItWorksSection);