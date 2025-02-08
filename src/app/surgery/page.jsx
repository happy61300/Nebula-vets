import React from "react";
import Hero from "../components/pages/surgery/Hero";
import DoesMyPet from "../components/pages/surgery/DoesMyPet";
import FaqSurgery from "../components/pages/surgery/FaqSurgery";
import ChooseNebula from "../components/pages/surgery/ChooseNebula";
import WeLook from "../components/pages/surgery/WeLook";

function page() {
  return (
    <>
      <Hero />
      <DoesMyPet />
      <FaqSurgery />
      <ChooseNebula />
      <WeLook />{" "}
    </>
  );
}

export default page;
