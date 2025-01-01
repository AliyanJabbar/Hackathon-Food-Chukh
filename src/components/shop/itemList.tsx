import React from "react";
import ShopItem from "../microComponents/ShopItem";
import DropDown from "../microComponents/dropDown";
import { PaginationDemo } from "../microComponents/pagination";

const ItemList = () => {
  // for generating id
  let id = 0;
  function idGenerator() {
    return id++;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-[2%] md:px-[7%] py-24 mx-auto">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-7 md:flex-row">
          <DropDown text="Sort By :" />
          <DropDown text="Show :" />
        </div>
        <div className="flex flex-wrap justify-center">
          <ShopItem
            title="Fresh Lime"
            price="$38.00"
            src="/assets/shop/item1.png"
            link={idGenerator()}
            RP="$45.00"
          />

          <ShopItem
            title="Chocolate Muffin"
            price="$28.00"
            link={idGenerator()}
            src="/assets/shop/item2.png"
          />

          <ShopItem
            title="Burger"
            price="$21.00"
            src="/assets/shop/item3.png"
            link={idGenerator()}
            RP="$45.00"
          />

          <ShopItem
            title="Country Burger"
            price="$45.00"
            src="/assets/shop/item4.png"
            link={idGenerator()}
          />

          <ShopItem
            title="Drink"
            price="$23.00"
            src="/assets/shop/item5.png"
            link={idGenerator()}
            RP="$45.00"
          />

          <ShopItem
            title="Pizza"
            price="$43.00"
            src="/assets/shop/item6.png"
            link={idGenerator()}
          />

          <ShopItem
            title="Cheese Butter"
            price="$10.00"
            src="/assets/shop/item7.png"
            link={idGenerator()}
          />

          <ShopItem
            title="Sandwiches"
            price="$25.00"
            src="/assets/shop/item8.png"
            link={idGenerator()}
          />

          <ShopItem
            title="Chicken Chup"
            price="$12.00"
            src="/assets/shop/item9.png"
            link={idGenerator()}
          />
        </div>
        <PaginationDemo />
      </div>
    </section>
  );
};

export default ItemList;
