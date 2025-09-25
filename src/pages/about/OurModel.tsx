import { motion } from "framer-motion";

import { Button } from "../../components/ui/Button";

const OurModelSection = () => {
  const modelItems = [
    {
      title: "Discover Opportunities",
      subtitle: "“The right trade starts with the right insight.”",
      description: "We research high-demand, high-potential products in both continents",
      features: [
        "Use market data, buyer needs, and on-ground intelligence",
        "Identify gaps, value-chain inefficiencies, and emerging trends",
        "Curate export-ready producers and credible buyers"
      ],
      example: "Finding Ghanaian cocoa co-ops ready for ethical sourcing deals in Europe",
      number: "1"
    },
    {
      title: "Match & Verify Partners",
      subtitle: "“Trade needs trust. We help build it.”",
      description: "Carefully screen and vet businesses",
      features: [
        "Ensure export readiness (quality, volume, documentation)",
        "Use trusted networks, site visits, and compliance tools",
        "Facilitate matchmaking based on product, capacity, and values"
      ],
      example: "Connecting a Baltic dairy producer with a licensed African food distributor",
      number: "2"
    },
    {
      title: "Facilitate the Trade Process",
      subtitle: "“We simplify the hard stuff.”",
      description: "Guide partners through export/import requirements",
      features: [
        "Support with logistics, customs, certificates, licenses",
        "Provide advisory on packaging, labeling, and cultural standards",
        "Link to financial partners for payment and trade finance"
      ],
      example: "Supporting Nigerian textile exporters with EU customs paperwork and shipping routes",
      number: "3"
    },
    {
      title: "Grow & Scale",
      subtitle: "“We don't stop at the first shipment.”",
      description: "Monitor trade outcomes and satisfaction",
      features: [
        "Offer insights to improve future deals",
        "Help partners expand to new regions and product categories",
        "Build long-term business relationships"
      ],
      example: "Helping a Lithuanian solar firm expand from East Africa to Francophone West Africa",
      number: "4"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold text-[#4e3629] mb-6">
            The Karagateway Trade Loop
          </h3>
          <p className="text-lg text-[#5e4229] max-w-3xl mx-auto">
            We designed our model to be practical, partnership-driven, and
            adaptable across multiple sectors. It's a 4-phase system that helps
            African and international businesses trade smarter, faster, and
            more ethically.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {modelItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#d6bb9c]/20"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Number and Title */}
                <div className="flex items-start mb-4">
                  <div className="bg-[#876e4B] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    {item.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#4e3629]">
                      {item.title}
                    </h4>
                    <p className="text-[#876e4B] italic text-sm mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Main Description */}
                <p className="text-[#5e4229] mb-4 font-medium">
                  {item.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-4">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-[#876e4B] mr-2 mt-1">•</span>
                      <span className="text-[#5e4229] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Example */}
                <div className="bg-[#f9f5f0] p-3 rounded-lg mt-auto">
                  <p className="text-sm text-[#8b6b4b] font-medium">
                    Example: {item.example}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center bg-[#3a2a1d] rounded-2xl p-8 text-white"
        >
          <h4 className="text-2xl font-bold mb-4">Our Loop Never Ends</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 max-w-4xl mx-auto">
            <div>
              <div className="text-[#d6bb9c] font-bold text-lg mb-2">Knowledge</div>
              <p className="text-sm">Better insights</p>
            </div>
            <div>
              <div className="text-[#d6bb9c] font-bold text-lg mb-2">Trust</div>
              <p className="text-sm">Stronger networks</p>
            </div>
            <div>
              <div className="text-[#d6bb9c] font-bold text-lg mb-2">Growth</div>
              <p className="text-sm">More impact for communities on both sides</p>
            </div>
          </div>
          <p className="mb-12 max-w-3xl mx-auto text-sm">
            Each trade cycle strengthens knowledge for better insights, trust for stronger networks, 
            and growth for more impact on communities on both sides.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/team">
              <button className="bg-[#d6bb9c] text-[#3a2a1d] px-6 py-3 rounded-lg font-semibold hover:bg-[#c4a882] transition-colors">
                Meet the Team
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent border-2 border-[#d6bb9c] text-[#d6bb9c] px-6 py-3 rounded-lg font-semibold hover:bg-[#d6bb9c]/10 transition-colors">
                Join Our Mission
              </button>
            </Link>
          </div> */}
          <Button/>
        </motion.div>
      </div>
    </section>
  );
};

export default OurModelSection;