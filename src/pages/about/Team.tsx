import { motion } from "framer-motion";

const TeamSection = () => {
  return (
    <section className="bg-[#f9f5f0] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#4e3629] mb-6 mt-12">
            Our Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[#4e3629] text-lg leading-relaxed mb-4">
                Karagateway combines hands-on experience with deep cultural and market insight. 
                Supported by a network of advisors and specialists across compliance, logistics, 
                and trade, we provide professional, informed, and reliable solutions.
              </p>
              
              <p className="text-[#876e4B] leading-relaxed">
                Our team leverages extensive knowledge of global and African markets, trade regulations, 
                and business culture to support every stage of international trade — from sourcing and 
                logistics to partnerships, compliance, and market expansion. Karagateway acts as a 
                trusted partner, helping businesses navigate complex trade landscapes while connecting 
                Africa and the world seamlessly.
              </p>
            </div>
          </motion.div>

          {/* Visual Element - Team Representation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-playfair font-semibold text-[#4e3629] mb-6 text-center">
              Our Expertise
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Market Insight", color: "bg-[#4e3629]" },
                { label: "Compliance", color: "bg-[#876e4B]" },
                { label: "Logistics", color: "bg-[#4e3629]" },
                { label: "Trade Strategy", color: "bg-[#876e4B]" },
                { label: "Partnerships", color: "bg-[#4e3629]" },
                { label: "Market Expansion", color: "bg-[#876e4B]" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${item.color} rounded-lg p-4 text-center`}
                >
                  <span className="text-white text-sm font-medium">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Network Visualization */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center justify-center space-x-2 text-[#876e4B]">
                <div className="w-2 h-2 bg-[#4e3629] rounded-full"></div>
                <div className="w-2 h-2 bg-[#876e4B] rounded-full"></div>
                <div className="w-2 h-2 bg-[#4e3629] rounded-full"></div>
                <span className="text-sm ml-2">Global Network of Advisors & Specialists</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;