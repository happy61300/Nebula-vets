import React from "react";
import Hero from "../components/pages/vaccination/hero";
import Whyshould from "../components/pages/vaccination/Whyshould";
import Faqvaccine from "../components/pages/vaccination/Faqvaccine";
import Whento from "../components/pages/vaccination/Whento";
import WhyLook from "../components/pages/vaccination/WhyLook";

function page() {
  return (
    <>
      {" "}
      <Hero />
      <Whyshould />
      <Faqvaccine />
      <Whento />
      <WhyLook />
    </>
  );
}

export default page;
