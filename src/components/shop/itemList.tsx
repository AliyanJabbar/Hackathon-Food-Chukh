"use client";

import React, { useState, useEffect } from "react";
import ShopItem from "../microComponents/ShopItem";
import DropDown from "../microComponents/dropDown";
import { PaginationDemo } from "../microComponents/pagination";
import { urlFor } from "@/sanity/lib/image";
import type { Data } from "../../data/foods";
import Loading from "@/app/loading";
import { useFetchFoods } from "./fetchFoodsFromSanity";
import { Sidebar } from "./sideBar";
import { Filter, X } from "lucide-react";
import { useAtom } from "jotai";
import { filteredProductsAtom, productsAtom } from "./products";

interface Products extends Data {
  displayName?: string;
}

const ItemList = () => {
  const [products, setProducts] = useAtom(productsAtom);
  const fetchedProducts = useFetchFoods();

  useEffect(() => {
    if (fetchedProducts.length > 0) {
      setProducts(fetchedProducts);
    }
  }, [fetchedProducts, setProducts]);

  const [filteredProducts] = useAtom(filteredProductsAtom);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <section className="text-gray-600 body-font">
      {products.length > 0 ? (
        <div className="md:px-[7%] mx-auto relative flex flex-col xl:flex-row justify-between px-4 py-8 lg:py-12 xl:py-24">
          {/* Main content */}
          <main className="w-full xl:w-[75%] order-2 xl:order-1">
            <div className="flex flex-col lg:flex-row justify-center items-center sm:justify-between sm:items-center gap-4 sm:gap-7 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <DropDown text="Sort By:" />
                <DropDown text="Show:" />
              </div>
              <div className="xl:hidden">
                <button
                  className="bg-amber-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-amber-600 transition-all duration-300 z-50"
                  onClick={() => setIsSidebarVisible(!isSidebarVisible)}
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-24 xl:gap-8">
              {filteredProducts.map((product: Products, ind: number) => (
                <ShopItem
                  key={ind}
                  title={product.displayName || product.name}
                  price={product.price}
                  src={urlFor(product.image).url()}
                  link={product.id}
                  originalPrice={product.originalPrice}
                />
              ))}
            </div>
            <div className="mt-8">
              <PaginationDemo />
            </div>
          </main>

          {/* Desktop Sidebar */}
          <aside className="hidden xl:block w-full xl:w-[23%] sticky top-24 order-1 xl:order-2 mb-8 xl:mb-0 min-w-[1300px]:bg-black ml-10">
            <Sidebar />
          </aside>

          {/* Mobile/Tablet Sidebar */}
          {isSidebarVisible && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-end z-50 transition-all duration-300">
              <div className="w-[90%] max-w-sm bg-white h-full overflow-y-auto animate-slide-left">
                <div className="flex justify-between items-center p-1 min-[400px]:p-4 border-b">
                  <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                  <button
                    className="text-gray-600 hover:text-amber-500 transition-colors"
                    onClick={() => setIsSidebarVisible(false)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="min-[400px]:p-4">
                  <Sidebar />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default ItemList;
