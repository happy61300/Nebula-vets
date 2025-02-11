import React from "react";
import AboutCommon from "../../common/AboutCommon";

function Community() {
  return (
    <div>
      <AboutCommon
        img={"/assest/img/about-33.png"}
        titleone={"Community Engagement and Education"}
        paraone={
          "Nebula Vets is committed to being an active and integral part of the community we serve. We actively engage in educational initiatives, organizing workshops, seminars, and community events to spread awareness about pet care, responsible ownership, and the importance of preventive medicine."
        }
        titletwo={"Sustainability  & Environmental Responsibility"}
        paratwo={
          "Recognizing the impact of the veterinary field on the environment, Nebula Vets is dedicated to promoting sustainability and environmental responsibility. We have implemented eco-friendly practices within our facility, reduced waste, and actively participate in initiatives that support a greener future for veterinary medicine."
        }
      />
    </div>
  );
}

export default Community;
