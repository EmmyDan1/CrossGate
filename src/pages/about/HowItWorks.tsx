import { motion } from "framer-motion";
import { howItWorksImages } from "../../data/image";

const steps = [
  {
    title: "Market Opportunity Identification",
    description:
      "Our proprietary market intelligence platform continuously analyzes over 200 economic indicators across 35 African and Nordic markets. We identify high-growth sectors, underserved niches, and optimal product-market fits through a combination of AI-driven analytics and on-the-ground market research.",
    detailed: [
      "Quarterly market potential assessments",
      "Demand forecasting for 12-18 month horizons",
      "Competitive landscape mapping",
      "Regulatory environment analysis",
    ],
    icon: "01",
    image: howItWorksImages.step5,
  },
  {
    title: "Strategic Partner Matching",
    description:
      "With our network of 1,200+ vetted partners across both regions, we employ a rigorous 5-stage verification process to connect you with ideal business counterparts. Our matching algorithm considers 15 compatibility factors including production capacity, quality standards, and business ethos.",
    detailed: [
      "Cultural compatibility assessment",
      "Capacity verification visits",
      "Quality control benchmarking",
      "Contract facilitation services",
    ],
    icon: "02",
    image: howItWorksImages.step2,
  },
  {
    title: "End-to-End Trade Execution",
    description:
      "Our trade concierge team handles all export/import documentation, compliance procedures, and logistics coordination. We maintain partnerships with 18 logistics providers and 7 financial institutions to ensure seamless transactions regardless of scale.",
    detailed: [
      "Document preparation and notarization",
      "Customs clearance coordination",
      "Incoterms optimization",
      "Payment security protocols",
    ],
    icon: "03",
    image: howItWorksImages.step3,
  },
  {
    title: "Growth Acceleration",
    description:
      "Post-transaction, our market entry specialists provide 12 months of strategic support including localization advisory, distribution channel development, and marketing adaptation services to ensure sustainable market penetration.",
    detailed: [
      "Market penetration analytics",
      "Local consumer insights",
      "Brand adaptation consulting",
      "Ongoing partnership mediation",
    ],
    icon: "04",
    image: howItWorksImages.step4,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-[#fdfaf5] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-[#4e3629] mb-2 leading-tight">
            Our Trade Enablement Process
          </h2>
          <p className="text-[#7a5c49]">
            "Streamlined cross-continental trade methodology"
          </p>
        </motion.div>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#876e4B] text-[#f4e9dc] flex items-center justify-center font-medium shadow-sm">
                {step.icon}
              </div>

              <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-[#f4e9dc]">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:flex-1">
                    <h3 className="text-xl font-semibold text-[#4e3629] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#5e4336] text-sm mb-3">
                      {step.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                      {step.detailed.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#876e4B] mr-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:w-1/3">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-40 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#876e4B] text-[#f4e9dc] rounded-lg p-8 text-center"
        >
          <h3 className="text-xl font-semibold mb-3">
            68% Faster Market Entry Than Industry Average
          </h3>
          <p className="text-sm mb-4">
            Our clients achieve 42% higher success rates through our data-driven
            matching and execution support.
          </p>
          <button className="px-5 py-2 text-sm bg-[#f4e9dc] text-[#4e3629] rounded font-medium hover:bg-white transition-colors">
            Download Methodology
          </button>
        </motion.div>

        <div className="mt-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#f4e9dc]">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-6">
                <h3 className="text-lg font-semibold text-[#4e3629] mb-2">
                  Process Overview
                </h3>
                <p className="text-[#5e4336] text-sm mb-4">
                  See how we helped a Norwegian firm establish Kenyan operations
                  in 4 months.
                </p>
                <button className="px-4 py-2 text-sm bg-[#876e4B] text-[#f4e9dc] rounded font-medium hover:bg-[#9a7f58] transition-colors flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Watch (12 min)
                </button>
              </div>
              <div className="md:w-1/2 bg-gray-100 min-h-[180px] flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-[#876e4B] text-[#f4e9dc] rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
