import Image from "next/image";
import React from "react";
import chef from "../../../public/assets/icons/chef icon.png";
import food from "../../../public/assets/icons/food icon.png";
import spoons from "../../../public/assets/icons/spoon icon.png";
import pizza from "../../../public/assets/icons/pizza icon.png";

const Menu3 = () => {
  return (
    <div className="bg-blackish pt-10 lg:pt-[100px]">
      <div className="relative p-6 lg:p-[25px]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-clients-bg bg-[length:100%_468px] lg:bg-[length:screen_468px] bg-center bg-no-repeat" />
        {/* blackish Overlay */}
        <div className="absolute inset-0 bg-blackish opacity-90" />

        {/* Content Container */}
        <div className="relative z-10 h-full py-10 lg:py-[100px] px-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-[35px] min-[1100px]:gap-[50px] xl:gap-[100px]">
            <div className="flex flex-col space-y-2 sm:space-y-3 items-center justify-center">
              <Image
                className="w-[90px] sm:w-[110px] md:w-[130px] xl:w-[140px] h-auto"
                src={chef}
                alt="Professional Chefs"
              />
              <h2 className="text-white text-[16px] sm:text-[20px] md:text-[24px] font-sans font-bold text-center">
                Professional Chefs
              </h2>
              <h1 className="text-white text-[24px] sm:text-[32px] md:text-[40px] font-sans font-bold">
                420
              </h1>
            </div>
            <div className="flex flex-col space-y-2 sm:space-y-3 items-center justify-center">
              <Image
                className="w-[90px] sm:w-[110px] md:w-[130px] xl:w-[140px] h-auto"
                src={food}
                alt="Items Of Food"
              />
              <h2 className="text-white text-[16px] sm:text-[20px] md:text-[24px] font-sans font-bold text-center">
                Items Of Food
              </h2>
              <h1 className="text-white text-[24px] sm:text-[32px] md:text-[40px] font-sans font-bold">
                320
              </h1>
            </div>
            <div className="flex flex-col space-y-2 sm:space-y-3 items-center justify-center">
              <Image
                className="w-[90px] sm:w-[110px] md:w-[130px] xl:w-[140px] h-auto"
                src={spoons}
                alt="Years Of Experienced"
              />
              <h2 className="text-white text-[16px] sm:text-[20px] md:text-[24px] font-sans font-bold text-center">
                Years Of Experienced
              </h2>
              <h1 className="text-white text-[24px] sm:text-[32px] md:text-[40px] font-sans font-bold">
                30+
              </h1>
            </div>
            <div className="flex flex-col space-y-2 sm:space-y-3 items-center justify-center">
              <Image
                className="w-[90px] sm:w-[110px] md:w-[130px] xl:w-[140px] h-auto"
                src={pizza}
                alt="Happy Customers"
              />
              <h2 className="text-white text-[16px] sm:text-[20px] md:text-[24px] font-sans font-bold text-center">
                Happy Customers
              </h2>
              <h1 className="text-white text-[24px] sm:text-[32px] md:text-[40px] font-sans font-bold">
                220
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu3;
