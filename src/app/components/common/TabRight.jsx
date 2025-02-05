import React from "react";
import Booknow from "./Booknow";

function TabRight({ title, dis, btnName }) {
  return (
    <>
      <div class="   pb-14 pt-8 border-b border-b-[#000000]">
        <h2 class="roboto text-[#494336] text-base md:text-lg lg:text-2xl xl:text-[28px] ml-1 md:ml-3">
          {title}
        </h2>
        <p class="text-[#494336] text-sm sm:text-base md:text-lg lg:text-xl mt-[20px] mb-[40px] ml-1 md:ml-3 max-md:leading-[22px]">
          {dis}
        </p>
        <div class="w-fit py-2 sm:py-3 overflow-hidden z-[1] relative">
          <Booknow btntitle={btnName} />
        </div>
      </div>
    </>
  );
}

export default TabRight;
