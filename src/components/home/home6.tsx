import React from "react";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
// chefs
import chef1 from "../../../public/assets/home6-chef1.png";
import chef2 from "../../../public/assets/home6-chef2.png";
import chef3 from "../../../public/assets/home6-chef3.png";
import chef4 from "../../../public/assets/home6-chef4.png";
import Link from "next/link";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Home6 = () => {
  return (
    <section className="px-[7%] py-[100px]">
      {/* text portion */}
      <div className="flex flex-col justify-center items-center">
        <h2
          className={`${greatVibes.className} text-[24px] md:text-[32px] text-orangeLike`}
        >
          Chefs
        </h2>
        <h1 className="text-[36px] md:text-[48px] font-sans font-bold leading-tight text-white">
          <span className="text-orangeLike">Me</span>et Our Chef
        </h1>
      </div>
      {/* chefs with images */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
        {/* chef 1 */}
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src={chef1}
            alt="chef1"
            className="relative w-[312px] h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-110"
          />
          {/* chef details */}
          <div className="bg-white absolute bottom-0 left-0 w-[180px] py-4 px-4 transition-opacity duration-300 rounded-b-lg">
            <h1 className="text-txtBlack font-bold">D.Estwood</h1>
            <p className="text-txtBlack text-sm">Chief Chef</p>
          </div>
        </div>
        {/* chef 2 */}
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src={chef2}
            alt="chef2"
            className="relative w-[312px] h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-110"
          />
          {/* chef details */}
          <div className="bg-white absolute bottom-0 left-0 w-[180px] py-4 px-4 transition-opacity duration-300 rounded-b-lg">
            <h1 className="text-txtBlack font-bold">D.Scoriesh</h1>
            <p className="text-txtBlack text-sm">Assistant Chef</p>
          </div>
        </div>
        {/* chef 3 */}
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src={chef3}
            alt="chef3"
            className="relative w-[312px] h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-110"
          />
          {/* chef details */}
          <div className="bg-white absolute bottom-0 left-0 w-[180px] py-4 px-4 transition-opacity duration-300 rounded-b-lg">
            <h1 className="text-txtBlack font-bold">M. William</h1>
            <p className="text-txtBlack text-sm">Advertising Chef</p>
          </div>
        </div>
        {/* chef 4 */}
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src={chef4}
            alt="chef4"
            className="relative w-[312px] h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-110"
          />
          {/* chef details */}
          <div className="bg-white absolute bottom-0 left-0 w-[180px] py-4 px-4 transition-opacity duration-300 rounded-b-lg">
            <h1 className="text-txtBlack font-bold">W.Readfroad</h1>
            <p className="text-txtBlack text-sm">Chef</p>
          </div>
        </div>
      </div>
      {/* see more btn */}
      <div className="flex items-center justify-center mt-14 ">
        <Link
          href="/"
          className="py-3 px-7 border border-orangeLike bg-transparent text-[16px] hover:text-orangeLike transition-colors duration-300 text-white rounded-full"
        >
          See More
        </Link>
      </div>
    </section>
  );
};

export default Home6;
