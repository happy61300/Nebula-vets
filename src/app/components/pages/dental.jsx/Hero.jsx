import React from "react";
import CommonHero from "../../common/CommonHero";

function Hero() {
  return (
    <>
      <CommonHero
        heroimg={"/assest/img/dental.png"}
        title={"Dental Care"}
        para={
          "At Nebula Vets, we recognize the significance of dental hygiene in maintaining your pet's overall health. Dental disease can have far-reaching implications, potentially leading to serious conditions like heart disease and kidney disease. To ensure your pet's oral health, we conduct thorough dental examinations to identify any dental issues that require attention."
        }
        btnName={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
