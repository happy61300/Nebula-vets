import React from "react";
import Hero from "../components/pages/emergency/Hero";
import OpenHours from "../components/pages/emergency/OpenHours";
import DentalScalePolish from "../components/pages/dental.jsx/DentalScalePolish";
import FaqEmergency from "../components/pages/emergency/FaqEmergency";
import WeLook from "../components/pages/emergency/WeLook";

function page() {
  return (
    <>
      <Hero />
      <OpenHours />
      <DentalScalePolish />
      <FaqEmergency />
      <WeLook />
    </>
  );
}

export default page;
