import { useState, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetch("http://localhost:5000/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  const handleSaveJob = (jobTitle) => {
    if (!savedJobs.includes(jobTitle)) {
      setSavedJobs([...savedJobs, jobTitle]);
    }
  };

  // Function to format UTC time to Indian Standard Time (IST)
  const formatIndianTime = (utcTimeString) => {
    const utcDate = new Date(utcTimeString);
    utcDate.setMinutes(utcDate.getMinutes() + 330); // Add 330 minutes (5 hours and 30 minutes) for IST offset
    return utcDate.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="bg-black text-white py-8 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-green-400">Job Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id} // Assuming job.id is a unique identifier for each job
              className="bg-slate-900 shadow-lg rounded-3xl overflow-hidden relative"
            >
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  {/* Display formatted Indian Standard Time */}
                  <span className="text-sm text-gray-500 mb-2">
                    {formatIndianTime(job.createdAt)}
                  </span>
                </div>
                <h2 className="text-xl font-medium mb-2 text-white">
                  {job.title}
                </h2>
                <p className="text-gray-400 mb-2">
                  <img
                    src={job.companyLogo}
                    alt={job.companyName}
                    className="h-6 w-6 inline-block"
                  />
                  {job.companyName} - {job.location}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="mr-2">
                    {job.employementType} - {job.experience}
                  </span>
                </div>
                <p className="text-gray-400 line-clamp-3">{job.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-base font-medium text-green-400">
                    Salary: {job.salary}
                  </span>
                  <span className="text-sm text-gray-500">
                    {job.postedDate}
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 flex items-center justify-end absolute top-0 right-0">
                <FaBookmark
                  onClick={() => handleSaveJob(job.title)}
                  className={`h-6 w-6 cursor-pointer ${
                    savedJobs.includes(job.title)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              </div>
              <div className="px-6 py-4 flex items-center justify-end">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
