import React from "react";
import Image from "next/image";
import logo from "../images/Company Logo.svg";
import expIcon from "../images/exp icon.svg";
import calendarIcon from "../images/calendar_month.svg";
import currencyIcon from "../images/universal_currency.svg";
import bookmarkIcon from "../images/bookmark.svg";

const jobs = [
  {
    title: "Associate Professor",
    company: "Institute of Applied Science",
    location: "Bengaluru, India",
    experience: "5-6 years",
    salary: "30-35K/ Month",
    deadline: "Before 20 May",
    description: "Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools.",
    postedDate: "Posted 1 day ago",
    applications: "10 Applications",
  },
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations Ltd",
    location: "Mumbai, India",
    experience: "8-10 years",
    salary: "50-60K/ Month",
    deadline: "Before 25 June",
    description: "Tech Innovations Ltd is leading the market in cutting-edge software solutions. Join us to work on exciting projects.",
    postedDate: "Posted 2 days ago",
    applications: "15 Applications",
  },
  {
    title: "Project Manager",
    company: "Global Solutions",
    location: "Hyderabad, India",
    experience: "7-9 years",
    salary: "40-50K/ Month",
    deadline: "Before 30 June",
    description: "Global Solutions is looking for an experienced project manager to lead and manage multiple projects across various domains.",
    postedDate: "Posted 3 days ago",
    applications: "20 Applications",
  },
  {
    title: "Data Scientist",
    company: "Analytics Plus",
    location: "Pune, India",
    experience: "3-5 years",
    salary: "45-55K/ Month",
    deadline: "Before 15 July",
    description: "Analytics Plus is seeking a talented data scientist to join our team and help us make sense of large datasets.",
    postedDate: "Posted 4 days ago",
    applications: "25 Applications",
  },
  {
    title: "UX/UI Designer",
    company: "Creative Minds",
    location: "Chennai, India",
    experience: "2-4 years",
    salary: "30-40K/ Month",
    deadline: "Before 10 July",
    description: "Creative Minds is in need of a skilled UX/UI designer to improve the user experience of our digital products.",
    postedDate: "Posted 5 days ago",
    applications: "12 Applications",
  },
  {
    title: "Marketing Manager",
    company: "Brand Builders",
    location: "Kolkata, India",
    experience: "6-8 years",
    salary: "35-45K/ Month",
    deadline: "Before 5 July",
    description: "Brand Builders is searching for a marketing manager to oversee and develop marketing strategies for our clients.",
    postedDate: "Posted 6 days ago",
    applications: "18 Applications",
  },
];

export default function SimilarJobs() {
  return (
    <div className="px-4 py-5">
      <h1 className="text-2xl py-2 font-semibold"> Similar Jobs</h1>
      {jobs.map((job, index) => (
        <div key={index} className="flex gap-4 flex-col bg-white rounded-xl p-5 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold capitalize">
                {job.title}
              </h1>
              <h2 className="text-sm text-blue-700 font-semibold">
                {job.company}
              </h2>
            </div>
            <Image src={logo} width={80} height={80} alt="logo" />
          </div>

          <div className="flex gap-2.5">
            <div className="flex items-center gap-2">
              <Image src={expIcon} width={17} height={17} alt="experience icon" />
              <p className="font-semibold text-xs text-blue-700">
                {job.experience}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Image src={currencyIcon} width={17} height={17} alt="location icon" />
              <p className="font-semibold text-xs text-blue-700">
                {job.location}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Image src={currencyIcon} width={17} height={17} alt="salary icon" />
              <p className="font-semibold text-xs text-blue-700">
                {job.salary}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Image src={calendarIcon} width={17} height={17} alt="deadline icon" />
              <p className="font-semibold text-xs text-blue-700">
                {job.deadline}
              </p>
            </div>
          </div>

          <p>
            {job.description}
            <a href="#" className="text-blue-600"> Read More</a>
          </p>

          <div className="flex text-xs justify-between items-center">
            <p>{job.postedDate}</p>
            <p className="flex items-center gap-4">
              {job.applications}
              <span>
                <Image src={bookmarkIcon} width={10} height={10} alt="bookmark icon" />
              </span>
              save
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
