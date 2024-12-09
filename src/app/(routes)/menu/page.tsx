import Menu1 from "@/components/menu/menu1";
import Menu2 from "@/components/menu/menu2";
import Menu3 from "@/components/menu/menu3";
import Menu4 from "@/components/menu/menu4";
import Menu5 from "@/components/menu/menu5";
import Menu6 from "@/components/menu/menu6";
import PageHeader from "@/components/page-header";
import React from "react";

const MenuPage = () => {
  return (
    <main className="">
      <PageHeader heading="Our Menu" title="Menu" />
      <Menu1 />
      <Menu2 />
      <Menu3 />
      <Menu4 />
      <Menu5 />
      <Menu6 />
    </main>
  );
};

export default MenuPage;
