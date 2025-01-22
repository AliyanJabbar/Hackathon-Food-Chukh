"use client";
import PageHeader from "@/components/page-header";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bagIcon from "../../../../../public/assets/icons/Bag-icon.png";
import yt from "../../../../../public/assets/shop/youtube.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import vk from "../../../../../public/assets/shop/vk.png";
import ItemPagination from "@/components/microComponents/itemPagination";
import QuantitySelector from "@/components/microComponents/counter";
import Link from "next/link";
import EachItemDet from "@/components/shop/eachItem/eachItemDet";
import { useCart } from "@/context/CartContext";
import { Data } from "../../../../data/foods";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { FaHeart } from "react-icons/fa6";
import Loading from "@/app/loading";

interface Params {
  item?: number;
}

const EachItem = (props: { params: Promise<Params> }) => {
  // States
  const [quantity, setQuantity] = useState<number>(1);
  const [messages, setMessages] = useState<{ id: number; message: string }[]>(
    []
  );
  const [selectedItem, setSelectedItem] = useState<Data | null>(null); //state for storing data from api

  // fetching Params from props & data from sanity
  useEffect(() => {
    const loadData = async () => {
      try {
        const resolvedParams = await props.params;
        if (!resolvedParams.item) return;

        const query = `*[_type == "food" && id == ${resolvedParams.item}][0]`;
        const data = await client.fetch(
          query,
          {},
          {
            cache: "no-store",
          }
        );

        if (!data) {
          console.log("No data found for this item");
          return;
        }

        setSelectedItem(data);
      } catch (error) {
        console.error("Sanity data fetch error:", error);
        addMessage("Unable to load data. Please try again later.");
      }
    };

    const updateOnlineStatus = () => {
      if (navigator.onLine) {
        loadData();
      }
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Initial load
    if (typeof window !== "undefined" && navigator.onLine) {
      loadData();
    }

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, [props.params]);

  // Safely calculating details
  const selectedImage =
    (selectedItem?.image && urlFor(selectedItem?.image).url()) ||
    "assets/shop/item1.png";
  const title = selectedItem?.name;
  const price = selectedItem?.price;
  const rating = selectedItem?.rating || 4;
  const category = selectedItem?.category;
  const description = selectedItem?.description;
  const tags = selectedItem?.tags || ["Delicious", "Fast Food"];
  const TotalReviews = selectedItem?.TotalReviews || 2;
  const Reviews = selectedItem?.reviews || [
    "Very Good Taste",
    "Smell is amazing",
  ];

  //function for handling messages
  const addMessage = (newMessage: string) => {
    const id = Date.now(); // Use timestamp as unique ID
    setMessages((prevMessages) => [
      ...prevMessages,
      { id, message: newMessage },
    ]);

    // Remove the message after 5 seconds
    setTimeout(() => {
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== id)
      );
    }, 5000);
  };

  // Handler for quantity change
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const { addToCart, addToWishList, wishList, removeFromWish } = useCart();

  //checking if item is in wishlist or not
  const isInWishlist =
    selectedItem && wishList.some((item) => item.id === selectedItem.id);

  //handling add to cart
  const handleAddToCart = () => {
    addToCart({ ...selectedItem!, quantity, image: selectedImage });
    addMessage(`${title} has been added to Cart Successfully!`);
  };

  // handling add to wish list
  const handleAddToWishList = () => {
    addToWishList({ ...selectedItem!, quantity, image: selectedImage });
    addMessage(`${title} has been added to WishList Successfully!`);
  };

  // handling remove from wish list
  const handleRemoveFromWishList = () => {
    removeFromWish(selectedItem?.id ? selectedItem?.id : 0);
    addMessage(`${title} has been removed from WishList!`);
  };

  return selectedItem ? (
    <section className="text-gray-600 body-font overflow-hidden">
      <PageHeader heading="Shop Details" title="Shop details" />
      {messages.map((msg) => (
        <div
          key={msg.id}
          className="animate-message fixed right-5 bg-orangeLike text-white px-4 py-2 rounded shadow-lg z-50"
          style={{ bottom: messages.indexOf(msg) * 50 + 100 }}
        >
          {msg.message}
        </div>
      ))}
      <div className="py-10 px-[5%] mx-auto lg:py-24 lg:px-[7%]">
        <div className="flex flex-wrap justify-center items-center lg:justify-normal lg:items-start flex-col lg:flex-row">
          {/* Left images */}
          <div className="flex flex-col lg:flex-row lg:gap-5">
            <div className="flex flex-row items-center justify-center flex-wrap gap-3 lg:flex-col lg:gap-5">
              <Image
                src="/assets/shop/shop-item-img1.png"
                alt="item1"
                className="w-[90px] h-[90px] lg:w-[132px] lg:h-[139px]"
                width={90}
                height={90}
              />
              <Image
                src="/assets/shop/shop-item-img2.png"
                alt="item2"
                className="w-[90px] h-[90px] lg:w-[132px] lg:h-[139px]"
                width={90}
                height={90}
              />
              <Image
                src="/assets/shop/shop-item-img3.png"
                alt="item3"
                className="w-[90px] h-[90px] lg:w-[132px] lg:h-[139px]"
                width={90}
                height={90}
              />
              <Image
                src="/assets/shop/shop-item-img4.png"
                alt="item4"
                className="w-[90px] h-[90px] lg:w-[132px] lg:h-[139px]"
                width={90}
                height={90}
              />
            </div>
            <div className="mt-5 lg:mt-0">
              <Image
                alt="ecommerce"
                className="w-full max-w-[400px] h-auto lg:w-[400px] lg:h-[615px] object-cover object-center rounded"
                src={selectedImage}
                width={400}
                height={600}
              />
            </div>
          </div>

          {/* Right content */}
          <div className="mt-6 lg:mt-0 lg:pl-14 lg:w-[300px] min-[1100px]:w-[380px] min-[1200px]:w-[480px] min-[1300px]:w-[550px] min-[1400px]:w-[650px] min-[1500px]:w-[730px] min-[1600px]:w-[830px] w-full">
            <div className="flex flex-row justify-between items-center mb-1">
              <div
                className={`${selectedItem?.availiable ? "bg-orangeLike" : "bg-red-600"} py-[2px] h-fit px-4 inline-block rounded-lg text-white text-[12px] lg:text-[14px] text-nowrap`}
              >
                {selectedItem?.availiable ? "In stock" : "Out of stock"}
              </div>
              <div className="mt-3 lg:mt-0">
                <ItemPagination nextLink="/shop" prevLink="/shop" />
              </div>
            </div>
            <h1 className="text-gray-900 font-bold font-sans text-[28px] lg:text-[48px] mb-2 leading-[36px] lg:leading-[60px]">
              {title}
            </h1>
            <p className="text-[14px] lg:text-[18px] font-[300] text-txtGray pb-5 border-b-2 border-gray-100 mb-5">
              {description}
            </p>

            <span className="font-bold font-sans text-[20px] lg:text-[32px] text-txtBlack">
              {price}.00$
            </span>
            {/* Stars / Rating / Reviews */}
            <div className="flex flex-col lg:flex-row my-4">
              <span className="flex items-center gap-[8px]">
                {/* rating */}
                <div className="rating rating-sm space-x-[6px]">
                  {[...Array(5)].map((_, index) => (
                    <input
                      key={index}
                      type="radio"
                      className={`mask mask-star-2 ${
                        index < rating ? "bg-orangeLike" : "bg-txtGray"
                      }`}
                      checked={index + 1 === rating}
                      disabled
                    />
                  ))}
                </div>
                <span className="flex items-center text-txtlight text-[14px] lg:text-[16px] ml-3 pl-4 h-[15px] border-l-2 border-gray-200 min-[1100px]:text-nowrap">
                  {rating}.0 Rating
                </span>
                <span className="flex items-center text-txtlight text-[14px] lg:text-[16px] ml-3 pl-4 h-[15px] border-l-2 border-gray-200 min-[1100px]:text-nowrap">
                  {TotalReviews} Reviews
                </span>
              </span>
            </div>
            <div className="flex flex-col min-[1200px]:flex-row mt-8 items-start lg:items-center pb-7 gap-5 border-b-2 border-gray-100 mb-5">
              {/* Quantity */}
              <div className="flex items-center">
                <QuantitySelector
                  initialQuantity={quantity}
                  onQuantityChange={handleQuantityChange}
                />
              </div>
              {/* Add to cart button */}
              <button
                onClick={handleAddToCart}
                className="text-white bg-orangeLike h-[40px] lg:h-[50px] flex gap-2 items-center w-full lg:w-[191px] px-4 lg:px-5"
              >
                <Image src={bagIcon} alt="bag icon" />
                <p className="text-[14px] lg:text-[18px] font-[300] text-nowrap">
                  Add to cart
                </p>
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              {/* Add to wish list */}
              <div
                className="flex group gap-2 items-center my-3"
                onClick={() => {
                  isInWishlist
                    ? handleRemoveFromWishList()
                    : handleAddToWishList();
                }}
              >
                <FaHeart
                  size={25}
                  color={`${isInWishlist ? "red" : "black"}`}
                />

                <p className="text-txtBlack font-bold group-hover:text-orangeLike transition">
                  Add to WishList
                </p>
              </div>
              {/* category */}
              <p className="text-txtBlack">
                Category: <span className="text-txtGray">{category}</span>
              </p>
              {/* tags */}
              <p className="text-txtBlack">
                Tags: <span className="text-txtGray">{tags.join(" | ")}</span>
              </p>
              {/* social links */}
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
      <EachItemDet TotalReviews={TotalReviews} reviews={Reviews} />
    </section>
  ) : (
    <Loading />
  );
};

export default EachItem;
