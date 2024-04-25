import React, { useState } from "react";

const applicationsData = [
  {
    jobId: 1,
    jobTitle: "Software Engineer",
    applicants: [
      { id: 1, applicantName: "John Doe", submissionDate: "2024-04-20" },
      { id: 2, applicantName: "Jane Smith", submissionDate: "2024-04-22" },
      { id: 3, applicantName: "Alice Johnson", submissionDate: "2024-04-23" },
      { id: 4, applicantName: "Michael Brown", submissionDate: "2024-04-24" },
      // Add more applicants for the Software Engineer position
      { id: 5, applicantName: "Emma Thompson", submissionDate: "2024-04-25" },
      { id: 6, applicantName: "David Wilson", submissionDate: "2024-04-26" },
      { id: 7, applicantName: "Olivia Davis", submissionDate: "2024-04-27" },
      { id: 8, applicantName: "James Martinez", submissionDate: "2024-04-28" },
      { id: 9, applicantName: "Sophia Anderson", submissionDate: "2024-04-29" },
      { id: 10, applicantName: "William Taylor", submissionDate: "2024-04-30" },
      { id: 11, applicantName: "Ella Thomas", submissionDate: "2024-05-01" },
      { id: 12, applicantName: "Daniel Brown", submissionDate: "2024-05-02" },
    ],
  },
  {
    jobId: 2,
    jobTitle: "Front-end Developer",
    applicants: [
      { id: 13, applicantName: "Isabella Moore", submissionDate: "2024-05-03" },
      { id: 14, applicantName: "Logan Jackson", submissionDate: "2024-05-04" },
      // Add more applicants for the Front-end Developer position
      { id: 15, applicantName: "Mia Wilson", submissionDate: "2024-05-05" },
      { id: 16, applicantName: "Aiden White", submissionDate: "2024-05-06" },
      { id: 17, applicantName: "Abigail Harris", submissionDate: "2024-05-07" },
      { id: 18, applicantName: "Liam Clark", submissionDate: "2024-05-08" },
      {
        id: 19,
        applicantName: "Charlotte Allen",
        submissionDate: "2024-05-09",
      },
      { id: 20, applicantName: "Noah Turner", submissionDate: "2024-05-10" },
      { id: 21, applicantName: "Grace Lewis", submissionDate: "2024-05-11" },
      { id: 22, applicantName: "Lucas Parker", submissionDate: "2024-05-12" },
      { id: 23, applicantName: "Sofia Harris", submissionDate: "2024-05-13" },
      { id: 24, applicantName: "Benjamin King", submissionDate: "2024-05-14" },
    ],
  },
  {
    jobId: 3,
    jobTitle: "Software Engineer",
    applicants: [
      { id: 1, applicantName: "John Doe", submissionDate: "2024-04-20" },
      { id: 2, applicantName: "Jane Smith", submissionDate: "2024-04-22" },
      { id: 3, applicantName: "Alice Johnson", submissionDate: "2024-04-23" },
      { id: 4, applicantName: "Michael Brown", submissionDate: "2024-04-24" },
      // Add more applicants for the Software Engineer position
      { id: 5, applicantName: "Emma Thompson", submissionDate: "2024-04-25" },
      { id: 6, applicantName: "David Wilson", submissionDate: "2024-04-26" },
      { id: 7, applicantName: "Olivia Davis", submissionDate: "2024-04-27" },
      { id: 8, applicantName: "James Martinez", submissionDate: "2024-04-28" },
      { id: 9, applicantName: "Sophia Anderson", submissionDate: "2024-04-29" },
      { id: 10, applicantName: "William Taylor", submissionDate: "2024-04-30" },
      { id: 11, applicantName: "Ella Thomas", submissionDate: "2024-05-01" },
      { id: 12, applicantName: "Daniel Brown", submissionDate: "2024-05-02" },
    ],
  },
  {
    jobId: 4,
    jobTitle: "Front-end Developer",
    applicants: [
      { id: 13, applicantName: "Isabella Moore", submissionDate: "2024-05-03" },
      { id: 14, applicantName: "Logan Jackson", submissionDate: "2024-05-04" },
      // Add more applicants for the Front-end Developer position
      { id: 15, applicantName: "Mia Wilson", submissionDate: "2024-05-05" },
      { id: 16, applicantName: "Aiden White", submissionDate: "2024-05-06" },
      { id: 17, applicantName: "Abigail Harris", submissionDate: "2024-05-07" },
      { id: 18, applicantName: "Liam Clark", submissionDate: "2024-05-08" },
      {
        id: 19,
        applicantName: "Charlotte Allen",
        submissionDate: "2024-05-09",
      },
      { id: 20, applicantName: "Noah Turner", submissionDate: "2024-05-10" },
      { id: 21, applicantName: "Grace Lewis", submissionDate: "2024-05-11" },
      { id: 22, applicantName: "Lucas Parker", submissionDate: "2024-05-12" },
      { id: 23, applicantName: "Sofia Harris", submissionDate: "2024-05-13" },
      { id: 24, applicantName: "Benjamin King", submissionDate: "2024-05-14" },
    ],
  },
  {
    jobId: 5,
    jobTitle: "Software Engineer",
    applicants: [
      { id: 1, applicantName: "John Doe", submissionDate: "2024-04-20" },
      { id: 2, applicantName: "Jane Smith", submissionDate: "2024-04-22" },
      { id: 3, applicantName: "Alice Johnson", submissionDate: "2024-04-23" },
      { id: 4, applicantName: "Michael Brown", submissionDate: "2024-04-24" },
      // Add more applicants for the Software Engineer position
      { id: 5, applicantName: "Emma Thompson", submissionDate: "2024-04-25" },
      { id: 6, applicantName: "David Wilson", submissionDate: "2024-04-26" },
      { id: 7, applicantName: "Olivia Davis", submissionDate: "2024-04-27" },
      { id: 8, applicantName: "James Martinez", submissionDate: "2024-04-28" },
      { id: 9, applicantName: "Sophia Anderson", submissionDate: "2024-04-29" },
      { id: 10, applicantName: "William Taylor", submissionDate: "2024-04-30" },
      { id: 11, applicantName: "Ella Thomas", submissionDate: "2024-05-01" },
      { id: 12, applicantName: "Daniel Brown", submissionDate: "2024-05-02" },
    ],
  },
  {
    jobId: 6,
    jobTitle: "Front-end Developer",
    applicants: [
      { id: 13, applicantName: "Isabella Moore", submissionDate: "2024-05-03" },
      { id: 14, applicantName: "Logan Jackson", submissionDate: "2024-05-04" },
      // Add more applicants for the Front-end Developer position
      { id: 15, applicantName: "Mia Wilson", submissionDate: "2024-05-05" },
      { id: 16, applicantName: "Aiden White", submissionDate: "2024-05-06" },
      { id: 17, applicantName: "Abigail Harris", submissionDate: "2024-05-07" },
      { id: 18, applicantName: "Liam Clark", submissionDate: "2024-05-08" },
      {
        id: 19,
        applicantName: "Charlotte Allen",
        submissionDate: "2024-05-09",
      },
      { id: 20, applicantName: "Noah Turner", submissionDate: "2024-05-10" },
      { id: 21, applicantName: "Grace Lewis", submissionDate: "2024-05-11" },
      { id: 22, applicantName: "Lucas Parker", submissionDate: "2024-05-12" },
      { id: 23, applicantName: "Sofia Harris", submissionDate: "2024-05-13" },
      { id: 24, applicantName: "Benjamin King", submissionDate: "2024-05-14" },
    ],
  },
  // Add more job postings with applicants data here
];

