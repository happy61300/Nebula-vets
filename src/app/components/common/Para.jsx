import React from "react";

function Para({ para, paraclass }) {
  return (
    <div className="max-w-[1160px] mx-auto px-[32px] sm:px-[40px]">
      {" "}
      <p
        className={`mt-[18px] sm:mt-[20px] text-[#494336] leading-[24px] text-sm sm:text-base md:text-lg ${paraclass}`}
      >
        {para}
      </p>
    </div>
  );
}

export default Para;
