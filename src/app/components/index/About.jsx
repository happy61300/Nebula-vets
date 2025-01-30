import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <>
      {" "}
      <div
        className="bg-[#D7D9DD80] py-[33px] sm:py-12 lg:py-[80px] relative"
        id="about"
      >
        <div className="absolute -bottom-0 right-0 w-[189px] lg:top-0 lg:w-[348px] xl:w-[350px]">
          <Image
            className="w-full"
            src="/assest/img/dog-section-absolutr.png"
            alt="ab"
            width={611}
            height={392}
          />
        </div>
        <div className="max-w-[1440px] max-[359px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
          <div className="flex gap-[69px] flex-wrap lg:flex-nowrap justify-between items-center">
            <div className="lg:min-w-[400px] max-w-[591px] mx-auto lg:mx-0">
              <Image
                className="w-full"
                src="/assest/img/cat-dog.png"
                alt="cat-dog"
                width={591}
                height={550}
              />
            </div>
            <div className="text-[#494336] max-w-[639px]">
              <h2 className="text-2xl sm:text-[35px] lg:text-[48px]">
                About Nebula Vets ?
              </h2>
              <p className="!leading-[130%] text-sm sm:text-base lg:text-lg mt-[13px] md:mt-6 mt-[38px]">
                Founded on a strong set of core values, the story of Nebula Vets
                began with Daniel Hodnett-Lewis, a visionary veterinary surgeon
                from England, UK. Fueled by a deep passion for animals and a
                desire to elevate the standard of care, Daniel embarked on a
                mission to create a veterinary practice that would revolutionize
                the way pets are treated and cared for. Here's the story of
                Nebula Vets:
              </p>
              <div className="mt-12 pb-[60px]">
                <div className="w-fit py-2 sm:py-3 overflow-hidden z-[1] relative">
                  <Link
                    href="#"
                    className="text-base sm:text-lg font-medium text-[#494336] bg-gred roboto py-2 sm:py-3 px-6 sm:px-8 lg:px-[38px] font-medium tracking-[1.4px] rounded-[27px] duration-300"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
