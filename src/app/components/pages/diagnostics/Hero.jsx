import React from "react";
import CommonHero from "../../common/CommonHero";

function Hero() {
  return (
    <div>
      <CommonHero
        title={"Diagnostics"}
        para={
          "At Nebula Vets, we are committed to providing comprehensive and advanced diagnostic testing to ensure the well-being of your cherished pet. Our state-of-the-art veterinary hospital offers a range of diagnostic tests that empower us to gain precise insights into your pet's health. Here are some of the key diagnostic tests available at Nebula Vets for the benefit of our clients and their beloved pets: "
        }
        btnName={"BOOK NOW"}
        heroimg={"/assest/img/d-logo.png"}
      />
    </div>
  );
}

export default Hero;
