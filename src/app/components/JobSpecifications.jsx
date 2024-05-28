import JobSpecificationsData from "../data/jobSpecifications";
import Image from "next/image";
import tripIcon from "../images/trip.svg";
import schoolIcon from "../images/trip.svg";
import personIcon from "../images/person_2.svg";
import apartmentIcon from "../images/apartment.svg";
import calendarMonthIcon from "../images/calendar_month (1).svg";
const JobSpecifications = () => {
  return (
    <div className="flex flex-col w-3/12 bg-white px-6 py-6 gap-2  rounded-xl">
      <h1 className="text-2xl py-4 font-semibold">Job Specifications</h1>

      <div className="flex items-center px-2 gap-3">
        <Image src={tripIcon} width={30} height={30} alt="Job type icon" />
        <p className="text-xs font-semibold">
          Job type: <span className="font-normal">Full Time</span>
        </p>
      </div>
      <div className="flex items-center px-2 gap-3">
        <Image src={schoolIcon} width={30} height={30} alt="Job type icon" />
        <p className="text-xs font-semibold">
          Qualification: <span className="font-normal">Full Time</span>
        </p>
      </div>
      <div className="flex items-center px-2 gap-3">
        <Image src={personIcon} width={30} height={30} alt="Job type icon" />
        <p className="text-xs font-semibold">
          Category: <span className="font-normal">Full Time</span>
        </p>
      </div>
      <div className="flex items-center px-2 gap-3">
        <Image src={apartmentIcon} width={30} height={30} alt="Job type icon" />
        <p className="text-xs font-semibold">
          Mode: <span className="font-normal">Full Time</span>
        </p>
      </div>
      <div className="flex items-center px-2 gap-3">
        <Image
          src={calendarMonthIcon}
          width={30}
          height={30}
          alt="Job type icon"
        />
        <p className="text-xs font-semibold">
          Date: <span className="font-normal">Full Time</span>
        </p>
      </div>
    </div>
  );
};

export default JobSpecifications;
