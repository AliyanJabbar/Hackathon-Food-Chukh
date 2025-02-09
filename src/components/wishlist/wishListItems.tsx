"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { Data } from "@/data/foods";
import ShopItem from "@/components/microComponents/ShopItem";
import Button from "../microComponents/button";
import Loading from "@/app/loading";
import getImageUrl from "@/scripts/getImage";

const WishListItems = () => {
  interface Product extends Data {
    removeOpt?: boolean;
  }
  const { wishList } = useCart();

  //waiting for local storage
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDataLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!dataLoaded) {
    return <Loading />;
  }

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
                src={getImageUrl(product.image)}
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
