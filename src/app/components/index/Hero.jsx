import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <>
      {" "}
      <div
        className="sm:bg-[url('/assest/img/hero-image.png')] pt-[142px] sm:pt-[282px] sm:pb-[85px] bg-cover bg-[100%]"
        id="career"
      >
        <div className="max-w-[1160px] px-[32px] sm:px-[40px] py-[60px] sm:py-[80px] mx-auto">
          <div className="max-w-[230px] sm:max-w-[551px]  ">
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[58px] xl:text-[70px] font-regular sm:mt-0 sm:text-[#D7D9DD] leading-[104%]">
              Welcome to Nebula Vets
            </h1>
            <p className="sm:text-[#D7D9DD] mt-2 sm:mt-4 lg:mt-[28px] text-base sm:txt-lg md:text-xl lg:text-2xl xl:text-[28px]">
              Reinventing Pet Medicine
            </p>
            <div className="w-fit mt-10 py-2 sm:py-3 overflow-hidden z-[1] relative">
              <Link
                href="#"
                className="text-base sm:text-lg font-medium text-[#494336] bg-gred roboto py-2 sm:py-3 px-6 sm:px-8 lg:px-[38px] font-medium tracking-[1.4px] rounded-[27px] duration-300"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:hidden -mt-[34px] w-full">
          <Image
            classNameName="w-full"
            src="/assest/img/small-hero.png"
            alt="hero-small-image"
            width={640}
            height={278}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
