import React from "react";

function Photos() {
  return (
    <>
      {" "}
      <div className="py-20 bg-[#D7D9DD] px-8 sm:px-0">
        <div className="swiper mySwiper overflow-scroll">
          <div className="swiper-wrapper flex gap-4   min-w-[1200px]">
            <div className="swiper-slide">
              <div className="w-full h-[296px] sm:h-[420px]">
                <img
                  className="h-full w-full object-cover"
                  src="/assest/img/page-2-d-1.png"
                  alt="slider-img"
                />
              </div>
            </div>
            <div className="swiper-slide  ">
              <div className="w-full h-[296px] sm:h-[420px]">
                <img
                  className="h-full w-full object-cover"
                  src="/assest/img/page-2d-2.png"
                  alt="slider-img"
                />
              </div>
            </div>
            <div className="swiper-slide ">
              <div className="w-full h-[296px] sm:h-[420px]">
                <img
                  className="h-full w-full object-cover"
                  src="/assest/img/page-2-d-3.png"
                  alt="slider-img"
                />
              </div>
            </div>
            <div className="swiper-slide  ">
              <div className="w-full h-[296px] sm:h-[420px]">
                <img
                  className="h-full w-full object-cover"
                  src="/assest/img/gage-2-d4.png"
                  alt="slider-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="swiper-pagination !bottom-2 sm:!-bottom-10"></div>
        </div>
      </div>
    </>
  );
}

export default Photos;
