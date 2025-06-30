import { motion } from "framer-motion";
import { FiCheckCircle, FiPackage, FiFileText, FiTruck, FiGlobe } from "react-icons/fi";

const ServicesSection = () => {
  const services = [
    {
      icon: <FiPackage className="text-3xl text-[#876e4B]" />,
      title: "Export Readiness Support",
      description: "Comprehensive preparation for international trade success",
      details: [
        "Customized export training programs",
        "Packaging and labeling compliance review",
        "Product standardization for target markets",
        "Regulatory requirement analysis",
        "Market entry strategy development"
      ],
      benefits: [
        "Reduce export compliance risks by 70%",
        "Increase product acceptance rates",
        "Shorten time-to-market by 40%"
      ]
    },
    {
      icon: <FiFileText className="text-3xl text-[#876e4B]" />,
      title: "Documentation & Licensing",
      description: "End-to-end handling of complex trade paperwork",
      details: [
        "Certificate of Origin processing",
        "Export/Import license applications",
        "Customs clearance documentation",
        "Phytosanitary certificates",
        "Product-specific compliance filings"
      ],
      benefits: [
        "98% document accuracy guarantee",
        "Average 3-day processing time",
        "Dedicated compliance officer"
      ]
    },
    {
      icon: <FiTruck className="text-3xl text-[#876e4B]" />,
      title: "Logistics Coordination",
      description: "Seamless transportation from factory to final destination",
      details: [
        "Multimodal transport solutions",
        "Cold chain management for perishables",
        "Last-mile delivery coordination",
        "Real-time shipment tracking",
        "Customs brokerage services"
      ],
      benefits: [
        "30% average cost reduction",
        "99% on-time delivery rate",
        "Dedicated logistics manager"
      ]
    },
    {
      icon: <FiGlobe className="text-3xl text-[#876e4B]" />,
      title: "Cultural & Market Advisory",
      description: "Navigate business landscapes with local insight",
      details: [
        "Market-specific business etiquette training",
        "Consumer behavior analysis",
        "Negotiation style adaptation",
        "Local partnership vetting",
        "Regulatory change alerts"
      ],
      benefits: [
        "60% faster deal closures",
        "Cultural miscommunication prevention",
        "Localized marketing strategies"
      ]
    }
  ];

  const partners = [
    { name: "DHL", logo: "/logos/dhl.png" },
    { name: "Wise", logo: "/logos/wise.png" },
    { name: "Estonian Chamber", logo: "/logos/estonian-chamber.png" },
    { name: "Afreximbank", logo: "/logos/afreximbank.png" },
    { name: "Norfund", logo: "/logos/norfund.png" }
  ];

  return (
    <section className="bg-[#f9f5f0] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#4e3629] mb-3">
            Trade Is Just The Beginning
          </h2>
          <p className="text-[#7a5c49] max-w-3xl mx-auto">
            Our end-to-end services ensure your products move smoothly between Nordic and African markets
          </p>
        </motion.div>

        {/* Services Grid */}
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

              <div className="mb-6">
                <h4 className="font-medium text-[#876e4B] mb-3">Service Includes:</h4>
                <ul className="space-y-2">
                  {service.details.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheckCircle className="text-[#876e4B] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-[#5e4336] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-[#876e4B] mb-3">Key Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-[#5e4336] bg-[#f4e9dc]/30 px-3 py-1.5 rounded">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="px-8 py-3 bg-[#876e4B] text-[#f4e9dc] rounded-lg font-medium hover:bg-[#9a7f58] transition-colors">
            Request Custom Service Package
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;