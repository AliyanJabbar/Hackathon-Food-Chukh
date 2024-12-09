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
      <div className="pt-[100px] px-[7%] flex flex-row">
        {/* text content */}
        <div className="flex flex-col text-white space-y-4 w-[570px]">
          {/* head div */}
          <div>
            <h2
              className={`${greatVibes.className} text-[32px] text-orangeLike`}
            >
              About us
            </h2>
            <h1 className="text-[48px] font-sans font-bold text-wrap">
              <span className="text-orangeLike">We</span> Create the best foody
              product
            </h1>
          </div>
          {/* para div */}
          <p className="text-[16px] font-[300] w-[518px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          {/* points div*/}
          <div>
            <div className="flex flex-row items-end h-[26px] gap-5 my-5">
              <Image src={check} alt="check" />
              <p className="text-[18px] font-[300]">
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
            </div>
            <div className="flex flex-row items-end h-[26px] gap-5 my-5">
              <Image src={check} alt="check" />
              <p className="text-[18px] font-[300]">
                Quisque diam pellentesque bibendum non dui volutpat fringilla
              </p>
            </div>
            <div className="flex flex-row items-end h-[26px] gap-5 mt-5">
              <Image src={check} alt="check" />
              <p className="text-[18px] font-[300]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          {/* button */}
          <div>
            <RoundBtn text="Read More" link="/about" />
          </div>
        </div>
        {/* images content */}
        <div className="flex flex-col space-y-5">
          <Image className="col-span-2" src={img1} alt="Food img 1"/>
        <div className="flex flex-row ">
        <Image className="mr-3 w-[49%]" src={img2} alt="Food img 2"/>
        <Image className="mr-3 w-[49%]" src={img3} alt="Food img 3"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
