import Image from "next/image";
import React from "react";

function Middle({ title, para, raysimg, rayimgclass, pb_oclass, titleclass }) {
  return (
    <>
      <div className="relative">
        <div
          className={`absolute bottom-0 left-0 flex    justify-center  w-full right-0 mx-auto ${rayimgclass}`}
        >
          <Image src={raysimg} alt="absolute" width={2000} height={500} />
        </div>
        <div
          className={`relative z-[2] py-10  max-w-[1220px] px-[32px] sm:px-[40px] mx-auto ${pb_oclass}`}
        >
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#494336]">
            <h2 className={`text-2xl sm:text-3xl lg:text-[36px] ${titleclass}`}>
              {title}
            </h2>
            <p className="sm:mt-[38px] mt-5 !leading-[157%] sm:!leading-[130%] text-sm sm:text-base md:text-lg lg:text-xl text-[#494336]">
              {para}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Middle;
