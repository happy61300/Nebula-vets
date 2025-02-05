import Image from "next/image";
import Link from "next/link";
import React from "react";
import Booknow from "./Booknow";

function Ourmission({ abimg, title, pera, btnName }) {
  return (
    <>
      <div className="bg-[#494336] relative border-b-[2px] border-solid border-[#D8DADC] max-lg:pb-[80px]">
        <div className="absolute right-0 md:right-[37px] max-w-[500px] w-full bottom-0">
          <Image
            className="w-full"
            src={abimg}
            alt="bg-img"
            width={584}
            height={372}
          />
        </div>
        <div className="max-w-[1160px] px-[32px] sm:px-[40px] py-[60px] sm:py-[80px] mx-auto">
          <div className="max-w-[568px]">
            <p className="text-2xl sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] text-[#D7D9DD] mb-[20px] md:mb-[30px] !leading-[110%]">
              {title}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#D7D9DD] !leading-[26px] mb-[38px] sm:mb-10">
              {pera}
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

export default Ourmission;
