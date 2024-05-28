import Image from "next/image";
import logo from "../images/Company Logo.svg";
import expIcon from "../images/exp icon.svg";
import calendarIcon from "../images/calendar_month.svg";
import currencyIcon from "../images/universal_currency.svg";
import Button from "../components/Button";

const JobProfile = () => {
  return (
    <div className="flex flex-col w-8/12 bg-white rounded-xl px-4 py-6">
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

      <div className="flex gap-2.5">
        <div className="flex items-center gap-2">
          <Image src={expIcon} width={17} height={17} alt="experience icon" />
          <p className="font-semibold text-xs text-blue-700">5-6 years</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={currencyIcon}
            width={17}
            height={17}
            alt="experience icon"
          />
          <p className="font-semibold text-xs text-blue-700">
            Bangaluru, India
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={currencyIcon}
            width={17}
            height={17}
            alt="experience icon"
          />
          <p className="font-semibold text-xs text-blue-700">30-35K/ Month</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={calendarIcon}
            width={17}
            height={17}
            alt="experience icon"
          />
          <p className="font-semibold text-xs text-blue-700">Before 20 May</p>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex gap-2">
        <div className="flex items-center text-xs text-gray-600">
          <p>
            Posted: <span className="text-black font-semibold">Just now</span>
          </p>
        </div>
        <div className="flex items-center text-xs text-gray-600">
          <p>
            Applicants:{" "}
            <span className="text-black font-semibold">Less than 10</span>
          </p>
        </div>
        <div className="flex items-center text-xs text-gray-600">
          <p>
            Openings: <span className="text-black font-semibold">10</span>
          </p>
        </div>
        <Button variant="default">Register to apply</Button>
        <Button variant="blue">Login to apply</Button>
      </div>
    </div>
  );
};

export default JobProfile;
