import Image from "next/image";

export default function AboutPage() {
    return (
      <div className="bg-gray-100">
        {/* About Us Section */}
        <section className="container mx-auto p-10">
          <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
            About Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Introducing Education Jobs - Your ultimate destination for
                teaching and non-teaching jobs in the education sector of India.
              </p>
              <p className="text-gray-700">
                In a rapidly evolving world, education remains the cornerstone of
                progress. For those seeking meaningful careers in the education
                sector, the quest for the perfect opportunity can be both
                exhilarating and challenging. Enter educationjobs.co.in, a
                cutting-edge platform dedicated to connecting educators with a
                plethora of teaching jobs in India.
              </p>
            </div>
            <div>
                <Image src="/path/to/image.jpg" width={100} height={100} alt="Education jobs"/>
              
            </div>
          </div>
        </section>
  
        {/* Why Education Jobs Section */}
        <section className="bg-indigo-50 py-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">
              Why Education Jobs?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-bold text-indigo-600 mb-2">
                  Your Search Ends Here
                </h3>
                <p className="text-gray-700">
                  At educationjobs.co.in, we understand the unique demands and
                  aspirations of the education industry...
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-bold text-indigo-600 mb-2">
                  Comprehensive Listings
                </h3>
                <p className="text-gray-700">
                  With an extensive database of education jobs spanning various
                  academic levels, subjects, and regions across India...
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-bold text-indigo-600 mb-2">
                  Tailored for Educators
                </h3>
                <p className="text-gray-700">
                  Our user-friendly interface and advanced search filters enable
                  you to find teaching positions...
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="container mx-auto py-10">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            Features of Education Jobs Portal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">
                Diverse Categories
              </h3>
              <p className="text-gray-700">
                From primary school teachers to university professors,
                educationjobs.co.in caters to educators across all levels.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">
                Geographical Filters
              </h3>
              <p className="text-gray-700">
                Search for teaching jobs in specific regions, ensuring you find
                opportunities in your preferred location.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">
                Subject Specialization
              </h3>
              <p className="text-gray-700">
                Filter job listings based on subjects, allowing you to focus on
                positions that match your expertise.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">
                Fresher-Friendly
              </h3>
              <p className="text-gray-700">
                Whether you&apos;re a seasoned educator or a fresh graduate aspiring to
                step into the education sector, educationjobs.co.in has
                opportunities for everyone.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">
                Regular Updates
              </h3>
              <p className="text-gray-700">
                Stay informed about the latest teaching job openings with our
                regularly updated listings.
              </p>
            </div>
          </div>
        </section>
  
        {/* Advantage Section */}
        <section className="bg-indigo-50 py-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">
              The Education Jobs Portal Advantage
            </h2>
            <div className="flex flex-col items-center">
              <div className="mb-6">
              <Image src="/path/to/image.jpg" width={100} height={100} alt="Education jobs"/>
                {/* <img
                  src="/path/to/image.jpg"
                  alt="Advantage"
                  className="w-full h-auto rounded shadow"
                /> */}
              </div>
              <div className="bg-white p-6 rounded shadow max-w-2xl">
                <h3 className="text-xl font-bold text-indigo-600 mb-2">
                  Empowering Educators, Transforming Education:
                </h3>
                <p className="text-gray-700 mb-2">
                  Our mission is to empower educators and contribute to the
                  advancement of education in India. By connecting passionate
                  educators with institutions that share our vision, we&apos;re driving
                  positive change in the sector.
                </p>
                <ul className="list-disc list-inside text-left text-gray-700">
                  <li>
                    Register: Create your profile on educationjobs.co.in to start
                    exploring teaching jobs in India.
                  </li>
                  <li>
                    Set Preferences: Customize your search criteria based on
                    location, subject, experience, and more.
                  </li>
                  <li>
                    Apply with Ease: Submit applications directly through our
                    platform, making the job search process seamless.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  