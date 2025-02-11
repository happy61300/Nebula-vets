import React from "react";
import Hero from "../components/pages/about-us/Hero";
import DanialPicture from "../components/pages/about-us/DanialPicture";
import Community from "../components/pages/about-us/Community";
import Innovation from "../components/pages/about-us/Innovation";
import MeetOur from "../components/pages/about-us/MeetOur";

function page() {
  return (
    <div>
      <Hero />
      <DanialPicture />
      <Innovation />
      <Community />
      <MeetOur />
    </div>
  );
}

export default page;
