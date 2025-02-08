import React from "react";
import TeleCommon from "../../common/TeleCommon";
import Para from "../../common/Para";

function WhySpay() {
  return (
    <>
      <div className="py-[60px] sm:py-20">
        {" "}
        <TeleCommon
          title={"Why spay or neuter?"}
          para={
            "Spaying and neutering has many health and behavioral benefits for your cat or dog. Spaying at a young age has been shown to reduce the occurrence of mammary cancers and uterine infections (also known as pyometra). It also removes heat cycles and coming into season."
          }
        />
        <Para
          para={
            "Neutering has been proven to prevent testicular cancer and may prevent different forms of prostate diseases, and both spaying and neutering may also help prevent or alter unwanted behaviors, such as aggressive behavior and urine marking.When to spay or neuter"
          }
        />
        <TeleCommon
          title={"When to spay or neuter?"}
          titleClass={"mt-14"}
          para={
            "Dog spays and neuters are performed between the ages of 6 and 9 months of age. Large breed dogs, it is advised to wait until they’re a little older to take full advantage of their growth hormones and allow their bones to mature."
          }
        />
        <Para
          para={
            "Cat spays and neuters should typically be carried out around 6 months of age."
          }
        />
        <Para
          para={
            "In older pets who are no spayed or neutered, we’ll discuss all of your options at your first wellness visit and advise on the best time for your pet to be spay or neutered."
          }
        />
        <TeleCommon
          title={"Long-Term Cost Savings"}
          titleClass={"mt-14"}
          para={
            "Spaying or neutering your pet can save you money in the long run. The cost of the procedure is typically less than the expenses associated with caring for a litter or treating health conditions that may arise from not being spayed or neutered."
          }
        />
      </div>
    </>
  );
}

export default WhySpay;
