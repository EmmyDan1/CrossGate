import { motion } from "framer-motion";
import { modelItems } from "../data/dataOurStory";



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
         
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            
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
