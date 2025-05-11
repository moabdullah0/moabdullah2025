"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const blogPosts = [
  {
    id: 1,
    title: "Mastering JavaScript: Essential Tips for Modern Web Development",
    image:
      "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
    link: "/blog/javascript-tips",
  },
  {
    id: 2,
    title: "Building Scalable Applications with React and Next.js",
    image:
      "https://img.freepik.com/free-vector/gradient-coding-logo-template_23-2148809439.jpg",
    link: "/blog/react-nextjs",
  },
  {
    id: 3,
    title: "Advanced TypeScript Patterns for Enterprise Applications",
    image:
      "https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg",
    link: "/blog/typescript-patterns",
  },
  {
    id: 4,
    title: "Clean Code Principles: Writing Maintainable Software",
    image:
      "https://img.freepik.com/free-photo/html-system-website-concept_23-2150376770.jpg",
    link: "/blog/clean-code",
  },
];

const BlogResources = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-[#0A192F]">
      <Header />
      <BlogSwiper />
      <MoreButton />
    </div>
  );
};

const Header = () => (
  <div className="flex justify-between items-center mb-6">
    <div>
      <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
        Blog & Resources
      </h2>
      <p className="text-gray-300 max-w-2xl">
        Sharing insights about software development, best practices, and
        technical tutorials to help fellow developers grow.
      </p>
    </div>
    <NavigationButtons />
  </div>
);

// Navigation buttons for the Swiper
const NavigationButtons = () => (
  <div className="hidden md:flex items-center space-x-4">
    <button className="swiper-button-prev-custom bg-gray-800 hover:bg-gray-700 p-3 rounded-full">
      <FiArrowLeft className="text-white" />
    </button>
    <button className="swiper-button-next-custom bg-gray-800 hover:bg-gray-700 p-3 rounded-full">
      <FiArrowRight className="text-white" />
    </button>
  </div>
);

// Swiper component for displaying blog posts
const BlogSwiper = () => (
  <Swiper
    modules={[Navigation]}
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    navigation={{
      prevEl: ".swiper-button-prev-custom",
      nextEl: ".swiper-button-next-custom",
    }}
    className="mt-8"
  >
    {blogPosts.map((post) => (
      <SwiperSlide key={post.id}>
        <BlogPost post={post} />
      </SwiperSlide>
    ))}
  </Swiper>
);

const BlogPost = ({
  post,
}: {
  post: { id: number; title: string; image: string; link: string };
}) => (
  <div className="group relative overflow-hidden rounded-lg">
    <div className="relative h-48 md:h-56 lg:h-64 w-full">
      <Image
        src={post.image}
        alt={post.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="mt-4 flex justify-between items-center">
      <h3 className="text-white font-medium text-sm md:text-base pr-8">{post.title}</h3>
      <Link href={post.link}>
        <div className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors duration-300">
          <FiArrowUpRight className="text-white h-4 w-4" />
        </div>
      </Link>
    </div>
  </div>
);

const MoreButton = () => (
  <div className="flex justify-center mt-10">
    <Link href="/blog">
      <button className="flex items-center justify-center bg-[#6C63FF] hover:bg-[#5A52D5] text-white py-3 px-6 rounded-md transition-all duration-300">
        More This Way
        <FiArrowRight className="ml-2" />
      </button>
    </Link>
  </div>
);

export default BlogResources;
