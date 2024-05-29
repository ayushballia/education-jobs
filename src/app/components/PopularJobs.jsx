import React from "react";
import Image from "next/image";
import logoIcon from "../images/Company Logo.svg";
import apartmentIcon from "../images/apartment.svg";
import workIcon from "../images/work.svg";
import mapIcon from "../images/map-pin.svg";
import calendarIcon from "../images/calendar_month (1).svg";

export default function PopularJobs() {
  return (
    <div className="bg-white rounded-xl">
      <div className="bg-amber-100">
        <h1 className="text-2xl font-semibold p-5">Popular Jobs</h1>
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold capitalize">
              Associate professor
            </h1>
            <h2 className="text-sm text-blue-700 font-semibold">
              Institute of Applied science
            </h2>
          </div>
          <Image src={logoIcon} width={80} height={80} alt="logo" />
        </div>
        <div className="flex gap-4">
          <Image
            src={apartmentIcon}
            width={15}
            height={15}
            alt="full time icon"
          />
          <p className="text-xs">Full Time</p>
        </div>
        <div className="flex gap-4">
          <Image
            className="text-blue-600"
            src={workIcon}
            width={15}
            height={15}
            alt="full time icon"
          />
          <p className="text-xs">5-6 yrs</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Image src={mapIcon} width={15} height={15} alt="full time icon" />
            <p className="text-xs">Bengaluru, India</p>
          </div>
          <div className="flex gap-4">
            <Image
              src={calendarIcon}
              width={15}
              height={15}
              alt="full time icon"
            />
            <p className="text-xs">Before 20 May</p>
          </div>
        </div>
      </div>
    </div>
  );
}
