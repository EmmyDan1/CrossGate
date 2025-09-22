import { motion } from "framer-motion";
import { Button } from "./ui/Button";

const HeroSection = () => {
  return (
    <div
      className="    
        relative w-full min-h-screen bg-cover bg-[center_top_15%] flex items-center justify-center 
        py-16 sm:py-20 md:py-0
        bg-[url('/images/HeroMobile1.png')]     
        sm:bg-[url('/images/HeroTab.png')]  
        lg:bg-[url('/images/HeroDesk.png')]
      "
    >
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-5 sm:px-6 md:px-8 md:mt-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center"
        >
          {/* Headline */}
          <h1
            className="
              text-slate-200
              tracking-tight
              font-libre
              text-3xl sm:text-4xl md:text-5xl lg:text-[54px]
              font-extrabold
              mb-6
              leading-snug sm:leading-tight
            "
          >
            Where <br className="block sm:hidden" />
            <span className="block sm:inline">
              Global Innovations and Opportunities
            </span>{" "}
            <br className="block sm:hidden" />
            Meets <span className="">African Excellence</span>
          </h1>

          {/* Subtitle */}
          <p
            className="
              text-[#f4e9dc]
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
