import Image from "next/image";
import dpsIcon from "../images/dps.svg";
import mapIcon from "../images/map-pin.svg";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const schools = [
  {
    name: "Delhi Public School",
    location: "Bengaluru, India",
    activeJobs: 10,
    logo: dpsIcon,
    mapIcon: mapIcon,
  },
  {
    name: "Delhi Public School",
    location: "Bengaluru, India",
    activeJobs: 10,
    logo: dpsIcon,
    mapIcon: mapIcon,
  },
  {
    name: "Delhi Public School",
    location: "Bengaluru, India",
    activeJobs: 10,
    logo: dpsIcon,
    mapIcon: mapIcon,
  },
  {
    name: "Delhi Public School",
    location: "Bengaluru, India",
    activeJobs: 10,
    logo: dpsIcon,
    mapIcon: mapIcon,
  },
  {
    name: "Delhi Public School",
    location: "Bengaluru, India",
    activeJobs: 10,
    logo: dpsIcon,
    mapIcon: mapIcon,
  },
  {
    name: "Delhi Public School",
    location: "Bengaluru, India",
    activeJobs: 10,
    logo: dpsIcon,
    mapIcon: mapIcon,
  },
  {
    name: "Delhi Public School",
    location: "Bengaluru, India",
    activeJobs: 10,
    logo: dpsIcon,
    mapIcon: mapIcon,
  },
  {
    name: "Delhi Public School",
    location: "Bengaluru, India",
    activeJobs: 10,
    logo: dpsIcon,
    mapIcon: mapIcon,
  },
  {
    name: "Delhi Public School",
    location: "Bengaluru, India",
    activeJobs: 10,
    logo: dpsIcon,
    mapIcon: mapIcon,
  },
  {
    name: "Delhi Public School",
    location: "Bengaluru, India",
    activeJobs: 10,
    logo: dpsIcon,
    mapIcon: mapIcon,
  },
  {
    name: "Delhi Public School",
    location: "Bengaluru, India",
    activeJobs: 10,
    logo: dpsIcon,
    mapIcon: mapIcon,
  },

  {
    name: "National Public School",
    location: "Chennai, India",
    activeJobs: 5,
    logo: "/path/to/npsIcon.png",
    mapIcon: "/path/to/mapIcon.png",
  },
  // ...other school objects
];

const itemsPerPage = 5;
export default function SchoolList() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const selectedSchools = schools.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(schools.length / itemsPerPage);
  return (
    <>
      <div className="flex flex-wrap justify-evenly gap-4 rounded-xl">
        {schools.map((school, index) => (
          <div
            key={index}
            className="flex gap-1 flex-col bg-white rounded-xl shadow-md max-w-60 items-center p-5"
          >
            <Image
              src={school.logo}
              width={55}
              height={55}
              alt={`${school.name} logo`}
            />
            <p className="font-semibold text-base lg:text-lg text-gray-700 hover:text-gray-800 transition-all ease duration-500">{school.name}</p>
            <div className="flex gap-1.5 items-center">
              <Image
                src={school.mapIcon}
                width={14}
                height={14}
                alt="map icon"
              />
              <p className="text-base text-blue-700 font-semibold">
                {school.location}
              </p>
            </div>
            <p className="text-sm font-semibold">Active Jobs:{" "}
              <span className="text-blue-700">{school.activeJobs}</span>
              
            </p>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center mt-4"}
        pageClassName={"mx-1"}
        pageLinkClassName={"px-3 py-1 bg-white bg-opacity-20 rounded-full"}
        activeClassName={"bg-blue-600 text-white rounded-full"}
        previousClassName={"mx-1"}
        previousLinkClassName={"px-3 py-1 rounded-full"}
        nextClassName={"mx-1"}
        nextLinkClassName={"px-3 py-1 "}
        breakClassName={"mx-1"}
        breakLinkClassName={"px-3 py-1 bg-gray-200 rounded-full"}
      />
    </>
  );
}
