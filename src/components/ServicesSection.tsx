import { motion } from "framer-motion";

import { Button } from "./ui/Button";
import {
  FiGlobe,
  FiTruck,
  FiClipboard,
  FiBarChart2,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const ServicesSection = () => {
  const services = [
    {
      icon: <FiGlobe className="text-3xl text-[#876e4B]" />,
      title: "Trade Facilitation",
      description:
        "Export & import support, market entry guidance, and partnership connections",
    },
    {
      icon: <FiTruck className="text-3xl text-[#876e4B]" />,
      title: "Logistics & Supply Chain",
      description:
        "Shipping, customs, warehousing, and distribution management",
    },
    {
      icon: <FiClipboard className="text-3xl text-[#876e4B]" />,
      title: "Compliance & Regulatory Guidance",
      description:
        "Import/export regulations, certifications, and risk management",
    },
    {
      icon: <FiBarChart2 className="text-3xl text-[#876e4B]" />,
      title: "Market Access & Business Development",
      description: "Market research, buyer engagement, and strategic planning",
    },
    {
      icon: <FiTrendingUp className="text-3xl text-[#876e4B]" />,
      title: "Trade Advisory & Strategy",
      description:
        "Strategy development, operational optimization, and sustainable growth",
    },
    {
      icon: <FiUsers className="text-3xl text-[#876e4B]" />,
      title: "Investment & Partnership Facilitation",
      description:
        "Investment opportunities, joint ventures, and market expansion",
    },
  ];

  return (
    <section className="bg-[#f9f5f0] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#4e3629] mb-3">
            Trade is just the beginning
          </h2>
          <p className="text-[#7a5c49] max-w-3xl mx-auto">
            Our end-to-end services ensure your products move smoothly globally
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border-l-4 border-[#876e4B]"
            >
              <div className="flex items-start gap-5 mb-4">
                <div className="flex-shrink-0">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#4e3629]">
                  {service.title}
                </h3>
              </div>
              <p className="text-[#5e4336] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Button />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
