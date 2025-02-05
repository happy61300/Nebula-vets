import Link from "next/link";
import React from "react";

function Booknow({ btntitle, btnclass }) {
  return (
    <>
      {" "}
      <Link
        href="#"
        className={`text-base sm:text-lg font-medium text-[#494336] bg-gred roboto py-2 sm:py-3 px-6 sm:px-8 lg:px-[38px]  tracking-[1.4px] rounded-[27px] hover:shadow-xl duration-300 ${btnclass}`}
      >
        {btntitle}
      </Link>
    </>
  );
}

export default Booknow;
