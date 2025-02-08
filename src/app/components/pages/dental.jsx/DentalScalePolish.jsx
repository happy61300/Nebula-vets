import React from "react";

import Middle from "../../common/Middle";
import { openhoursData } from "../../helper/Helper";

function DentalScalePolish() {
  return (
    <>
      {" "}
      <div className="py-[60px] md:py-20">
        {openhoursData.map((item, index) => (
          <Middle key={index} title={item.title} para={item.para} />
        ))}
        <ul className=" max-w-[1220px] px-[32px] sm:px-[40px] mx-auto list-disc text-sm sm:text-base md:text-lg lg:text-xl text-[#494336]">
          <li>Open wounds</li>
          <li>Toxin ingestion or foreign body</li>
          <li>Signs of pain </li>
          <li>Behavioral changes </li>
          <li>Eye issues </li>
          <li>Ear infections </li>
          <li>Vomiting or diarrhea </li>
          <li>Hair loss </li>
          <li>Coughing, sneezing or nasal discharge </li>
          <li>Urinating blood or urinary changes </li>
          <li>Worms, fleas, ticks or mites </li>
          <li>Scooting </li>
          <li>Changes in eating or drinking </li>
        </ul>
      </div>
    </>
  );
}

export default DentalScalePolish;
