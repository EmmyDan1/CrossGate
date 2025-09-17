import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurModelSection = () => {
  const modelItems = [
    {
      title: "Discover Opportunities",
      description:
        "We research high-demand, high-potential products in both continents using market data, buyer needs, and on-ground intelligence.",
      example:
        "Ghanaian cocoa co-ops ready for ethical sourcing deals in Europe",
      icon: "🎯",
    },
    {
      title: "Match & Verify Partners",
      description:
        "We carefully screen and vet businesses to ensure export readiness and facilitate matchmaking based on product, capacity, and values.",
      example:
        "Connecting a Baltic dairy producer with a licensed African food distributor",
      icon: "🤝",
    },
    {
      title: "Facilitate the Trade Process",
      description:
        "We guide partners through export/import requirements and support with logistics, customs, certificates, and licenses.",
      example:
        "Supporting Nigerian textile exporters with EU customs paperwork and shipping routes",
      icon: "📦",
    },
    {
      title: "Grow & Scale",
      description:
        "We monitor trade outcomes and offer insights to improve future deals, helping partners expand to new regions and product categories.",
      example:
        "Helping a Lithuanian solar firm expand from East Africa to Francophone West Africa",
      icon: "📈",
    },
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
            The Karagateway{" "}
            <span className="text-[#876e4B]"> Connect Trade Loop </span>
          </h3>
          <p className="text-lg text-[#5e4229] max-w-3xl mx-auto">
            We designed our model to be practical, partnership-driven, and
            adaptable across multiple sectors. It's a 4-phase system that helps
            African and European businesses trade smarter, faster, and more
            ethically.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {modelItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#d6bb9c]/20"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-[#4e3629] mb-3">
                  {item.title}
                </h4>
                <p className="text-[#5e4229] mb-4 flex-grow">
                  {item.description}
                </p>
                <div className="bg-[#f9f5f0] p-3 rounded-lg">
                  <p className="text-sm text-[#8b6b4b] italic">
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
          <h4 className="text-2xl font-bold mb-4">🔄 Our Loop Never Ends</h4>
          <p className="mb-6 max-w-3xl mx-auto">
            Each trade cycle strengthens knowledge for better insights, trust
            for stronger networks, and growth for more impact on communities on
            both sides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/team">
              <button className="bg-[#d6bb9c] text-[#3a2a1d] px-6 py-3 rounded-lg font-semibold hover:bg-[#c4a882] transition-colors">
                Meet the Team
              </button>
            </Link>
            <Link to='/contact'></Link>
            <button className="bg-transparent border-2 border-[#d6bb9c] text-[#d6bb9c] px-6 py-3 rounded-lg font-semibold hover:bg-[#d6bb9c]/10 transition-colors">
              Join Our Mission
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurModelSection;
