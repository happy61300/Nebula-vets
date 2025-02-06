import React from "react";
import Hero from "../components/pages/dental.jsx/hero";

import FaqDental from "../components/pages/dental.jsx/FaqDental";

import DentalScalePolish from "../components/pages/dental.jsx/DentalScalePolish";
import DentalExperince from "../components/pages/dental.jsx/DentalExperince";
import WeLook from "../components/pages/dental.jsx/WeLook";

function page() {
  return (
    <>
      <Hero />

      <DentalScalePolish />
      <FaqDental />
      <DentalExperince />
      <WeLook />
    </>
  );
}

export default page;
