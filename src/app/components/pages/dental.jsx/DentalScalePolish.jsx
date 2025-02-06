import React from "react";

import Middle from "../../common/Middle";
import { dentalscaleData } from "../../helper/Helper";

function DentalScalePolish() {
  return (
    <>
      {" "}
      <div className="py-[60px] md:py-20">
        {dentalscaleData.map((item, index) => (
          <Middle key={index} title={item.title} para={item.para} />
        ))}
      </div>
    </>
  );
}

export default DentalScalePolish;
