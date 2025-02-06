import React from "react";
import Middle from "../../common/Middle";

function Whyshould() {
  return (
    <>
      {" "}
      <div className="overflow-hidden">
        <Middle
          title={"Why should I vaccinate my pet?"}
          para={
            "Vaccines are affective as the expose your pet’s immune system to an inactive strain of infectious agents. This assists their body to create immune cells that are specifically designed to respond effectively when exposed to the disease. Vaccines are also relatively painless, quick and cost-effective to administer."
          }
          raysimg={"/assest/img/page-3-absolute.png"}
          rayimgclass={"hidden"}
          pb_oclass={"!pb-0"}
        />
        <Middle
          titleclass={"mt-[-50px]"}
          title={"Why should I vaccinate my pet?"}
          para={
            "Vaccines are affective as the expose your pet’s immune system to an inactive strain of infectious agents. This assists their body to create immune cells that are specifically designed to respond effectively when exposed to the disease. Vaccines are also relatively painless, quick and cost-effective to administer."
          }
          raysimg={"/assest/img/page-3-absolute.png"}
        />
      </div>
    </>
  );
}

export default Whyshould;
