import React from "react";
import CommonHero from "../../common/CommonHero";

function Hero() {
  return (
    <div>
      {" "}
      <CommonHero
        heroimg={"/assest/img/3rd-page-hero.png"}
        title={"Animal Health Check"}
        para={
          "This comprehensive assessment involves a thorough evaluation of your pet's major organ systems. During this visit, we take the opportunity to discuss important aspects of your pet's well-being, including their behavior, appetite, exercise routines, and daily activities at home. It is also an ideal occasion for us to recommend any routine diagnostic tests that could be advantageous for your pet's health or to determine if any vaccinations are due."
        }
        btnName={"BOOK NOW"}
      />
    </div>
  );
}

export default Hero;
