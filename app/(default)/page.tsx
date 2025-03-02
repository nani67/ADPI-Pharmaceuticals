// "use client";

// import { useEffect, useState } from "react";
// import PageIllustration from "@/components/page-illustration";
// import Hero from "@/components/hero-home";
// import Workflows from "@/components/workflows";
// import Features from "@/components/features";
// import Testimonials from "@/components/testimonials";
// import Cta from "@/components/cta";
// import Medicines from "@/components/medicines";

// export default function Home() {

//   var medicinesClicked = false;
//   function medicineListener() {
//     console.log("Something???");
//     medicinesClicked = !medicinesClicked;
//   };

//   if(medicinesClicked) {

//     return (
//       <>
//         <PageIllustration />
//         <Medicines />
//       </>
//     );
//   } else {

//     return (
//       <>
//         <PageIllustration />
//         <Hero />
//         <Workflows />
//         <Features />
//         <Testimonials />
//         <Cta />
//       </>
//     );
//   }

// }



"use client";

import { useState } from "react";
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Medicines from "@/components/medicines";
import Header from "@/components/ui/header";

export default function Home() {  
  const [medicinesClicked, setMedicinesClicked] = useState(false);

  // Function to toggle the state
  const toggleMedicines = () => {
    setMedicinesClicked((prev) => !prev);
  };
  return (
    <>
      
      <PageIllustration />
        <>
          <Hero />
          <Workflows />
          <Features />
          <Testimonials />
          <Medicines />
          <Cta />
        </>
     
    </>
  );
}
