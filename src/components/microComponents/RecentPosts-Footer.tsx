import React from "react";
import img from "../../../public/assets/recent post footer.png";
import Image from "next/image";
const RecentPostsFooter = (props: { heading: string; date: string }) => {
  return (
    <div className="flex flex-row gap-4">
      {/* Image */}
      <div>
        <Image src={img} alt="Image"/>
      </div>
      {/* Text */}
      <div className="flex flex-col justify-between">
        <h1 className="w-[180px] text-wrap">{props.heading}</h1>
        <p className="opacity-[49%]">{props.date}</p>
      </div>
    </div>
  );
};

export default RecentPostsFooter;
