"use client";

import React, { useState, useEffect } from "react";
import ShopItem from "../microComponents/ShopItem";
import DropDown from "../microComponents/dropDown";
import { PaginationDemo } from "../microComponents/pagination";
import type { Data } from "../../data/foods";
import Loading from "@/app/loading";
import { useFetchFoods } from "./fetchFoodsFromSanity";
import { Sidebar } from "./sideBar";
import { Filter, X } from "lucide-react";
import { useAtom } from "jotai";
import {
  filterByAtom,
  filteredProductsAtom,
  productsAtom,
  sortByAtom,
} from "./products";
import getImageUrl from "@/scripts/getImage";

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

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [filteredProducts] = useAtom<Data[]>(filteredProductsAtom);
  const [, setSortBy] = useAtom(sortByAtom);
  const [, setFilterBy] = useAtom(filterByAtom);

  const handleSort = (selectedOption: string) => {
    setSortBy(selectedOption);
  };

  const handleFilter = (selectedOption: string) => {
    setFilterBy(selectedOption);
  };

  return (
    <section className="text-gray-600 body-font">
      {products.length > 0 ? (
        <div className="md:px-[7%] mx-auto relative flex xl:flex-row justify-between px-4 py-8 lg:py-12 xl:py-24">
          {/* Main content */}
          <main className="w-full 1.5xl:w-[75%] order-2 xl:order-1">
            <div className="flex flex-col lg:flex-row justify-center items-center sm:justify-between sm:items-center gap-4 sm:gap-7 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <DropDown
                  text="Sort By:"
                  options={["Low To High Price", "High To Low Price"]}
                  onSelect={handleSort}
                />
                <DropDown
                  text="Show:"
                  options={["Newest", "Oldest"]}
                  onSelect={handleFilter}
                />
              </div>

              <div className="1.5xl:hidden">
                <button
                  className="bg-amber-500 text-white p-3 sm:p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-amber-600 transition-all duration-300 z-50"
                  onClick={() => setIsSidebarVisible(!isSidebarVisible)}
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
              {filteredProducts.map((product: Products, ind: number) => (
                <ShopItem
                  key={ind}
                  title={product.displayName || product.name}
                  price={product.price}
                  src={getImageUrl(product.image)}
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
          <aside className="hidden 1.5xl:block w-full 1.5xl:w-[23%] sticky top-24 order-1 xl:order-2 mb-8 xl:mb-0 ml-10">
            <Sidebar />
          </aside>

          {/* Mobile/Tablet Sidebar */}
          {isSidebarVisible && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-end z-50 transition-all duration-300">
              <div className="w-[90%] max-w-sm bg-white h-full overflow-y-auto animate-slide-left">
                <div className="flex justify-between items-center p-1 sm:p-4">
                  <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                  <button
                    className="text-gray-600 hover:text-amber-500 transition-colors"
                    onClick={() => setIsSidebarVisible(false)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="sm:p-4">
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
