"use client";
import Image from "next/image";
import React, { useState } from "react";
import searchIcon from "../images/fi_search.svg";
import mapIcon from "../images/map-pin.svg";
import dpsIcon from "../images/dps.svg";
import SearchFilter from "../components/SearchFilter.jsx";

export default function institutePage() {
  return (
    <div className="flex gap-4 p-5 bg-gray-100">
      <div className="w-3/12">
        <div className="p-6 bg-white rounded-xl">
          <p className="text-base font-semibold">Search</p>
          <SearchFilter />
        </div>
      </div>

      <div className="w-9/12">
        <p  className="text-lg font-semibold pb-4">145 +  Pre School</p>
        <div className="flex flex-wrap justify-evenly items-center bg-white rounded-xl max-w-60">
          <div className="flex gap-1 flex-col items-center p-5">
            <Image src={dpsIcon} width={55} height={55} alt="company logo" />
            <p className="text-lg pt-3 font-semibold">Delhi Public school</p>
            <div className="flex gap-4 items-center">
              <Image src={mapIcon} width={15} height={15} alt="map icon"/> 
              <p className="text-base text-blue-600 font-semibold">Bengaluru, India</p>
            </div>
            <p className="text-sm"><span className="font-semibold">Active Jobs:</span> 10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
