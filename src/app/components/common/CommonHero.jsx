import React from "react";
import Booknow from "./Booknow";
import Image from "next/image";
import Hero from "../pages/service/Hero";

function CommonHero({ title, para, btnName, heroimg, heroimgclass }) {
  return (
    <>
      {" "}
      <div className="bg-[#494336] overflow-hidden relative bg-no-repeat bg-right-bottom pt-[102px] sm:pt-[88px] lg:pt-[98px] pb-2.5 md:pb-0">
        <div
          className={`absolute right-0 max-w-[211px] w-full sm:max-w-[350px] lg:max-w-[400px] xl:!max-w-[521px] ${heroimgclass}`}
        >
          <Image
            className="w-full"
            src={heroimg}
            alt="hero"
            width={528}
            height={520}
          />
        </div>
        <div className="max-w-[1160px] px-[32px] sm:px-[40px] mx-auto">
          <div
            className="max-w-[660px] pt-[30px] sm:pt-[50px] md:pt-[80px] lg:pt-[100px] xl:pt-[140px] pb-[60px] min-[950px]:pb-[90px] text-[#D7D9DD]"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <h1 className="text-[32px] sm:text-[40px] mt-40 md:mt-0 md:text-[50px] lg:text-[60px] xl:text-[70px] leading-[normal]">
              {title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[157%] sm:leading-[130%] mt-[30px] sm:mt-5 mb-[51px] sm:mb-12">
              {para}
            </p>
            <div className="w-fit py-2 sm:py-3 overflow-hidden z-[1] relative">
              <Booknow btntitle={btnName} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommonHero;
