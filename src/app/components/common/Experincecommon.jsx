import React from "react";

function Experincecommon({ title, para }) {
  return (
    <>
      {" "}
      <div className="relative overflow-hidden">
        <div className="relative z-[2] sm:py-20 py-[60px] max-w-[1220px] px-[32px] sm:px-[40px] mx-auto">
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

export default Experincecommon;
