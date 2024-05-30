"use client";
import Image from "next/image";
import React, { useState } from "react";
import searchIcon from "../images/fi_search.svg";
import mapIcon from "../images/map-pin.svg";
import dpsIcon from "../images/dps.svg";
import SearchFilter from "../components/SearchFilter.jsx";
import SchoolList from "../components/SchoolList.jsx"

export default function institutePage() {
  const schools = [
    {
      name: 'Delhi Public School',
      location: 'Bengaluru, India',
      activeJobs: 10,
      logo: '/path/to/dpsIcon.png',
      mapIcon: '/path/to/mapIcon.png'
    },
    {
      name: 'National Public School',
      location: 'Chennai, India',
      activeJobs: 5,
      logo: '/path/to/npsIcon.png',
      mapIcon: '/path/to/mapIcon.png'
    },
    
  ];
  return (
    <div className="font-sans md:flex gap-4 p-5 bg-gray-100">
      <div className="md:w-3/12">
        <div className="p-6 bg-white rounded-xl">
          <p className="lg:text-lg text-base font-semibold text-gray-700">Search</p>
          <SearchFilter />
        </div>
      </div>

      <div className="md:w-9/12">
        <p  className="lg:text-lg text-base font-semibold text-gray-700 py-3">145 +  Pre School</p>
        <SchoolList/>
        {/* <div className="flex flex-wrap justify-evenly items-center bg-white rounded-xl max-w-60">
          <div className="flex gap-1 flex-col items-center p-5">
            <Image src={dpsIcon} width={55} height={55} alt="company logo" />
            <p className="text-lg pt-3 font-semibold">Delhi Public school</p>
            <div className="flex gap-4 items-center">
              <Image src={mapIcon} width={15} height={15} alt="map icon"/> 
              <p className="text-base text-blue-600 font-semibold">Bengaluru, India</p>
            </div>
            <p className="text-sm"><span className="font-semibold">Active Jobs:</span> 10</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
