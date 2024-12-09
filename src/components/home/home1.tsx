import Image from "next/image";
import React from "react";
import Home1Image from "../../../public/assets/home1-img.png";
import { Great_Vibes } from "next/font/google";
import RoundBtn from "../microComponents/roundBtn";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Home1 = () => {
  return (
    <div>
      <div className="relative min-h-screen -mt-[85px] pt-[85px]">
        {/* Background with image */}
        <div className="absolute inset-0 bg-home1-back bg-[length:screen_950px] bg-no-repeat bg-center " />

        {/* Blackish overlay */}
        <div className="absolute inset-0 bg-blackish opacity-90" />

        {/* Content container */}
        <div className="relative z-10 h-full py-[100px]">
          <div className="px-[7%] flex flex-row justify-between gap-5">
            <div className="flex flex-row gap-10">
              {/* links */}
              <div className="flex flex-col -ml-[50px] space-y-8 -translate-y-20">
                {/* top line */}
                <div className="m-2 h-[158px] bg-white w-[1px]" />

                {/* facebook */}
                <FaFacebookF className="text-white hover:text-orangeLike cursor-pointer transition-colors duration-150" />

                {/* twitter */}
                <FaTwitter className="text-white hover:text-orangeLike cursor-pointer transition-colors duration-150" />

                {/* pinterest */}
                <FaPinterest className="text-white hover:text-orangeLike cursor-pointer transition-colors duration-150" />

                {/* bottom line */}
                <div className="m-2 h-[147px] bg-white w-[1px]" />
              </div>
              {/* text content */}
              <div className="text-white flex flex-col space-y-4">
                <div>
                  <h2
                    className={`${greatVibes.className} text-[32px] text-orangeLike`}
                  >
                    Its Quick & Amusing!
                  </h2>
                  <h1 className="text-[60px] font-sans font-bold">
                    <span className="text-orangeLike">Th</span>e Art of speed
                    food Quality
                  </h1>
                </div>
                <p className="text-[16px] font-[300] w-[420px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius sed pharetra dictum neque massa congue
                </p>
                <RoundBtn text="See Menu" link="/menu" />
              </div>
            </div>
            {/* image */}
            <div>
              <Image src={Home1Image} alt="Home1Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;