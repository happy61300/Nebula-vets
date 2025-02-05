import React from "react";
import { tabSection, tabSection2 } from "../helper/Helper";
import Image from "next/image";
import Booknow from "./Booknow";

function Tabsection() {
  return (
    <>
      <div className="flex">
        <div className="w-[40%]">
          {tabSection.map((item, index) => (
            <div key={index} className="pl-8 sm:pl-12 pr-5 pt-12 md:pt-20 ">
              <div className="max-w-[376px]">
                {" "}
                <Image
                  className="w-full"
                  src={item.img}
                  alt="adsf"
                  height={304}
                  width={376}
                ></Image>
              </div>
              <h1 className="text-[#494336] text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] mt-[3px]">
                {item.preventive}
              </h1>
              <p className="roboto text-[#494336] text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] mt-[14px] mb-[33px]">
                {item.pera}
              </p>
              <p className="text-[#494336] text-sm sm:text-base md:text-lg lg:text-xl leading-[157%] md:leading-[130%] md:mb-[48px]">
                {item.dis}
              </p>
            </div>
          ))}
        </div>
        <div className="w-[60%] bg-[#D7D9DD80]">
          {tabSection2.map((item, index) => (
            <div
              key={index}
              className="!z-[1] mt-16 sm:mt-20 lg:mt-[102px] relative sm:pl-20 pl-10 pr-4 sm:pr-6  "
            >
              {" "}
              <div className="border-b border-b-[#000000] pb-[60px] ">
                <h1 className="roboto text-[#494336] text-base md:text-lg lg:text-2xl xl:text-[28px] ml-1 md:ml-3">
                  {item.head}
                </h1>
                <p className="text-[#494336] text-sm sm:text-base md:text-lg lg:text-xl mt-[20px] mb-[40px] ml-1 md:ml-3 max-md:leading-[22px]">
                  {item.pera}
                </p>
                <Booknow btntitle={"LEARN MORE"} className="z-[11] relative" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tabsection;
