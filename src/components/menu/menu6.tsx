import React from "react";
import img1 from "../../../public/assets/menu/menu6-img1.png";
import img2 from "../../../public/assets/menu/menu6-img2.png";
import img3 from "../../../public/assets/menu/menu6-img3.png";
import img4 from "../../../public/assets/menu/menu6-img4.png";
import img5 from "../../../public/assets/menu/menu6-img5.png";
import img6 from "../../../public/assets/menu/menu6-img6.png";
import Image from "next/image";

const Menu6 = () => {
  return (
    <div className="px-[7%] py-[100px]">
      {/* text container */}
      <div className="text-txtBlack text-center ">
        <p className="text-[18px] font-[300] ">Partners & Clients</p>
        <h1 className="text-[48px] font-bold">We work with the best pepole</h1>
      </div>
      {/* images container */}
      <div className="flex flex-row gap-10 my-16">
        <Image src={img1} alt="partner 1"/>
        <Image src={img2} alt="partner 2"/>
        <Image src={img3} alt="partner 3"/>
        <Image src={img4} alt="partner 4"/>
        <Image src={img5} alt="partner 5"/>
        <Image src={img6} alt="partner 6"/>
      </div>
    </div>
  );
};

export default Menu6;
