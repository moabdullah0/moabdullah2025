'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { motion, useInView } from "framer-motion";

const AboutMe = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="py-16 px-4 md:px-8 lg:px-16 relative"
    >
      {/* Background decorative elements */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.5, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 left-20 w-12 h-12 rounded-full bg-purple-600 opacity-70 blur-sm"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.5, 0.7] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-40 left-40 w-8 h-8 rounded-full bg-cyan-400 opacity-70 blur-sm"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute top-60 left-30 w-6 h-6 rounded-full bg-green-400 opacity-50 blur-sm"
      ></motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left column - Profile image and name */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col items-center md:items-center"
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-48 h-48 rounded-full overflow-hidden relative z-10">
              <Image
                src="/profile.svg"
                alt="Mohamad Alibrahim"
                width={192}
                height={192}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-medium text-white mt-6 mb-2"
          >
            Mohamad alibrahim
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-300 text-center mb-4"
          >
            Front-End Developer & Software Engineer
            <br />
            Passionate about Building Modern Web Applications
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <button className="flex items-center justify-center bg-[#6C63FF] hover:bg-[#5A52D5] text-white py-2 px-6 rounded-md transition-all duration-300">
                <MdOutlineMail className="mr-2" />
                Let&rsquo;s Talk
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerChildren}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-medium text-white mb-6"
          >
            My Long
            <br />
            Story Short
          </motion.h2>

          <motion.div 
            variants={staggerChildren}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl text-gray-300 mb-2">
                From Curiosity to Code
              </h3>
              <p className="text-gray-400">
                Growing up in a village without internet access, I taught myself
                Photoshop at a local photo studio—paying for computer time just
                to learn. That hunger for technology never faded.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-xl text-gray-300 mb-2">
                Gamer, Problem-Solver
              </h3>
              <p className="text-gray-400">
                Competitive FPS gaming (PUBG, Valorant) sharpened my ability to
                make split-second decisions under pressure—a skill I now apply
                to debugging and agile development.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-xl text-gray-300 mb-2">Teamwork First</h3>
              <p className="text-gray-400">
                As a former cricket team captain, I learned how to lead with
                empathy, collaborate under stress, and turn diverse strengths
                into wins—values I bring to every project.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-xl text-gray-300 mb-2">Paying It Forward</h3>
              <p className="text-gray-400">
                Now, I&rsquo;m building a Designer Community to help newcomers
                navigate the industry, because everyone deserves a mentor.
              </p>
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-400 mt-4"
            >
              Let&rsquo;s build something meaningful
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
