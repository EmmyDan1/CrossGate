import { motion } from "framer-motion";
import { serviceImages } from "../data/image";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Documentation & Licensing",
    description: "Certificates, Permits, Customs.",
    image: serviceImages.Envelope,
  },
  {
    title: "Logistics Coordination",
    description: "Cold chain, last mile, intermodal.",
    image: serviceImages.Logistics,
  },
  {
    title: "Cultural & Market Advisory",
    description: "B2B etiquette, pricing norms, etc.",
    image: serviceImages.PeopleTalking,
  },
  {
    title: "Export Readiness Support",
    description:
      "Training, packaging guidance, and regulatory compliance help to prepare you for international trade.",
    image: serviceImages.Export,
  },
];

const OurServicesSection = () => {
  return (
    <section className="bg-lightbrown py-16 px-6 md:px-12 lg:px-16 text-center">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-primary">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            viewport={{ once: true }}
            className="bg-lightbrown rounded-xl overflow-hidden shadow-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="aspect-video h-32 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 "
              />
            </div>

            <div className="flex-col text-center flex-grow mx-0">
              <h3 className="text-base md:text-lg font-semibold  mb-1  gap-2">
                {service.title}
              </h3>
              <p className=" text-xs md:text-sm line-clamp-3">
                {service.description}
              </p>
            </div>

            <div className="px-4 pb-3">
              <Link
                to="/services"
                className="text-xs font-medium  hover:text-[#b48650] transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <Link to="/services">
        <div className="mt-10">
          <button className="px-5 py-2.5 text-xs md:text-sm rounded-full bg-secondary text-primary font-medium hover:bg-[#f0d8c7] transition-colors border border-transparent hover:border-[#f4e9dc] shadow-xl">
            View All Services
          </button>
        </div>
      </Link>
    </section>
  );
};

export default OurServicesSection;
