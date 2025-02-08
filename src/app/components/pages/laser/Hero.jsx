import React from "react";
import CommonHero from "../../common/CommonHero";

function Hero() {
  return (
    <div>
      <CommonHero
        title={"Laser Therapy"}
        para={
          "At Nebula Vets, we are excited to offer the remarkable benefits of laser therapy for our furry patients. Our state-of-the-art veterinary hospital utilizes advanced laser technology to provide non-invasive and drug-free treatment options that promote healing and enhance the well-being of your beloved pets. Join us as we explore the transformative effects of laser therapy."
        }
        btnName={"BOOK NOW"}
        heroimg={"/assest/img/laser.png"}
      />
    </div>
  );
}

export default Hero;