const ApplicationsList = () => {
  const [displayedApplications, setDisplayedApplications] = useState(
    applicationsData.map((job) => job.applicants.slice(0, 4)) // Initial 2 applicants per job
  );

  const handleShowMore = (jobId) => {
    setDisplayedApplications((prevDisplayed) => {
      const updatedData = prevDisplayed.map((applicants, index) =>
        index === jobId - 1
          ? applicants.concat(applicationsData[index].applicants.slice(2))
          : applicants
      );
      return updatedData;
    });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-8">
      <div className="max-w-fullxl mx-auto">
        <h1 className="text-3xl font-semibold mb-8 text-center text-green-400">
          Applications Received
        </h1>
        {applicationsData.map((job) => (
          <div key={job.jobId} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-300">
              {job.jobTitle}
            </h2>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {displayedApplications[job.jobId - 1] &&
                displayedApplications[job.jobId - 1].map((applicant) => (
                  <li
                    key={applicant.id}
                    className="bg-gray-800 shadow-md rounded-md p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">
                      {applicant.applicantName}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Submission Date: {applicant.submissionDate}
                    </p>
                    <div className="flex items-center">
                      <a href="#" className="text-blue-500 hover:underline">
                        View Details
                      </a>
                    </div>
                  </li>
                ))}
            </ul>
            {displayedApplications[job.jobId - 1]?.length <
              job.applicants.length && (
              <button
                className="text-blue-500 bg-gray-900 hover:underline float-right mt-4"
                onClick={() => handleShowMore(job.jobId)}
              >
                See More (
                {job.applicants.length -
                  displayedApplications[job.jobId - 1]?.length}{" "}
                remaining)
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsList;
