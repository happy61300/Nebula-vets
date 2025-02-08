import React from "react";
import TeleCommon from "../../common/TeleCommon";
import Para from "../../common/Para";

function HowWorks() {
  return (
    <>
      <div className=" py-[60px] sm:py-20  ">
        {" "}
        <TeleCommon
          title={"How it works"}
          para={
            "We understand that time is of the essence when it comes to your pet's health, and waiting for medications to be obtained from an external pharmacy can be inconvenient. By keeping a comprehensive inventory of commonly used medications in our pharmacy, we strive to streamline the process and minimize any delays in providing your pet with the necessary treatment."
          }
        />{" "}
        <Para
          para={
            "However, if a specific medication is not readily available in our on-site pharmacy, we have a solution. We work closely with a trusted compounding pharmacy that specializes in creating customized medications. This allows us to quickly obtain or create the specific medication your pet needs. Once the medication is compounded, we can arrange for it to be delivered to you, ensuring that you have it in a timely manner."
          }
        />
      </div>
    </>
  );
}

export default HowWorks;
