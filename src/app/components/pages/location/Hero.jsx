import React from "react";
import CommonHero from "../../common/CommonHero";

function Hero() {
  return (
    <>
      {" "}
      <CommonHero
        title={"Our Washington DC Practice"}
        para={
          "We take great pride in our state-of-the-art, AAHA-accredited facilities that are meticulously designed to provide a stress-free experience for our patients and human clients alike. Equipped with modern technology and advanced resources, our practices ensure the highest standard of veterinary care."
        }
        btnName={"BOOK NOW"}
        heroimg={"/assest/img/map.png"}
      />
    </>
  );
}

export default Hero;
