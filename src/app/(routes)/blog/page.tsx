import PageHeader from "@/components/page-header";
import React from "react";
import BlogCard from "../../../components/blog/blogCard";
import { PaginationDemo } from "@/components/microComponents/pagination";
import BlogSidebar from "@/components/blog/blogSideBar";

const BlogPage = () => {
  const blogs = [
    {
      date: "14",
      month: "Feb",
      year: 2022,
      title: "10 Reasons To Do A Digital Detox Challenge",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      image: "/assets/blog/blog1.png",
      author: "Admin",
      comments: 3,
    },
    {
      date: "15",
      month: "Feb",
      year: 2023,
      title: "Traditional Soft Pretzels with Sweet Beer Cheese",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      image: "/assets/blog/blog2.png",
      author: "Ali",
      comments: 5,
    },
    {
      date: "11",
      month: "Mar",
      year: 2024,
      title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      image: "/assets/blog/blog3.png",
      author: "Abdullah",
      comments: 7,
    },
  ];

  return (
    <section>
      <PageHeader heading="Blog List" title="Blog" />
      <div className="flex flex-col lg:flex-row px-4 md:px-[7%] py-[50px] md:py-[100px] lg:space-x-8 space-y-8 lg:space-y-0">
        {/* Blog Cards Section */}
        <div className="w-full lg:w-[65%]">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
          <PaginationDemo width={300} />
        </div>
        
        {/* Sidebar Section */}
        <div className="w-full lg:w-[35%]">
          <BlogSidebar />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
