import React from "react";
import RobotoCommon from "../../common/RobotoCommon";
import Para from "../../common/Para";

function ChooseNebula() {
  return (
    <div className="py-15 sm:py-20">
      <div>
        <RobotoCommon
          title={"Choose Nebula Vets for Exceptional Spay and Neuter Services:"}
        />
        <Para
          para={
            "When it comes to spaying and neutering, Nebula Vets is your trusted partner. We offer exceptional surgical care with compassion, expertise, and a focus on your pet's well-being. By choosing us, you are making a responsible decision that promotes their health, prevents unwanted litters, and contributes to a healthier pet population overall."
          }
        />
      </div>
    </div>
  );
}

export default ChooseNebula;
