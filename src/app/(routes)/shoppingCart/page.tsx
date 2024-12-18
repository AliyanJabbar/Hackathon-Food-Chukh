import React from "react";
import Cart1 from "../../../components/cart/cart1";
import PageHeader from "@/components/page-header";

const ShoppingCart = () => {
  return (
    <div>
      <PageHeader heading="Shopping Cart" title="Shopping cart" />
      <Cart1 />
    </div>
  );
};

export default ShoppingCart;
