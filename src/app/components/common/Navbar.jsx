import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <>
      {" "}
      <nav>
        <div className="bg-[#494336] fixed left-0 z-[11] right-0 top-0">
          <div className="max-w-[1440px] max-[359px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
            <div className="flex pb-[18px] pt-[15px] sm:pt-[11px] items-center justify-between">
              <a href="/" className="block max-w-[90px] sm:max-w-[114px]">
                <Image
                  className="w-full"
                  src="/assest/img/logo.png"
                  alt=""
                  width={110}
                  height={40}
                />
              </a>
              <div className="lg:flex gap-[33px] hidden items-center">
                <Link
                  href="./service.html"
                  className="text-sm text-[#D7D9DD] hover:text-[#8fd9d9] duration-300 font-medium tracking-[1.4px] gred-hv"
                >
                  SERVICES
                </Link>
                <a
                  href="./about-us.html"
                  className="text-sm text-[#D7D9DD] hover:text-[#8fd9d9] duration-300 font-medium tracking-[1.4px] gred-hv"
                >
                  ABOUT US
                </a>
                <a
                  href="./map.html"
                  className="text-sm text-[#D7D9DD] hover:text-[#8fd9d9] duration-300 font-medium tracking-[1.4px] gred-hv"
                >
                  LOCATION
                </a>
                <a
                  href="./carrer.html"
                  className="text-sm text-[#D7D9DD] hover:text-[#8fd9d9] duration-300 font-medium tracking-[1.4px] gred-hv"
                >
                  CAREER
                </a>
                <a
                  href="/"
                  className="text-sm text-[#D7D9DD] gred-hv hover:text-[#8fd9d9] duration-300 gred-hv font-medium tracking-[1.4px]"
                >
                  PATIENT PORTAL
                </a>
                <a
                  href="#"
                  className="text-base sm:text-lg font-medium text-[#494336] bg-gred roboto py-2 sm:py-3 px-6 sm:px-8 lg:px-[38px] font-medium tracking-[1.4px] rounded-[27px] hover:shadow-xl duration-300"
                >
                  BOOK NOW
                </a>
              </div>
              <div className="lg:hidden">
                <Image
                  width={110}
                  height={40}
                  className="w-full"
                  src="/assest/img/menu-bar.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
