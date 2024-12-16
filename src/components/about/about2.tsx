import Image from "next/image";
import React from "react";
import bgImg from "../../../public/assets/about/about2-bg.png";
import Student from "../../../public/assets/about/Student-icon.png";
import Coffee from "../../../public/assets/about/Coffee-icon.png";
import Person from "../../../public/assets/about/Person-icon.png";

const About2 = () => {
  return (
    <div className="py-[50px] md:py-[150px] px-[5%] md:px-[7%]">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Heading Section */}
        <h1 className="text-[24px] sm:text-[28px] md:text-[48px] font-bold font-sans text-txtBlack">
          Why Choose Us
        </h1>
        <p className="text-[14px] md:text-[16px] text-txtGray w-full sm:w-[90%] md:w-[580px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>

        {/* Background Image */}
        <Image
          src={bgImg}
          alt="Background"
          className="my-[30px] md:my-[50px] w-full max-w-[400px] md:max-w-none"
        />

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 mt-[20px]">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-4 lg">
            <Image
              src={Student}
              alt="Student"
              className="w-[50px] md:w-[60px]"
            />
            <h2 className="text-txtBlack text-[18px] md:text-[24px] font-bold font-sans mt-4 mb-3">
              Best Chef
            </h2>
            <p className="text-[14px] md:text-[16px] text-txtGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-4  ">
            <Image src={Coffee} alt="Coffee" className="w-[50px] md:w-[60px]" />
            <h2 className="text-txtBlack text-[18px] md:text-[24px] font-bold font-sans mt-4 mb-3">
              120 Item Food
            </h2>
            <p className="text-[14px] md:text-[16px] text-txtGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-4 ">
            <Image src={Person} alt="Person" className="w-[50px] md:w-[60px]" />
            <h2 className="text-txtBlack text-[18px] md:text-[24px] font-bold font-sans mt-4 mb-3">
              Clean Environment
            </h2>
            <p className="text-[14px] md:text-[16px] text-txtGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
