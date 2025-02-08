import React from "react";
import TeleCommon from "../../common/TeleCommon";
import Para from "../../common/Para";

function DoesMyPet() {
  return (
    <>
      {" "}
      <div className="py-[60px] sm:py-[80px]">
        <TeleCommon
          title={"Does my pet need a pre-consultation?"}
          para={
            "Yes, by conducting a pre-operative consultation, performing a physical examination, and considering bloodwork results, we can minimize the risks associated with surgery and optimize the outcome for your beloved pet. Your pet's safety and well-being are our top priorities throughout the entire surgical process."
          }
        />
        <TeleCommon
          title={"How much will it cost?"}
          titleClass={"mt-10"}
          para={
            "Surgery costs can vary based on several factors, including the specific procedure your pet requires, their weight, any necessary medications, and additional considerations. To provide you with an accurate estimate for your pet's surgery, we recommend booking a pre-surgical consultation with our experienced veterinarians."
          }
        />
        <Para
          para={
            "If you prefer, you can also reach out to us via email at nebulavets@gmail.comto request an estimate. Please provide us with as much information as possible about your pet's condition and the specific procedure they may need. Our team will review your request and respond promptly with an estimate based on the information provided."
          }
        />
        <TeleCommon
          title={"Do you accept insurance?"}
          titleClass={"mt-10"}
          para={
            "Yes, at Nebula Vets, we accept all forms of pet insurance. We understand the importance of financial support when it comes to your pet's healthcare needs. By accepting various pet insurance providers, we aim to make the reimbursement process as seamless as possible for our clients."
          }
        />
      </div>
    </>
  );
}

export default DoesMyPet;
