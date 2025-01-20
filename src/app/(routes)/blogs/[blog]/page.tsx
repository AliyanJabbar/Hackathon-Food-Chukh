import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import BlogSidebar from "@/components/blog/blogSideBar";
import Loading from "../../loading";
import { Blogs } from "@/data/blogs";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import CommentForm from "@/components/blog/commentSection";

type Props = {
  params: Promise<any>;
};

function getBlog(id: string) {
  return Blogs.find((b) => b.id === parseInt(id, 10)) || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const param = await params;
  const blog = getBlog(param.blog);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
      description: "Sorry, this blog post does not exist.",
      openGraph: {
        title: "Blog Not Found",
        description: "The blog you're looking for does not exist.",
        images: [],
      },
    };
  }

  return {
    title: blog.title || "Blog Post",
    description: blog.description || "Blog post description",
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
}

const BlogPage = async ({ params }: Props) => {
  const param = await params;
  const blog = getBlog(param.blog);

  if (!blog) return <Loading />;

  return (
    <section>
      <PageHeader heading="Blog Details" title="Blog details" />

      <main className="py-[50px] px-[5%] md:py-[100px] md:px-[7%]">
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
          <div className="w-full lg:w-[65%] text-txtBlack">
            <div className="relative">
              <Image
                width={870}
                height={520}
                src={blog.image}
                alt={blog.title}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[520px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-orangeLike text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-[4px] sm:py-[6px] rounded-md text-center">
                <p>{blog.date}</p>
                <p className="font-[300] -mt-1">{blog.month}</p>
              </div>
            </div>

            <div className="mt-4">
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
                  {`${Math.floor(Math.random() * 10) + 5} /`}
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

              <h2 className="font-bold font-sans text-lg sm:text-xl lg:text-2xl max-w-[850px] hover:text-orangeLike transition-colors">
                {blog.title}
              </h2>

              <hr className="max-w-[700px] my-3 sm:my-5" />

              <p className="text-txtGray w-full mb-4">{blog.description}</p>

              <div className="flex flex-col md:flex-row md:items-center md:justify-center w-full bg-orangeLike p-3 gap-3 my-10">
                <Image
                  src="/assets/icons/Quotes.png"
                  alt="Quotes"
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] mx-auto md:mx-0"
                />
                <p className="text-[16px] md:text-[20px] text-white font-bold font-sans text-center md:text-left">
                  {blog.quotation}
                </p>
              </div>

              <div className="space-y-5">
                {blog.content.map((para: string, ind: number) => {
                  if (ind === 1) {
                    return (
                      <div
                        key={ind}
                        className="flex flex-col items-center lg:flex-row gap-6 my-8"
                      >
                        <div className="lg:w-[55%] min-[1100px]:w-1/2">
                          {blog.content[1]
                            .split("\n\n")
                            .map((para: string, ind: number) => (
                              <p className="mb-3" key={ind}>
                                {para}
                              </p>
                            ))}
                        </div>
                        <Image
                          width={424}
                          height={366}
                          src="/assets/blog/blog20.png"
                          alt="Side Image"
                          className="w=auto max-w-[270px] sm:max-w-[400px] lg:w-[45%] min-[1100px]:w-1/2"
                        />
                      </div>
                    );
                  } else {
                    return <p key={ind}>{para}</p>;
                  }
                })}
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border border-outline text-txtBlack p-5 mt-8 gap-5">
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <span className="font-bold font-sans text-[18px]">Tags:</span>
                  <p>{blog.tags.join(", ")}</p>
                </div>

                <div className="flex items-center gap-5">
                  <span className="font-bold">Share:</span>
                  <Link href="https://www.facebook.com" target="_blank">
                    <FaFacebookF className="hover:text-orangeLike transition" />
                  </Link>
                  <Link href="https://twitter.com" target="_blank">
                    <FaTwitter className="hover:text-orangeLike transition" />
                  </Link>
                  <Link href="https://www.instagram.com" target="_blank">
                    <FaInstagram className="hover:text-orangeLike transition" />
                  </Link>
                  <Link href="https://www.pinterest.com" target="_blank">
                    <FaPinterest className="hover:text-orangeLike transition" />
                  </Link>
                </div>
              </div>

              <div>
                <CommentForm />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[35%]">
            <BlogSidebar />
          </div>
        </div>
      </main>
    </section>
  );
};

export default BlogPage;
