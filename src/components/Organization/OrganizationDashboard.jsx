import React from "react";
import { Link, Route, Routes } from "react-router-dom"; // Optional for routing

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
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (optional) */}
      <aside className="w-64 hidden lg:block bg-gray-800 text-white p-4">
        {/* Navigation links */}
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Job Portal Dashboard</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Create Job Listing
          </button>
        </header>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobListings.map((jobListing) => (
            <div
              key={jobListing.id}
              className="shadow-md rounded-lg bg-white p-4 hover:shadow-lg cursor-pointer"
              onClick={() => handleJobListingClick(jobListing.id)}
            >
              <h2 className="text-lg font-medium mb-2">{jobListing.title}</h2>
              <p className="text-gray-600 mb-4">{jobListing.description}</p>
              <Link
                to={`/job-listings/${jobListing.id}`}
                className="text-blue-500 underline hover:text-blue-700"
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
                <div className="p-4">
                  <h2>
                    Job Details:{" "}
                    {jobListings.find((jl) => jl.id === selectedJobId).title}
                  </h2>
                  {/* Replace with implementation to fetch and display detailed information */}
                  <p>Detailed information about the job goes here...</p>
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
