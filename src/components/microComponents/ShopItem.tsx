import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
const ShopItem = (props: {
  title: string;
  price: string;
  src: StaticImageData;
  link: number;
  RP?: string;
}) => {
  return (
      <div className="lg:w-1/4 md:w-1/2 p-3 w-[312px] group">
        <Link
          href={`/shop/${props.link}`}
          className="block relative h-[267px] w-auto rounded overflow-hidden"
        >
          <Image
            alt={props.title}
            className="object-cover object-center w-full h-full block group-hover:scale-110 transition-all duration-300"
            src={props.src}
          />
        </Link>
        <div className="mt-4">
          <h2 className="text-txtBlack text-[18px] font-bold">{props.title}</h2>
          <p className="mt-1 text-orangeLike text-[16px] font-[300]">
            {props.price}
            <span className=" text-txtlight line-through mx-3">
              {props.RP ? props.RP : ""}
            </span>
          </p>
        </div>
      </div>
  );
};

export default ShopItem;