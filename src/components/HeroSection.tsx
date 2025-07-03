import { motion } from "framer-motion";
import { heroImage } from "../data/image";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {

  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={heroRef}
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: isVisible ? `url(${heroImage})` : 'none',
        backgroundColor: '#f9f5f0' 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-6"
      >
        <h1 className="text-[#d6bb9c] tracking-tight font-libre text-4xl md:text-5xl lg:text-[50px] font-bold mb-4 leading-tight text-center">
          Where <span className="text-[#d6bb9c]">Nordic Innovation</span>
          <br />
          Meets <span className="text-[#f4e9dc] ">African Potential</span>
        </h1>

        <p className="text-[#f4e9dc] font-inter text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Connecting African producers with European buyers through insight,
          trust, and collaboration.
        </p>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-primary px-8 py-3 rounded-lg font-medium text-[20px]  transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Partner with us
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroSection;
