"use client";
import React, { useState } from "react";
import FormSection from "./FormSection";
import OptionButtons from "./OptionButtons";
import TotalExperience from "./TotalExperience";
import DropDownContent from "./DropDownComponent.jsx";

const institutionTypes = [
  "University",
  "College",
  "Trade School",
  "Online School",
  "Research Institute",
];

const BasicInformationForm = ({ onSubmit }) => {
  const [currentlyEmployed, setCurrentlyEmployed] = useState(null);
  const [experienceType, setExperienceType] = useState(null);
  const [institutionName, setInstitutionName] = useState("");
  const [institutionType, setInstitutionType] = useState([]);

  const handleInstitutionSelect = (selectedOptions) => {
    setInstitutionType(selectedOptions);
  };

  const handleDelete = (index) => {
    const updatedValues = selectedValues.filter((_, i) => i !== index);
    setSelectedValues(updatedValues);
    setSelectedOptions(updatedValues); // Ensure this updates the main form as well
    onSelect(updatedValues);
  };

  return (
    <form onSubmit={onSubmit} className="w-[574px]">
      <FormSection title="Currently Employed?">
        <OptionButtons
          options={["Yes", "No"]}
          onSelect={setCurrentlyEmployed}
        />
      </FormSection>
      <FormSection title="Type of Experience">
        <OptionButtons
          options={["Teaching", "Non-Teaching", "Both"]}
          onSelect={setExperienceType}
        />
      </FormSection>
      <FormSection title="Institution Name">
        <input
          className="p-[20px] text-[10px] text-[#9199A3] border border-[#E4E5E8] rounded-[15px] w-full"
          type="text"
          name="instituteName"
          placeholder="Enter the institution name"
          value={institutionName}
          onChange={(e) => setInstitutionName(e.target.value)}
        />
      </FormSection>
      <TotalExperience />
      <FormSection title="Type of Institution">
        <DropDownContent />
      </FormSection>
      <FormSection title="Type of Role">
        
      </FormSection>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Save & Next
      </button>
    </form>
  );
};

export default BasicInformationForm;
