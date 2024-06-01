"use client"
import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import StepNavigation from "../components/StepNavigation.jsx";
import BasicInformationForm from "../components/BasicInformationForm.jsx";
import QualificationForm from "../components/QualificationForm.jsx";
import PreferenceForm from "../components/PreferenceForm.jsx";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="flex gap-4 w-11/12 m-auto">
      <Sidebar step={step} />
      <div className="w-3/4 container bg-white mx-auto px-[70px] py-[75px] rounded-xl">
        <h1 className="text-[26px] leading-[24px] mb-8 font-bold">
          Impress the Employer with your{" "}
          <span className="text-[#0A65CC]">Experience</span>{" "}
        </h1>
        <StepNavigation step={step} setStep={setStep} />
        {step === 1 && <BasicInformationForm onSubmit={handleSubmit} />}
        {step === 2 && <QualificationForm onSubmit={handleSubmit} />}
        {step === 3 && <PreferenceForm onSubmit={handleSubmit} />}
        {step > 1 && (
          <button className="btn" onClick={prevStep}>
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
