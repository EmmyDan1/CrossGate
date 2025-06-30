import { motion } from "framer-motion";
import { heroImage } from "../data/image";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />
     
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-6"
      >
        <h1 className="text-[#f4e9dc] tracking-tight font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Where Nordic Innovation Meets African Potential
        </h1>
        <p className="text-[#f4e9dc] text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Connecting African producers with European buyers through insight,
          trust, and collaboration.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary text-primary px-8 py-3 rounded-lg font-medium  transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Explore Opportunities
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
