import React from "react";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import img1 from "../../../public/assets/home3-img.png"
import img2 from "../../../public/assets/home3-img2.png"
import img3 from "../../../public/assets/home3-img3.png"
import img4 from "../../../public/assets/home3-img4.png"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Home3 = () => {
  return (
    <div className="bg-blackish text-white pt-[100px] px-[7%] space-y-12 bg-grassy-bg bg-[length:444px_532px] bg-[position:125%_500%] w-full bg-no-repeat">
      {/* text div */}
      <div className="text-center mx-auto">
        <h2 className={`${greatVibes.className} text-[32px] text-orangeLike`}>
          Food Category
        </h2>
        <h1 className="text-[48px] font-sans font-bold text-wrap">
          <span className="text-orangeLike">Ch</span>oose food item
        </h1>
      </div>
      {/* images div */}
      <div className="grid grid-cols-4 gap-7">
        <Image className="w-[300px] h-[320px]" src={img1} alt="food category 1"/>
        <Image className="w-[300px] h-[320px]" src={img2} alt="food category 2"/>
        <Image className="w-[300px] h-[328px]" src={img3} alt="food category 3"/>
        <Image className="w-[300px] h-[320px]" src={img4} alt="food category 4"/>
      </div>
    </div>
  );
};

export default Home3;
