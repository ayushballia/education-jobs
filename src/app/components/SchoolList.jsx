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
            className="flex gap-1 flex-col bg-white rounded-xl max-w-60 items-center p-5"
          >
            <Image
              src={school.logo}
              width={55}
              height={55}
              alt={`${school.name} logo`}
            />
            <p className="text-lg pt-3 font-semibold">{school.name}</p>
            <div className="flex gap-2 items-center">
              <Image
                src={school.mapIcon}
                width={15}
                height={15}
                alt="map icon"
              />
              <p className="text-base text-blue-600 font-semibold">
                {school.location}
              </p>
            </div>
            <p className="text-sm">
              <span className="font-semibold">Active Jobs:</span>{" "}
              {school.activeJobs}
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
