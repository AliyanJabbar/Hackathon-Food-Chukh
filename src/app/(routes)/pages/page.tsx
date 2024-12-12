import Modal from "@/components/microComponents/modal";
import PageHeader from "@/components/page-header";
import React from "react";

const PagesPage = () => {
  return (
    <main className="bg-blackish">
      <PageHeader heading="Pages" title="Pages" />
      <div className=" py-[100px] flex items-center justify-center">
        <Modal />
      </div>
    </main>
  );
};

export default PagesPage;
