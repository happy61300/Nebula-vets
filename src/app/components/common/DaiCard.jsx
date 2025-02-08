import Image from "next/image";
import React from "react";
import { accordData } from "../helper/Helper";
import Faq from "./Faq";

function DaiCard({ title, para }) {
  return (
    <>
      {" "}
      <div
        className="w-full sm:w-[48%] relative   "
        data-aos="fade-right "
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        {/* {img ? (
          <div className="absolute bottom-0 right-0">
            
          </div>
        ) : null} */}

        <ul className="text-[#D7D9DD] list-disc   pl-6">
          <li className="text-base roboto sm:text-xl lg:text-2xl mt-9   ">
            {title}
          </li>
          <li className="text-sm sm:text-base  ">{para}</li>
        </ul>
      </div>
    </>
  );
}

export default DaiCard;
