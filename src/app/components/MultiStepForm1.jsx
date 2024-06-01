"use client";
import { useState } from "react";
import Image from "next/image";

import User from "../images/User.svg";
import text from "../images/text.svg";
import schoolIconGray from "../images/schoolIconGray.svg";
import sort from "../images/sort.svg";
import workIcon from "../images/workIcon.svg";

import InstitutionTypeDropdown from "../components/InstitutionTypeDropdown.jsx";
import IndustryTagInput from "../components/IndustryTagInput.jsx";

const institutionTypes = [
    "University",
    "College",
    "Trade School",
    "Online School",
    "Research Institute",
  ];

  const handleInstitutionSelect = (selectedOption) => {
    console.log("Selected Institution Type:", selectedOption);
  };

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

const Sidebar = ({ step }) => {
  return (
    <div className="w-1/4 p-4 bg-[#FFFFFF] h-screen rounded-xl border border-[#00000026]">
      <h2 className="text-[20px] leading-[20px] font-bold mb-4">Setup Progress</h2>
      <div className="flex flex-col space-y-4">
        <SidebarItem step={step} currentStep={1} label="Basic Information" icon={text} />
        <SidebarItem step={step} currentStep={2} label="Work Experience" icon="" />
        <SidebarItem step={step} currentStep={3} label="Qualification" icon={workIcon} />
        <SidebarItem step={step} currentStep={4} label="Preference" icon="" />
      </div>
    </div>
  );
};

const SidebarItem = ({ step, currentStep, label, icon }) => {
  const isActive = step === currentStep;
  const isCompleted = step > currentStep;

  return (
    <div className="flex items-center">
      <div
        className={`text-[20px] leading-[20px] font-base flex items-center justify-center w-8 h-8 border rounded-full mr-4 ${
          isActive
            ? "text-[20px] leading-[20px] font-bold border-blue-600 bg-blue-100"
            : isCompleted
            ? "border-green-600 bg-green-100"
            : "border-gray-300 bg-gray-100"
        }`}
      >
        {isCompleted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <Image src={icon} alt={label} width={13} height={13} className="w-6 h-6" />
        )}
      </div>
      <span className={`${isActive ? "text-blue-600 font-bold" : "text-gray-500"}`}>{label}</span>
    </div>
  );
};

const StepNavigation = ({ step, setStep }) => (
  <div className="steps mb-4 flex justify-between mb-8 w-[574px]">
    <StepButton step={step} currentStep={1} setStep={setStep} label="Basic Information" icon={User} />
    <StepButton step={step} currentStep={2} setStep={setStep} label="Qualification" icon={schoolIconGray} />
    <StepButton step={step} currentStep={3} setStep={setStep} label="Preference" icon={sort} />
  </div>
);

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

const BasicInformationForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <FormSection title="Currently Employed?">
      <OptionButtons options={["Yes", "No"]} />
    </FormSection>
    <FormSection title="Type of Experience">
      <OptionButtons options={["Teaching", "Non-Teaching", "Both"]} />
    </FormSection>
    <FormSection title="Institution Name">
      <input
        className="p-[20px] text-[10px] text-[#9199A3] border border-[#E4E5E8] rounded-[15px] w-full"
        type="text"
        name="instituteName"
        placeholder="Enter the institution name"
      />
    </FormSection>
    <TotalExperience />
    <FormSection title="Type of Institution">
      <InstitutionTypeDropdown options={institutionTypes} onSelect={handleInstitutionSelect} />
    </FormSection>
    <FormSection title="Industry">
      <IndustryTagInput />
    </FormSection>
    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
      Save & Next
    </button>
  </form>
);

const FormSection = ({ title, children }) => (
  <div className="mb-8">
    <label className="text-[20px] leading-[20px] font-bold text-[#232323]">{title}</label>
    <div className="flex space-x-6 my-4">{children}</div>
  </div>
);

const OptionButtons = ({ options }) => (
  <div className="flex space-x-6">
    {options.map((option) => (
      <button
        key={option}
        className="px-[27px] py-[10px] border border-gray-300 rounded-[15px] text-[20px] "
        onClick={() => selectOption(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

const TotalExperience = () => {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);

  const changeValue = (type, delta) => {
    if (type === "years") {
      setYears((prev) => Math.max(0, prev + delta));
    } else if (type === "months") {
      setMonths((prev) => Math.max(0, prev + delta));
    }
  };

  return (
    <FormSection title="Total Experience">
      <ExperienceCounter type="years" value={years} onChange={changeValue} />
      <ExperienceCounter type="months" value={months} onChange={changeValue} />
    </FormSection>
  );
};

const ExperienceCounter = ({ type, value, onChange }) => (
  <div className="flex items-center border border-gray-300 rounded-md">
    <button className="px-3 py-2 text-gray-600" onClick={() => onChange(type, -1)}>
      -
    </button>
    <input
      type="text"
      value={`${value} ${type.charAt(0).toUpperCase() + type.slice(1)}${value !== 1 ? "s" : ""}`}
      readOnly
      className="w-44 text-center border-l border-r border-gray-300 focus:outline-none"
    />
    <button className="px-3 py-2 text-gray-600" onClick={() => onChange(type, 1)}>
      +
    </button>
  </div>
);

const QualificationForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <FormSection title="Highest Qualification">
      <select className="block w-full mt-1 border-gray-300 rounded-md">
        <option value="bachelors">Bachelors</option>
        <option value="masters">Masters</option>
      </select>
    </FormSection>
    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
      Save & Next
    </button>
  </form>
);

const PreferenceForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <FormSection title="Job Preference">
      <select className="block w-full mt-1 border-gray-300 rounded-md">
        <option value="teaching">Teaching</option>
        <option value="non-teaching">Non-Teaching</option>
      </select>
    </FormSection>
    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
      Start Your Journey
    </button>
  </form>
);

export default MultiStepForm;
