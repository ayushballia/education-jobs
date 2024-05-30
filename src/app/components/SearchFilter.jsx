import Image from 'next/image';
import React from 'react';
import searchIcon from "../images/fi_search.svg"

const SearchFilter = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="mb-4 relative shadow-md rounded-lg">
        <Image className='absolute top-2.5 left-2' src={searchIcon} width={15} height={15} alt='search icon'/>
        <input
          type="text"
          placeholder="Search"
          className="w-full text-xs sm:text-sm ps-7 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <h3 className="text-sm lg:text-base font-bold text-gray-800 mb-3">Institution Type</h3>
        <div>
          <label className="inline-flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 border-blue-600" />
            <span className="ml-2 text-xs sm:text-sm lg:text-base">Education Sector</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 border-blue-600" />
            <span className="ml-2 text-xs sm:text-sm lg:text-base">IT Sector</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 border-blue-600" />
            <span className="ml-2 text-xs sm:text-sm lg:text-base">ITI Sector</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm lg:text-base font-bold text-gray-800 mb-3">Department</h3>
        {/* Department dropdown content goes here */}
      </div>

      <div className="mb-4">
        <h3 className="text-sm lg:text-base font-bold text-gray-800 mb-3">Work Mode</h3>
        {/* Work Mode dropdown content goes here */}
      </div>

      <div className="mb-4">
        <h3 className="text-sm lg:text-base font-bold text-gray-800 mb-3">Category</h3>
        <div>
          <label className="inline-flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-xs sm:text-sm lg:text-base">Teaching</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-xs sm:text-sm lg:text-base">Non-Teaching</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm lg:text-base font-bold text-gray-800 mb-3">Location</h3>
        {/* Location dropdown content goes here */}
      </div>
    </div>
  );
};

export default SearchFilter;
