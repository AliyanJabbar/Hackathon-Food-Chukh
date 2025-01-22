"use client";

import React, { useEffect, useState } from "react";
import ShopItem from "../microComponents/ShopItem";
import DropDown from "../microComponents/dropDown";
import { PaginationDemo } from "../microComponents/pagination";
import { urlFor } from "@/sanity/lib/image";
import { Data } from "../../data/foods";
import { client } from "../../sanity/lib/client";
import Loading from "@/app/loading";

const ItemList = () => {
  const [products, setProducts] = useState<Data[]>([]);

  //function for fetching data from sanity
  const fetchData = async () => {
    try {
      const query = `*[_type == "food"]`;
      const data = await client.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Initial fetch
    if (navigator.onLine) {
      fetchData();
    }

    // Handle online events
    const handleOnline = () => {
      fetchData();
    };

    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <section className="text-gray-600 body-font">
      {products.length > 0 ? (
        <div className="container px-[2%] md:px-[7%] py-24 mx-auto">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-7 md:flex-row">
            <DropDown text="Sort By :" />
            <DropDown text="Show :" />
          </div>
          <div className="flex flex-wrap justify-center">
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
