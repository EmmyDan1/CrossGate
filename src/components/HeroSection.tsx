import { motion } from "framer-motion";
import { Button } from "./ui/Button";

const HeroSection = () => {
  return (
    <div
      className="    
        relative w-full min-h-screen bg-cover  flex items-center justify-center 
        py-16 sm:py-20 md:py-0 
        bg-[url('/images/HeroMobile1.png')]     
        sm:bg-[url('/images/HeroTab.png')]  
        lg:bg-[url('/images/HeroDesk.png')]
      "
    >
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div className="relative z-10 flex flex-col items-center  px-5 sm:px-6 md:px-8 md:mt-24 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center"
        >
          {/* Headline - Fixed for Mobile */}
          <h1
            className="
              text-slate-200
              tracking-tight
              font-libre
              text-3xl sm:text-4xl md:text-5xl lg:text-[44px]
              font-extrabold
              mb-6

              leading-tight sm:leading-tight
            "
          >
            <span className="block">Where Global Innovations</span>
            <span className="block">and Opportunities Meet</span>
            <span className="block mt-1">African Excellence</span>
          </h1>

          {/* Subtitle */}
          <p
            className="
              text-[#fedd71]
              font-inter
              text-base sm:text-lg md:text-xl
              font-medium
              mb-8 sm:mb-10
              max-w-sm sm:max-w-md mx-auto
              leading-relaxed
            "
          >
            We help businesses across continents discover new markets, forge
            partnerships, and grow sustainably.
          </p>

          {/* Button */}
          <Button />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
