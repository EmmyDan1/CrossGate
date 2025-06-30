import { motion } from "framer-motion";
import { EstoniaToAfrica } from "../data/image";
import { AfricaToEstonia } from "../data/image";
import { Link } from "react-router-dom";

const SectorsAndProducts = () => {
  const tradeDirections = [
    {
      title: "From Estonia to Africa",
      subtitle: "Nordic quality meeting African markets",
      products: [
        {
          name: "Dairy Products",
          description: "Premium cheeses, milk powders, and dairy tech",
          image: EstoniaToAfrica.DiaryProduct,
        },
        {
          name: "Tech Hardware",
          description: "Smart farming equipment, solar solutions, IoT devices",
          image: EstoniaToAfrica.TechHardWare,
        },
        {
          name: "Processed Food",
          description: "Ready-to-eat meals, health foods, and beverages",
          image: EstoniaToAfrica.ProcessedFood,
        },
        {
          name: "Furniture",
          description: "Sustainable Nordic design furniture and components",
          image: EstoniaToAfrica.Funiture,
        },
        {
          name: "Construction Materials",
          description: "Energy-efficient building materials and tech",
          image: EstoniaToAfrica.Construction,
        },
      ],
    },
    {
      title: "From Africa to Estonia",
      subtitle: "African excellence reaching Nordic markets",
      products: [
        {
          name: "Shea Butter, Cocoa & Spices",
          description: "Premium organic raw materials for cosmetics and food",
          image: AfricaToEstonia.AfricanSpice,
        },
        {
          name: "Textiles & Crafts",
          description: "Authentic African fabrics and handmade goods",
          image: AfricaToEstonia.AfricanFabrics,
        },
        {
          name: "Agro-Processed Goods",
          description: "Dried fruits, tomato paste, and specialty ingredients",
          image: AfricaToEstonia.AgroFood,
        },
        {
          name: "Bamboo & Wood Products",
          description: "Sustainable timber and bamboo materials",
          image: AfricaToEstonia.BambooProduct,
        },
        {
          name: "Natural Oils & Herbs",
          description: "Medicinal plants and essential oils",
          image: AfricaToEstonia.AfricanOil,
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

        <div className="space-y-20">
          {tradeDirections.map((direction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-[#876e4B] mb-2">
                  {direction.title}
                </h3>
                <p className="text-[#5e4336]">{direction.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {direction.products.map((product, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#f4e9dc]"
                  >
                    <div className="aspect-w-4 aspect-h-3 ">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-28 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-[#4e3629] mb-2">
                        {product.name}
                      </h4>
                      <p className="text-[#5e4336] text-sm mb-4">
                        {product.description}
                      </p>
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
