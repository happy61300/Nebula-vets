import React from "react";

function TeleCommon({ title, para, className, titleClass }) {
  return (
    <>
      {" "}
      <div className=" relative overflow-hidden">
        {/* <div className=""absolute bottom-0 w-full right-0 left-0">
          <img className="w-full" src="./assest/img/page-3-absolute.png" alt="" />
        </div> */}
        <div
          className="max-w-[1160px] mx-auto px-[32px] sm:px-[40px]         relative z-[1]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <p
            className={`text-[#494336] text-2xl sm:text-[26px] md:text-[30px] lg:text-[36px] leading-[104%] ${titleClass}`}
          >
            {title}
          </p>
          <p
            className={`mt-[18px] sm:mt-[20px] text-[#494336] leading-[24px] text-sm sm:text-base md:text-lg ${className}`}
          >
            {para}
          </p>
        </div>
      </div>
    </>
  );
}

export default TeleCommon;
