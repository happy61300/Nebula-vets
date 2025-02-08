import React from "react";
import CommonHero from "../../common/CommonHero";

function Hero() {
  return (
    <>
      {" "}
      <CommonHero
        title={"Telemedicine"}
        heroimg={"/assest/img/Telemedicinehero.png"}
        para={
          "Nebula Vets' online telemedicine service is a convenient and innovative way to connect with our veterinary doctors from the comfort of your own home. Through this platform, you can have a virtual consultation with our experienced veterinarians, allowing you to receive timely and expert advice for your pet's health concerns without the need to physically visit our clinic."
        }
        btnName={"BOOK NOW"}
      />
    </>
  );
}

export default Hero;
