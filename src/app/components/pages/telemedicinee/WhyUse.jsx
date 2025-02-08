import React from "react";
import TeleCommon from "../../common/TeleCommon";
import { whyuseData } from "../../helper/Helper";

function WhyUse() {
  return (
    <>
      <div className="py-20 bg-[rgba(215,217,221,0.50)]">
        {whyuseData.map((item, index) => (
          <div className="  ">
            {" "}
            <TeleCommon
              key={index}
              title={item.title}
              para={item.para}
              className={item.className}
              titleClass={item.titleClass}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default WhyUse;
