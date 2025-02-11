import Image from "next/image";
import React from "react";
import Para from "./Para";

function AboutCommon({
  img,
  picturetitle,
  titleone,
  titletwo,
  paraone,
  paratwo,
}) {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-[1220px] px-[32px] sm:px-[40px] mx-auto py-[60px] sm:py-20">
          <div
            className="flex flex-wrap lg:flex-nowrap md:gap-[35px] xl:gap-[60px]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="w-full  lg:min-w-[400px] xl:min-w-[600px] relative">
              <Image
                className="w-full"
                alt="danieal"
                src={img}
                height={620}
                width={600}
              />
              <p className="absolute   max-w-fit text-white text-2xl roboto mx-auto lg:mx-0 top-[46px] left-0 right-0 lg:right-auto lg:left-10">
                {picturetitle}
              </p>
            </div>

            <div className="text-[#464334] max-w-[547px] mt-[60px] md:mt-0">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl roboto">
                {titleone}
              </p>
              <p className="text-sm sm:text-base lg:text-xl mt-[38px]">
                {paraone}
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl roboto mt-10">
                {titletwo}
              </p>
              <p className="text-sm sm:text-base lg:text-xl mt-[38px]">
                {paratwo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCommon;
