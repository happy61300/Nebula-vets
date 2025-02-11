import React from "react";
import { meetourData } from "../../helper/Helper";

function MeetOur({ title }) {
  return (
    <div>
      <div className="text-[#D7D9DD] md:pt-20 md:pb-[85px] py-[60px] bg-[#494336]">
        <div
          className="max-w-[1440px] px-[51px] mx-auto"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className="text-2xl text-center sm:text-[48px] md:text-[60px] xl:text-[70px]">
            Meet our veterinary team:
          </h1>
          <div className="flex gap-5 mt-12 lg:mt-[60px] flex-wrap xl:flex-nowrap justify-center mx-auto">
            {meetourData.map((item, index) => (
              <div
                className="w-[calc(50%-14px)] lg:w-[calc(33%-14px)] xl:w-[16%] flex flex-col justify-center items-center"
                key={index}
              >
                <div className="max-w-[98px] sm:max-w-[207px]">
                  <img
                    width="100%"
                    src="./assest/img/Ellipse 1.png"
                    alt="elipse"
                  />
                </div>
                <p className="text-center mt-2 sm:mt-6 lg:mt-10 max-w-[200px] text-sm sm:text-base lg:text-lg xl:text-xl">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="w-fit mx-auto mt-[38px] sm:mt-11 py-2 sm:py-3 overflow-hidden z-[1] relative">
            <a
              href="#"
              className="text-base sm:text-lg   text-[#494336] bg-gred roboto py-2 sm:py-3 px-6 sm:px-8 lg:px-[38px] font-medium tracking-[1.4px] rounded-[27px] duration-300"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetOur;
