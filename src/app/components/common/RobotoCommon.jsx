import React from "react";

function RobotoCommon({ title }) {
  return (
    <div className="max-w-[1160px] mx-auto px-[32px] sm:px-[40px]  ">
      <p className="roboto text-[#494336]   text-2xl md:text-[28px] leading-[104%] mb-[30px]">
        {title}
      </p>
    </div>
  );
}

export default RobotoCommon;
