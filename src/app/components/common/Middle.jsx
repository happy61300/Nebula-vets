import React from "react";

function Middle({ title, para, raysimg, plist }) {
  return (
    <>
      {" "}
      <div className="relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 mx-auto">
          <img width="100%" src={raysimg} alt="absolute" />
        </div>
        <div className="relative z-[2] pb-[123px] lg:pb-[140px] sm:pt-20 pt-[60px] max-w-[1220px] px-[32px] sm:px-[40px] mx-auto">
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#494336]">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px]">{title}</h2>
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
