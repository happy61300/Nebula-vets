import React from "react";
import Hero from "../components/pages/laser/Hero";
import WhatLaser from "../components/pages/laser/WhatLaser";
import FaqLaser from "../components/pages/laser/FaqLaser";
import ExperinceLaser from "../components/pages/laser/ExperinceLaser";
import WeLook from "../components/pages/laser/WeLook";

function page() {
  return (
    <div>
      <Hero /> <WhatLaser />
      <FaqLaser /> <ExperinceLaser />
      <WeLook />
    </div>
  );
}

export default page;
