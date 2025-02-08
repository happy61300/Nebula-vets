import React from "react";
import DaiCard from "../../common/DaiCard";
import { daicardData, daicardsecData } from "../../helper/Helper";
import Image from "next/image";

function Card() {
  return (
    <>
      <div className=" max-w-[1440px] mx-auto   flex justify-center flex-wrap md:flex-nowrap gap-4 sm:mb-20 mb-[60px] pt-[60px]  sm:pt-20  px-8 sm:px-10  ">
        <div className="relative">
          {" "}
          <div className="absolute z-[1] bottom-0 right-0">
            <Image
              src={"/assest/img/snap-card-image.png"}
              width={368}
              height={339}
            />
          </div>
        </div>
        <div className="bg-[#464334] w-full md:w-[48%] relative md:p-10 !pr-0 p-6 !pt-5">
          {daicardData.map((item, index) => (
            <DaiCard
              key={index}
              title={item.title}
              para={item.para}
              img={item.img}
            />
          ))}
        </div>
        <div className="bg-[#464334] w-full md:w-[48%]  relative md:p-10 p-6 !pt-5">
          {daicardsecData.map((item, index) => (
            <DaiCard key={index} title={item.title} para={item.para} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
