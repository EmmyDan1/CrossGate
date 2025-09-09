import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useImagePreload } from "../hooks/useImagePreLoad";
import HeroPhoto from "../assets/images/HeroPht.png";
import { useMemo } from "react";

const HeroSection = () => {
  const [heroRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const isImageLoaded = useImagePreload(HeroPhoto);

  const backgroundStyle = useMemo(() => ({
    backgroundImage: isVisible && isImageLoaded ? `url(${HeroPhoto})` : "none",
    backgroundColor: "#f9f5f0",
  }), [isVisible, isImageLoaded]);

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center py-14 md:py-0"
      style={backgroundStyle}
    >


      <div className="relative z-10 flex flex-col items-center md:items-start w-full max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-xl"
        >
          <h1 className="text-[#f4e9dc] tracking-tight font-libre text-4xl md:text-5xl lg:text-[54px] font-bold mb-4 leading-tight">
            Where <span className="text-[#d6bb9c]">European Expertise </span>
            <br className="hidden md:block" />
            Meets <span className="text-[#d6bb9c]">African</span>{" "}
            <span className="text-[#f4e9dc]">Excellence</span>
          </h1>

          <p className="text-[#f4e9dc] font-inter text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0">
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
      </div>
    </div>
  );
};

export default HeroSection;