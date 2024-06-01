import React from "react";
import StepButton from "./StepButton";
import User from "../images/User.svg";
import schoolIconGray from "../images/schoolIconGray.svg";
import sort from "../images/sort.svg";

const StepNavigation = ({ step, setStep }) => (
  <div className="steps mb-4 flex justify-between mb-8 w-[574px]">
    <StepButton step={step} currentStep={1} setStep={setStep} label="Basic Information" icon={User} />
    <StepButton step={step} currentStep={2} setStep={setStep} label="Qualification" icon={schoolIconGray} />
    <StepButton step={step} currentStep={3} setStep={setStep} label="Preference" icon={sort} />
  </div>
);

export default StepNavigation;
