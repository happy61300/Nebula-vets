import React from "react";
import Middle from "../../common/Middle";
import { healthexamData } from "../../helper/Helper";

function HealthExam() {
  return (
    <>
      <div>
        {healthexamData.map((item, index) => (
          <div className="relative overflow-hidden" key={index}>
            <div className="absolute bottom-0 left-0 right-0 mx-auto">
              <img
                width="100%"
                src="./assest/img/page-3-absolute.png"
                alt="absolute"
              />
            </div>
            <div className="relative z-[2] pb-[123px] lg:pb-[140px] sm:pt-20 pt-[60px] max-w-[1220px] px-[32px] sm:px-[40px] mx-auto">
              <div
                className="text-sm sm:text-base md:text-lg lg:text-xl text-[#494336]"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-[36px]">
                  {item.title}
                </h2>
                <p className="sm:mt-[38px] mt-5 !leading-[157%] sm:!leading-[130%]">
                  {item.para}
                </p>
                <p className="mt-5 sm:mt-9 leading-[157%] sm:!leading-[130%]">
                  {item.dpara}
                </p>
                <ul className="leading-[157%] sm:leading-[150%]">
                  <li>-Vaccinations</li>
                  <li>-Blood panels</li>
                  <li>-Parasitic prevention</li>
                  <li>-Microchipping</li>
                  <li>-Dental care</li>
                  <li>-Fecal tests</li>
                  <li>-Skin tests</li>
                  <li>-Dietary advise</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default HealthExam;
