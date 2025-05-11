import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaYoutube, FaGithub, FaDribbble, FaBehance } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=" py-6 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <div className="text-gray-400 text-sm mb-4 md:mb-0">
          Moabdullah0 © {new Date().getFullYear()}
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <SocialIcon href="https://linkedin.com" icon={<FaLinkedinIn />} />
          <SocialIcon href="https://twitter.com" icon={<FaTwitter />} />
          <SocialIcon href="mailto:contact@example.com" icon={<FaEnvelope />} />
          <SocialIcon href="https://youtube.com" icon={<FaYoutube />} />
          <SocialIcon href="https://github.com" icon={<FaGithub />} />
          <SocialIcon href="https://dribbble.com" icon={<FaDribbble />} />
          <SocialIcon href="https://behance.net" icon={<FaBehance />} />
        </div>
      </div>
    </div>
  );
};

// Helper component for social icons
const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <div className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors duration-300">
      <div className="text-white text-sm">
        {icon}
      </div>
    </div>
  </Link>
);

export default Footer;
