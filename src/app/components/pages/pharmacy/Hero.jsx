import React from "react";
import CommonHero from "../../common/CommonHero";

function Hero() {
  return (
    <>
      <CommonHero
        title={"Pharmacy"}
        para={
          "At Nebula Vets, we understand the importance of convenient access to necessary medications and pet health products for your furry companions. That's why we have an on-site pharmacy stocked with a wide range of prescription medications, prescription diets, and other pet health products."
        }
        btnName={"BOOK NOW"}
        heroimg={"/assest/img/farmacy.png"}
      />
    </>
  );
}

export default Hero;
