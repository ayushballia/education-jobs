import React from "react";
import FormSection from "./FormSection";

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

export default QualificationForm;
