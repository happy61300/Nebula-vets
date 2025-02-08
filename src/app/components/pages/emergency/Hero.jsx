import React from "react";
import CommonHero from "../../common/CommonHero";

function Hero() {
  return (
    <>
      {" "}
      <div>
        <CommonHero
          heroimg={"/assest/img/world-emer.png"}
          title={"Urgent & Emergency Care"}
          para={
            "At Nebula Vets, we understand that when your pet is sick or injured, prompt and quality care is essential. Our dedicated team of veterinarians and staff are committed to providing the care your pet needs to recover and thrive."
          }
          btnName={"BOOK NOW"}
        />
      </div>
    </>
  );
}

export default Hero;
