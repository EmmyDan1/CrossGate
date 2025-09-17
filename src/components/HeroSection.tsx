import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="    
    relative w-full min-h-screen bg-cover bg-[center_top_15%] flex items-center justify-center py-14 md:py-0
    bg-[url('/images/HeroMobile1.png')]     
    sm:bg-[url('/images/HeroTab.png')]  
    lg:bg-[url('/images/HeroDesk.png')]"
    >
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center"
        >
          <h1
            className="
              text-white
              tracking-tight
              font-libre
              text-3xl sm:text-4xl md:text-5xl lg:text-[54px]
              font-extrabold
              mb-6
              leading-tight
              
            "
          >
            Where{" "}
            <span className="text-[#765937]">
              Global Innovations and Opportunities{" "}
            </span>
            Meets <span className="text-[#d6bb9c]">African</span>{" "}
            <span className="text-white">Excellence</span>
          </h1>
          <p
            className="
              text-[#f4e9dc]
              font-inter
              text-base sm:text-lg md:text-xl
              font-medium
              mb-10
              max-w-md
              mx-auto
              md:leading-relaxed 


            "
          >
            We help businesses across continents discover new markets, forge
            partnerships, and grow sustainably.
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <Link to="/start-trade-journey">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  bg-[#d6bb9c] text-[#765937]
                  px-8 py-3
                  rounded-lg font-medium text-lg md:text-xl
                  transition-colors duration-300
                  shadow-lg hover:shadow-xl
                  font-playfair
                "
              >
                Start your trade Journey
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;