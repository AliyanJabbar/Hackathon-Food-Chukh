"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { Data } from "@/data/foods";
import ShopItem from "@/components/microComponents/ShopItem";
import { urlFor } from "@/sanity/lib/image";
import Button from "../microComponents/button";

const WishListItems = () => {
  interface Product extends Data {
    removeOpt?: boolean;
  }
  const { wishList } = useCart();
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-[2%] md:px-[7%] py-24 mx-auto">
        <div className="flex flex-wrap justify-center">
          {wishList.length > 0 ? (
            wishList.map((product: Product, ind: number) => (
              <ShopItem
                key={ind}
                title={product.name}
                price={product.price}
                src={urlFor(product.image).url()}
                link={product.id}
                originalPrice={product.originalPrice}
                RemoveOpt={true}
              />
            ))
          ) : (
            <div className="flex flex-col gap-10 justify-center items-center h-[200px]">
              <h2 className="text-3xl font-bold text-orangeLike">
                Your Wish List is empty
              </h2>
              <Button text="Go To Shop" link="/shop" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WishListItems;
