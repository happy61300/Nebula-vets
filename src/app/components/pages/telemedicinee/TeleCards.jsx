import React from "react";
import TeleCard from "../../common/TeleCard";
import { telecardData } from "../../helper/Helper";
import Booknow from "../../common/Booknow";

function TeleCards() {
  return (
    <>
      <div className="flex justify-center max-w-[1440px] flex-wrap gap-5 mb-14 sm:mb-20 mx-auto px-8  sm:px-10 ">
        {telecardData.map((item, index) => (
          <TeleCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            para={item.para}
          />
        ))}
        <div className="mt-10">
          {" "}
          <Booknow btntitle={"CHAT WITH A VET"} />
        </div>
      </div>
    </>
  );
}

export default TeleCards;
