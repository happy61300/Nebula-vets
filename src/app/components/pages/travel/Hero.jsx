import React from "react";
import CommonHero from "../../common/CommonHero";

function Hero() {
  return (
    <div>
      <CommonHero
        title={"Travel"}
        para={
          "At Nebula Vets, we understand that travel with your pet requires careful planning and adherence to specific requirements. Whether you are traveling domestically or internationally, we are here to assist you with the necessary exams and paperwork."
        }
        btnName={"BOOK NOW"}
        heroimg={"/assest/img/Travel.png"}
      />
    </div>
  );
}

export default Hero;
