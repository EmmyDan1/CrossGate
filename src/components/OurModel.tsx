import { motion } from "framer-motion";
import { modelImages } from "../data/image";

const modelItems = [
  {
    title: "Export-Import Matchmaking",
    description:
      "Precision pairing of Nordic quality with African market opportunities",
    image: modelImages.matchmaking,
  },
  {
    title: "Compliance & Logistics",
    description:
      "End-to-end support navigating customs and transportation",
    image: modelImages.logistics,
  },
  {
    title: "Cross-Cultural Advisory",
    description:
      "Bridging business cultures for smoother negotiations",
    image: modelImages.advisory,
  },
];

const OurModelSection = () => {
  return (
    <section className="mb-24 px-6 md:px-24">
      <h3 className="text-3xl font-semibold text-[#4e3629] mb-12 text-center">
        Our Unique Model
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {modelItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-lg group h-72"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-sm opacity-90">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurModelSection;
