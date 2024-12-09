import React from "react";
import ShopItem from "../microComponents/ShopItem";
import img1 from "../../../public/assets/shop/item1.png";
import img2 from "../../../public/assets/shop/item2.png";
import img3 from "../../../public/assets/shop/item3.png";
import img4 from "../../../public/assets/shop/item4.png";
import img5 from "../../../public/assets/shop/item5.png";
import img6 from "../../../public/assets/shop/item6.png";
import img7 from "../../../public/assets/shop/item7.png";
import img8 from "../../../public/assets/shop/item8.png";
import img9 from "../../../public/assets/shop/item9.png";
import DropDown from "../microComponents/dropDown";
import { PaginationDemo } from "../microComponents/pagination";

const ItemList = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-[7%] py-24 mx-auto">
        <div className="flex flex-row gap-7">
          <DropDown text="Sort By :" />
          <DropDown text="Show :" />
        </div>
        <div className="flex flex-wrap">
          <ShopItem title="Fresh Lime" price="$38.00" src={img1} link={1} RP="$45.00" />

          <ShopItem title="Chocolate Muffin" price="$28.00" link={2} src={img2} />

          <ShopItem title="Burger" price="$21.00" src={img3} link={3} RP="$45.00" />

          <ShopItem title="Country Burger" price="$45.00" src={img4} link={4} />

          <ShopItem title="Drink" price="$23.00" src={img5} link={5} RP="$45.00" />

          <ShopItem title="Pizza" price="$43.00" src={img6} link={6} />

          <ShopItem title="Cheese Butter" price="$10.00" src={img7} link={7} />

          <ShopItem title="Sandwiches" price="$25.00" src={img8} link={8} />

          <ShopItem title="Chicken Chup" price="$12.00" src={img9} link={9} />
        </div>
        <PaginationDemo />
      </div>
    </section>
  );
};

export default ItemList;
