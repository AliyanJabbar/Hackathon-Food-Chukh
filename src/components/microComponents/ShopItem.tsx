import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useCart } from "@/context/CartContext";
const ShopItem = (props: {
  title: string;
  price: number;
  src: string;
  link: number;
  originalPrice?: number;
  RemoveOpt?: boolean;
}) => {
  const { removeFromWish } = useCart();

  return (
    <Link href={`/shop/${props.link}`} className="cursor-pointer group">
      <div className="lg:w-1/4 md:w-1/2 p-3 w-[270px] sm:w-[312px]">
        {/* image */}
        <div className="block relative h-[225px] w-[258px] sm:h-[267px] sm:w-[300px] overflow-hidden">
          <Image
            alt={props.title}
            className="object-cover cursor-pointer object-center w-full h-full block group-hover:scale-110 transition-all duration-300"
            src={props.src}
            width={312}
            height={267}
          />
        </div>
        {/* text */}
        <div className="mt-4 flex justify-between">
          <div>
            <h2 className="text-txtBlack md:text-nowrap text-[18px] font-bold">
              {props.title}
            </h2>
            <p className="mt-1 text-orangeLike text-[16px] font-[300]">
              ${props.price}.00
              <span className=" text-txtlight line-through mx-3">
                {props.originalPrice ? `$${props.originalPrice}.00` : ""}
              </span>
            </p>
          </div>

          {props.RemoveOpt && (
            <RiDeleteBin2Line
              onClick={() => {
                removeFromWish(props.link);
              }}
              className="text-red-500 hover:text-red-700"
              size={25}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default ShopItem;
