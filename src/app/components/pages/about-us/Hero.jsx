import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div>
      <div className="bg-[#494336] !mt-[86px] sm:mt-[88px] lg:mt-[98px] relative">
        <p
          className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] text-[#D7D9DD] leading-[normal] mr-8 sm:hidden pt-[35px] max-w-[1220px] px-[32px] sm:px-[40px] mx-auto"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          About <br />
          Nebula Vets
        </p>
        <div className="absolute w-full sm:hidden top-0 !max-w-[640px] z-[3]">
          <Image
            className="w-full"
            src="/assest/img/ab-rays.png"
            alt="ab-rays"
            width={640}
            height={171}
          />
        </div>
        <div className="sm:absolute sm:right-5 top-[15%] sm:top-[27%] md:top-[150px] xl:top-[72px] xl:max-w-[636px] w-full sm:max-w-[300px] lg:max-w-[450px] left-0 sm:left-auto right-0 mt-14">
          <Image
            className="w-full"
            src="/assest/img/about-hero.png"
            alt="hero-img"
            width={636}
            height={458}
          />
        </div>
        <div className="max-w-[1220px] px-[32px] sm:px-[40px] mx-auto">
          <div
            className="sm:max-w-[270px] md:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[664px] pt-[16px] sm:pt-[140px] pb-[65px] md:pb-[123px]"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] text-[#D7D9DD] leading-[normal] mr-8 hidden sm:block">
              About <br />
              Nebula Vets
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#D7D9DD] leading-[157%] sm:leading-[130%] mt-[20px] sm:mt-5 mb-[51px] sm:mb-12">
              With a foundation built on values, innovation, and a commitment to
              excellence, Nebula Vets continues to strive for excellence in
              veterinary care. Our journey is fueled by the passion to make a
              difference in the lives of pets and their owners, providing you
              with a trusted partner in your pet's health and well-being.
            </p>
            <div className="w-fit py-2 sm:py-3 overflow-hidden z-[11] relative">
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
    </div>
  );
}

export default Hero;
