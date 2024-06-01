import React from "react";
import Image from "next/image";

const StepButton = ({ step, currentStep, setStep, label, icon }) => (
  <button
    className={`step flex gap-4 ${
      step === currentStep
        ? "active border-b-2 border-[#0A65CC] text-[#0A65CC] font-semibold"
        : "font-normal text-[16px] leading-[20px] text-[#23232380]"
    }`}
    onClick={() => setStep(currentStep)}
    disabled={step < currentStep}
  >
    <Image src={icon} width={24} height={24} alt="Step icon" />
    {label}
  </button>
);

export default StepButton;
