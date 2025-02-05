import Image from "next/image";
import React from "react";
import { accordData } from "../../helper/Helper";

function Whychoose() {
  return (
    <>
      {" "}
      <div className="bg-[#494336]" id="location">
        <div className="max-w-[1160px] px-[32px] sm:px-[40px] py-[60px] sm:py-[80px] mx-auto">
          <p className="text-[#D7D9DD] text-2xl sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] mb-10 max-sm:text-center md:mb-[58px]">
            Why choose Nebula Vets?
          </p>
          <div className="flex max-sm:flex-wrap gap-y-0 sm:gap-x-[25px] max-[850px]:gap-x-[40px] gap-x-[70px]">
            <div className="w-full  ">
              <button className="toggle-button w-full items-center   ">
                <div className="flex gap-5 sm:gap-6 lg:gap-8  flex-wrap">
                  {accordData.map((item, index) => (
                    <div
                      className="flex border-gred-linear pb-6 sm:pb-8 w-[calc(50%-30px)] justify-between"
                      key={index}
                    >
                      <p className="text-base md:text-lg lg:text-xl text-[#D7D9DD] font-semibold text-start !leading-[150%] roboto">
                        {item.question}
                      </p>{" "}
                      <span className="first-img">
                        <svg
                          className="max-md:w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                        >
                          <line
                            y1="15.1136"
                            x2="30"
                            y2="15.1136"
                            stroke="url(#paint0_linear_1204_1399)"
                            strokeWidth="2.5"
                          />
                          <line
                            x1="15.1134"
                            y1="30"
                            x2="15.1134"
                            y2="7.28523e-08"
                            stroke="url(#paint1_linear_1204_1399)"
                            strokeWidth="2.5"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1204_1399"
                              x1="0"
                              y1="16.3636"
                              x2="30"
                              y2="16.3636"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFA280" />
                              <stop offset="1" stopColor="#8FD9D9" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_1204_1399"
                              x1="16.3634"
                              y1="30"
                              x2="16.3634"
                              y2="0"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFA280" />
                              <stop offset="1" stopColor="#8FD9D9" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between w-full items-center pt-[15px] pb-[20px] sm:py-[32px] gap-1">
                  <span className="icon-open hidden second-img text-5xl text-[white] rotate-45">
                    <Image
                      src="/assest/img/Line.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </span>
                </div>
                <p className="hidden text-sm sm:text-base text-[#787878] text-start description text-start pr-2.5 pb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  voluptas exercitationem rem sunt, ad illum quia doloremque
                  odit provident earum atque voluptatem enim tempore sit cumque
                  praesentium porro culpa ducimus ab fuga, cupiditate ipsa. Rem
                  similique consectetur eos doloremque voluptas.
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whychoose;
