import { motion } from "framer-motion";
import {Link} from 'react-router-dom';
import Dhl from '../../public/logos/DHL.png';
import TradeMap from '../../public/logos/TradeMap.png';
import Afremix from '../../public/logos/Afreximbank.png'
import {
  FiPackage,
  FiFileText,
  FiTruck,
  FiGlobe,
} from "react-icons/fi";

const ServicesSection = () => {
  const services = [
    {
      icon: <FiPackage className="text-3xl text-[#876e4B]" />,
      title: "Export Readiness Support",
      description: "Comprehensive preparation for international trade success",
    },
    {
      icon: <FiFileText className="text-3xl text-[#876e4B]" />,
      title: "Documentation & Licensing",
      description: "End-to-end handling of complex trade paperwork",
    },
    {
      icon: <FiTruck className="text-3xl text-[#876e4B]" />,
      title: "Logistics Coordination",
      description: "Seamless transportation from factory to final destination",
    },
    {
      icon: <FiGlobe className="text-3xl text-[#876e4B]" />,
      title: "Cultural & Market Advisory",
      description: "Navigate business landscapes with local insight",

    },
  ];

  const partners = [
    { name: "DHL", logo: Dhl },
    { name: "Wise", logo: TradeMap },
    { name: "Afreximbank", logo: Afremix },

  ];

  return (
    <section className="bg-[#f9f5f0] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#4e3629] mb-3 mt-12">
            Trade Is Just The Beginning
          </h2>
          <p className="text-[#7a5c49] max-w-3xl mx-auto">
            Our end-to-end services ensure your products move smoothly between
            Nordic and African markets
          </p>
        </motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border-l-4 border-[#876e4B]"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="flex-shrink-0">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#4e3629] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#5e4336]">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl text-[#4e3629] font-medium mb-8">
            Trusted by Global Trade Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 object-contain opacity-80 hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link to="/contact">
            <button className="px-8 py-3 bg-[#876e4B] text-[#f4e9dc] rounded-lg font-medium hover:bg-[#9a7f58] transition-colors">
              Request Custom Service Package
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
