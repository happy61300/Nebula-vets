import Image from "next/image";
import Link from "next/link";
import React from "react";

function Ourmission() {
  return (
    <>
      {" "}
      <div className="bg-[#494336] relative border-b-[2px] border-solid border-[#D8DADC] max-lg:pb-[80px]">
        <div className="absolute right-0 md:right-[37px] max-w-[500px] w-full bottom-0">
          <Image
            className="w-full"
            src="/assest/img/dog-image.png"
            alt="bg-img"
            width={584}
            height={372}
          />
        </div>
        <div className="max-w-[1160px] px-[32px] sm:px-[40px] py-[60px] sm:py-[80px] mx-auto">
          <div className="max-w-[568px]">
            <p className="text-2xl sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] text-[#D7D9DD] mb-[20px] md:mb-[30px]">
              Our Mission
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#D7D9DD] !leading-[26px] mb-[38px] sm:mb-10">
              Our Mission is to establish a new standard of excellence in
              veterinary care, driven by an unwavering ethical conscience.
            </p>
            <div className="w-fit py-2 sm:py-3 overflow-hidden z-[1] relative">
              <Link
                href="#"
                className="text-base sm:text-lg font-medium text-[#494336] bg-gred roboto py-2 sm:py-3 px-6 sm:px-8 lg:px-[38px] font-medium tracking-[1.4px] rounded-[27px] duration-300"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ourmission;
