import React from "react";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import check from "../../../public/assets/icons/check-icon.png";
import RoundBtn from "../microComponents/roundBtn";
import img1 from "../../../public/assets/home2-img.png";
import img2 from "../../../public/assets/home2-img2.png";
import img3 from "../../../public/assets/home2-img3.png";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Home2 = () => {
  return (
    <div className="bg-blackish">
      <div className="pt-10 px-6 lg:pt-[100px] lg:px-[7%] flex flex-col lg:flex-row gap-10">
        {/* Text Content */}
        <div className="flex flex-col text-white lg:w-[570px]">
          {/* Head Section */}
          <div>
            <h2
              className={`${greatVibes.className} text-[24px] lg:text-[32px] text-orangeLike`}
            >
              About us
            </h2>
            <h1 className="text-[32px] lg:text-[48px] leading-[56px] font-sans font-bold">
              <span className="text-orangeLike">We</span> Create the best foody
              product
            </h1>
          </div>
          {/* Paragraph Section */}
          <p className="text-[14px] mt-7 lg:text-[16px] font-[300] lg:w-[518px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          {/* Points Section */}
          <div className="mt-7">
            {[
              "Lacus nisi, et ac dapibus sit eu velit in consequat.",
              "Quisque diam pellentesque bibendum non dui volutpat fringilla.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-3 mb-5">
                <Image src={check} alt="check" className="w-5 h-5" />
                <p className="text-[14px] lg:text-[18px] font-[300]">{text}</p>
              </div>
            ))}
          </div>
          {/* Button */}
          <div>
            <RoundBtn text="Read More" link="/about" />
          </div>
        </div>
        {/* Images Content */}
        <div className="flex flex-col gap-5 lg:gap-10">
          <Image className="w-full object-cover" src={img1} alt="Food img 1" />
          <div className="flex flex-col sm:flex-row gap-5">
            <Image
              className="w-full sm:w-[49%] object-cover"
              src={img2}
              alt="Food img 2"
            />
            <Image
              className="w-full sm:w-[49%] object-cover"
              src={img3}
              alt="Food img 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
