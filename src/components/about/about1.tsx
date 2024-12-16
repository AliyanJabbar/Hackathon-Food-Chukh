import React from "react";
import img from "../../../public/assets/about/about1.png";
import Image from "next/image";
import play from "../../../public/assets/icons/play.png"

import { Miniver } from "next/font/google";
import Button from "../microComponents/button";
import Link from "next/link";

const miniver = Miniver({
  weight: ["400"],
  subsets: ["latin"],
});

const About1 = () => {
  return (
    <div className="px-4 pt-10 flex flex-col gap-8 md:flex-row md:gap-12 lg:px-[7%] lg:pt-[100px] lg:gap-28">
      {/* Left Image */}
      <div className="flex justify-center md:justify-start">
        <Image 
          src={img} 
          alt="Food img" 
          className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[569px] h-auto"
        />
      </div>
      {/* Right Text */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left pt-0 md:pt-[100px] lg:pt-[160px]">
        {/* About us Heading */}
        <div className="flex items-center justify-center md:justify-start w-full">
          <h2
            className={`${miniver.className} text-[16px] md:text-[18px] font-normal text-orangeLike`}
          >
            About us
          </h2>
          <div className="w-[20px] md:w-[34px] bg-orangeLike h-[1.5px] mt-2 ml-2 shadow-2xl" />
        </div>
        {/* Main Heading */}
        <h1 className="text-txtBlack text-[24px] md:text-[36px] lg:text-[48px] font-bold leading-[32px] md:leading-[44px] lg:leading-[56px] w-full max-w-[350px] md:max-w-[500px] lg:max-w-[550px]">
          Food is an important part Of a balanced Diet
        </h1>
        {/* Paragraph */}
        <p className="text-txtGray text-[14px] md:text-[16px] w-full max-w-[350px] md:max-w-[500px] lg:max-w-[550px] my-4 md:my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-5">
          {/* Button */}
          <Button text="Show more" link="/about" />
          
          {/* watch video btn */}
          <Link href="/">
                <div className="flex items-center justify-center gap-3 md:gap-4 group">
                  <div className="p-4 md:p-5 bg-orangeLike rounded-full">
                    <Image src={play} alt="play" />
                  </div>
                  <h2 className="text-[14px] md:text-[16px] font-bold group-hover:text-orangeLike transition-colors duration-200">
                    Watch Video
                  </h2>
                </div>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default About1;