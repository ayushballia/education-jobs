import React from "react";
import Image from "next/image";
import logoIcon from "../images/Company Logo.svg";
import apartmentIcon from "../images/apartment.svg";
import workIcon from "../images/work.svg";
import mapIcon from "../images/map-pin.svg";
import calendarIcon from "../images/calendar_month (1).svg";

const jobs = [
  {
    title: "Associate Professor",
    institute: "Institute of Applied Science",
    type: "Full Time",
    experience: "5-6 yrs",
    location: "Bengaluru, India",
    deadline: "Before 20 May",
    logo: "/path/to/logo.png", 
  },
  {
    title: "Senior Lecturer",
    institute: "Institute of Technology",
    type: "Full Time",
    experience: "7-8 yrs",
    location: "Chennai, India",
    deadline: "Before 25 May",
    logo: "/path/to/logo.png", 
  },
  {
    title: "Research Scientist",
    institute: "National Research Center",
    type: "Full Time",
    experience: "3-4 yrs",
    location: "Delhi, India",
    deadline: "Before 30 May",
    logo: "/path/to/logo.png", 
  },
  {
    title: "Assistant Professor",
    institute: "University of Sciences",
    type: "Full Time",
    experience: "2-3 yrs",
    location: "Mumbai, India",
    deadline: "Before 10 June",
    logo: "/path/to/logo.png", 
  },
  {
    title: "Lecturer",
    institute: "College of Arts",
    type: "Full Time",
    experience: "1-2 yrs",
    location: "Kolkata, India",
    deadline: "Before 15 June",
    logo: calendarIcon, 
  },
];

const PopularJobs = () => {
  return (
    <div className="my-8 bg-white rounded-xl">
      <div className="bg-amber-100 rounded-t-xl">
        <h1 className="text-2xl font-semibold p-5">Popular Jobs</h1>
      </div>
      {jobs.map((job, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
          <p className="text-blue-600 mb-4">{job.institute}</p>
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center text-gray-700">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v4a4 4 0 001.33 3H4v2h12v-2h-1.33A4 4 0 0016 12V8a6 6 0 00-6-6zM8 18h4v-1H8v1z" />
              </svg>
              {job.type}
            </span>
            <span className="flex items-center text-gray-700">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8.25 2A5.75 5.75 0 002.5 7.75c0 2.08 1.12 3.92 2.85 5.01.26.17.55.32.84.43v2.41h1V13.2c.28-.12.56-.27.82-.44a7.501 7.501 0 003.28-3.35c1.17-.84 1.96-2.2 1.96-3.66A5.75 5.75 0 008.25 2zm0 2c1.99 0 3.75 1.47 4.34 3.41a4.48 4.48 0 01-3.21 3.26 6.513 6.513 0 01-1.13 0A4.48 4.48 0 015.91 7.4 4.48 4.48 0 018.25 4zM2.5 17a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5H4v3H2.5zm15 0h-1.5v-3H17a1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5z" />
              </svg>
              {job.experience}
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-700 mb-2">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18l6-6H4l6 6zm-6-7V9h12v2H4z" />
              </svg>
              {job.location}
            </span>
            <span className="flex items-center">
              <Image
                src={job.logo}
                width={15}
                height={15}
                alt="deadline logo"
              />
              {job.deadline}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularJobs;
