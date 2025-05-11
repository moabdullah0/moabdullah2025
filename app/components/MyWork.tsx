'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { MdStar } from 'react-icons/md';
import { BsLightningCharge } from 'react-icons/bs';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    subtitle: 'Hero Design Concept',
    image: '/training1.svg',
    category: 'visual',
    link: '/training1'
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    subtitle: 'Hero Design Concept',
    image: '/training2.svg',
    category: 'case',
    link: '/training2'
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    subtitle: 'Hero Design Concept',
    image: '/training1.svg',
    category: 'project',
    link: '/training3'
  }
];

const MyWork = () => {
  const [filter, setFilter] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <motion.div 
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)"
      }}
      className="py-16 px-4 md:px-8 lg:px-16"
    >
      <motion.h2 
        style={{
          transform: isInView ? "none" : "translateX(-20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}
        className="text-3xl md:text-4xl font-medium text-white mb-4"
      >
        My Work
      </motion.h2>
      
      <motion.p 
        style={{
          transform: isInView ? "none" : "translateX(-20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}
        className="text-gray-300 mb-8 max-w-2xl"
      >
        Here are some of my design works that showcase my 
        design skills and expertise. Click on each project to see
      </motion.p>
      
      {/* Filter buttons */}
      <motion.div 
        style={{
          transform: isInView ? "none" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
        }}
        className="flex flex-wrap gap-4 mb-10"
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFilter('visual')}
          className={`flex items-center px-4 py-2 rounded-md ${filter === 'visual' ? 'bg-yellow-500/20 text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}
        >
          <MdStar className="mr-2 text-yellow-400" /> Visual Design
        </motion.button>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFilter('case')}
          className={`flex items-center px-4 py-2 rounded-md ${filter === 'case' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}
        >
          <span className="mr-2 text-cyan-400">◆</span> Case Study
        </motion.button>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFilter('project')}
          className={`flex items-center px-4 py-2 rounded-md ${filter === 'project' ? 'bg-blue-500/20 text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
        >
          <BsLightningCharge className="mr-2 text-blue-400" /> Projects
        </motion.button>
      </motion.div>
      
      {/* Projects grid */}
      <motion.div 
        layout
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
      >
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <motion.div 
                style={{
                  transform: isInView ? "none" : "translateY(10px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                }}
                className="mt-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-white font-medium">{project.title}</h3>
                  <p className="text-gray-400">{project.subtitle}</p>
                </div>
                
                <Link href={project.link}>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors duration-300"
                  >
                    <FiArrowUpRight className="text-white h-4 w-4" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* More This Way button */}
      <motion.div 
        style={{
          transform: isInView ? "none" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
        }}
        className="flex justify-center"
      >
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center bg-[#6C63FF] hover:bg-[#5A52D5] text-white py-3 px-6 rounded-md transition-all duration-300"
          >
            More This Way
            <FiArrowRight className="ml-2" />
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default MyWork;
