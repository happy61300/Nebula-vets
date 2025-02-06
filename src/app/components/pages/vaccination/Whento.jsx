import React from "react";
import Shchedule from "../../common/Shchedule";
import { whenToVaccinate } from "../../helper/Helper";

function Whento() {
  return (
    <div>
      {" "}
      <div className="flex flex-wrap justify-center gap-5 sm:pb-20 pb-[60px]   ">
        {whenToVaccinate.map((item, index) => (
          <Shchedule
            className=""
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            para={item.para}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Whento;
