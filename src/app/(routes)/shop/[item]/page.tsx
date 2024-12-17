"use client";
import PageHeader from "@/components/page-header";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import food1 from "../../../../../public/assets/shop/item1.png";
import food2 from "../../../../../public/assets/shop/item2.png";
import food3 from "../../../../../public/assets/shop/item3.png";
import food4 from "../../../../../public/assets/shop/item4.png";
import food5 from "../../../../../public/assets/shop/item5.png";
import food6 from "../../../../../public/assets/shop/item6.png";
import food7 from "../../../../../public/assets/shop/item7.png";
import food8 from "../../../../../public/assets/shop/item8.png";
import food9 from "../../../../../public/assets/shop/item9.png";
import item1 from "../../../../../public/assets/shop/shop-item-img1.png";
import item2 from "../../../../../public/assets/shop/shop-item-img2.png";
import item3 from "../../../../../public/assets/shop/shop-item-img3.png";
import item4 from "../../../../../public/assets/shop/shop-item-img4.png";
import bagIcon from "../../../../../public/assets/icons/Bag-icon.png";
import yt from "../../../../../public/assets/shop/youtube.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import vk from "../../../../../public/assets/shop/vk.png";
import addTowish from "../../../../../public/assets/shop/Add to wishlist.png";
import ItemPagination from "@/components/microComponents/itemPagination";
import QuantitySelector from "@/components/microComponents/counter";
import Link from "next/link";
import EachItemDet from "@/components/shop/eachItem/eachItemDet";

interface Params {
  item?: number;
}

