import React from "react";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import play from "../../../public/assets/icons/play.png";
import Link from "next/link";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Home8 = () => {
  return (
    <div>
      <div className="relative py-[50px] md:py-[100px]">
        {/* Background with image */}
        <div className="absolute inset-0 bg-home7-bg mt-[50px] md:mt-[100px] bg-cover md:bg-[length:screen_500px] h-[350px] md:h-[550px] bg-no-repeat bg-center" />

        {/* Content container */}
        <div className="relative h-full py-[50px] md:py-[100px] px-[5%] md:px-[7%]">
          {/* Text Content */}
          <div className="text-white flex flex-col items-center sm:items-end space-y-4 max-w-full">
            <h2
              className={`${greatVibes.className} text-right text-[20px] md:text-[32px] text-orangeLike`}
            >
              Restaurant Active Process
            </h2>
            <h1 className="text-[28px] md:text-[48px] text-center sm:text-right md:w-[850px] font-sans font-bold leading-tight">
              <span className="text-orangeLike">We</span> Document Every Food{" "}
              <br className="hidden md:block" />
              Bean Process until it is saved
            </h1>

            <p className="text-[12px] md:text-[16px] text-center sm:text-right font-light max-w-full md:max-w-[650px] mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna,
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-7">
              {/* read more btn */}
              <Link href="/shop">
                <p className="py-3 md:py-4 px-6 md:px-11 rounded-full border hover:border-white hover:bg-orangeLike transition-colors duration-300 border-orangeLike bg-transparent text-[14px]">
                  Read More
                </p>
              </Link>
              {/* play video btn */}
              <Link href="/">
                <div className="flex items-center justify-center gap-3 md:gap-4 group">
                  <div className="p-4 md:p-5 bg-orangeLike rounded-full">
                    <Image src={play} alt="play" />
                  </div>
                  <h2 className="text-[14px] md:text-[16px] font-bold group-hover:text-orangeLike transition-colors duration-200">
                    Play Video
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home8;
