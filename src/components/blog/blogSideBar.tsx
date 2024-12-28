import Image from "next/image";
import Link from "next/link";
import se from "../../../public/assets/icons/MagnifyingGlass-icon.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const BlogSidebar = () => {
  return (
    <aside className="px-4">
      {/* Search Section */}
      <div className="mb-6">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search Your Keyword..."
            className="w-full border border-outline h-[50px] py-2 px-4 text-sm placeholder-txtVlight focus:outline-none focus:border-orangeLike"
          />
          <button className="flex items-center justify-center absolute top-0 right-0 h-[50px] w-[50px] bg-orangeLike">
            <Image
              src="/assets/icons/MagnifyingGlass-icon.png"
              alt="Search Icon"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>

      {/* Author Section */}
      <div className="bg-white border border-outline shadow-sm p-5 min-[1200px]:p-7 text-center mb-6">
        <Image
          src="/assets/blog/blogger.png"
          alt="Author"
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />
        <h3 className="font-bold font-sans text-txtBlack text-[20px] mt-3">
          Prince Miyako
        </h3>
        <p className="text-[16px] text-txtlight mb-2">Blogger / Photographer</p>
        {/* Rating */}
        <div className="flex items-center justify-center my-2 rating rating-sm space-x-[8px]">
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orangeLike"
            disabled
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orangeLike"
            disabled
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orangeLike"
            disabled
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orangeLike"
            disabled
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orangeLike"
            disabled
            defaultChecked
          />
          <p className="text-txtlight text-[14px]">(1 Review)</p>
        </div>
        <p className="text-sm text-txtlight">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis
          distinctio, odio eligendi suscipit reprehenderit atque
        </p>
        {/* links */}
        <div className="flex justify-center gap-4 mt-5">
          {[
            { platform: "Facebook", icon: <FaFacebookF />, link: "#" },
            { platform: "Twitter", icon: <FaTwitter />, link: "#" },
            { platform: "Instagram", icon: <FaInstagram />, link: "#" },
            { platform: "Pinterest", icon: <FaPinterestP />, link: "#" },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-txtBlack hover:text-orangeLike transition text-[18px]"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="bg-white border border-outline shadow-sm p-5 min-[1200px]:p-7 mb-6">
        <h4 className="font-bold font-sans text-txtBlack text-[20px] mb-4">
          Recent Post
        </h4>
        {[14, 15, 16, 17].map((post, index) => (
          <div key={index}>
            <div className="flex items-center mb-4">
              <Image
                src={`/assets/blog/blog${post}.png`}
                alt={`Recent Post ${index + 1}`}
                width={90}
                height={100}
                className="rounded-md"
              />
              <div className="flex flex-col space-y-3 ml-4">
                <p className="text-xs text-txtlight">June 22, 2020</p>
                <p className="text-sm text-txtGray font-semibold">
                  Lorem ipsum dolor sit cing elit, sed do.
                </p>
              </div>
            </div>
            <hr className="w-full py-2" />
          </div>
        ))}
      </div>

      {/* Filter By Menu Section */}
      <div className="bg-white border border-outline shadow-sm p-5 min-[1200px]:p-7 mb-6">
        <h4 className="font-bold font-sans text-txtBlack text-[20px] mb-4">
          Filter By Menu
        </h4>
        <ul className="text-sm text-gray-600 space-y-4">
          {[
            {
              name: "Chicken Fry",
              image: 9,
              count: Math.floor(Math.random() * 50),
            },
            {
              name: "Burger Food",
              image: 10,
              count: Math.floor(Math.random() * 50),
            },
            {
              name: "Pizza",
              image: 11,
              count: Math.floor(Math.random() * 50),
            },
            {
              name: "Fresh Fruits",
              image: 12,
              count: Math.floor(Math.random() * 50),
            },
            {
              name: "Vegetables",
              image: 13,
              count: Math.floor(Math.random() * 50),
            },
          ].map((item, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={`/assets/blog/blog${item.image}.png`}
                  alt={item.name}
                  width={67}
                  height={62}
                  className="object-cover rounded-md"
                />
                <span className="font-bold text-[16px] font-sans text-txtBlack">
                  {item.name}
                </span>
              </div>
              <span className="text-txtBlack text-[15px] font-sans ">
                {item.count >= 10 ? item.count : 10 + item.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Tags Section */}
      <div className="bg-white border border-outline shadow-sm p-5 min-[1200px]:p-7 mb-6">
        <h4 className="font-bold font-sans text-txtBlack text-[20px] mb-4">
          Popular Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Sandwich",
            "Tikka",
            "Bbq",
            "Restaurant",
            "Chicken Sharma",
            "Pizza",
            "Health",
            "Burger",
            "Food",
            "Chicken",
          ].map((tag, index) => (
            <Link
              key={index}
              href="#"
              className="text-sm px-[15px] py-[6px] text-txtGray border border-outline hover:border-orangeLike hover:bg-orangeLike hover:text-white transition"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="bg-white border border-outline shadow-sm p-5 min-[1200px]:p-7 mb-6">
        <h4 className="font-bold font-sans text-txtBlack text-[20px] mb-4">
          Photo Gallery
        </h4>
        <div className="grid grid-cols-3 gap-3">
          {[8, 6, 7, 18, 5, 8].map((image, index) => (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={`/assets/blog/blog${image}.png`}
            >
              <div
                key={index}
                className="relative group"
              >
                <Image
                  src={`/assets/blog/blog${image}.png`}
                  alt={`Gallery Image ${image}`}
                  width={110}
                  height={92}
                  className="transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-blackish opacity-0 group-hover:opacity-80 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-white text-xl">👁</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* follow us section */}
      <div className="bg-white border border-outline shadow-sm p-5 min-[1200px]:p-7">
        <h4 className="font-bold font-sans text-txtBlack text-[20px] mb-4">
          Follow Us
        </h4>
        {/* links */}
        <div className="flex justify-evenly">
          {[
            { platform: "Twitter", icon: <FaTwitter />, link: "#" },
            { platform: "YouTube", icon: <FaYoutube />, link: "#" },
            { platform: "Pinterest", icon: <FaPinterestP />, link: "#" },
            { platform: "Instagram", icon: <FaInstagram />, link: "#" },
            { platform: "Facebook", icon: <FaFacebookF />, link: "#" },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-faqEntry text-txtGray hover:text-white hover:bg-orangeLike transition"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
