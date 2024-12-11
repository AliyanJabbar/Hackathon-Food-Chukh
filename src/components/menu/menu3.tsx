import Image from "next/image";
import React from "react";
import img1 from "../../../public/assets/menu/menu3-img1.png";
import img2 from "../../../public/assets/menu/menu3-img2.png";
import img3 from "../../../public/assets/menu/menu3-img3.png";
import img4 from "../../../public/assets/menu/menu3-img4.png";


const Menu3 = () => {
  return (
    <div className="bg-white pt-10 lg:pt-[100px]">
      <div className="relative p-6 lg:p-[25px]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-home4-bg bg-[length:100%_468px] lg:bg-[length:screen_468px] bg-center bg-no-repeat" />
        {/* blackish Overlay */}
        <div className="absolute inset-0 bg-blackish opacity-90" />

        {/* Content Container */}
        <div className="relative z-10 h-full py-10 lg:py-[100px] px-4 lg:px-[7%]">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-[35px] min-[1200px]:gap-[100px]">
            <Image
              className="w-[150px] h-auto lg:w-[180px] xl:w-[200px]"
              src={img1}
              alt="client 1"
            />
            <Image
              className="w-[150px] h-auto lg:w-[180px] xl:w-[200px]"
              src={img2}
              alt="client 2"
            />
            <Image
              className="w-[150px] h-auto lg:w-[180px] xl:w-[200px]"
              src={img3}
              alt="client 3"
            />
            <Image
              className="w-[150px] h-auto lg:w-[180px] xl:w-[200px]"
              src={img4}
              alt="client 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu3;
