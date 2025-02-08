import React from "react";
import TeleCommon from "../../common/TeleCommon";
import Para from "../../common/Para";
import RobotoCommon from "../../common/RobotoCommon";

function Identify() {
  return (
    <div>
      <div className="py-15 sm:py-20">
        <RobotoCommon
          title={
            "Here are a few compelling reasons why microchipping is a wise choice:"
          }
        />
        <TeleCommon
          title={"Identification and Reunification"}
          titleClass={"mt-14"}
          para={
            "A microchip, resembling a tiny grain of rice in size and shape, is delicately inserted beneath your pet's skin, specifically between the shoulder blades. This quick and completely safe procedure typically takes only a few minutes. Each microchip possesses a distinct identification code, crucial for storing essential information about your beloved pet."
          }
        />
        <TeleCommon
          title={"Increased Chance of Recovery"}
          titleClass={"mt-14"}
          para={
            "Studies have shown that pets with microchips have a significantly higher chance of being reunited with their owners compared to those without. By having your pet microchipped, you enhance the chances of a successful reunion, saving precious time, and reducing the emotional strain of a lost pet situation.    "
          }
        />
        <TeleCommon
          title={"Secure and Permanent"}
          titleClass={"mt-14"}
          para={
            "Unlike collars or tags, which can break or be removed, a microchip is a tiny, implantable device that is safely and painlessly inserted under your pet's skin. Once in place, it remains with your pet for life, ensuring a permanent form of identification that cannot be tampered with or lost."
          }
        />

        <TeleCommon
          title={"Universal Recognition"}
          titleClass={"mt-14"}
          para={
            "Microchips are recognized and read by most veterinary clinics, animal shelters, and animal control agencies worldwide. This means that if your pet gets lost during travel or relocation, their microchip can be scanned and their identification information accessed regardless of where they are found."
          }
        />
        <TeleCommon
          title={"Medical Information Access"}
          titleClass={"mt-14"}
          para={
            "Advanced microchips can store additional medical information about your pet, such as vaccinations, allergies, or any ongoing medical conditions. This feature can be especially helpful in emergency situations when immediate access to crucial health details can make a significant difference in the treatment and care your pet receives."
          }
        />
      </div>
    </div>
  );
}

export default Identify;
