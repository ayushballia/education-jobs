import React from "react";
import FormSection from "./FormSection";
import Preference from "./Preference.jsx"


const PreferenceForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <Preference/>
    <button type="submit" className="text-[16px] mt-4 px-[20px] py-[16px] bg-[#0A65CC] text-white rounded-[20px]">
      Start Your Journey 🚀
    </button>
  </form>
);

export default PreferenceForm;
