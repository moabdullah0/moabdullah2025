import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-0 md:px-8 lg:px-16 min-h-[80vh] ">
      <h1 className="text-4xl leading-12 lg:leading-24 md:text-5xl lg:text-8xl font-medium text-white max-w-4xl mb-6">
        Crafting Memorable User Experiences for Business Success
      </h1>
      
      <p className="text-base md:text-lg text-text max-w-2xl mb-10">
        I blend exquisite design with impeccable functionality for an exceptional
        user experience, while keeping users captivated.
      </p>
      
      <Link href="https://github.com/moabdullah2025" target="_blank" rel="noopener noreferrer">
        <button className="flex items-center justify-center bg-button hover:bg-[#5A52D5] text-white py-3 px-6 rounded-md transition-all duration-300">
          github
          <FiArrowRight className="ml-2" />
        </button>
      </Link>
    </div>
  );
};

export default Hero;
