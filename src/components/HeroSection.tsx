import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="    
    relative w-full min-h-screen bg-cover bg-center flex items-center justify-center py-14 md:py-0
    bg-[url('/images/HeroMobile1.png')]     
    sm:bg-[url('/images/HeroTab.png')]  
    lg:bg-[url('/images/HeroDesk.png')]"
    >
      <div className="relative z-10 flex flex-col items-center md:items-start w-full max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xl"
        >
          <h1
            className="
              text-whitte
              tracking-tight
              font-libre
              text-3xl sm:text-4xl md:text-5xl lg:text-[54px]
              font-extrabold
              mb-6
              leading-snug sm:leading-tight
              text-center md:text-left
            "
          >
            Where <span className="text-whitte md:text-gold">European Expertise </span>
            <br className="hidden sm:block" />
            Meets <span className="text-whitte">African</span>{" "}
            <span className="text-[#f4e9dc]">Excellence</span>
          </h1>
          <p
            className="
              text-grayWhite
              font-inter
              text-base sm:text-lg md:text-xl
              font-medium
              mb-10
              max-w-md
              mx-auto md:mx-0
              leading-relaxed
              text-center md:text-left
            "
          >
            Bridging Continents Through Trade, Insight, and Trust.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  bg-secondary text-primary
                  px-8 py-3
                  rounded-lg font-medium text-[20px]
                  transition-colors duration-300
                  shadow-lg hover:shadow-xl
                "
              >
                Partner with us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
