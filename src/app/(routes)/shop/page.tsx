import PageHeader from "@/components/page-header";
import ItemList from "@/components/shop/itemList";
import React from "react";

const ShopPage = () => {
  return (
    <main className="">
      <PageHeader heading='Our Shop' title='Shop'/>
      <ItemList/>
    </main>
  );
};

export default ShopPage;
