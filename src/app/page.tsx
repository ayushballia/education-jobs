import JobSpecifications from "./components/JobSpecifications.jsx";
import JobProfile from "./components/JobProfile.jsx";
import JobDescriptions from "./components/JobDescriptions.jsx";
import Benefits from "./components/Benefits.jsx"


export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-wrap gap-4 bg-gray-100 ">
        <JobProfile />

        <JobSpecifications />
        <JobDescriptions />
       <Benefits/>
      </div>
    </>
  );
}
