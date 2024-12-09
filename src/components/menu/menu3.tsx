import Image from "next/image";
import React from "react";
import img1 from "../../../public/assets/menu/menu3-img1.png";
import img2 from "../../../public/assets/menu/menu3-img2.png";
import img3 from "../../../public/assets/menu/menu3-img3.png";
import img4 from "../../../public/assets/menu/menu3-img4.png";

const Menu3 = () => {
  return (
    <div className=" bg-transparent pt-[100px]">
      <div className="relative p-[11px]">
        {/* bg with image */}
        <div className="absolute inset-0 bg-home4-bg bg-[length:screen_468px] bg-center bg-no-repeat" />
        {/* Blackish overlay */}
        <div className="absolute inset-0 bg-blackish opacity-90" />

        {/* Content container */}
        <div className="relative z-10 h-full py-[100px] px-[7%]">
            <div className="flex flex-row">
              <Image
                className=" mx-10"
                src={img1}
                alt="client 1"
              />
              <Image
                className=" mx-10"
                src={img2}
                alt="client 2"
              />
              <Image
                className=" mx-10"
                src={img3}
                alt="client 3"
              />
              <Image
                className=" mx-10"
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
