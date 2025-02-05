import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "../helper/Helper";
import Booknow from "./Booknow";

function Navbar() {
  return (
    <>
      <nav>
        <div className="bg-[#494336] fixed left-0 z-[11] right-0 top-0">
          <div className="max-w-[1440px] max-[359px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
            <div className="flex pb-[18px] pt-[15px] uppercase sm:pt-[11px] items-center  justify-between">
              <Link href="/" className="block max-w-[90px]  sm:max-w-[114px]">
                <Image
                  className="w-full"
                  src={"/assest/img/logo.png"}
                  alt="LOGO"
                  width={110}
                  height={40}
                />
              </Link>
              <div className="lg:flex gap-[33px] hidden items-center">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="text-sm text-[#D7D9DD] hover:text-[#8fd9d9] duration-300 font-medium tracking-[1.4px] gred-hv"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="lg:hidden">
                <Image
                  width={110}
                  height={40}
                  className="w-full"
                  src={"/assest/img/menu-bar.png"}
                  alt=""
                />
              </div>
              <div className="hidden lg:block">
                <Booknow btntitle={"BOOK NOW"} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
