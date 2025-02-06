import React from "react";
import CommonHero from "../../common/CommonHero";

function Hero() {
  return (
    <>
      <CommonHero
        heroimg={"/assest/img/vccine.png"}
        title={"Vaccinations"}
        para={
          "Vaccinations are key in keeping your pet healthy and preventing them catching life-threatening disease.Our veterinary team is dedicated to providing comprehensive vaccination services tailored to your pet's individual needs and lifestyle. This includes not only dogs and cats but also rabbits and ferrets."
        }
        btnName={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
