import React from "react";
import Hero from "../components/pages/spay/Hero";
import WhySpay from "../components/pages/spay/WhySpay";
import FaqSpay from "../components/pages/spay/FaqSpay";
import ChooseNebula from "../components/pages/spay/ChooseNebula";
import WeLook from "../components/pages/spay/WeLook";

function page() {
  return (
    <div>
      {" "}
      <Hero />
      <WhySpay />
      <FaqSpay /> <ChooseNebula /> <WeLook />
    </div>
  );
}

export default page;
