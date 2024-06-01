import { useState } from "react";
import {  XIcon } from '@heroicons/react/24/solid'


// Component to render selected values in a paragraph
const SelectedValuesParagraph = ({ selectedValues, onDelete }) => {
  return (
    <p className="text-sm text-gray-600">
      {selectedValues.map((value, index) => (
        <span key={index} className="inline-flex items-center mr-2">
          {value}
          <XIcon onClick={() => onDelete(index)} />
        </span>
      ))}
    </p>
  );
};

export default SelectedValuesParagraph