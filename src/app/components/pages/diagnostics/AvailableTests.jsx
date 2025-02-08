import React from "react";
import TeleCommon from "../../common/TeleCommon";
import { testData } from "../../helper/Helper";

function AvailableTests() {
  return (
    <>
      <div className="sm:py-20 py-[60px] bg-[#D7D9DD80]">
        {testData.map((item, index) => (
          <TeleCommon key={index} title={item.title} para={item.para} />
        ))}{" "}
        <div>
          {" "}
          <ul className=" max-w-[1160px] mx-auto px-[32px] sm:px-[40px] list-disc gap-y-2 flex flex-col text-[#494336] leading-[24px] text-sm sm:text-base md:text-lg  ">
            <li className="ml-6">Hematology</li>{" "}
            <li className="ml-6">Serum Chemistries</li>{" "}
            <li className="ml-6">Urinalysis</li>{" "}
            <li className="ml-6">Cytology</li>{" "}
            <li className="ml-6">Fecal analysis</li>{" "}
            <li className="ml-6">Blood disorders</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AvailableTests;
