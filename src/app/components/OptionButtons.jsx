import React, { useState } from "react";

const OptionButtons = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="flex space-x-6">
      {options.map((option) => (
        <button
          key={option}
          type="button" // Ensure the button does not trigger form submission
          className={`px-[27px] py-[10px] border border-gray-300 rounded-[15px] text-[20px] ${
            selectedOption === option ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
          onClick={() => handleSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default OptionButtons;
