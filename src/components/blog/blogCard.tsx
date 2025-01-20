import Image from "next/image";
import Link from "next/link";
import { Blog } from "../../data/blogs";

const BlogCard: React.FC<Blog> = ({
  date,
  month,
  year,
  title,
  description,
  image,
  author,
  id,
}) => {
  return (
    <div className="text-txtBlack max-[767px]:flex max-[767px]:flex-col max-[767px]:items-center max-[767px]:justify-center">
      {/* Image Section */}
      <div className="relative">
        <Image
          width={870}
          height={520}
          src={image}
          alt={title}
          className="w-auto h-[200px] sm:h-[300px] md:h-[400px] lg:h-[520px] object-cover"
        />
        <div className="absolute top-4 left-4 bg-orangeLike text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-[4px] sm:py-[6px] rounded-md text-center">
          <p>{date}</p>
          <p className="font-[300] -mt-1">{month}</p>
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
            {`${month} ${date}, ${year} /`}
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
            {author}
          </p>
        </div>

        {/* Blog Title */}
        <h2 className="font-bold font-sans text-base sm:text-lg max-w-[850px] hover:text-orangeLike transition-colors">
          {title}
        </h2>

        <hr className="max-w-[700px] my-3 sm:my-5" />

        {/* Blog Description */}
        <p className="text-txtGray max-w-[280px] min-[450px]:max-w-[350px] text-sm sm:max-w-[450px] lg:max-w-[600px] mb-4">
          {description}
        </p>

        {/* Read More Button */}
        <Link
          href={`blogs/${id}`}
          className="text-orangeLike w-fit font-semibold py-2 px-5 rounded-md border border-orangeLike flex items-center gap-[6px] group"
        >
          <span>Read More</span>
          <Image
            width={16}
            height={16}
            src="/assets/icons/ArrowLineUpRight.png"
            alt="arrowRight"
            className="relative group-hover:animate-repeatMotion"
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
