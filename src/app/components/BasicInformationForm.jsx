"use client";
import React, { useState } from "react";
import FormSection from "./FormSection";
import OptionButtons from "./OptionButtons";
import OptionButtonWithIcon from "./OptionButtonWithIcon";
import TotalExperience from "./TotalExperience";
import DropDownContent from "./DropDownComponent.jsx";
import SelectInputWithTags from "./SelectInputWithTags";
import DateRangePicker from "./DateRangePicker.jsx";
import Preference from "./Preference.jsx"
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";


const departments = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  // Add more options as needed
];



const BasicInformationForm = ({ onSubmit }) => {
  const [currentlyEmployed, setCurrentlyEmployed] = useState(null);
  const [experienceType, setExperienceType] = useState(null);
  const [roleTpe, setRoleType] = useState(null);
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
      <TotalExperience />
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

      <FormSection title="Type of Institution">
        <DropDownContent />
      </FormSection>
      <FormSection title="Type of Role">
        <OptionButtonWithIcon
          options={["Teaching", "Non-Teaching"]}
          onSelect={setRoleType}
        />
      </FormSection>
      
      <FormSection title="Department">
        <SelectInputWithTags />
        
      </FormSection>
      <FormSection title="Subject">
        <input
          className="p-[20px] text-[10px] text-[#9199A3] border border-[#E4E5E8] rounded-[15px] w-full"
          type="text"
          name="instituteName"
          placeholder="Enter the Subject"
          value={institutionName}
          onChange={(e) => setInstitutionName(e.target.value)}
        />
      </FormSection>
      <FormSection title="Role">
        <DropDownContent />
        {/* <Preference/> */}
      </FormSection>
      <FormSection title="Designation">
        <input
          className="p-[20px] text-[10px] text-[#9199A3] border border-[#E4E5E8] rounded-[15px] w-full"
          type="text"
          name="instituteName"
          placeholder="Enter Your Designation"
          value={institutionName}
          onChange={(e) => setInstitutionName(e.target.value)}
        />
      </FormSection>
      <FormSection title="Duration">
        <DateRangePicker />
      </FormSection>

      <FormSection title="Mode of Work">
        <OptionButtons
          options={["OnSite", "Remote", "Hybrid"]}
          onSelect={setExperienceType}
        />
      </FormSection>
      <FormSection title="Current Location">
        <div className="relative text-[12px] flex items-center">
          <ChevronDownIcon className="absolute size-6 right-4"/>
          <input type="text" name="city" id="city" placeholder="city" className="rounded-[15px] border border-[#E4E5E8] px-[22px] py-[20px]"/>
        </div>
        <div className="relative text-[12px] flex items-center">
          <ChevronDownIcon className="absolute size-6 right-4"/>
          <input type="text" name="state" id="state" placeholder="state" className="rounded-[15px] border border-[#E4E5E8] px-[22px] py-[20px]"/>
        </div>
        
      </FormSection>
      <FormSection title="Current Annual Salary">
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center p-[17px] border-r">
            <span className="text-[#1C1B1F] text-[17px]">₹</span>
        </span>
        <input type="text" placeholder="Rupees" className="w-full pl-12 pr-4 py-[20px] text-[#9199A3] text-[12px] border border-gray-300 rounded-[15px]"/>
    </div>

        
      </FormSection>
      <FormSection title="Employment Type">

        
      </FormSection>
      <FormSection title="Notice Period">

        
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
