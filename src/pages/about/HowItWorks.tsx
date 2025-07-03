import { motion } from "framer-motion";
import { steps } from "../../data/howItWorksData";



const HowItWorksSection = () => {
  return (
    <section className="bg-[#fdfaf5] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto mt-12">
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
                      loading="lazy"
                      className="w-full h-40 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="mt-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#f4e9dc]">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-6">
                <h3 className="text-lg font-semibold text-[#4e3629] mb-2">
                  CrossGate Walkthrough
                </h3>
                <p className="text-[#5e4336] text-sm mb-4">
                  See how CrossGate bridges Nordic and African markets through
                  modern web technology.
                </p>
                <a
                  href="https://youtu.be/YOUR_VIDEO_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm bg-[#876e4B] text-[#f4e9dc] rounded font-medium hover:bg-[#9a7f58] transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
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
                  Watch Demo (12 min)
                </a>
              </div>
              <div className="md:w-1/2 aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="CrossGate Platform Demo"
                  loading="lazy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
