import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineMail } from 'react-icons/md';

const AboutMe = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-[#0A192F] relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-12 h-12 rounded-full bg-purple-600 opacity-70 blur-sm"></div>
      <div className="absolute top-40 left-40 w-8 h-8 rounded-full bg-cyan-400 opacity-70 blur-sm"></div>
      <div className="absolute top-60 left-30 w-6 h-6 rounded-full bg-green-400 opacity-50 blur-sm"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left column - Profile image and name */}
        <div className="flex flex-col items-center md:items-center">
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden relative z-10">
              <Image 
                src="/profile.svg" 
                alt="Mohamad Alibrahim" 
                width={192} 
                height={192}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-48 h-48 rounded-full bg-yellow-400 opacity-50 blur-sm"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-medium text-white mt-6 mb-2">Mohamad alibrahim</h2>
          <p className="text-gray-300 text-center mb-4">
            UX UI Designer, Mentor and<br />
            Content Creator at Youtube @Mehedihas
          </p>
          
          <Link href="/contact">
            <button className="flex items-center justify-center bg-[#6C63FF] hover:bg-[#5A52D5] text-white py-2 px-6 rounded-md transition-all duration-300">
              <MdOutlineMail className="mr-2" />
              Let&rsquo;s Talk
            </button>
          </Link>
        </div>
        
        {/* Right column - Story sections */}
        <div>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
            My Long<br />Story Short
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-white mb-2">From Curiosity to Code</h3>
              <p className="text-gray-300">
                Growing up in a village without internet access, I taught myself 
                Photoshop at a local photo studio—paying for computer time just 
                to learn. That hunger for technology never faded.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl text-white mb-2">Gamer, Problem-Solver</h3>
              <p className="text-gray-300">
                Competitive FPS gaming (PUBG, Valorant) sharpened my ability to 
                make split-second decisions under pressure—a skill I now apply to 
                debugging and agile development.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl text-white mb-2">Teamwork First</h3>
              <p className="text-gray-300">
                As a former cricket team captain, I learned how to lead with 
                empathy, collaborate under stress, and turn diverse strengths into 
                wins—values I bring to every project.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl text-white mb-2">Paying It Forward</h3>
              <p className="text-gray-300">
                Now, I&rsquo;m building a Designer Community to help newcomers 
                navigate the industry, because everyone deserves a mentor.
              </p>
            </div>
            
            <p className="text-xl text-white mt-4">Let&rsquo;s build something meaningful</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;