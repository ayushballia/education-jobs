import React from "react";
import PropTypes from "prop-types";

const Section = ({ title, content }) => (
  <li className="text-base md:text-lg font-semibold my-4">
    {title}:
    <ul className="ps-5 space-y-4 my-2 list-disc list-inside">
      {content.map((item, idx) => (
        <li key={idx} className="text-sm md:text-base font-normal">
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
    title: "Information we collect:",
    data: [
      {
        title: "Personal Information",
        content: [
          "When you register for an account on Education Jobs, we collect personal information such as your name, email address, contact information, and resume details.",
        ],
      },
      {
        title: "User-Generated Content",
        content: [
          "We collect information that you voluntarily provide on your user profile, resume, cover letter, and any other content you submit to the site.",
        ],
      },
      {
        title: "Job Postings",
        content: [
          "Employers may submit job postings that include information about the job role, company details, and any other relevant information.",
        ],
      },
      {
        title: "Usage Information",
        content: [
          "We collect information about how you use the site, including your interactions with job listings, searches, and other site features.",
        ],
      },
      {
        title: "Device and Browser Information",
        content: [
          "We may collect information about the device and browser you are using to access our site, including IP address, browser type, and device characteristics.",
        ],
      },
      {
        title: "Cookies",
        content: [
          "Education Jobs, run by Neophyte Consulting Services, uses cookies to enhance your browsing experience. Cookies are small pieces of data stored on your device that help us improve site functionality, personalize content, and understand user preferences.",
        ],
      },
    ],
  },
  {
    title: "How We Use Your Information:",
    data: [
      {
        title: "Providing Services",
        content: [
          "We use your personal information to provide you with access to the Education Jobs platform, facilitate job searches, and connect employers with potential candidates.",
        ],
      },
      {
        title: "Communication",
        content: [
          "We may use your contact information to communicate with you about your account, job applications, and other relevant updates.",
        ],
      },
      {
        title: "Improving Our Services",
        content: [
          "We analyze user behavior and feedback to improve and customize our services, including the user experience on our platform.",
        ],
      },
      {
        title: "Job Matching",
        content: [
          "We use your profile and resume information to match you with relevant job opportunities and help employers find suitable candidates.",
        ],
      },
    ],
  },
  {
    title: "Information Sharing:",
    data: [
      {
        title: "Employers",
        content: [
          "Your profile information and resume may be shared with employers when you apply for a job on Education Jobs.",
        ],
      },
      {
        title: "Service Providers",
        content: [
          "We may share your information with third-party service providers who assist us in operating the platform, conducting business, or servicing you.",
        ],
      },
      {
        title: "Legal Compliance",
        content: [
          "We may disclose your information in response to legal requests or to comply with applicable laws, regulations, or legal processes.",
        ],
      },
    ],
  },
  {
    title: "Your choices:",
    data: [
      {
        title: "Profile Visibility",
        content: [
          "You can control the visibility of your profile and resume on Education Jobs. You may choose to make your information public or private.",
        ],
      },
      {
        title: "Communication Preferences",
        content: [
          "You can manage your communication preferences, including opting out of certain communications from Education Jobs.",
        ],
      },
    ],
  },
];

export default function Privacy() {
  return (
    <div className="py-5 bg-gray-100">
      <h1 className="mb-2 text-lg md:text-3xl font-semibold text-center">
        Privacy Policy for Education Jobs
      </h1>
      <p className="text-sm md:text-xl text-center mb-2">
        Last Updated: 22.11.2023
      </p>

      <div className="p-4 md:w-8/12 m-auto bg-white rounded-xl">
        <p className="text-sm md:text-base">
          Welcome to Education Jobs! This Privacy Policy outlines how we
          collect, use, disclose, and protect your personal information when you
          use our website and services. We are committed to ensuring the privacy
          and security of your information. By accessing or using the Education
          Jobs website (the &ldquo;Site&ldquo;) or any of our services, you
          agree to the terms and conditions of this Privacy Policy.
        </p>
      </div>

      <div className="md:w-8/12 mx-auto p-2">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-lg md:text-xl font-semibold my-3 capitalize">
              {section.title}
            </h2>
            <ol className="ps-5 my-2 space-y-1 list-decimal list-inside">
              {section.data.map((item, idx) => (
                <Section key={idx} title={item.title} content={item.content} />
              ))}
            </ol>
          </div>
        ))}
        <h2 className="text-lg md:text-xl font-semibold my-2 capitalize">
          security:
        </h2>
        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or electronic storage is 100% secure.
        </p>
        <h2 className="text-lg md:text-xl font-semibold my-2 capitalize">
          Changes to this Privacy Policy:
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
        </p>
      </div>
    </div>
  );
}