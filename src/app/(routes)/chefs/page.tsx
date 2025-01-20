import ChefList from "@/components/chefs/chefsList";
import PageHeader from "@/components/page-header";
import React from "react";

const Chefs = () => {
  return (
    <div>
      <PageHeader heading="Our Chef" title="Chef" />
      <ChefList />
    </div>
  );
};

export default Chefs;
