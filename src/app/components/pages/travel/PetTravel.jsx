import React from "react";
import TeleCommon from "../../common/TeleCommon";
import Para from "../../common/Para";

function PetTravel() {
  return (
    <>
      <div className="py-15 sm:py-20">
        <TeleCommon
          title={"Pet Travel Certificates"}
          para={
            "At Nebula Vets, we understand that your pet is an important part of your family, and we want to make sure they can accompany you on your domestic or international travels. We offer assistance in obtaining the necessary health certificates and paperwork required for your pet's travel."
          }
        />
        <TeleCommon
          title={"Documentation Assistance"}
          titleClass={"mt-14"}
          para={
            "Gathering the required documentation for travel can be overwhelming and confusing. Our team will provide detailed instructions on the documentation needed and guide you through the process. We will assist you in completing the paperwork accurately, including filling out any forms and providing relevant information to ensure a smooth and hassle-free travel experience for you and your pet."
          }
        />
        <TeleCommon
          title={"Domestic Travel"}
          titleClass={"mt-14"}
          para={
            "Regulations for pet travel vary between states, and how you’re getting there. Each airline has different requirements and specific forms for you to fill out about your pet. Our vets can advise on what exactly you need."
          }
        />
        <TeleCommon
          className={"International Travel"}
          titleClass={"mt-14"}
          para={
            "For international travel planning is important. Health requirements and restrictions on entry can vary, such as requiring a current rabies vaccination no less than 30 days before travel. Some countries may also require your pet to be quarantined for a certain amount of time upon arrival, or have a blood test before travelling."
          }
        />
        <Para
          para={
            "Please contact us before booking your appointment, so we can determine the exact requirements for your planned travel and ensure you’re able to get the travel certificate you need."
          }
        />
      </div>
    </>
  );
}

export default PetTravel;
