import About1 from "@/components/about/about1";
import About2 from "@/components/about/about2";
import About3 from "@/components/about/about3";
import PageHeader from "@/components/page-header";
import React from "react";

const AboutPage = () => {
  return (
    <main className="">
      <PageHeader heading="About Us" title="About" />
      <About1 />
      <About2 />
      <About3 />
    </main>
  );
};

export default AboutPage;
