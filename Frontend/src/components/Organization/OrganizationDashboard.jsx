import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const jobListings = [
  {
    id: 1,
    title: "Software Engineer",
    description: "Develop and maintain web applications...",
  },
  {
    id: 2,
    title: "Marketing Manager",
    description: "Lead all marketing initiatives...",
  },
];

const OrganizationDashboard = () => {
  const [selectedJobId, setSelectedJobId] = React.useState(null);

  const handleJobListingClick = (jobId) => {
    setSelectedJobId(jobId);
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar (optional) */}
      {/* Sidebar content can be placed here */}

      {/* Main Content */}
      <main className="flex-grow p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Job Portal Dashboard</h1>
          <Link
            to="/create-job-listing"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
          >
            Create Job Listing
          </Link>
        </header>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListings.map((jobListing) => (
            <div
              key={jobListing.id}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleJobListingClick(jobListing.id)}
            >
              <h2 className="text-xl font-semibold mb-4">{jobListing.title}</h2>
              <p className="text-gray-400">{jobListing.description}</p>
              <Link
                to={`/job-listings/${jobListing.id}`}
                className="block mt-4 text-blue-500 hover:text-blue-300"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {/* Optional Job Listing Details */}
        <Routes>
          <Route
            path="/job-listings/:jobId"
            element={
              selectedJobId && (
                <div className="mt-8 bg-gray-800 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Job Details:{" "}
                    {jobListings.find((jl) => jl.id === selectedJobId).title}
                  </h2>
                  {/* Replace with implementation to fetch and display detailed information */}
                  <p className="text-gray-400">
                    Detailed information about the job goes here...
                  </p>
                </div>
              )
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default OrganizationDashboard;
