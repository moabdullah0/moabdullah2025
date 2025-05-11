'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { MdStar } from 'react-icons/md';
import { BsLightningCharge } from 'react-icons/bs';

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    subtitle: 'Hero Design Concept',
    image: '/training1.svg', // Replace with your actual image path
    category: 'visual',
    link: '/training1'
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    subtitle: 'Hero Design Concept',
    image: '/training2.svg', // Replace with your actual image path
    category: 'case',
    link: '/training2'
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    subtitle: 'Hero Design Concept',
    image: '/training1.svg', // Replace with your actual image path
    category: 'project',
    link: '/training3'
  }
];

const MyWork = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 ">
      <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">My Work</h2>
      
      <p className="text-gray-300 mb-8 max-w-2xl">
        Here are some of my design works that showcase my 
        design skills and expertise. Click on each project to see
      </p>
      
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        <button 
          onClick={() => setFilter('visual')}
          className={`flex items-center px-4 py-2 rounded-md ${filter === 'visual' ? 'bg-yellow-500/20 text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}
        >
          <MdStar className="mr-2 text-yellow-400" /> Visual Design
        </button>
        
        <button 
          onClick={() => setFilter('case')}
          className={`flex items-center px-4 py-2 rounded-md ${filter === 'case' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}
        >
          <span className="mr-2 text-cyan-400">◆</span> Case Study
        </button>
        
        <button 
          onClick={() => setFilter('project')}
          className={`flex items-center px-4 py-2 rounded-md ${filter === 'project' ? 'bg-blue-500/20 text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
        >
          <BsLightningCharge className="mr-2 text-blue-400" /> Projects
        </button>
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {filteredProjects.map(project => (
          <div key={project.id} className="relative group overflow-hidden rounded-lg">
            <div className="aspect-w-16 aspect-h-9 relative">
              <Image 
                src={project.image} 
                alt={project.title}
                width={400}
                height={300}
                className="object-cover w-full h-full rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <div className="mt-4">
              <h3 className="text-white font-medium">{project.title}</h3>
              <p className="text-gray-400">{project.subtitle}</p>
            </div>
            
            <Link href={project.link}>
              <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FiArrowUpRight className="text-white" />
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      {/* More This Way button */}
      <div className="flex justify-center">
        <Link href="/projects">
          <button className="flex items-center justify-center bg-[#6C63FF] hover:bg-[#5A52D5] text-white py-3 px-6 rounded-md transition-all duration-300">
            More This Way
            <FiArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyWork;
