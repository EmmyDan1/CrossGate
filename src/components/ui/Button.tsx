import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Button = () => {
  return (
    <div className="flex justify-center md:-translate-y-6">
      <Link to="/start-trade-journey">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
                  bg-[#dccab7] text-[#877762]
                  px-8 py-2
                  rounded-2xl font-medium text-lg md:text-xl
                  transition-colors duration-300
                  shadow-lg hover:shadow-xl
                  font-playfair
                "
        >
          Start your trade Journey
        </motion.button>
      </Link>
    </div>
  );
};
