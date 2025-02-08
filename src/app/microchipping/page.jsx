import React from "react";
import Hero from "../components/pages/microchipping/Hero";
import Identify from "../components/pages/microchipping/Identify";
import WeLook from "../components/pages/microchipping/WeLook";

function page() {
  return (
    <div>
      <Hero />
      <Identify />
      <WeLook />
    </div>
  );
}

export default page;
