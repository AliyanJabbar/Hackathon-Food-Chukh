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
import addTowish from "../../../../../public/assets/shop/Add to wishlist.png";
import ItemPagination from "@/components/microComponents/itemPagination";
import QuantitySelector from "@/components/microComponents/counter";
import Link from "next/link";
import EachItemDet from "@/components/shop/eachItem/eachItemDet";
import { useCart } from "@/context/CartContext";

interface Params {
  item?: number;
}

const EachItem = (props: { params: Promise<Params> }) => {
  // type of data
  type Data = {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
    quantity: number;
  };

  // State to store resolved params
  const [params, setParams] = useState<Params>({});
  const [quantity, setQuantity] = useState<number>(1);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [data, setData] = useState<Data[]>([]); //state for storing data from api

  // fetching products from our api and Params from props
  useEffect(() => {
    //for props
    async function resolveParams() {
      const resolvedParams = await props.params;
      setParams(resolvedParams);
    }
    //for data of products
    async function fetchingProducts() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const fetchedProducts = await fetch(`${baseUrl}/api/products`);

        if (!fetchedProducts.ok) {
          console.error("Fetch failed with status:", fetchedProducts.status);
          throw new Error(`HTTP error! Status: ${fetchedProducts.status}`);
        }

        const response = await fetchedProducts.json();
        setData(response.data);
      } catch (error) {
        console.error("Error during fetch:", error);
      }

      const fetchedProducts = await fetch("/api/products");

      const response = await fetchedProducts.json();
      setData(response.data);
    }
    resolveParams();
    fetchingProducts();
  }, [props.params]);

  // Safely calculating the item index
  const itemIndex = params.item || 0; // Default to 0 if undefined
  const selectedItem = data[itemIndex] || data[0];
  const selectedImage = selectedItem?.image || "/assets/shop/item1.png"; // Default to item1 or food1 if out of range
  const title = selectedItem?.name || "Fresh Lime"; // for title
  const price = selectedItem?.price || 43; // for price
  const rating = selectedItem?.rating || 4; //for rating

  // Handler for quantity change
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...selectedItem, quantity });
    setSuccessMessage(`${title} has been added to Cart Successfully!`);
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <PageHeader heading="Shop Details" title="Shop details" />
      {successMessage && (
        <div className="fixed bottom-5 right-5 bg-orangeLike text-white px-4 py-2 rounded shadow-lg z-50">
          {successMessage}
        </div>
      )}
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
                  22 Reviews
                </span>
              </span>
            </div>
            <p className="text-[14px] lg:text-[18px] font-normal pt-2 text-txtBlack">
              Dictum/cursus/Risus
            </p>
            <div className="flex flex-col min-[1200px]:flex-row mt-6 items-start lg:items-center pb-7 gap-5 border-b-2 border-gray-100 mb-5">
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
      <EachItemDet />
    </section>
  );
};

export default EachItem;
