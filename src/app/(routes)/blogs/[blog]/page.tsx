import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import BlogSidebar from "@/components/blog/blogSideBar";
import Loading from "../../loading";

type Props = {
  params: Promise<any>;
};

async function getBlog(id: string) {
  const baseUrl = process.env.VERCEL_URL
    ? process.env.VERCEL_URL
    : process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  try {
    const response = await fetch(`${baseUrl}/api/blogs`, {
      next: { revalidate: 60 },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blog data: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.Blogs.find((b: any) => b.id === parseInt(id, 10));
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const param = await params;
    const blog = await getBlog(param.blog);

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
      title: blog?.title || "Blog Post",
      description: blog?.description || "Blog post description",
      openGraph: {
        title: blog?.title,
        description: blog?.description,
        images: [blog?.image],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post Not Found",
      description: "Sorry, there was an error fetching the metadata.",
      openGraph: {
        title: "Blog Not Found",
        description: "The blog you're looking for does not exist.",
        images: [],
      },
    };
  }
}


const BlogPage = async ({ params }: Props) => {
  const param = await params;
  const blog = await getBlog(param.blog);
  const sideContent =
    blog?.content?.filter((_: string, ind: number) => ind > 0 && ind < 3) || [];
  if (!blog) return <Loading />;

  return (
    <section>
      <PageHeader heading="Blog Details" title="Blog details" />
      <main className="py-[100px] px-[7%]">
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
          {/* Left Side - Main Content (65% width) */}
          <div className="w-full lg:w-[65%] text-txtBlack max-[767px]:flex max-[767px]:flex-col max-[767px]:items-center max-[767px]:justify-center">
            {/* Featured Image with Date Overlay */}
            <div className="relative">
              <Image
                width={870}
                height={520}
                src={blog.image}
                alt={blog.title}
                className="w-auto h-[200px] sm:h-[300px] md:h-[400px] lg:h-[520px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-orangeLike text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-[4px] sm:py-[6px] rounded-md text-center">
                <p>{blog.date}</p>
                <p className="font-[300] -mt-1">{blog.month}</p>
              </div>
            </div>

            {/* Blog Content Section */}
            <div>
              {/* Metadata Bar */}
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
                  {`${blog.comments.length + 1} /`}
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

              {/* Quote Section */}
              <div className="flex flex-row w-full bg-orangeLike p-3 gap-3 my-10">
                <Image
                  src="/assets/icons/Quotes.png"
                  alt="Quotes"
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px]"
                />
                <p className="text-[20px] text-white font-bold font-sans">
                  {blog.quotation}
                </p>
              </div>

              {/* Main Content */}
              <div className="space-y-5">
                {blog.content.map((para: string, ind: number) => (
                  <p key={ind}>{para}</p>
                ))}
              </div>

              {/* Bottom Split Section */}
              <div className="flex flex-col lg:flex-row gap-6 my-8">
                <div className="w-full lg:w-1/2">
                  <Image
                    width={500}
                    height={300}
                    src="/assets/blog/blog20.png"
                    alt="Side Image"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  {sideContent.map((para: string, index: number) => (
                    <p key={index} className="text-txtGray">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Sidebar */}
          <div className="w-full lg:w-[35%]">
            <BlogSidebar />
          </div>
        </div>
      </main>
    </section>
  );
};
export default BlogPage;
