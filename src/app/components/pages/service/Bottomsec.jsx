import React from "react";
import Ourmission from "../../common/Ourmission";

function Bottomsec() {
  return (
    <>
      <div className="block md:hidden">
        {" "}
        <Ourmission
          abimg={"/assest/img/dog-image.png"}
          title={"We look forward to seeing you and your pet soon!"}
          pera={
            "Contact Nebula Vets today to schedule a consultation. Let us provide your furry companion with the highest quality care and support, ensuring a healthier and happier life for them. "
          }
          btnName={"BOOK NOW"}
        />
      </div>
    </>
  );
}

export default Bottomsec;
