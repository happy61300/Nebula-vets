import React from "react";

function CommonMiddle({ title, para }) {
  return (
    <div>
      <div
        class="max-w-[1160px] mx-auto px-[32px] sm:px-[40px]    relative z-[1]"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <p class="text-[#494336] text-2xl md:text-[30px]  mb-5 sm:mb-10 lg:text-[36px] leading-[104%]   ">
          {title}
        </p>
        <p class="text-[#494336] leading-[24px] text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-10">
          {para}
        </p>
      </div>
    </div>
  );
}

export default CommonMiddle;
