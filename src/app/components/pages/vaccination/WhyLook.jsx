import React from "react";
import Ourmission from "../../common/Ourmission";

function WhyLook() {
  return (
    <>
      <Ourmission
        titleclass={"!max-w-full"}
        title={"We look forward to seeing you and your pet soon!"}
        pera={
          "If you have any questions or concerns about vaccinations or would like to schedule an appointment for your pet, please contact our friendly team at [Your Veterinary Practice]. We are here to provide your furry family members with the highest standard of care and protection through our comprehensive vaccination services."
        }
        btnName={"BOOK NOW"}
        abimg={"/assest/img/rays-vacckine.png"}
      />
    </>
  );
}

export default WhyLook;
