import React from "react";
import Image from "next/image";
import logoIcon from "../images/Company Logo.svg";
import apartmentIcon from "../images/apartment.svg";
import workIcon from "../images/work.svg";
import mapIcon from "../images/map-pin.svg";
import calendarIcon from "../images/calendar_month (1).svg";

const popularJobs = [
  {
    title: "Associate Professor",
    institute: "Institute of Applied Science",
    type: "Full Time",
    experience: "5-6 yrs",
    location: "Bengaluru, India",
    deadline: "Before 20 May",
  },
  {
    title: "Senior Lecturer",
    institute: "Institute of Technology",
    type: "Full Time",
    experience: "7-8 yrs",
    location: "Chennai, India",
    deadline: "Before 25 May",
  },
  {
    title: "Research Scientist",
    institute: "National Research Center",
    type: "Full Time",
    experience: "3-4 yrs",
    location: "Delhi, India",
    deadline: "Before 30 May",
  },
  {
    title: "Assistant Professor",
    institute: "University of Sciences",
    type: "Full Time",
    experience: "2-3 yrs",
    location: "Mumbai, India",
    deadline: "Before 10 June",
  },
  {
    title: "Lecturer",
    institute: "College of Arts",
    type: "Full Time",
    experience: "1-2 yrs",
    location: "Kolkata, India",
    deadline: "Before 15 June",
  },
];

export default function PopularJobs() {
  return (
    <div className="bg-white rounded-xl">
      <div className="bg-amber-100">
        <h1 className="text-2xl font-semibold p-5">Popular Jobs</h1>
      </div>
      <div className="flex flex-col gap-6 p-5">
        {popularJobs.map((job, index) => (
          <div key={index} className="border-b pb-5 mb-5">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold capitalize">{job.title}</h1>
                <h2 className="text-sm text-blue-700 font-semibold">
                  {job.institute}
                </h2>
              </div>
              <Image src={logoIcon} width={50} height={50} alt="logo" />
            </div>
            <div className="flex gap-2 items-center mt-2">
              <Image
                src={apartmentIcon}
                width={15}
                height={15}
                alt="full time icon"
              />
              <p className="text-xs">{job.type}</p>
            </div>
            <div className="flex gap-2 items-center mt-1">
              <Image
                src={workIcon}
                width={15}
                height={15}
                alt="experience icon"
              />
              <p className="text-xs">{job.experience}</p>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex gap-2 items-center">
                <Image src={mapIcon} width={15} height={15} alt="location icon" />
                <p className="text-xs">{job.location}</p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src={calendarIcon}
                  width={15}
                  height={15}
                  alt="deadline icon"
                />
                <p className="text-xs">{job.deadline}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
