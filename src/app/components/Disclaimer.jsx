import React from "react";
import PropTypes from "prop-types";

const Section = ({ title, content }) => (
  <li className="text-base text-blue-500 md:text-lg font-semibold my-4">
    {title}:
    <ul className="pl-5 space-y-2 my-2 list-disc list-inside marker:text-blue-700">
      {content.map((item, idx) => (
        <li
          key={idx}
          className="text-sm text-gray-700 md:text-base font-normal "
        >
          {item}
        </li>
      ))}
    </ul>
  </li>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const sections = [
  {
    title: "User Eligibility",
    data: [
      {
        title: "Accuracy of Information",
        content: [
          "When you register for an account on Education Jobs, we collect personal information such as your name, email address, contact information, and resume details.",
        ],
      },
      {
        title: "Job Listings",
        content: [
          "We collect information that you voluntarily provide on your user profile, resume, cover letter, and any other content you submit to the site.",
        ],
      },
      {
        title: "Third-Party Links",
        content: [
          "Employers may submit job postings that include information about the job role, company details, and any other relevant information.",
        ],
      },
      {
        title: "Availability of Services",
        content: [
          "We collect information about how you use the site, including your interactions with job listings, searches, and other site features.",
        ],
      },
      {
        title: "User Responsibility",
        content: [
          "We may collect information about the device and browser you are using to access our site, including IP address, browser type, and device characteristics.",
        ],
      },
      {
        title: "User-Generated Content",
        content: [
          "Education Jobs, run by Neophyte Consulting Services, uses cookies to enhance your browsing experience. Cookies are small pieces of data stored on your device that help us improve site functionality, personalize content, and understand user preferences.",
        ],
      },
      {
        title: "Changes to Disclaimer",
        content: [
          "Education Jobs, run by Neophyte Consulting Services, uses cookies to enhance your browsing experience. Cookies are small pieces of data stored on your device that help us improve site functionality, personalize content, and understand user preferences.",
        ],
      },
    ],
  },
];

export default function Privacy() {
  return (
    <div className="bg-white md:w-8/12 m-auto rounded-xl">
      <div className="py-8 text-white bg-gradient-to-r from-blue-900 to-blue-500 rounded-t-xl">
        <h1 className="mb-4 text-2xl md:text-4xl font-bold text-center text-gray-100">
          Disclaimer for Education Jobs
        </h1>
        <p className="text-sm md:text-xl text-center text-gray-300">
          Last Updated: 22.11.2023
        </p>
      </div>

      <p className="px-6 pt-5 text-sm md:text-base text-gray-700 mb-6">
        Welcome to Education Jobs! The information provided on this website is
        for general informational purposes only. By using or accessing the
        Education Jobs website (the &ldquo;Site&ldquo;), you acknowledge and
        agree to the following disclaimer:
      </p>

      {sections.map((section, index) => (
        <div key={index} className="mb-6 px-6">
          {/* <h2 className="text-xl md:text-2xl text-blue-900 font-semibold my-4 capitalize text-gray-800">
            {section.title}
          </h2> */}
          <ol className="pl-5 space-y-3 list-decimal list-inside">
            {section.data.map((item, idx) => (
              <Section key={idx} title={item.title} content={item.content} />
            ))}
          </ol>
        </div>
      ))}

      <h2 className="text-xl md:text-2xl text-blue-900 font-semibold my-4 capitalize text-gray-800 px-6">
        Contact Us:
      </h2>
      <p className="px-6 text-gray-700">
        If you have any questions or concerns about this Privacy Policy, please
        contact us at{" "}
        <a className="text-blue-700" href="mailto:info@neophyteconsulting.com">
          info@neophyteconsulting.com
        </a>
        .
      </p>
      <p className="px-6 text-gray-700 mb-4 pt-5">
        Education Jobs is run by Neophyte Consulting Services LLP. <br />{" "}
        Registered Address: <br /> Group/MPD, T40, Near St. Thomas School,{" "}
        <br /> Maman Vihar, Bahadurgarh, <br /> Jhajjar, Haryana, 124507 <br />{" "}
        Email ID:{" "}
        <a href="mailto:info@neophyteconsulting.com" className="text-blue">
          info@neophyteconsulting.com
        </a>
      </p>
    </div>
  );
}
