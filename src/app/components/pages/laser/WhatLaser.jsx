import React from "react";
import RobotoCommon from "../../common/RobotoCommon";
import TeleCommon from "../../common/TeleCommon";

function WhatLaser() {
  return (
    <div className="py-15 sm:py-20">
      <div>
        <RobotoCommon
          title={
            "Discover the Power of Laser Therapy at Nebula Vets: Elevating Pet Wellness with Advanced Healing"
          }
        />
        <TeleCommon
          title={"What is Laser Therapy?"}
          titleClass={"mt-14"}
          para={
            "Laser therapy, also known as low-level laser therapy or cold laser therapy, is a cutting-edge treatment modality that utilizes focused light energy to stimulate cellular activity and promote natural healing processes within the body. This non-invasive and painless therapy is safe for pets of all ages and can be used alongside other treatments to provide comprehensive care."
          }
        />
        <TeleCommon
          titleClass={"mt-14"}
          title={"How Does Laser Therapy Work?"}
          para={
            "During a laser therapy session, a handheld device emits a concentrated beam of laser light that penetrates the targeted tissues. The light energy is absorbed by the cells, stimulating the production of adenosine triphosphate (ATP), a molecule that fuels cellular activities. This increase in ATP promotes accelerated tissue repair, reduces inflammation, and relieves pain."
          }
        />
      </div>
    </div>
  );
}

export default WhatLaser;
