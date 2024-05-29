import JobSpecifications from "./components/JobSpecifications.jsx";
import JobProfile from "./components/JobProfile.jsx";
import JobDescriptions from "./components/JobDescriptions.jsx";
import Benefits from "./components/Benefits.jsx";
import About from "./components/About.jsx"
import PopularJobs from "./components/popularJobs.jsx"

export default function Home() {
  return (
    <>
      <div className="px-6 flex justify-center gap-4 bg-gray-100 ">
        <div className="flex flex-col gap-4 w-8/12">
          <JobProfile />
          <JobDescriptions />
          <About/>
        </div>
        <div className="flex flex-col gap-4 w-4/12">
          <JobSpecifications />
          <Benefits />
          <PopularJobs/>
        </div>
      </div>
    </>
  );
}
