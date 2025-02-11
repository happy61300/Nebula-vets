import React from "react";
import CommonHero from "../../common/CommonHero";

function Hero() {
  return (
    <>
      {" "}
      <CommonHero
        title={"Hospice & Euthanasia"}
        para={
          "At Nebula Vets, we understand how difficult it is to say goodbye to a beloved pet. During this emotional time, our compassionate and caring team is here to support you and your pet. We offer hospice services that focus on providing comfort and dignity to your pet during their last days and final moments."
        }
        btnName={"BOOK NOW"}
        heroimg={"/assest/img/hospice.png"}
      />
    </>
  );
}

export default Hero;
