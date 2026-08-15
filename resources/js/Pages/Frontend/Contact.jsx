import React from "react";
import MainLayout from "@/layouts/MainLayout";
import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/contact-1/Section1";
import Section2 from "@/shared/sections/about-2/Section4";

export default function Contact() {
  return (
    <MainLayout headerStyle={2} footerStyle={2}>
      <PageMeta title="Contact Us - 360 Creative Agency" />
      <Section1 />
      <Section2 />
    </MainLayout>
  );
}
