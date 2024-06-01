import React from "react";
import FormSection from "./FormSection";

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

export default PreferenceForm;
