import React from "react";
import CommonHero from "../../common/CommonHero";

function Hero() {
  return (
    <div>
      <CommonHero
        title={"Join Our Nebula Vets Team:"}
        subtitle={"Empowering Careers in Veterinary Care"}
        para={
          "At Nebula Vets, we are passionate about providing exceptional veterinary care and creating a positive impact in the lives of pets and their families. We believe in the power of collaboration, compassion, and continuous growth. If you are seeking a rewarding career in veterinary medicine, Nebula Vets offers exciting opportunities to join our dedicated team."
        }
        btnName={"BOOK NOW"}
        heroimg={"/assest/img/career.png"}
      />
    </div>
  );
}

export default Hero;
