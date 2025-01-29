import Image from "next/image";
import React from "react";
import Home1Image from "../../../public/assets/home1-img.png";
import { Great_Vibes } from "next/font/google";
import RoundBtn from "../microComponents/roundBtn";
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Home1 = () => {
  return (
    <div>
      <div className="relative min-h-screen -mt-[85px] pt-[85px]">
        {/* Background with image */}
        <div className="absolute inset-0 bg-home1-back bg-[length:screen_950px] bg-no-repeat bg-center" />

        {/* blackish overlay */}
        <div className="absolute inset-0 bg-blackish opacity-90" />

        {/* Content container */}
        <div className="relative z-10 h-full py-[100px]">
          <div className="px-[5%] flex flex-col md:flex-row justify-between gap-10">
            {/* Left Section: Social Icons & Text */}
            <div className="flex flex-row gap-10 items-center md:items-start">
              {/* Social Icons */}
              <div className="flex flex-col items-center  space-y-8">
                {/* Top line */}
                <div className="h-[80px] md:h-[158px] bg-white w-[1px]" />

                {/* Icons */}
                <FaFacebookF className="text-white hover:text-orangeLike cursor-pointer transition-colors duration-150 text-[20px]" />
                <FaTwitter className="text-white hover:text-orangeLike cursor-pointer transition-colors duration-150 text-[20px]" />
                <FaPinterest className="text-white hover:text-orangeLike cursor-pointer transition-colors duration-150 text-[20px]" />

                {/* Bottom line */}
                <div className="h-[80px] md:h-[147px] bg-white w-[1px]" />
              </div>

              {/* Text Content */}
              <div className="text-white text-center md:text-left flex flex-col space-y-4 max-w-full">
                <div>
                  <h2
                    className={`${greatVibes.className} text-[24px] md:text-[32px] text-orangeLike`}
                  >
                    Its Quick & Amusing!
                  </h2>
                  <h1 className="text-[36px] md:text-[60px] font-sans font-bold leading-tight">
                    <span className="text-orangeLike">Th</span>e Art of Speed
                    Food Quality
                  </h1>
                </div>
                <p className="text-[14px] md:text-[16px] font-light max-w-[90%] md:max-w-[420px] mx-auto md:mx-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius sed pharetra dictum neque massa congue
                </p>
                <div className="flex justify-center md:justify-start">
                  <RoundBtn text="See Menu" link="/menu" />
                </div>
              </div>
            </div>

            {/* Right Section: Image */}
            <div className="flex justify-center items-center">
              <Image
                src={Home1Image}
                alt="Home1Image"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
