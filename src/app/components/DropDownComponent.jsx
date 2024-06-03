import React, { useState } from 'react';

const DropdownComponent = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentSelection, setCurrentSelection] = useState('');

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value && !selectedItems.includes(value)) {
      setSelectedItems([...selectedItems, value]);
    }
    setCurrentSelection(value);
  };

  const handleDeleteItem = (item) => {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  };

  return (
    <div className='w-full'>
      
        {/* <label htmlFor="dropdown" className="block mb-2 text-sm font-medium text-gray-700">
          Select an option:
        </label> */}
        <select
        
          value={currentSelection}
          onChange={handleSelectChange}
          className="p-[20px] text-[10px] text-[#9199A3] border border-[#E4E5E8] rounded-[15px] w-full"
        >
          <option value="">Select The Institution type</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      
      {selectedItems.length > 0 && (
        <div className="mb-4">
          {/* <h3 className="text-lg font-medium text-gray-900">Selected Items:</h3> */}
          <ul className="list-disc pl-5 mt-2 flex">
            {selectedItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between text-gray-700">
                {item}
                <button
                  onClick={() => handleDeleteItem(item)}
                  className="ml-2 p-1 text-red-600 hover:text-red-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.707-9.707a1 1 0 111.414-1.414L10 8.586l1.293-1.293a1 1 0 011.414 1.414L11.414 10l1.293 1.293a1 1 0 01-1.414 1.414L10 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 10 7.293 8.707z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
