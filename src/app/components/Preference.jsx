"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Preference = () => {
  const [activeTab, setActiveTab] = useState("teaching");
  //   Custom Select Menu
  const [selectedItems, setSelectedItems] = useState(["ItemOne", "ItemTwo"]);
  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const allOptions = ["ItemOne", "ItemTwo", "ItemThree", "ItemFour"];

  const addItems = (item) => {
    console.log(item);
    if (!selectedItems.includes(item)) {
      setSelectedItems((prev) => [...prev, item]);
    }
    setShowOptions(false); // Hide options after selection
    setInputValue(""); // Reset input value
  };

  const handleBoxClick = () => {
    setShowOptions(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowOptions(true);
  };

  const filteredOptions = allOptions.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  const CustomSelectMenu = () => (
    <div>
      <div>
        <div className="border-[1px] border-gray-300 px-2 py-1">
          <div className="flex gap-2">
            {/* Selected Items */}
            {selectedItems.map((item, i) => (
              <div
                className="border-[1px] border-gray-300 px-2 py-1 w-max cursor-pointer"
                key={i}
              >
                {item}{" "}
                <span
                  onClick={() =>
                    setSelectedItems((prev) => prev.filter((a) => a !== item))
                  }
                  className="pl-4 text-gray-400 hover:scale-105 hover:text-gray-600 transition-all"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </span>
              </div>
            ))}
            {/* Input field for new items */}
            <div
              onClick={() => setShowOptions(true)}
              className="flex justify-center relative"
            >
              <input
                className="border-none outline-none flex-grow"
                value={inputValue}
                onChange={handleInputChange}
                autoFocus={showOptions}
              />
            </div>
          </div>
          {/* Options */}
          {showOptions && filteredOptions.length > 0 && (
            <div className="mt-2 border-[1px] border-gray-300">
              {filteredOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => addItems(option)}
                  className="cursor-pointer p-2"
                >
                  {option}{" "}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="mt-32 px-12">
      <div>
        <CustomSelectMenu />
      </div>
    </section>
  );
};

export default Preference;
