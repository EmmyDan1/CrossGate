import { motion } from "framer-motion";
import { serviceImages } from "../data/image";
import { Link } from "react-router-dom";

const services = [
  // {
  //   icon: "📦",
  //   title: "Export Readiness Support",
  //   description:
  //     "Training, packaging guidance, and regulatory compliance help to prepare you for international trade.",
  //   image: serviceImages.Export,
  // },
  {
    icon: "🧾",
    title: "Documentation & Licensing",
    description:
      "Certificates, permits, and customs documentation — simplified and handled with expertise.",
    image: serviceImages.Envelope,
  },
  {
    icon: "🚚",
    title: "Logistics Coordination",
    description:
      "From cold chain to last-mile delivery, we help ensure smooth and timely transportation.",
    image: serviceImages.Logistics,
  },
  {
    icon: "🧠",
    title: "Cultural & Market Advisory",
    description:
      "We help you understand local norms and build trust across African and European markets.",
    image: serviceImages.PeopleTalking,
  },
  // {
  //   icon: "📦",
  //   title: "Export Readiness Support",
  //   description:
  //     "Training, packaging guidance, and regulatory compliance help to prepare you for international trade.",
  //   image: serviceImages.Export,
  // },
  // {
  //   icon: "📦",
  //   title: "Export Readiness Support",
  //   description:
  //     "Training, packaging guidance, and regulatory compliance help to prepare you for international trade.",
  //   image: serviceImages.Export,
  // },
];

const OurServicesSection = () => {
  return (
    <section className="bg-secondary py-16 px-6 md:px-12 lg:px-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-[#4e3629] mb-2"
      >
        Our Services
      </motion.h2>
      <p className="text-[#7a5c49] italic text-sm md:text-base mb-10">
        "Trade is just the beginning"
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#807566] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col h-full"
          >
            <div className="h-40 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-5 flex-grow">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-xl">{service.icon}</span> {service.title}
              </h3>
              <p className="text-white text-xs md:text-sm opacity-90 line-clamp-3">
                {service.description}
              </p>
            </div>
            <Link to="/services">
              <div className="px-5 pb-4">
                <button className="text-xs font-medium text-white hover:text-[#f4e9dc] transition-colors">
                  Learn more →
                </button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <Link to="/services">
        <div className="mt-10">
          <button className="px-5 py-2.5 text-xs md:text-sm rounded-full bg-[#807566] text-white font-medium hover:bg-[#a1785c] transition-colors border border-transparent hover:border-[#f4e9dc]">
            View All Services
          </button>
        </div>
      </Link>
    </section>
  );
};

export default OurServicesSection;
