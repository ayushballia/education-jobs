import React from "react";
import SidebarItem from "./SidebarItem";
import text from "../images/text.svg";
import workIcon from "../images/workIcon.svg";

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

export default Sidebar;
