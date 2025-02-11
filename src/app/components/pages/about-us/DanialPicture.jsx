import React from "react";
import { danialData } from "../../helper/Helper";
import AboutCommon from "../../common/AboutCommon";

function DanialPicture() {
  return (
    <div>
      <AboutCommon
        img={"/assest/img/laptop-man.png"}
        picturetitle={"picture of Daniel"}
        titleone={"Inspiration and Vision"}
        paraone={
          "Daniel's journey began with a profound inspiration to make a positive impact on the lives of pets and their owners. He envisioned a veterinary practice that would go beyond the conventional norms, offering exceptional care, innovative treatments, and a compassionate approach."
        }
        titletwo={"Elevating the Standard of Care"}
        paratwo={
          "Determined to raise the standard of care, Daniel assembled a team of like-minded professionals who shared his vision and values.Together, they worked tirelessly to create a veterinary practice that would exceed expectations and set new benchmarks in veterinary medicine."
        }
      />
    </div>
  );
}

export default DanialPicture;