const EachItem = (props: { params: Promise<Params> }) => {
  const data: { src: StaticImageData; title: string; price: string }[] = [
    { src: food1, title: "Fresh Lime", price: "$38.00" },
    { src: food2, title: "Chocolate Muffin", price: "$28.00" },
    { src: food3, title: "Burger", price: "$21.00" },
    { src: food4, title: "Country Burger", price: "$45.00" },
    { src: food5, title: "Drink", price: "$23.00" },
    { src: food6, title: "Pizza", price: "$43.00" },
    { src: food7, title: "Cheese Butter", price: "$10.00" },
    { src: food8, title: "Sandwiches", price: "$25.00" },
    { src: food9, title: "Chicken Chup", price: "$12.00" },
  ];

  // State to store resolved params
  const [params, setParams] = useState<Params>({});
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await props.params;
      setParams(resolvedParams);
    }
    resolveParams();
  }, [props.params]);

  // Safely calculate the item index
  const itemIndex = (params.item || 1) - 1; // Default to 1 if undefined
  const selectedImage = data[itemIndex].src || food1; // Default to food1 if out of range
  const title = data[itemIndex].title || "Fresh Lime"; // for title
  const price = data[itemIndex].price || "$43.00"; // for price

  // Handler for quantity change
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <PageHeader heading="Shop Details" title="Shop details" />
      <div className="py-10 px-[5%] mx-auto lg:py-24 lg:px-[7%]">
        <div className="flex flex-wrap justify-center items-center lg:justify-normal lg:items-start flex-col lg:flex-row">
          {/* Left images */}
          <div className="flex flex-col lg:flex-row lg:gap-5">
            <div className="flex flex-row items-center justify-center flex-wrap gap-3 lg:flex-col lg:gap-5">
              <Image
                src={item1}
                alt="item1"
                className="w-[90px] h-[90px] lg:w-[132px] lg:h-[139px]"
              />
              <Image
                src={item2}
                alt="item2"
                className="w-[90px] h-[90px] lg:w-[132px] lg:h-[139px]"
              />
              <Image
                src={item3}
                alt="item3"
                className="w-[90px] h-[90px] lg:w-[132px] lg:h-[139px]"
              />
              <Image
                src={item4}
                alt="item4"
                className="w-[90px] h-[90px] lg:w-[132px] lg:h-[139px]"
              />
            </div>
            <div className="mt-5 lg:mt-0">
              <Image
                alt="ecommerce"
                className="w-full max-w-[400px] h-auto lg:w-[400px] lg:h-[615px] object-cover object-center rounded"
                src={selectedImage}
              />
            </div>
          </div>

          {/* Right content */}
          <div className="mt-6 lg:mt-0 lg:pl-14 lg:w-[300px] min-[1100px]:w-[380px] min-[1200px]:w-[480px] min-[1300px]:w-[580px] min-[1400px]:w-[680px] min-[1500px]:w-[780px] min-[1600px]:w-[880px] w-full">
            <div className="flex flex-row justify-between items-center mb-1">
              <div className="py-[2px] h-fit px-4 bg-orangeLike inline-block rounded-lg text-white text-[12px] lg:text-[14px] text-nowrap">
                In stock
              </div>
              <div className="mt-3 lg:mt-0">
                <ItemPagination nextLink="/shop" prevLink="/shop" />
              </div>
            </div>
            <h1 className="text-gray-900 font-bold font-sans text-[28px] lg:text-[48px] mb-2 leading-[36px] lg:leading-[60px]">
              {title}
            </h1>
            <p className="text-[14px] lg:text-[18px] font-[300] text-txtGray pb-5 border-b-2 border-gray-100 mb-5">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>

            <span className="font-bold font-sans text-[20px] lg:text-[32px] text-txtBlack">
              {price}
            </span>
            {/* Stars / Rating / Reviews */}
            <div className="flex flex-col lg:flex-row my-4">
              <span className="flex items-center gap-[8px]">
                {/* Stars */}
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-orangeLike"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="flex items-center text-txtlight text-[14px] lg:text-[16px] ml-3 pl-4 h-[15px] border-l-2 border-gray-200 min-[1100px]:text-nowrap">
                  5.0 Rating
                </span>
                <span className="flex items-center text-txtlight text-[14px] lg:text-[16px] ml-3 pl-4 h-[15px] border-l-2 border-gray-200 min-[1100px]:text-nowrap">
                  22 Reviews
                </span>
              </span>
            </div>
            <p className="text-[14px] lg:text-[18px] font-normal pt-2 text-txtBlack">
              Dictum/cursus/Risus
            </p>
            <div className="flex flex-col min-[1100px]:flex-row mt-6 items-start lg:items-center pb-7 gap-5 border-b-2 border-gray-100 mb-5">
              {/* Quantity */}
              <div className="flex items-center">
                <QuantitySelector
                  initialQuantity={quantity}
                  onQuantityChange={handleQuantityChange}
                />
              </div>
              {/* Add to cart button */}
              <Link href="/shoppingCart" className="bg-orangeLike h-[40px] lg:h-[50px]">
                <button className="text-white flex gap-2 items-center h-full w-full lg:w-[191px] px-4 lg:px-5">
                  <Image src={bagIcon} alt="bag icon" />
                  <p className="text-[14px] lg:text-[18px] font-[300]">
                    Add to cart
                  </p>
                </button>
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <Image src={addTowish} alt="addTowish" />
              <p className="text-txtBlack">
                Category: <span className="text-txtGray">Pizza</span>
              </p>
              <p className="text-txtBlack">
                Tag: <span className="text-txtGray">Our Shop</span>
              </p>
              <div className="flex flex-col lg:flex-row gap-2 pt-3 border-b-2 border-gray-100 pb-7 w-full">
                <span className="text-txtBlack">Share:</span>
                <div className="flex gap-4 ">
                  <Link href="/shop">
                    <Image
                      src={yt}
                      alt="yt"
                      className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  </Link>
                  <Link href="/shop">
                    <FaFacebook
                      color="#4F4F4F"
                      className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  </Link>
                  <Link href="/shop">
                    <AiFillTwitterCircle
                      color="#4F4F4F"
                      className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  </Link>
                  <Link href="/shop">
                    <Image
                      src={vk}
                      alt="vk"
                      className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  </Link>
                  <Link href="/shop">
                    <RiInstagramFill
                      color="#4F4F4F"
                      className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* description */}
      <EachItemDet/>
    </section>
  );
};

export default EachItem;
