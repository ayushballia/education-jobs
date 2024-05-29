import React from "react";
import Image from "next/image";
import logo from "../images/Company Logo.svg";
import expIcon from "../images/exp icon.svg";
import calendarIcon from "../images/calendar_month.svg";
import currencyIcon from "../images/universal_currency.svg";
import bookmarkIcon from "../images/bookmark.svg";

export default function SimilarJobs() {
  return (
    <div className="px-4 py-5">
      <h1 className="text-2xl py-2 font-semibold"> Similar Jobs</h1>

      <div className="flex gap-4 flex-col bg-white rounded-xl p-5">
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

        <p>
          Stripe is a software platform for starting and running internet
          businesses. Millions of businesses rely on Stripe’s software tools.
          <a href="#" className="text-blue-600">
            Read More
          </a>
        </p>
        
        <div className="flex text-xs justify-between items-center">
            <p>Posted 1 day ago</p>
            <p className="flex items-center gap-4">10 Application <span><Image src={bookmarkIcon} width={10} height={10} alt="bookmark icon"/></span>save</p>
        </div>


      </div>
    </div>
  );
}
