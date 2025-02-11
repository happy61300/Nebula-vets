import React from "react";

function MapLocation() {
  return (
    <>
      {" "}
      <div className="bg-[rgba(215,217,221,0.50)] relative">
        <div className="absolute bottom-0 w-full">
          <img className="w-full" src="./assest/img/map-absolute.png" alt="" />
        </div>
        <div className="max-w-[1360px] md:px-[40px] mx-auto pt-15 md:pt-20 pb-[120px] md:pb-[140px] relative z-[1]">
          <div className="flex items-center max-md:flex-wrap-reverse overflow-hidden">
            <div
              className="max-md:px-8 w-full md:w-[39.17%] flex flex-col gap-[38.5px] sm:gap-8 xl:ml-[100px] max-md:mt-15"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <p className="text-[#494336] text-2xl sm:text-[26px] md:text-[30px] lg:text-[36px]">
                Downtown
              </p>
              <p className="text-[#494336] text-base sm:text-lg md:text-xl lg:text-2xl roboto max-sm:mb-1">
                2468 18th Street, SW <br />
                Washington DC, 20003
              </p>
              <p className="text-[#494336] text-2xl sm:text-[26px] md:text-[30px] lg:text-[36px]">
                Opening Hours
              </p>
              <p className="text-[#494336] text-base sm:text-lg md:text-xl lg:text-2xl roboto max-sm:mb-1">
                Monday - Friday: 8AM - 6PM <br />
                Saturday: 9AM - 5PM <br />
                Sunday: Closed
              </p>
              <p className="text-[#494336] text-2xl sm:text-[26px] md:text-[30px] lg:text-[36px]">
                Contact
              </p>
              <p className="text-[#494336] text-base sm:text-lg md:text-xl lg:text-2xl roboto">
                <a href="tel:+91 999999"> Phone: (212) 123-4567</a>
                <a href="mailto:asd@gmail.com" className="block">
                  hello@nebulavets.com
                </a>
              </p>
            </div>
            <div
              className="w-full md:w-[60.83%]"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="mapouter relative text-right w-full h-[318px] sm:h-[500px] md:h-[570px]">
                <div className="gmap_canvas overflow-hidden bg-none w-full h-[318px] sm:h-[500px] md:h-[570px]">
                  <iframe
                    className="gmap_iframe h-[318px] sm:h-[500px] md:!h-[570px]"
                    width="100%"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=782&amp;height=570&amp;hl=en&amp;q= 2468 18th Street, SW�Washington DC, 20003&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                  <a href="https://sprunkiplay.com">Sprunki</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MapLocation;
