import React from "react";
import FormSection from "./FormSection";
import CustomSelect from "./CustomSelect";

const QualificationForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    {/* <FormSection title="Highest Qualification">
      <select className="block w-full mt-1 border-gray-300 rounded-md">
        <option value="bachelors">Bachelors</option>
        <option value="masters">Masters</option>
      </select>
    </FormSection> */}

    <div>
      <CustomSelect label={"Highest Qualification"} placeholder={"Select your highest qualification"} />
    </div>
    <div>
      <CustomSelect label={"School Name"} placeholder={"Select your school name"} />
    </div>
    <div>
      <CustomSelect label={"Board"} placeholder={"Select your board"} />
    </div>
    <div>
      <CustomSelect label={"Medium"} placeholder={"Medium of language"} />
    </div>
    <div>
      <CustomSelect label={"Passing Year"} placeholder={"City"} />
    </div>
    <button
      type="submit"
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      Save & Next
    </button>
  </form>
);

export default QualificationForm;
