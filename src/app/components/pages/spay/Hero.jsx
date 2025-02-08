import React from "react";
import CommonHero from "../../common/CommonHero";

function Hero() {
  return (
    <div>
      <CommonHero
        title={"Spay & Neuter"}
        para={
          "Spaying, also known as ovariohysterectomy, is a surgical procedure performed on female animals to render them infertile. It involves the removal of the ovaries and uterus under general anesthesia.Neutering is a safe and effective surgical procedure designed to ensure that your male pet cannot reproduce. This important procedure involves the careful removal of your pet's testicles while they are comfortably under general anesthesia."
        }
        btnName={"BOOK NOW"}
        heroimg={"/assest/img/spay.png"}
      />
    </div>
  );
}

export default Hero;
