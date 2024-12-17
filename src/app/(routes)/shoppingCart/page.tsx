import React from "react";
import Cart1 from "../../../components/cart/cart1";
import PageHeader from "@/components/page-header";
import img from "../../../../public/assets/shop/item1.png";
import img2 from "../../../../public/assets/shop/item2.png";
import img3 from "../../../../public/assets/shop/item3.png";
import img4 from "../../../../public/assets/shop/item4.png";
import img5 from "../../../../public/assets/shop/item5.png";
import img6 from "../../../../public/assets/shop/item6.png";

const ShoppingCart = () => {
  return (
    <div>
      <PageHeader heading="Shopping Cart" title="Shopping cart" />
      <Cart1
        products={[
          {
            id: 1,
            name: "item 1",
            price: 1,
            image: img,
            quantity: 1,
            rating: 4,
          },
          {
            id: 2,
            name: "item 2",
            price: 2,
            image: img2,
            quantity: 3,
            rating: 2,
          },
          {
            id: 3,
            name: "item 3",
            price: 3,
            image: img3,
            quantity: 1,
            rating: 4,
          },
          {
            id: 4,
            name: "item 4",
            price: 4,
            image: img4,
            quantity: 1,
            rating: 5,
          },
          {
            id: 5,
            name: "item 5",
            price: 5,
            image: img5,
            quantity: 1,
            rating: 3,
          },
          {
            id: 6,
            name: "item 6",
            price: 6,
            image: img6,
            quantity: 1,
            rating: 1,
          },
        ]}
      />
    </div>
  );
};

export default ShoppingCart;
