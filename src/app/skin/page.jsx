import React from "react";
import Hero from "../components/pages/skin/Hero";
import FaqSkin from "../components/pages/skin/FaqSkin";
import NebulaVets from "../components/pages/skin/NebulaVets";
import WeLook from "../components/pages/skin/WeLook";

function page() {
  return (
    <div>
      <Hero />
      <FaqSkin />
      <NebulaVets />
      <WeLook />
    </div>
  );
}

export default page;
