import React from "react";
import Image from "next/image";

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

export default SidebarItem;
