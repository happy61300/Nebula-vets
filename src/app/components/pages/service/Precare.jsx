import React from "react";
import { preData } from "../../helper/Helper";
import Link from "next/link";

function Precare() {
  return (
    <>
      <div className="bg-[#494336]">
        <div className="flex py-[60px] md:py-20 max-w-[1160px]   justify-between mx-auto gap-5 sm:gap-8 flex-wrap md:flex-nowrap  sm:px-10 px-8 ">
          {preData.map((item, index) => (
            <div key={index} className="flex justify-between">
              <Link
                href={"/"}
                className="text-[#D7D9DD]  text-center text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[36px]  "
              >
                {item.iname}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Precare;
