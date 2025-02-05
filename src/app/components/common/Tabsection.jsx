import React from "react";
import TabLeft from "./TabLeft";
import TabRight from "./TabRight";
import { precareData, sickData } from "../helper/Helper";

function Tabsection() {
  return (
    <>
      <div className="flex lg:flex-nowrap flex-wrap">
        <div className="lg:w-2/5">
          <TabLeft
            img={"/assest/img/pre-care.png"}
            title={"Preventive Care"}
            subTitle={"Your pet's well-being at the forefront of our practice."}
            dis={
              "At Nebula Vets, we take a proactive approach to your pet's healthcare, prioritizing their well-being and aiming to maximize their quality of life. We believe in the importance of preventive medicine and early detection of potential health issues. By implementing regular wellness check-ups and comprehensive screenings, we can identify and address any problems at their earliest stages."
            }
            btnName={" BOOK NOW"}
          />
        </div>
        <div className="lg:w-3/5 bg-[#D7D9DD80] pl-10 pt-10 md:pt-20 md:pl-20 pr-10 ">
          <div>
            {precareData.map((item, index) => (
              <TabRight
                key={index}
                title={item.head}
                dis={item.dis}
                btnName={item.btnName}
              />
            ))}
          </div>
        </div>
      </div>{" "}
      <div className="flex lg:flex-nowrap flex-wrap">
        <div className="lg:w-2/5">
          <TabLeft
            img={"/assest/img/pre-care.png"}
            title={"Sick Patient Care"}
            subTitle={
              "Delivering exceptional care for sick patients, combining the virtues of efficiency and expertise"
            }
            dis={
              "At Nebula Vets, we are fully equipped with advanced diagnostic tools and a wide range of treatment options to address any health issue your pet may be facing. Our commitment to comprehensive care means that we have the expertise and resources to provide accurate diagnoses and effective treatments."
            }
            btnName={" BOOK NOW"}
          />
        </div>
        <div className="lg:w-3/5 bg-[#D7D9DD80] pl-10 pt-10 md:pt-20 md:pl-20 pr-10 ">
          <div>
            {sickData.map((item, index) => (
              <TabRight
                key={index}
                title={item.head}
                dis={item.dis}
                btnName={item.btnName}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabsection;
