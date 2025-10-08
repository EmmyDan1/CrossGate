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
                  bg-[#e4511b] text-[#fff]
                  px-8 py-1
                  rounded-lg font-normal text-lg md:text-md
                  transition-colors duration-300
                  shadow-lg hover:shadow-xl
                  font-
                "
        >
          Start your trade Journey
        </motion.button>
      </Link>
    </div>
  );
};
