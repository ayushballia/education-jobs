import React from "react";

const OptionButtons = ({ options }) => (
  <div className="flex space-x-6">
    {options.map((option) => (
      <button
        key={option}
        className="px-[27px] py-[10px] border border-gray-300 rounded-[15px] text-[20px]"
        onClick={() => console.log(option)} // Replace with actual handler
      >
        {option}
      </button>
    ))}
  </div>
);

export default OptionButtons;
