import React from "react";
import Hero from "../components/pages/pharmacy/hero";
import HowWorks from "../components/pages/pharmacy/HowWorks";
import PharmacyFaq from "../components/pages/pharmacy/FaqPharmacy";
import ExperiencePharmacy from "../components/pages/pharmacy/ExperiencePharmacy";
import WeLook from "../components/pages/pharmacy/WeLook";

function page() {
  return (
    <>
      {" "}
      <Hero />
      <HowWorks />
      <PharmacyFaq />
      <ExperiencePharmacy />
      <WeLook />
    </>
  );
}

export default page;
