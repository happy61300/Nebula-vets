import React from "react";
import Hero from "../components/pages/animal-health/Hero";
import HealthExam from "../components/pages/animal-health/HealthExam";
import Faq from "../components/common/Faq";
import Experince from "../components/pages/animal-health/Experince";
import Ourmission from "../components/common/Ourmission";
import WhyLook from "../components/pages/animal-health/WhyLook";

function page() {
  return (
    <>
      {" "}
      <Hero />
      <HealthExam />
      <Faq />
      <Experince />
      <WhyLook />
    </>
  );
}

export default page;
