import React from "react";
import CommonHero from "../../common/CommonHero";

function Hero() {
  return (
    <div>
      {" "}
      <CommonHero
        heroimgclass={"!max-w-[642px]"}
        title={"Microchipping"}
        para={
          "A microchip, resembling a tiny grain of rice in size and shape, is delicately inserted beneath your pet's skin, specifically between the shoulder blades. This quick and completely safe procedure typically takes only a few minutes. Each microchip possesses a distinct identification code, crucial for storing essential information about your beloved pet."
        }
        btnName={"BOOK NOW"}
        heroimg={"/assest/img/microchipping.png"}
      />
    </div>
  );
}

export default Hero;
