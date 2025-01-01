"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/page-header";
import BlogSidebar from "@/components/blog/blogSideBar";
import Loading from "../../loading";

const BlogPage = (props: any) => {
  // type of data
  interface Blog {
    date: string;
    month: string;
    year: number;
    title: string;
    description: string;
    image: string;
    content: string[];
    tags: string[];
    author: string;
    comments: { name: string; date: string; message: string }[];
    id: number;
  }

  const [params, setParams] = useState<number>(1);
  const [blogs, setBlogs] = useState<any>();
  const [blog, setBlog] = useState<any>(undefined);

  //for resolving the props in next.js 15
  useEffect(() => {
    async function resolveProps() {
      const resolvedParams = await props.params;
      const Blog = resolvedParams.blog;
      console.log("Blog value:", Blog);
      setParams(parseInt(Blog));
    }
    resolveProps();
  }, [props.params]);
  //  for fetching data from our api
  useEffect(() => {
    async function getBlogs() {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL  || 'http://localhost:3000';
      const data = await fetch(`${baseUrl}/api/blogs`);
      const res = await data.json();
      const Blogs = await res.Blogs;
      console.log("Blogs in effect", Blogs);
      setBlogs(Blogs);
    }
    getBlogs();
  }, []);
  //for finding the blog which user have clicked
  useEffect(() => {
    if (blogs && params) {
      const selectedBlog = blogs.find((blog: Blog) => blog.id === params);
      setBlog(selectedBlog);
    }
  }, [blogs, params]);

  // side content for image
  const sideContent =
    blog?.content?.filter((_: string, ind: number) => ind > 0 && ind < 3) || [];

  
  if(typeof(blog) === "undefined"){
    <Loading/>
  }else{

    return (
    <section>
      <PageHeader heading="Blog Details" title="Blog details" />
      <main className="py-[100px] px-[7%]">
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
          {/* left side */}
          <div className="w-full lg:w-[65%] text-txtBlack max-[767px]:flex max-[767px]:flex-col max-[767px]:items-center max-[767px]:justify-center">
            {/* Image Section */}
            <div className="relative">
              <Image
                width={870}
                height={520}
                src={blog?.image}
                alt={blog?.title}
                className="w-auto h-[200px] sm:h-[300px] md:h-[400px] lg:h-[520px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-orangeLike text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-[4px] sm:py-[6px] rounded-md text-center">
                <p>{blog.date}</p>
                <p className="font-[300] -mt-1">{blog.month}</p>
              </div>
            </div>

            {/* Content Section */}
            <div>
              {/* Metadata : date / comment / admin */}
              <div className="flex flex-wrap items-center text-txtGray text-xs sm:text-sm my-3 gap-2">
                <p className="flex items-center gap-[4px]">
                  <Image
                    width={20}
                    height={20}
                    src="/assets/icons/Calendar.png"
                    alt="calendar"
                  />
                  {`${blog.month} ${blog.date}, ${blog.year} /`}
                </p>
                <p className="flex items-center gap-[4px]">
                  <Image
                    width={20}
                    height={20}
                    src="/assets/icons/comment.png"
                    alt="comment"
                  />
                  {`${blog?.comments?.length + 1} /`}
                </p>
                <p className="flex items-center gap-[4px]">
                  <Image
                    width={20}
                    height={20}
                    src="/assets/icons/UserCirclePlus.png"
                    alt="user"
                  />
                  {blog.author}
                </p>
              </div>

              {/* Blog Title */}
              <h2 className="font-bold font-sans text-base sm:text-lg max-w-[850px] hover:text-orangeLike transition-colors">
                {blog.title}
              </h2>

              <hr className="max-w-[700px] my-3 sm:my-5" />

              {/* Blog Description */}
              <p className="text-txtGray w-full mb-4">{blog.description}</p>
              {/* quotation div */}
              <div className="flex flex-row w-full bg-orangeLike p-3 gap-3 my-10">
                <Image
                  src="/assets/icons/Quotes.png"
                  alt="Quotes"
                  className="w-[40px] h-[40px]"
                  width={40}
                  height={40}
                />
                <p className="text-[20px] text-white font-bold font-sans">
                  {blog.quotation}
                </p>
              </div>
              {/* paragraphs */}
              <div className="space-y-5">
                {blog.content &&
                  blog.content.map((para: string, ind: number) => {
                    return <p key={ind}>{para}</p>;
                  })}
              </div>
              <div className="flex flex-col lg:flex-row gap-6 my-8">
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2">
                  <Image
                    width={500}
                    height={300}
                    src="/assets/blog/blog20.png"
                    alt="Side Image"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 space-y-4">
                  {sideContent.length > 0 ? (
                    sideContent.map((para: string, index: number) => (
                      <p key={index} className="text-txtGray">
                        {para}
                      </p>
                    ))
                  ) : (
                    <p className="text-txtGray">
                      No additional content available.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-full lg:w-[35%]">
            <BlogSidebar />
          </div>
        </div>
      </main>
    </section>
  );
};
}

export default BlogPage;
