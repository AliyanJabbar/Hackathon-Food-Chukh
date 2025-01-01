import PageHeader from "@/components/page-header";
import React from "react";
import BlogSidebar from "@/components/blog/blogSideBar";
import BlogCard from "@/components/blog/blogCard";
import { PaginationDemo } from "@/components/microComponents/pagination";
import { Blogs } from "@/app/blogDb";

const BlogsPage = async () => {
  const blogs = Blogs;

  return (
    <section>
      <PageHeader heading="Blog List" title="Blog" />
      <div className="flex flex-col lg:flex-row px-4 md:px-[7%] py-[50px] md:py-[100px] lg:space-x-8 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-[65%] space-y-10">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
          <PaginationDemo width={300} />
        </div>
        <div className="w-full lg:w-[35%]">
          <BlogSidebar />
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
