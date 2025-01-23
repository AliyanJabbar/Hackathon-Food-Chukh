"use client";

import React from "react";
import ShopItem from "../microComponents/ShopItem";
import DropDown from "../microComponents/dropDown";
import { PaginationDemo } from "../microComponents/pagination";
import { urlFor } from "@/sanity/lib/image";
import { Data } from "../../data/foods";
import Loading from "@/app/loading";
import { useFetchFoods } from "./fetchFoodsFromSanity";

const ItemList = () => {
  const products = useFetchFoods();

  return (
    <section className="text-gray-600 body-font">
      {products.length > 0 ? (
        <div className="container px-[2%] md:px-[7%] py-24">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-7 md:flex-row">
            <DropDown text="Sort By :" />
            <DropDown text="Show :" />
          </div>
          <div className="grid grid-cols-1 min-[660px]:grid-cols-2 lg:grid-cols-3 min-[660px]:gap-3 md:gap-5 lg:gap-10 min-[1100px]:gap-16">
            {products.map((product: Data, ind: number) => (
              <ShopItem
                key={ind}
                title={product.name}
                price={product.price}
                src={urlFor(product.image).url()}
                link={product.id}
                originalPrice={product.originalPrice}
              />
            ))}
          </div>
          <PaginationDemo />
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default ItemList;
