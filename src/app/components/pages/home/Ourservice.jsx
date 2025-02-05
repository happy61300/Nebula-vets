import Image from "next/image";
import Link from "next/link";
import React from "react";
import Booknow from "../../common/Booknow";

function Ourservice() {
  return (
    <>
      <div className="bg-white">
        {" "}
        <div className="max-w-[1160px] px-[32px] sm:px-[40px] py-[60px] sm:py-[80px] mx-auto bg-white pb-[90px] sm:pb-30 lg:pb-[140px]">
          <div>
            <div className="text-[#494336] max-w-[770px]">
              <p className="text-2xl sm:text-3xl lg:text-[48px] leading-[130%]">
                Our Services
              </p>
              <p className="leading-[157.143%] md:!leading-[130%] mt-[28px] text-sm sm:text-base md:text-lg lg:text-xl">
                We are proud to offer a comprehensive range of exceptional
                clinical services to cater to all your pet's needs. From routine
                wellness health checks to prompt and efficient urgent care, our
                team is here to provide the highest level of support and
                assistance. Count on us to be there for you and your beloved
                companion every step of the way.
              </p>
              <div className="mt-12  pb-[60px] sm:pb-20 ">
                <div className="w-fit py-2 sm:py-3 overflow-hidden z-[1] relative">
                  <Booknow btntitle={"LEARN MORE"} />
                </div>
              </div>
            </div>
          </div>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper flex justify-between gap-3 md:gap-5 flex-wrap lg:flex-nowrap">
              <div className="swiper-slide w-full h-auto sm:w-[48.7%] md:w-[48%]  ">
                <div className="bg-[#494336] flex flex-col justify-start  sm:pl-5 sm:pt-[25px] pt-3 pl-3 sm:pr-4 pr-3 !h-full w-full  pb-4 ">
                  <div className="max-w-[93px]">
                    <Image
                      className="w-full"
                      src="/assest/img/prevent-care.png"
                      alt="prevent-care"
                      width={93}
                      height={74}
                    />
                  </div>
                  <div className="text-[#D7D9DD]">
                    <p className="text-2xl sm:text-[30px] lg:text-[36px] pt-6 sm:pt-7 md:pt-10 lg:pt-[50px]">
                      Preventive Care
                    </p>
                    <Link
                      href="#"
                      className="text-sm sm:text-base block lg:text-lg mt-[5px] underline text-start"
                    >
                      Animal Health Check
                    </Link>
                    <Link
                      href="#"
                      className="text-sm sm:text-base block lg:text-lg mt-[5px] underline text-start"
                    >
                      Vaccinations
                    </Link>
                    <Link
                      href="#"
                      className="text-sm sm:text-base block lg:text-lg mt-[5px] underline text-start"
                    >
                      Dental
                    </Link>
                  </div>
                </div>
              </div>
              <div className="swiper-slide w-full h-auto sm:w-[48.7%] md:w-[48%]  ">
                <div className="bg-[#494336] flex flex-col justify-start  sm:pl-5 sm:pt-[25px] pt-3 pl-3 sm:pr-4 pr-3 !h-full w-full  pb-4 ">
                  <div className="max-w-[93px]">
                    <Image
                      className="w-full"
                      src="/assest/img/sick.png"
                      alt="prevent-care"
                      width={93}
                      height={74}
                    />
                  </div>
                  <div className="text-[#D7D9DD]">
                    <p className="text-2xl sm:text-[30px] block lg:text-[36px] pt-3 sm:pt-7 md:pt-10 lg:pt-[30px]">
                      Sick Patient Care
                    </p>
                    <Link
                      href="#"
                      className="text-sm sm:text-base block max-w-[163px] lg:text-lg mt-[5px] underline text-start"
                    >
                      Urgent & Emergency Care
                    </Link>
                    <Link
                      href="#"
                      className="text-sm sm:text-base block lg:text-lg mt-[5px] underline text-start"
                    >
                      Telemedicine
                    </Link>
                    <Link
                      href="#"
                      className="text-sm sm:text-base block lg:text-lg mt-[5px] underline text-start"
                    >
                      Diagnostics
                    </Link>
                    <Link
                      href="#"
                      className="text-sm sm:text-base block lg:text-lg mt-[5px] underline text-start"
                    >
                      Pharmacy
                    </Link>
                  </div>
                </div>
              </div>
              <div className="swiper-slide w-full h-auto sm:w-[48.7%] md:w-[48%]  ">
                <div className="bg-[#494336] flex flex-col justify-start  sm:pl-5 sm:pt-[25px] pt-3 pl-3 sm:pr-4 pr-3 !h-full w-full  pb-4 ">
                  <div className="max-w-[93px]">
                    <Image
                      className="w-full"
                      src="/assest/img/Surgery.png"
                      alt="prevent-care"
                      width={93}
                      height={74}
                    />
                  </div>
                  <div className="text-[#D7D9DD]">
                    <p className="text-2xl sm:text-[30px] block whitespace-nowrap lg:text-[36px] pt-3 sm:pt-7 md:pt-10 lg:pt-[33px]">
                      Surgery
                    </p>
                    <Link
                      href="#"
                      className="text-sm sm:text-base block lg:text-lg mt-[5px] underline text-start"
                    >
                      Surgeries
                    </Link>
                    <Link
                      href="#"
                      className="text-sm sm:text-base block lg:text-lg mt-[5px] underline text-start"
                    >
                      Spay & Neuter
                    </Link>
                  </div>
                </div>
              </div>
              <div className="swiper-slide w-full h-auto sm:w-[48.7%] md:w-[48%]  ">
                <div className="bg-[#494336] flex flex-col justify-start  sm:pl-5 sm:pt-[25px] pt-3 pl-3 sm:pr-4 pr-3 !h-full w-full  pb-4 ">
                  <div className="max-w-[93px]">
                    <Image
                      className="w-full"
                      src="/assest/img/Add-service.png"
                      alt="prevent-care"
                      width={93}
                      height={74}
                    />
                  </div>
                  <div className="text-[#D7D9DD]">
                    <p className="text-2xl sm:text-[30px] lg:text-[36px] pt-3 sm:pt-7 md:pt-10 lg:pt-[30px]">
                      Additional Services
                    </p>
                    <Link
                      href="#"
                      className="text-sm sm:text-base block lg:text-lg mt-[5px] underline text-start"
                    >
                      Travel Certificates
                    </Link>
                    <Link
                      href="#"
                      className="text-sm sm:text-base block lg:text-lg mt-[5px] underline text-start"
                    >
                      Skin & Dermatology
                    </Link>
                    <Link
                      href="#"
                      className="text-sm sm:text-base block lg:text-lg mt-[5px] underline text-start"
                    >
                      Euthanasia
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute swiper-pagination !-bottom-8"></div>
        </div>
        <div className="relative">
          <div className="swiper-pagination absolute !-top-20 !right-0 !left-0 !w-auto"></div>
        </div>
      </div>
    </>
  );
}

export default Ourservice;
