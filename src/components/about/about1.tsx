import React from "react";
import img from "../../../public/assets/about/about1.png";
import Image from "next/image";
import video from "../../../public/assets/about/Video Button.png";

import { Miniver } from "next/font/google";
import Button from "../microComponents/button";
import Link from "next/link";

const miniver = Miniver({
  weight: ["400"],
  subsets: ["latin"],
});

const About1 = () => {
  return (
    <div className="px-[7%] pt-[100px] flex flex-row gap-28">
      {/* left Image */}
      <div>
        <Image src={img} alt="Food img" className="w-[569px] h-[634px]" />
      </div>
      {/* Right Text */}
      <div className="flex flex-col items-start justify-start text-left pt-[160px]">
        {/* About us Heading */}
        <div className="flex flex-row items-center justify-start w-full">
          <h2
            className={`${miniver.className} text-[18px] font-normal text-orangeLike`}
          >
            About us
          </h2>
          <div className="w-[34px] bg-orangeLike h-[1.5px] mt-2 ml-2 shadow-2xl" />
        </div>
        {/* Main Heading */}
        <h1 className="text-txtBlack text-[48px] font-bold w-[550px] leading-[56px]">
          Food is an important part Of a balanced Diet
        </h1>
        {/* Paragraph */}
        <p className="text-txtGray text-[16px] w-[550px] my-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <div className="flex flex-row items-center gap-4">
          {/* Button */}
          <Button text="Show more" link="/about" />
          {/* video  */}
          <Link href="/about">
            <Image className="w-[168px] h-[60px]" src={video} alt="video" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About1;
