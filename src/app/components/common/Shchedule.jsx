import Image from "next/image";
import React from "react";

function Shchedule({ title, para, subtitle, img }) {
  return (
    <>
      <div className="bg-[#464334] h-full w-[90%] sm:w-[48%] pt-5 md:pt-[34px] pr-3 md:pr-5 pl-8 md:pl-[48px] pb-8 md:pb-[57px]">
        <div className="flex items-center gap-5">
          <Image src={img} alt="fox-card-1" width={61} height={69} />
          <p className="text-2xl sm:text-3xl md:text-4xl xl:text-[48px] leading-[125%] text-gredient-2">
            {title}
          </p>
        </div>
        <p className="roboto text-base text-[#d7d9dd] sm:text-xl lg:text-2xl mt-3 sm:mt-4">
          {subtitle}
        </p>
        <p className="text-base sm:text-lg lg:text-[20px] text-[#d7d9dd]">
          {para}
        </p>
      </div>
    </>
  );
}

export default Shchedule;
