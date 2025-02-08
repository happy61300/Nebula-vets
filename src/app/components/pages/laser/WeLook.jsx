import React from "react";
import Ourmission from "../../common/Ourmission";

function WeLook() {
  return (
    <div>
      <Ourmission
        title={"We look forward to seeing you and your pet soon!"}
        pera={
          "If you believe that laser therapy could benefit your pet, we encourage you to schedule a consultation with our experienced veterinary team. We will assess your pet's condition, discuss treatment options, and develop a personalized plan that suits their specific needs."
        }
        btnName={"BOOK NOW"}
        abimg={"/assest/img/rays-vacckine.png"}
      />
    </div>
  );
}

export default WeLook;
