"use client";

import { useState } from "react";
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Medicines from "@/components/medicines";

var medicinesClicked = false;
export function medicineListener() {
  console.log("Something???");
  medicinesClicked = !medicinesClicked;
};
export default function Home() {


  if(medicinesClicked) {

    return (
      <>
        <PageIllustration />
        <Medicines />
      </>
    );
  } else {

    return (
      <>
        <PageIllustration />
        <Hero />
        <Workflows />
        <Features />
        <Testimonials />
        <Cta />
      </>
    );
  }

}
