import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      {" "}
      <footer>
        <div className="bg-[#494336]">
          <div className="max-w-[1364px] px-8 max-sm:pb-[111px] py-[60px] mx-auto">
            <div className="flex justify-between gap-10 max-[950px]:flex-wrap">
              <div className="max-w-[309px]">
                <label
                  className="text-[#D7D9DD] text-base sm:text-lg md:text-xl lg:text-2xl mb-6 roboto"
                  htmlFor="email"
                >
                  Stay in touch:
                </label>
                <input
                  className="text-lg text-[#D7D9DD] bg-[#494336] py-[6px] px-[14px] border-[1px] border-solid border-[#D7D9DD] mt-6 w-full"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <div className="flex gap-5 mt-[15px] md:mt-[22px]">
                  <Link className="hover:scale-[1.05] duration-200" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="51"
                      viewBox="0 0 50 51"
                      fill="none"
                    >
                      <path
                        d="M24.6478 0.622559C11.035 0.622559 0 11.697 0 25.3584C0 39.0198 11.035 50.0943 24.6478 50.0943C38.2605 50.0943 49.2955 39.0198 49.2955 25.3584C49.2955 11.697 38.2605 0.622559 24.6478 0.622559ZM30.4862 17.7161H26.7813C26.3423 17.7161 25.8545 18.2958 25.8545 19.0662V21.7511H30.4888L29.7878 25.58H25.8545V37.0744H21.4821V25.58H17.5153V21.7511H21.4821V19.4991C21.4821 16.268 23.7158 13.6424 26.7813 13.6424H30.4862V17.7161Z"
                        fill="url(#paint0_linear_1720_1398)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1720_1398"
                          x1="0"
                          y1="0.622559"
                          x2="49.2955"
                          y2="0.622558"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFA280" />
                          <stop offset="1" stopColor="#8FD9D9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Link>
                  <Link className="hover:scale-[1.05] duration-200" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="51"
                      viewBox="0 0 50 51"
                      fill="none"
                    >
                      <path
                        d="M25.3044 0.622559C11.6916 0.622559 0.656616 11.697 0.656616 25.3584C0.656616 39.0198 11.6916 50.0943 25.3044 50.0943C38.9171 50.0943 49.9521 39.0198 49.9521 25.3584C49.9521 11.697 38.9171 0.622559 25.3044 0.622559ZM19.2708 35.6109H14.2796V19.4914H19.2708V35.6109ZM16.7444 17.5125C15.168 17.5125 14.1487 16.3917 14.1487 15.0054C14.1487 13.5908 15.1988 12.5035 16.8086 12.5035C18.4184 12.5035 19.4043 13.5908 19.4351 15.0054C19.4351 16.3917 18.4184 17.5125 16.7444 17.5125ZM37.4999 35.6109H32.5087V26.6777C32.5087 24.5983 31.7847 23.1863 29.9797 23.1863C28.601 23.1863 27.782 24.1422 27.42 25.0621C27.2865 25.3893 27.2531 25.8531 27.2531 26.3143V35.6083H22.2594V24.6318C22.2594 22.6194 22.1952 20.9369 22.1284 19.4888H26.4649L26.6934 21.7279H26.7935C27.4508 20.6766 29.0606 19.1255 31.7539 19.1255C35.0377 19.1255 37.4999 21.3337 37.4999 26.0799V35.6109Z"
                        fill="url(#paint0_linear_1720_1397)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1720_1397"
                          x1="0.656616"
                          y1="0.622559"
                          x2="49.9521"
                          y2="0.622558"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFA280" />
                          <stop offset="1" stopColor="#8FD9D9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Link>
                  <Link className="hover:scale-[1.05] duration-200" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="51"
                      viewBox="0 0 50 51"
                      fill="none"
                    >
                      <path
                        d="M32.6635 25.4341C32.6635 27.4842 31.852 29.4503 30.4076 30.9C28.9631 32.3496 27.0039 33.164 24.9611 33.164C22.9183 33.164 20.9592 32.3496 19.5147 30.9C18.0702 29.4503 17.2587 27.4842 17.2587 25.4341C17.2587 24.9935 17.3049 24.5632 17.3845 24.1458H14.6912V34.4446C14.6912 35.1609 15.2689 35.7407 15.9827 35.7407H33.9421C34.2842 35.74 34.612 35.6032 34.8537 35.3602C35.0953 35.1172 35.231 34.7879 35.231 34.4446V24.1458H32.5377C32.6173 24.5632 32.6635 24.9935 32.6635 25.4341ZM24.9611 30.5874C25.6356 30.5872 26.3035 30.4537 26.9266 30.1945C27.5497 29.9353 28.1158 29.5555 28.5926 29.0767C29.0694 28.598 29.4476 28.0296 29.7056 27.4042C29.9635 26.7787 30.0962 26.1084 30.0961 25.4315C30.0959 24.7546 29.9629 24.0844 29.7046 23.459C29.4463 22.8337 29.0679 22.2656 28.5908 21.787C28.1137 21.3085 27.5474 20.929 26.9242 20.6701C26.301 20.4112 25.633 20.278 24.9585 20.2782C23.5963 20.2786 22.29 20.822 21.3271 21.7889C20.3641 22.7558 19.8233 24.067 19.8236 25.4341C19.8239 26.8012 20.3654 28.1121 21.3289 29.0786C22.2923 30.045 23.5989 30.5877 24.9611 30.5874ZM31.1231 20.0231H34.2015C34.406 20.0231 34.6022 19.9418 34.747 19.7969C34.8919 19.652 34.9736 19.4554 34.9743 19.2501V16.1607C34.9743 15.955 34.8928 15.7578 34.7479 15.6123C34.603 15.4669 34.4064 15.3852 34.2015 15.3852H31.1231C30.9181 15.3852 30.7215 15.4669 30.5766 15.6123C30.4317 15.7578 30.3502 15.955 30.3502 16.1607V19.2501C30.3528 19.6753 30.6994 20.0231 31.1231 20.0231ZM24.9611 0.698242C18.4241 0.698242 12.1549 3.30433 7.53252 7.9432C2.91016 12.5821 0.313354 18.8737 0.313354 25.4341C0.313354 31.9944 2.91016 38.2861 7.53252 42.925C12.1549 47.5639 18.4241 50.1699 24.9611 50.1699C28.1979 50.1699 31.403 49.5301 34.3934 48.287C37.3838 47.0439 40.101 45.2219 42.3897 42.925C44.6785 40.628 46.494 37.9012 47.7327 34.9001C48.9713 31.899 49.6089 28.6824 49.6089 25.4341C49.6089 22.1857 48.9713 18.9692 47.7327 15.9681C46.494 12.967 44.6785 10.2401 42.3897 7.9432C40.101 5.64627 37.3838 3.82424 34.3934 2.58115C31.403 1.33805 28.1979 0.698242 24.9611 0.698242ZM37.7985 35.4547C37.7985 37.029 36.5148 38.3173 34.946 38.3173H14.9762C13.4075 38.3173 12.1237 37.029 12.1237 35.4547V15.4135C12.1237 13.8392 13.4075 12.5508 14.9762 12.5508H34.946C36.5148 12.5508 37.7985 13.8392 37.7985 15.4135V35.4547Z"
                        fill="url(#paint0_linear_1720_1396)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1720_1396"
                          x1="0.313354"
                          y1="0.698242"
                          x2="49.6089"
                          y2="0.698242"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFA280" />
                          <stop offset="1" stopColor="#8FD9D9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex max-sm:flex-wrap gap-y-[30px] max-sm:gap-x-[150px] max-md:gap-x-[100px] gap-x-[55px]">
                <div className="flex flex-col gap-[10px] md:gap-[30px]">
                  <p className="roboto text-[#D7D9DD] text-base sm:text-lg md:text-xl lg:text-2xl">
                    Services
                  </p>
                  <div className="flex flex-col gap-[7px]">
                    <Link
                      className="text-[#D7D9DD] text-sm sm:text-base text-underline duration-300 gred-hv"
                      href="/pharmacy"
                    >
                      Preventive Care
                    </Link>
                    <Link
                      className="text-[#D7D9DD] text-sm sm:text-base text-underline duration-300 gred-hv"
                      href="/skin"
                    >
                      Sick Patient Care
                    </Link>
                    <Link
                      className="text-[#D7D9DD] text-sm sm:text-base text-underline duration-300 gred-hv"
                      href="/surgery"
                    >
                      Surgery
                    </Link>
                    <Link
                      className="text-[#D7D9DD] text-sm sm:text-base text-underline duration-300 gred-hv"
                      href="/service"
                    >
                      Additional Services
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] md:gap-[30px]">
                  <p className="roboto text-[#D7D9DD] text-base sm:text-lg md:text-xl lg:text-2xl">
                    Company
                  </p>
                  <div className="flex flex-col gap-[7px]">
                    <Link
                      className="text-[#D7D9DD] text-sm sm:text-base text-underline duration-300 gred-hv"
                      href="/about-us"
                    >
                      About us
                    </Link>
                    <Link
                      className="text-[#D7D9DD] text-sm sm:text-base text-underline duration-300 gred-hv"
                      href="/carrer"
                    >
                      Carreers
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] md:gap-[30px] xl:ml-[57px] xl:mr-[145px]">
                  <p className="roboto text-[#D7D9DD] text-base sm:text-lg md:text-xl lg:text-2xl">
                    Contact Us
                  </p>
                  <div className="flex flex-col gap-[7px]">
                    <Link
                      className="text-[#D7D9DD] text-sm sm:text-base text-underline duration-300 gred-hv"
                      href="tel: +91 999999999"
                    >
                      Phone: (212) 123-4567
                    </Link>
                    <Link
                      className="text-[#D7D9DD] text-sm sm:text-base text-underline duration-300 gred-hv"
                      href="mailto:abc@gmailcom"
                    >
                      hello@nebulavets.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
