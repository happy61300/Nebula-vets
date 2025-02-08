import React from "react";
import Middle from "../../common/Middle";
import { openhoursData } from "../../helper/Helper";

function OpenHours() {
  return <></>;
}
<div className="py-[60px] md:py-20">
  {openhoursData.map((item, index) => (
    <Middle key={index} title={item.title} para={item.para} />
  ))}
</div>;
export default OpenHours;
