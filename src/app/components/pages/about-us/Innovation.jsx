import Image from "next/image";
import React from "react";

function Innovation() {
  return (
    <>
      <div className="relative">
        <div className="absolute w-full bottom-0">
          <Image
            className="w-full"
            src="/assest/img/about-rays.png"
            alt="about"
            width={2000}
            height={595}
          />
        </div>
        <div className="max-w-[1220px] px-[32px] sm:px-[40px] mx-auto py-[60px] sm:py-20">
          <div className="flex flex-wrap-reverse lg:flex-nowrap md:gap-[35px] xl:gap-[60px]">
            <div className="text-[#464334] max-w-[547px] mt-[60px] md:mt-0">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl roboto">
                Innovation and Cutting-Edge Technology
              </p>
              <p className="text-sm sm:text-base lg:text-xl mt-[38px]">
                Nebula Vets embraced the power of innovation and embraced
                cutting-edge technology to enhance their diagnostic
                capabilities, treatment options, and overall patient care. From
                advanced imaging techniques to state-of-the-art surgical
                equipment, Nebula Vets ensures that their veterinarians have
                access to the latest tools and techniques to deliver optimal
                outcomes.
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl roboto mt-10">
                Compassionate Care  & Client Relationships
              </p>
              <p className="text-sm sm:text-base lg:text-xl mt-[38px]">
                Nebula Vets prides itself on providing compassionate care not
                only to the pets but also to their owners. We understand the
                deep bond between humans and animals and strive to create a
                nurturing and supportive environment for both. Building strong
                client relationships based on trust, open communication, and
                empathy is at the heart of their practice.
              </p>
            </div>
            <div className="w-full lg:min-w-[400px] xl:min-w-[600px] relative">
              <Image
                className="w-full"
                src="/assest/img/practice.png"
                alt="danieal"
                height={620}
                width={600}
              />

              <p className="absolute hidden lg:block   max-w-fit text-white text-2xl roboto mx-auto lg:mx-0 top-[46px] left-0 right-0 lg:right-auto lg:left-10">
                picture of the practice
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Innovation;
