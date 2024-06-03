import React, { useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

const InstitutionTypeDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (option) => {
    if (!selectedOptions.includes(option)) {
      const newSelectedOptions = [...selectedOptions, option];
      setSelectedOptions(newSelectedOptions);
      onSelect(newSelectedOptions); // Pass the updated array of selected options
      setIsOpen(false);
    }
  };

  return (
    <>
      
      <div className="flex items-center relative w-full">
        <ChevronDownIcon className="absolute right-2 size-6" />
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
        >
          Select the Institution type
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
    </>
  );
};

export default InstitutionTypeDropdown;
