import BlogCard from "@/component/blog/BlogCard";
import Pagination from "@/component/blog/Pagination";
import React from "react";

const Page = () => {
 
  const currentPage =  1;
  const totalPages = 5;
  return (
    <div className="container py-12">
      <div className="">
        <BlogCard    />
        <div className="mt-16">
        <Pagination currentPage={currentPage} totalPages={totalPages}  />
        </div>
      </div>
    </div>
  );
};

export default Page;
