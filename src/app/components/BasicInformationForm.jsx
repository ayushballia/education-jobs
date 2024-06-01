import React from "react";
import FormSection from "./FormSection";
import OptionButtons from "./OptionButtons";
import TotalExperience from "./TotalExperience";
import InstitutionTypeDropdown from "./InstitutionTypeDropdown";
import IndustryTagInput from "./IndustryTagInput";

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

export default BasicInformationForm;
