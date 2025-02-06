import React from "react";
import Hero from "../components/pages/service/Hero";
import Photos from "../components/pages/service/Photos";
import Precare from "../components/pages/service/Precare";
import Tabsection from "../components/pages/service/Tabsection";
import Bottomsec from "../components/pages/service/Bottomsec";

function page() {
  return (
    <>
      <Hero />
      <Photos />
      <Precare />
      <Tabsection />
      <Bottomsec />
    </>
  );
}

export default page;
