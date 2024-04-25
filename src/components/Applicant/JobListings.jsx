import { useState } from "react";
import { FaBookmark } from "react-icons/fa";

const JobListing = () => {
  const [savedJobs, setSavedJobs] = useState([]);

   const jobs = [
    {
      title: "Software Engineer",
      company: "Acme Inc.",
      location: "New York City, NY",
      description:
        "Develop and maintain web applications using React, Node.js, and modern JavaScript frameworks.",
      employmentType: "Full-time",
      seniorityLevel: "Mid-level",
      salary: "$100,000 - $120,000",
      postedDate: "Posted 2 days ago",
    },
    {
      title: "Front-end Developer",
      company: "StartUp XYZ",
      location: "San Francisco, CA",
      description:
        "Build responsive and user-friendly web interfaces with a focus on accessibility and performance.",
      employmentType: "Full-time",
      seniorityLevel: "Entry-level",
      salary: "$80,000 - $100,000",
      postedDate: "Posted 1 week ago",
    },
    {
      title: "UI/UX Designer",
      company: "Design Agency",
      location: "Los Angeles, CA",
      description:
        "Create user-centered designs for web and mobile applications, ensuring a seamless user experience.",
      employmentType: "Full-time",
      seniorityLevel: "Mid-level",
      salary: "$90,000 - $110,000",
      postedDate: "Just posted",
    },
    {
      title: "Backend Developer",
      company: "Tech Solutions Ltd.",
      location: "Austin, TX",
      description:
        "Develop scalable and efficient backend systems using Node.js and MongoDB.",
      employmentType: "Full-time",
      seniorityLevel: "Senior-level",
      salary: "$120,000 - $140,000",
      postedDate: "Posted 3 days ago",
    },
    {
      title: "Data Scientist",
      company: "Data Analytics Inc.",
      location: "Chicago, IL",
      description:
        "Analyze large datasets and develop machine learning models for predictive analytics.",
      employmentType: "Full-time",
      seniorityLevel: "Senior-level",
      salary: "$130,000 - $150,000",
      postedDate: "Posted 4 days ago",
    },
    {
      title: "Product Manager",
      company: "Tech Innovations",
      location: "Seattle, WA",
      description:
        "Lead the product development lifecycle, from ideation to launch, and drive product strategy.",
      employmentType: "Full-time",
      seniorityLevel: "Senior-level",
      salary: "$140,000 - $160,000",
      postedDate: "Posted 1 week ago",
    },
    {
      title: "DevOps Engineer",
      company: "Cloud Solutions Co.",
      location: "Denver, CO",
      description:
        "Manage and improve our cloud infrastructure, CI/CD pipelines, and deployment processes.",
      employmentType: "Full-time",
      seniorityLevel: "Mid-level",
      salary: "$110,000 - $130,000",
      postedDate: "Posted 2 weeks ago",
    },
    {
      title: "Software Development Engineer in Test (SDET)",
      company: "Quality Assurance Ltd.",
      location: "Boston, MA",
      description:
        "Design and implement automated testing frameworks to ensure the quality of our software products.",
      employmentType: "Full-time",
      seniorityLevel: "Mid-level",
      salary: "$100,000 - $120,000",
      postedDate: "Posted 2 weeks ago",
    },
    {
      title: "Mobile App Developer",
      company: "Mobile Solutions Corp.",
      location: "Miami, FL",
      description:
        "Develop native mobile applications for iOS and Android platforms, focusing on performance and usability.",
      employmentType: "Full-time",
      seniorityLevel: "Entry-level",
      salary: "$70,000 - $90,000",
      postedDate: "Posted 3 weeks ago",
    },
    {
      title: "Systems Administrator",
      company: "IT Services Ltd.",
      location: "Atlanta, GA",
      description:
        "Manage and maintain our IT infrastructure, including servers, networks, and security systems.",
      employmentType: "Full-time",
      seniorityLevel: "Entry-level",
      salary: "$60,000 - $80,000",
      postedDate: "Posted 1 month ago",
    },
    {
      title: "UI Developer",
      company: "Web Design Co.",
      location: "Portland, OR",
      description:
        "Translate design wireframes into interactive and visually appealing user interfaces using HTML, CSS, and JavaScript.",
      employmentType: "Full-time",
      seniorityLevel: "Entry-level",
      salary: "$80,000 - $100,000",
      postedDate: "Posted 1 month ago",
    },
    {
      title: "Technical Support Specialist",
      company: "Tech Support Inc.",
      location: "Houston, TX",
      description:
        "Provide technical assistance and support to customers, troubleshooting software and hardware issues.",
      employmentType: "Full-time",
      seniorityLevel: "Entry-level",
      salary: "$50,000 - $70,000",
      postedDate: "Posted 1 month ago",
    },
    // Add more jobs here following the same structure
  ];

  const handleSaveJob = (jobTitle) => {
    if (!savedJobs.includes(jobTitle)) {
      setSavedJobs([...savedJobs, jobTitle]);
    }
  };

  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-green-400">Job Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="bg-gray-700 shadow-lg rounded-lg overflow-hidden relative"
            >
              <div className="px-6 py-4">
                <h2 className="text-xl font-medium mb-2 text-white">
                  {job.title}
                </h2>
                <p className="text-gray-400 mb-2">
                  {job.company} - {job.location}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="mr-2">
                    {job.employmentType} - {job.seniorityLevel}
                  </span>
                </div>
                <p className="text-gray-400 line-clamp-3">{job.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-base font-medium text-green-400">
                    {job.salary}
                  </span>
                  <span className="text-sm text-gray-500">
                    {job.postedDate}
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 flex items-center justify-end absolute top-0 right-0">
                {/* <FaHeart
                  onClick={() => handleSaveJob(job.title)}
                  className={`h-6 w-6 cursor-pointer ${
                    savedJobs.includes(job.title)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                /> */}
                {/* <TbJewishStar
                  onClick={() => handleSaveJob(job.title)}
                  className={`h-6 w-6 cursor-pointer ${
                    savedJobs.includes(job.title)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                /> */}
                {/* <CiBookmark
                  onClick={() => handleSaveJob(job.title)}
                  className={`h-6 w-6 cursor-pointer ${
                    savedJobs.includes(job.title)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                /> */}
                <FaBookmark  onClick={() => handleSaveJob(job.title)}
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
