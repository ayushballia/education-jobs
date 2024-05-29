import React from "react";
// import benefitsData from "../data/benefitsData"
import localCafeIcon from "../images/local_cafe.svg";
import cottageIcon from "../images/cottage.svg";
import directionIcon from "../images/directions_car.svg";
import fitnessIcon from "../images/fitness_center.svg";
import medicalIcon from "../images/medical_services.svg";
import supportAgentIcon from "../images/support_agent.svg";
import creditCardIcon from "../images/credit_card.svg";
import dateIcon from "../images/date_range.svg";

import Image from "next/image";

export default function Benefits() {
  const benefitsData = [
    { icon: localCafeIcon, label: "Cafeteria" },
    { icon: cottageIcon, label: "WFH option" },
    { icon: directionIcon, label: "Transport" },
    { icon: fitnessIcon, label: "Gym" },
    { icon: medicalIcon, label: "Health care" },
    { icon: supportAgentIcon, label: "Soft Skill" },
    { icon: creditCardIcon, label: "Financial" },
    { icon: dateIcon, label: "Time off" },
  ];
  return (
    <div className="max-h-64 p-6 bg-white rounded-xl">
      <div className="flex mb-4 items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Benefits & Perks</h1>
          <p className="text-sm">1K+ users said this</p>
        </div>
        <a href="#" className="text-blue-500">
          view all
        </a>
      </div>
      <div className="grid grid-cols-4 gap-y-4">
        {benefitsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={item.icon} width={30} height={30} alt={item.label} />
            <span className="mt-2 text-center text-xs">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
