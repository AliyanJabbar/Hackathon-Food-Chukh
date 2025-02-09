"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAtom } from "jotai";
import {
  priceRangeAtom,
  productsAtom,
  searchQueryAtom,
  selectedCategoriesAtom,
  selectedTagsAtom,
} from "./products";
import { DualThumbSlider } from "./sideBarSlider";
import Image from "next/image";
import Link from "next/link";
import getImageUrl from "@/scripts/getImage";

const categories = [
  "Drink",
  "Dessert",
  "Burger",
  "Pizza",
  "Spread",
  "Sandwich",
  "Chicken",
];

const tags = [
  "Drink",
  "Refreshing",
  "Popular",
  "Dessert",
  "Chocolate",
  "Snack",
  "Burger",
  "Beef",
  "Meal",
  "Country Style",
  "Special",
  "Carbonated",
  "Pizza",
  "Cheese",
  "Butter",
  "Spread",
  "Sandwich",
  "Chicken",
  "Crispy",
];

export function Sidebar() {
  const [products] = useAtom(productsAtom);
  const latestProducts = products.filter(
    (item) => item.id === 5 || item.id === 7 || item.id === 2 || item.id === 3
  );

  //for price range
  const [priceRange, setPriceRange] = React.useState<[number, number]>([0, 50]);

  const [, setPriceRangeAtom] = useAtom(priceRangeAtom);
  const handlePriceRangeChange = (newRange: [number, number]) => {
    setPriceRange(newRange);
    setPriceRangeAtom(priceRange);
  };

  // for categories
  const [selectedCategories, setSelectedCategories] = useAtom(
    selectedCategoriesAtom
  );
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  //for tags
  const [selectedTags, setSelectedTags] = useAtom(selectedTagsAtom);
  const handleTagsChange = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  //for search query
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  return (
    <div className="select-none w-72 border border-outline bg-white text-txtBlack py-4 px-5">
      {/* Search */}
      <div className="relative mb-6">
        <Input
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          value={searchQuery}
          placeholder="Search Product"
          className="w-full bg-[#fff5e7] text-txtBlack rounded-none outline-none border-[#fff5e7] focus:border-orangeLike focus:border placeholder:text-txtlight h-[46px]"
        />
        <div className="absolute top-0 right-0 bg-orangeLike p-[13px]">
          <Search className=" h-5 w-5 text-white" />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-xl mb-3">Category</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <label
                htmlFor={category}
                className="inline-flex items-center cursor-pointer gap-2"
              >
                <input
                  id={category}
                  onChange={(e) =>
                    handleCategoryChange(category, e.target.checked)
                  }
                  checked={selectedCategories.includes(category)}
                  type="checkbox"
                  className="peer hidden"
                />
                <span className="w-[20px] h-[20px] border-2 border-gray-300 rounded-none flex justify-center items-center peer-checked:bg-orangeLike peer-checked:border-none">
                  <svg
                    className="w-4 h-4 text-white peer-checked:block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
                <span className="select-none text-[12px] lg:text-[14px] font-sans">
                  {category}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h2 className="text-xl mb-3">Filter By Price</h2>
        <DualThumbSlider
          min={0}
          max={50}
          step={1}
          value={priceRange}
          onChange={handlePriceRangeChange}
        />
        <div className="flex justify-between text-sm mt-2">
          <span>
            From ${priceRange[0]} to ${priceRange[1]}
          </span>
        </div>
      </div>

      {/* Latest Products */}
      <div className="mb-6">
        <h2 className="text-xl mb-3">Latest Products</h2>
        <div className="space-y-4 gap-3">
          {latestProducts.map((product) => (
            <div key={product.id}>
              <Link
                href={`/shop/${product.id}`}
                className="flex gap-3 border-b pb-2 border-outline"
              >
                <Image
                  src={getImageUrl(product.image)}
                  width={100}
                  height={100}
                  alt={product.name}
                  className="cursor-pointer w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium cursor-pointer ">
                    {product.name}
                  </h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`cursor-pointer text-sm ${i < product.rating ? "text-amber-500" : "text-gray-500"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-sm cursor-pointer">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Product Tags */}
      <div>
        <h2 className="text-xl mb-3">Product Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Button
              key={tag}
              onClick={() => handleTagsChange(tag)}
              variant="outline"
              size="sm"
              className={`text-txtBlack border-outline border hover:border-orangeLike hover:bg-orangeLike hover:text-white ${selectedTags.includes(tag) ? "border-orangeLike bg-orangeLike text-white" : ""}`}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
