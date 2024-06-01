"use client";
import { useState } from "react";
import User from "../images/User.svg";
import text from "../images/text.svg";
import schoolIconGray from "../images/schoolIconGray.svg";
import sort from "../images/sort.svg";
import workIcon from "../images/workIcon.svg";
import Image from "next/image";

import InstitutionTypeDropdown from "../components/InstitutionTypeDropdown.jsx";
import IndustryTagInput from "../components/IndustryTagInput.jsx";

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
        <div className="steps mb-4 flex justify-between mb-8 w-[574px]">
          <button
            className={`step flex gap-4 ${
              step === 1
                ? "active border-b-2 border-[#0A65CC] text-[#0A65CC] font-semibold"
                : "font-normal text-[16px] leading-[20px] text-[#23232380]"
            }`}
            onClick={() => setStep(1)}
          >
            <Image
              src={User}
              width={24}
              height={24}
              alt="Education jobs user icon"
            />
            Basic Information
          </button>
          <button
            className={`step flex gap-4 ${
              step === 2
                ? "active border-b-2 border-[#0A65CC] text-[#0A65CC] font-semibold"
                : "font-normal text-[16px] leading-[20px] text-[#23232380]"
            }`}
            onClick={() => setStep(2)}
            disabled={step < 2}
          >
            <Image
              src={schoolIconGray}
              width={24}
              height={24}
              alt="Education jobs user icon"
            />
            Qualification
          </button>
          <button
            className={`step flex gap-4 ${
              step === 3
                ? "active border-b-2 border-[#0A65CC] text-[#0A65CC] font-semibold"
                : "font-normal text-[16px] leading-[20px] text-[#23232380]"
            }`}
            onClick={() => setStep(3)}
            disabled={step < 3}
          >
            <Image
              src={sort}
              width={24}
              height={24}
              alt="Education jobs user icon"
            />
            Preference
          </button>
        </div>

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
      <h2 className="text-[20px] leading-[20px] font-bold mb-4">
        Setup Progress
      </h2>
      <div className="flex flex-col space-y-4">
        <SidebarItem
          step={step}
          currentStep={1}
          label="Basic Information"
          icon={text}
        />
        <SidebarItem
          step={step}
          currentStep={2}
          label="Work Experience"
          icon=""
        />
        <SidebarItem
          step={step}
          currentStep={3}
          label="Qualification"
          icon={workIcon}
        />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <Image
            src={icon}
            alt={label}
            width={13}
            height={13}
            className="w-6 h-6"
          />
          // {icon}
        )}
      </div>
      <span
        className={`${isActive ? "text-blue-600 font-bold" : "text-gray-500"}`}
      >
        {label}
      </span>
    </div>
  );
};
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

const BasicInformationForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div className="mb-8">
      <label className="text-[20px] leading-[20px] font-bold text-[#232323]">
        Currently Employed?
      </label>
      <div className="flex space-x-6 my-4">
        <button
          id="yesButton"
          className="bg-[#0A65CC] text-white px-[27px] py-[10px] border border-gray-300 rounded-[15px] text-[20px] "
          onclick="selectOption('yes')"
        >
          Yes
        </button>
        <button
          id="noButton"
          className="px-[27px] py-[10px] border border-gray-300 rounded-[15px] text-[20px] "
          onclick="selectOption('no')"
        >
          No
        </button>
      </div>
    </div>

    <div className="mb-8">
      <label className="text-[20px] leading-[20px] font-bold text-[#232323]">
        Type of Experience
      </label>
      <div className="flex space-x-6 my-4">
        <button
          id="yesButton"
          className="bg-[#0A65CC] text-white px-[27px] py-[10px] border border-gray-300 rounded-[15px] text-[20px] "
          onclick="selectOption('yes')"
        >
          Teaching
        </button>
        <button
          id="noButton"
          className="px-[27px] py-[10px] border border-gray-300 rounded-[15px] text-[20px] "
          onclick="selectOption('no')"
        >
          Non-Teaching
        </button>
        <button
          id="noButton"
          className="px-[27px] py-[10px] border border-gray-300 rounded-[15px] text-[20px] "
          onclick="selectOption('no')"
        >
          Both
        </button>
      </div>
    </div>

    <div className="mb-8">
      <label className="text-[20px] leading-[20px] font-bold text-[#232323]">
        Institution Name
      </label>
      <div className="flex space-x-6 my-4">
        <input
          className="p-[20px] text-[10px] text-[#9199A3] border border-[#E4E5E8] rounded-[15px]"
          type="text"
          name="instituteName"
          id="instituteName"
          placeholder="Enter the institution name"
        />
      </div>
    </div>

    <TotalExperience />

    <div className="">
      <h2 className="mb-4 text-xl font-semibold">Type of Institution</h2>
      <InstitutionTypeDropdown
        options={institutionTypes}
        onSelect={handleInstitutionSelect}
      />
      <h2 className="mt-6 mb-2 text-xl font-semibold">Industry</h2>
      <IndustryTagInput />
    </div>

    {/* Add more fields as necessary */}
    <button
      type="submit"
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      Save & Next
    </button>
  </form>
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
    <div className="mb-8">
      <label className="text-[20px] leading-[20px] font-bold text-[#232323]">
        Total Experience
      </label>
      <div className="flex space-x-8 my-4">
        {/* Years */}
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            className="px-3 py-2 text-gray-600"
            onClick={() => changeValue("years", -1)}
          >
            -
          </button>
          <input
            type="text"
            value={`${years} Year${years !== 1 ? "s" : ""}`}
            readOnly
            className="w-44 text-center border-l border-r border-gray-300 focus:outline-none"
          />
          <button
            className="px-3 py-2 text-gray-600"
            onClick={() => changeValue("years", 1)}
          >
            +
          </button>
        </div>
        {/* Months */}
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            className="px-3 py-2 text-gray-600"
            onClick={() => changeValue("months", -1)}
          >
            -
          </button>
          <input
            type="text"
            value={`${months} Month${months !== 1 ? "s" : ""}`}
            readOnly
            className="w-44 text-center border-l border-r border-gray-300 focus:outline-none"
          />
          <button
            className="px-3 py-2 text-gray-600"
            onClick={() => changeValue("months", 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const QualificationForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div>
      <label>Highest Qualification</label>
      <select className="block w-full mt-1 border-gray-300 rounded-md">
        <option value="bachelors">Bachelors</option>
        <option value="masters">Masters</option>
      </select>
    </div>
    {/* Add more fields as necessary */}
    <button
      type="submit"
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      Save & Next
    </button>
  </form>
);

const PreferenceForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div>
      <label>Job Preference</label>
      <select className="block w-full mt-1 border-gray-300 rounded-md">
        <option value="teaching">Teaching</option>
        <option value="non-teaching">Non-Teaching</option>
      </select>
    </div>
    {/* Add more fields as necessary */}
    <button
      type="submit"
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      Start Your Journey
    </button>
  </form>
);

export default MultiStepForm;
