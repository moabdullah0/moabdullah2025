'use client'
import Image from "next/image";
import React, { useState } from "react";
import { MdMenu, MdOutlineMail, MdClose } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative ">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={"/Logo.svg"} alt="logo" width={120} height={23} />
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/">
            <span className="font-semibold text-text hover:underline px-2 py-1 rounded transition-all duration-150">
              Home
            </span>
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/my-work">
            <span className="font-semibold text-text px-2 py-1 rounded">
              My work
            </span>
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/resources">
            <span className="font-semibold text-text hover:underline px-2 py-1 rounded transition-all duration-150">
              Resources
            </span>
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/about">
            <span className="font-semibold text-text hover:underline px-2 py-1 rounded transition-all duration-150">
              About
            </span>
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/101-workshop">
            <span className="font-semibold text-text hover:underline px-2 py-1 rounded transition-all duration-150">
              101 Workshop
            </span>
          </Link>
        </div>
        
        {/* Let's Talk Button - Visible on Desktop, Hidden on Mobile */}
        <div className="hidden md:flex">
          <button className="flex items-center border border-white rounded-full px-4 py-2 text-text hover:bg-white hover:text-[#2323FF] transition-all duration-150">
            <MdOutlineMail className="h-5 w-5 mr-2" />
            Let&apos;s Talk
          </button>
        </div>
        
        {/* Menu Button - Visible Only on Mobile */}
        <div className="md:hidden flex items-center space-x-2 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="font-medium text-text">Menu</span>
          {isMenuOpen ? (
            <MdClose className="h-7 w-7 text-text" />
          ) : (
            <MdMenu className="h-7 w-7 text-text" />
          )}
        </div>
      </div>
      
      {/* Mobile Menu - Shown when menu is clicked */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gradient-to-r from-[#2B2B6F] to-[#1B1B3A] py-4 px-6 z-50 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <span className="font-semibold text-text block py-2">Home</span>
            </Link>
            <Link href="/my-work" onClick={() => setIsMenuOpen(false)}>
              <span className="font-semibold text-text block py-2">My work</span>
            </Link>
            <Link href="/resources" onClick={() => setIsMenuOpen(false)}>
              <span className="font-semibold text-text block py-2">Resources</span>
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              <span className="font-semibold text-text block py-2">About</span>
            </Link>
            <Link href="/101-workshop" onClick={() => setIsMenuOpen(false)}>
              <span className="font-semibold text-text block py-2">101 Workshop</span>
            </Link>
            <div className="pt-2">
              <button className="flex items-center border border-white rounded-full px-4 py-2 text-text hover:bg-white hover:text-[#2323FF] transition-all duration-150">
                <MdOutlineMail className="h-5 w-5 mr-2" />
                Let&apos;s Talk
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
