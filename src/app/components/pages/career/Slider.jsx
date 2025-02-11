import React from "react";

function Slider() {
  return (
    <>
      {" "}
      <div className="py-20 bg-[#D7D9DD] px-8 sm:px-0">
        <div
          className="swiper mySwiper"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="swiper-wrapper flex justify-between  overflow-x-auto min-w-[1024px] gap-5">
            <div className="swiper-slide">
              <div className="w-full h-[296px] sm:h-[420px]">
                <img
                  className="h-full w-full object-cover"
                  src="/assest/img/slider-dog-4.png"
                  alt=""
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full h-[296px] sm:h-[420px]">
                <img
                  className="h-full w-full object-cover"
                  src="/assest/img/slider-dog-2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full h-[296px] sm:h-[420px]">
                <img
                  className="h-full w-full object-cover"
                  src="/assest/img/slider-dog-3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full h-[296px] sm:h-[420px]">
                <img
                  className="h-full w-full object-cover"
                  src="/assest/img/slider-dog-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
