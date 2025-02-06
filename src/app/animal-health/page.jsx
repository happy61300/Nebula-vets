import React from "react";
import Hero from "../components/pages/animal-health/Hero";
import HealthExam from "../components/pages/animal-health/HealthExam";
import Faq from "../components/common/Faq";
import Experince from "../components/pages/animal-health/Experince";

function page() {
  return (
    <>
      {" "}
      <Hero />
      <HealthExam />
      <Faq />
      <Experince />
    </>
  );
}

export default page;
