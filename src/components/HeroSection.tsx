import { motion } from "framer-motion";
import { heroImage } from "../data/image";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { landingImg } from "../data/image";



const HeroSection = () => {
  const [heroRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={heroRef}
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: isVisible ? `url(${heroImage})` : "none",
        backgroundColor: "#f9f5f0",
      }}
    >
    
      <div className="absolute inset-0 bg-black bg-opacity-40" />

    
      <div className="relative z-10 flex flex-col mt-56 md:flex-row mt-[36px] items-center justify-between px-6 md:px-12 w-full max-w-7xl">
     
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-xl"
        >
          <h1 className="text-[#d6bb9c] tracking-tight font-libre text-4xl md:text-5xl lg:text-[50px] font-bold mb-4 leading-tight">
            Where <span className="text-[#d6bb9c]">European Expertise </span>
            <br />
            Meets <span className="text-[#f4e9dc]">African Excellence</span>
          </h1>

          <p className="text-[#f4e9dc] font-inter text-lg md:text-xl mb-8">
           Bridging Continents Through Trade, Insight, and Trust.
          </p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-primary px-8 py-3 rounded-lg font-medium text-[20px] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Partner with us
            </motion.button>
          </Link>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 md:mt-0 md:ml-12 flex-shrink-0 w-full md:w-1/2"
        >
          <img
            src={landingImg.img}
            alt="CrossGate partnership"
            className="rounded-2xl shadow-lg w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
