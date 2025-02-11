import React from "react";
import Hero from "../components/pages/location/Hero";
import MapLocation from "../components/pages/location/MapLocation";
import WeLook from "../components/pages/location/WeLook";

function page() {
  return (
    <>
      {" "}
      <Hero />
      <MapLocation />
      <WeLook />
    </>
  );
}

export default page;
