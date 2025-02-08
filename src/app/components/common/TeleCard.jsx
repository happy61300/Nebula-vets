import React from "react";

function TeleCard({ title, subtitle, para }) {
  return (
    <>
      {" "}
      <div className="bg-[#494336] flex flex-col justify-start px-8 pt-[22px] pb-[42px] w-full sm:w-[48%] xl:w-[23%]  h-[420px] sm:h-[465px]">
        <p className="text-[138px] text-gredient-2 leading-[107%]">{title}</p>
        <p className="text-[#D7D9DD] text-2xl sm:text-[26px] md:text-[30px] lg:text-[32px] leading-[107%] mt-[12px] mb-8">
          {subtitle}
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#D7D9DD] leading-[157%] sm:leading-[130%]">
          {para}
        </p>
      </div>{" "}
    </>
  );
}

export default TeleCard;
