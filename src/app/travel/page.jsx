import React from "react";

import Hero from "../components/pages/travel/Hero";
import PetTravel from "../components/pages/travel/PetTravel";
import WeLook from "../components/pages/travel/WeLook";

function page() {
  return (
    <div>
      <Hero />
      <PetTravel />
      <WeLook />
    </div>
  );
}

export default page;
