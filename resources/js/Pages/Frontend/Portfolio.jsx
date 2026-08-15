import React from "react";
import MainLayout from "@/layouts/MainLayout";
import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/portfolio-1/Section1";
import Section2 from "@/shared/sections/about-3/Section7";

export default function Portfolio() {
  return (
    <MainLayout headerStyle={2} footerStyle={2}>
      <PageMeta title="Portfolio - 360 Creative Agency" />
      <Section1 />
      <Section2 />
    </MainLayout>
  );
}
