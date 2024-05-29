import Image from 'next/image';
import React from 'react';
import searchIcon from "../images/fi_search.svg"

const SearchFilter = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="mb-4 relative">
        <Image className='absolute top-3 left-2' src={searchIcon} width={15} height={15} alt='search icon'/>
        <input
          type="text"
          placeholder="Search"
          className="w-full ps-6 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Institution Type</h3>
        <div>
          <label className="inline-flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="ml-2">Education Sector</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="ml-2">IT Sector</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="ml-2">ITI Sector</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Department</h3>
        {/* Department dropdown content goes here */}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Work Mode</h3>
        {/* Work Mode dropdown content goes here */}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Category</h3>
        <div>
          <label className="inline-flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="ml-2">Teaching</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center mb-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="ml-2">Non-Teaching</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Location</h3>
        {/* Location dropdown content goes here */}
      </div>
    </div>
  );
};

export default SearchFilter;
