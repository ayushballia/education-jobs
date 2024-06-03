import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  // Add more options as needed
];

const SelectInputWithTags = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue) {
      addItem(inputValue);
      setInputValue("");
    }
  };

  const addItem = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleRemoveItem = (item) => {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  };

  const filteredOptions = options.filter(
    (option) =>
      !selectedItems.includes(option.value) &&
      option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="w-full relative">
      <div
        className="flex items-center border border-gray-300 rounded-[15px] p-2 relative"
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex={-1}
      >
        {selectedItems.map((item) => (
          <div
            key={item}
            className="flex items-center bg-blue-100 text-blue-800 p-2 rounded mr-2 mb-2"
          >
            {item}
            <button
              onClick={() => handleRemoveItem(item)}
              className="ml-2 text-red-500"
            >
              &times;
            </button>
          </div>
        ))}
        <ChevronDownIcon className="absolute size-6 right-4" />
        <input
          className="p-[20px] text-[10px] flex-grow p-2 focus:outline-none rounded-[15px]"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type to add..."
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {(isFocused || inputValue) && filteredOptions.length > 0 && (
        <div className="border border-gray-300 rounded-md mt-1 p-2 bg-white absolute w-full z-10">
          {filteredOptions.map((option) => (
            <div
              key={option.value}
              onMouseDown={() => {
                addItem(option.value);
                setInputValue("");
              }}
              className="cursor-pointer p-2 hover:bg-gray-100"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectInputWithTags;
