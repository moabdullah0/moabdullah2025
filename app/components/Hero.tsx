'use client'
import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col pt-56 items-center justify-center text-center py-20 px-0 md:px-8 lg:px-16 min-h-[80vh]"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl leading-12 lg:leading-24 md:text-5xl lg:text-8xl font-medium text-white max-w-4xl mb-6"
      >
        Crafting Memorable User Experiences for Business Success
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-base md:text-lg text-text max-w-2xl mb-10"
      >
        I blend exquisite design with impeccable functionality for an exceptional
        user experience, while keeping users captivated.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link href="https://github.com/moabdullah2025" target="_blank" rel="noopener noreferrer">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center bg-button hover:bg-[#5A52D5] text-white py-3 px-6 rounded-md transition-all duration-300"
          >
            github
            <FiArrowRight className="ml-2" />
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
