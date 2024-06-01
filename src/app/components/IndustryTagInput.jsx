import React, { useState } from 'react';

const IndustryTagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue) {
      setTags([...tags, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-wrap items-center gap-2 border border-gray-300 p-2 rounded-md">
      {tags.map((tag, index) => (
        <div key={index} className="flex items-center bg-blue-200 text-blue-800 px-2 py-1 rounded-md">
          {tag}
          <button onClick={() => handleRemoveTag(index)} className="ml-1 text-gray-600">
            &times;
          </button>
        </div>
      ))}
      <input
        className="flex-1 px-2 py-1 border-none outline-none"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type and press enter to add"
      />
    </div>
  );
};

export default IndustryTagInput;
