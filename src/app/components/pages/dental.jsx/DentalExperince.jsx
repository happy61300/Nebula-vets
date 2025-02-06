import React from "react";

import Experincecommon from "../../common/Experincecommon";
import { dentalExperinceData } from "../../helper/Helper";

function DentalExperince() {
  return (
    <>
      {dentalExperinceData.map((item, index) => (
        <Experincecommon key={index} title={item.title} para={item.para} />
      ))}
    </>
  );
}

export default DentalExperince;
