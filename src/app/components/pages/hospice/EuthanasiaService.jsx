import React from "react";
import { hospiceData } from "../../helper/Helper";
import CommonMiddle from "../../common/CommonMiddle";

function EuthanasiaService() {
  return (
    <>
      <div className="py-15 sm:py-20">
        {" "}
        {hospiceData.map((item, index) => (
          <div key={index}>
            <CommonMiddle title={item.title} para={item.para} />
          </div>
        ))}
      </div>
    </>
  );
}

export default EuthanasiaService;
