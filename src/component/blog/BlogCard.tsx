import Image from "next/image";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { CgArrowTopRight } from "react-icons/cg";
import Link from "next/link";

const BlogCard = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development in 2025",
      author: "John Doe",
      date: "2025-07-01",
      category: "Web Development",
      excerpt:
        "Discover the upcoming trends that will shape the web development landscape in 2025.",
      image: "/images/blog1.jpg",
    },
    {
      id: 2,
      title: "Why UI/UX Matters More Than Ever",
      author: "Jane Smith",
      date: "2025-06-20",
      category: "Design",
      excerpt:
        "Great design is no longer optional; it's the key to product success.",
      image: "/images/blog2.jpg",
    },
    {
      id: 3,
      title: "10 JavaScript Tricks You Probably Don't Know",
      author: "Michael Brown",
      date: "2025-06-15",
      category: "JavaScript",
      excerpt:
        "Level up your JavaScript skills with these lesser-known techniques.",
      image: "/images/blog3.jpg",
    },
    {
      id: 4,
      title: "Beginner’s Guide to MongoDB with Express.js",
      author: "Sarah Johnson",
      date: "2025-05-30",
      category: "Backend",
      excerpt:
        "A simple introduction to building backend applications with MongoDB and Express.",
      image: "/images/blog4.jpg",
    },
    {
      id: 5,
      title: "How to Build Scalable React Applications",
      author: "David Lee",
      date: "2025-05-25",
      category: "React",
      excerpt:
        "Structure and best practices for building large, scalable React projects.",
      image: "/images/blog5.jpg",
    },
    {
      id: 6,
      title: "Mastering CSS Grid for Modern Layouts",
      author: "Emily Davis",
      date: "2025-05-10",
      category: "CSS",
      excerpt:
        "CSS Grid can transform how you approach web layouts. Here's how to master it.",
      image: "/images/blog6.jpg",
    },
    {
      id: 7,
      title: "The Rise of AI in Everyday Web Applications",
      author: "Chris Evans",
      date: "2025-04-25",
      category: "AI",
      excerpt:
        "AI is no longer futuristic; it’s already in the apps you use daily.",
      image: "/images/blog7.jpg",
    },
    {
      id: 8,
      title: "Optimizing Performance in Next.js",
      author: "Olivia Martinez",
      date: "2025-04-10",
      category: "Next.js",
      excerpt:
        "Speed and SEO are critical. Here’s how Next.js helps you achieve both.",
      image: "/images/blog8.jpg",
    },
    {
      id: 9,
      title: "Deploying Fullstack Projects on VPS",
      author: "Liam Wilson",
      date: "2025-03-28",
      category: "DevOps",
      excerpt:
        "Step-by-step guide for deploying MERN stack applications on your own server.",
      image: "/images/blog9.jpg",
    },
    {
      id: 10,
      title: "Essential VSCode Extensions for Developers",
      author: "Sophia Clark",
      date: "2025-03-10",
      category: "Productivity",
      excerpt:
        "Boost your development workflow with these powerful VSCode tools.",
      image: "/images/blog10.jpg",
    },
    {
      id: 11,
      title: "Understanding TypeScript in 10 Minutes",
      author: "Noah Lewis",
      date: "2025-02-25",
      category: "TypeScript",
      excerpt:
        "TypeScript can feel complex. Here’s a fast-track guide to get you started.",
      image: "/images/blog11.jpg",
    },
    {
      id: 12,
      title: "The Importance of Clean Code in Modern Development",
      author: "Emma White",
      date: "2025-02-05",
      category: "Best Practices",
      excerpt:
        "Clean code isn't just about style — it’s about future-proofing your projects.",
      image: "/images/blog12.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((data) => (
        <Link href={`/blog/${data.id}`} key={data.id} className=" "  >
          <div className="overflow-hidden">
            <Image
              className="hover:scale-125 transition-all duration-500"
              src="/blog/blog.png"
              width={500}
              height={500}
              alt="Blog Image"
            />
          </div>
          <div className="">
            <h2 className="text-md font-semibold text-gray-600 my-1.5">{data.title}</h2>
            <div className="flex items-center space-x-1.5">
              <IoMdTime />
              <p>20 June 2025</p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-primary mt-1">Read More </p>
              <CgArrowTopRight className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
