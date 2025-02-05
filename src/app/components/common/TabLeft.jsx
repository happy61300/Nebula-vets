import React from "react";
import Booknow from "./Booknow";
import Image from "next/image";

function TabLeft({ img, title, subTitle, dis, btnName }) {
  return (
    <>
      <div className="pl-8 sm:pl-12 pr-5 pt-12 md:pt-20 pb-10 lg:pb-[300px] ">
        <div className="max-w-[376px]">
          <Image
            className="w-full"
            src={img}
            alt="adsf"
            height={304}
            width={376}
          ></Image>
        </div>
        <h1 className="text-[#494336] text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] mt-[3px]">
          {title}
        </h1>
        <p className="roboto text-[#494336] text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] mt-[14px] mb-[33px]">
          {subTitle}
        </p>
        <p className="text-[#494336] text-sm sm:text-base md:text-lg lg:text-xl leading-[157%] md:leading-[130%] md:mb-[48px] mb-10">
          {dis}
        </p>

        <Booknow btntitle={btnName} />
      </div>
    </>
  );
}

export default TabLeft;
