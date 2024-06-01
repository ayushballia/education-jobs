import React, { useState } from 'react';

const InstitutionTypeDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
      >
        {selectedOption || "Select the Institution type"}
      </button>
      {isOpen && (
        <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 mt-1">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InstitutionTypeDropdown;
