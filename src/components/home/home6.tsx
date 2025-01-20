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
    <section className="px-6 sm:px-10 lg:px-[7%] pt-12 sm:pt-[100px]">
      {/* Text portion */}
      <div className="flex flex-col justify-center items-center text-center">
        <h2
          className={`${greatVibes.className} text-[20px] sm:text-[24px] md:text-[32px] text-orangeLike`}
        >
          Chefs
        </h2>
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-sans font-bold leading-tight text-white">
          <span className="text-orangeLike">Me</span>et Our Chef
        </h1>
      </div>
      {/* Chefs with images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-12">
        {/* Chef Card Template */}
        {[ 
          { src: chef1, name: "D.Estwood", role: "Chief Chef" },
          { src: chef2, name: "D.Scoriesh", role: "Assistant Chef" },
          { src: chef3, name: "M. William", role: "Advertising Chef" },
          { src: chef4, name: "W.Readfroad", role: "Chef" },
        ].map((chef, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={chef.src}
              alt={chef.name}
              className="relative w-full h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-110"
            />
            {/* Chef Details */}
            <div className="bg-white absolute bottom-0 left-0 w-full sm:w-[180px] py-4 px-4 transition-opacity duration-300 rounded-b-lg opacity-90 group-hover:opacity-100">
              <h1 className="text-txtBlack font-bold">{chef.name}</h1>
              <p className="text-txtBlack text-sm">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
      {/* See More Button */}
      <div className="flex items-center justify-center mt-10 sm:mt-14">
        <Link
          href="/chefs"
          className="py-3 px-7 border border-orangeLike bg-transparent text-[14px] sm:text-[16px] hover:text-orangeLike transition-colors duration-300 text-white rounded-full"
        >
          See More
        </Link>
      </div>
    </section>
  );
};

export default Home6;
