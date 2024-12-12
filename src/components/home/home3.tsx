import React from "react";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import img1 from "../../../public/assets/home3-img.png";
import img2 from "../../../public/assets/home3-img2.png";
import img3 from "../../../public/assets/home3-img3.png";
import img4 from "../../../public/assets/home3-img4.png";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Home3 = () => {
  const items = [
    { src: img1, category: "Chinese Food", discount: "30% OFF" },
    { src: img2, category: "Burger", discount: "25% OFF" },
    { src: img3, category: "Salads", discount: "10% OFF" },
    { src: img4, category: "Desserts", discount: "15% OFF" },
  ];

  return (
    <div className="bg-blackish text-white pt-10 lg:pt-[100px] px-6 lg:px-[7%] space-y-12 bg-grassy-bg bg-[length:444px_532px] bg-[position:125%_500%] w-full bg-no-repeat">
      {/* Text Section */}
      <div className="text-center mx-auto">
        <h2
          className={`${greatVibes.className} text-[24px] lg:text-[32px] text-orangeLike`}
        >
          Food Category
        </h2>
        <h1 className="text-[32px] lg:text-[48px] font-sans font-bold">
          <span className="text-orangeLike">Ch</span>oose food item
        </h1>
      </div>
      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <Image
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              src={item.src}
              alt={`food category ${index + 1}`}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-[16px] lg:text-[20px] font-bold">
                {item.category}
              </p>
              <p className="text-orangeLike text-[14px] lg:text-[18px] font-semibold">
                {item.discount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home3;
