import Link from "next/link";
import React from "react";
import Booknow from "../../common/Booknow";

function Hero() {
  return (
    <>
      <div className="bg-[#494336] bg-[url('/assest/img/small-cat.png')] md:bg-[url('/assest/img/dog-image.png')] bg-no-repeat bg-right-bottom pt-[102px] sm:pt-[88px] lg:pt-[98px] pb-2.5 md:pb-0">
        <div className="max-w-[1220px] px-[32px] sm:px-[40px] mx-auto">
          <div className="max-w-[660px] pt-[30px] sm:pt-[50px] md:pt-[80px] lg:pt-[100px] xl:pt-[140px] pb-[280px] min-[950px]:pb-[90px]">
            <p className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] text-[#D7D9DD] leading-[normal]">
              Veterinary <br className="hidden max-sm:block" />
              Services
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#D7D9DD] leading-[157%] sm:leading-[130%] mt-[30px] sm:mt-5 mb-[51px] sm:mb-12">
              At Nebula Vets, we take pride in offering an extensive range of
              services to meet the diverse needs of our patients. Our commitment
              to comprehensive care ensures that we can provide the highest
              quality veterinary services under one roof.
            </p>
            <div className="w-fit py-2 sm:py-3 overflow-hidden z-[1] relative">
              <Booknow btntitle={" BOOK NOW"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
