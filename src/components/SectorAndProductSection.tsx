import { motion } from "framer-motion";
import { EstoniaToAfrica } from "../data/image";
import { AfricaToEstonia } from "../data/image";
import { Link } from "react-router-dom";

const SectorsAndProducts = () => {
  const tradeDirections = [
    {
      title: "From Europe to Africa",
      subtitle: "Nordic quality meeting African markets",
      products: [
        {
          name: "Renewable Tech",

          image: EstoniaToAfrica.DiaryProduct,
        },
        {
          name: "Dairy & processed foods",

          image: EstoniaToAfrica.TechHardWare,
        },
        {
          name: "Pharmaceuticals & medical devices",

          image: EstoniaToAfrica.ProcessedFood,
        },
        {
          name: " Industry Machine",

          image: EstoniaToAfrica.IndustryMachine,
        },
        {
          name: "Furniture, smart textiles",
          image: EstoniaToAfrica.Funiture,
        },
      ],
    },
    {
      title: "From Africa to Europe",
      subtitle: "African excellence reaching Nordic markets",
      products: [
        {
          name: "Shea Butter, Cocoa & Spices",
          description: "Premium organic raw materials for cosmetics and food",
          image: AfricaToEstonia.AfricanSpice,
        },
        {
          name: "Natural oils & plant extracts",
          description: "Authentic African fabrics and handmade goods",
          image: AfricaToEstonia.AfricanOil,
        },
        {
          name: "Textiles & heritage crafts",
          description: "Dried fruits, tomato paste, and specialty ingredients",
          image: AfricaToEstonia.Textiles,
        },
        {
          name: "Bamboo & Wood Products",
          description: "Sustainable timber and bamboo materials",
          image: AfricaToEstonia.BambooProduct,
        },
        {
          name: "Agro-processed goods",
          description: "Medicinal plants and essential oils",
          image: AfricaToEstonia.TradePfood,
        },
      ],
    },
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
            Where We Create The Most Value
          </h2>
          <p className="text-[#7a5c49] max-w-3xl mx-auto">
            Bridging product excellence between Estonia and Africa through
            curated trade pathways
          </p>
        </motion.div>

        <div className="space-y-16">
          {tradeDirections.map((direction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
     
              <div className="mb-8 text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#876e4B] mb-1">
                  {direction.title}
                </h3>
                <p className="text-[#5e4336]">{direction.subtitle}</p>
              </div>

           
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {direction.products.map((product, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-[#faf7f2] rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 border border-[#e7dccf]"
                  >
                   
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-36 object-cover rounded-t-xl"
                    />

                  
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-[#4e3629] leading-snug">
                        {product.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-xl font-semibold text-[#4e3629] mb-4">
            Don't see your product category listed?
          </h3>

          <Link to="/contact?type=partner">
            <button className="px-8 py-3 bg-[#876e4B] text-[#f4e9dc] rounded-lg font-medium hover:bg-[#9a7f58] transition-colors">
              Request Custom Trade Matchmaking
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SectorsAndProducts;
