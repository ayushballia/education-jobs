import React from "react";
import Image from "next/image";
import logo from "../images/Company Logo.svg";

export default function PopularJobs() {
  return (
    <div className="bg-white rounded-xl">
      <div className="bg-amber-100">
        <h1 className="text-2xl font-semibold p-5">Popular Jobs</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold capitalize">
              Associate professor
            </h1>
            <h2 className="text-sm text-blue-700 font-semibold">
              Institute of Applied science
            </h2>
          </div>
          <Image src={logo} width={80} height={80} alt="logo" />
        </div>
      </div>
    </div>
  );
}
