import React from "react";
import Hero from "../components/pages/diagnostics/Hero";
import AvailableTests from "../components/pages/diagnostics/AvailableTests";
import DaiFaq from "../components/pages/diagnostics/DaiFaq";
import Available from "../components/pages/diagnostics/Available";
import DigiRadio from "../components/pages/diagnostics/DigiRadio";
import Card from "../components/pages/diagnostics/Card";
import WeLook from "../components/pages/diagnostics/WeLook";
import PharmacyFaq from "../components/pages/pharmacy/FaqPharmacy";

function page() {
  return (
    <div>
      <Hero />
      <AvailableTests />
      <DaiFaq />
      <Available />
      <DigiRadio />
      <Card />
      <WeLook />
    </div>
  );
}

export default page;
