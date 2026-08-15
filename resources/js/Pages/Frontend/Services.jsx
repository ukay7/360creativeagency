import React from "react";
import MainLayout from "@/layouts/MainLayout";
import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/services-1/Section1";
import Section2 from "@/shared/sections/index-1/Section4";
import Section3 from "@/shared/sections/about-3/Section5";

export default function Services() {
  return (
    <MainLayout headerStyle={2} footerStyle={2}>
      <PageMeta title="Services - 360 Creative Agency" />
      <Section1 />
      <Section2 />
      <Section3 />
    </MainLayout>
  );
}

