import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaUserGraduate,
  FaEye,
  FaPlusCircle,
  FaChevronRight,
  FaSearch,
  FaBuilding,
} from "react-icons/fa";
import Marquee from "react-fast-marquee";

const companies = [
  {
    name: "Byju",
    logo: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfc2ac17bb1bfb438bd8f_Frame%201430102671%20(1).svg",
  },
  {
    name: "Accenture",
    logo: "https://assets-global.website-files.com/624629162e6c5c363b391aee/6419f7a1a05ce52679a5d78f_Group%2048097659.svg",
  },
  {
    name: "ODA",
    logo: "https://assets-global.website-files.com/624629162e6c5c363b391aee/64148a3216f5ef8433b541a2_Meta_Platforms_Inc._logo%203.svg",
  },
  {
    name: "PW",
    logo: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641485680a2bea5e2dbcd28b_Razorpay%20svg%20(1).svg",
  },
  {
    name: "TCS",
    logo: "https://assets-global.website-files.com/624629162e6c5c363b391aee/6419f7586297a7156ba925d0_Microsoft%20svg%20(1).svg",
  },
  {
    name: "Wipro",
    logo: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641c036bac9e365468c36d55_Frame%201430102672%20(2).svg",
  },
  {
    name: "OYO",
    logo: "https://assets-global.website-files.com/624629162e6c5c363b391aee/64148aaaab4ce5338ca7d7e7_Swiggy.svg",
  },
  {
    name: "Uber",
    logo: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfcf494d12bcd88f4a152_Frame%201430102671%20(4).svg",
  },
  {
    name: "Swiggy",
    logo: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfcf494d12bcd88f4a152_Frame%201430102671%20(4).svg",
  },
  {
    name: "Flipkart",
    logo: "https://assets-global.website-files.com/624629162e6c5c363b391aee/6419f7586297a7156ba925d0_Microsoft%20svg%20(1).svg",
  },
  {
    name: "Amazon",
    logo: "https://assets-global.website-files.com/624629162e6c5c363b391aee/64148aaaab4ce5338ca7d7e7_Swiggy.svg",
  },
  {
    name: "Ola",
    logo: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfcf494d12bcd88f4a152_Frame%201430102671%20(4).svg",
  },
];

const topics = [
  {
    name: "Jobs",
    href: "",
    description: "Find job opportunities",
  },
  {
    name: "Courses",
    href: "",
    description: "Explore educational courses",
  },
  {
    name: "Services",
    href: "",
    description: "Discover professional services",
  },
  {
    name: "Technology",
    href: "",
    description: "Explore technology jobs",
  },
  {
    name: "See All",
    href: "",
    description: "→",
    className: "hover:underline",
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredTopic, setHoveredTopic] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Search term:", searchTerm);
    // Handle search submission here
  };

  return (
    <>
      <div className="bg-gray-950">
        <br />
        <div className="max-w-[80%] w-full mx-auto mb-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-green-500">
            Find Your Next Opportunity
          </h2>
          <div className="flex items-center justify-center h-16 w-full m-auto rounded-full bg-gray-700 shadow-md">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search jobs by title, company, or skills"
                className="w-full px-10 py-3 rounded-3xl border border-transparent focus:outline-none text-white bg-gray-700"
                value={searchTerm}
                onChange={handleSearch}
              />
              <button
                type="button"
                onClick={handleSubmit}
                className="absolute right-2 top-1/2 border-none transform -translate-y-1/2 bg-green-500 hover:bg-green-700 text-white rounded-3xl hover:outline-none focus:outline-none px-4 py-2 shadow-md transition duration-300"
              >
                Search
              </button>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[80%] w-full mx-auto">
          <div className="flex flex-col items-center py-8 px-10 space-y-6 bg-green-700 rounded-3xl shadow-md transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white text-center">
              Applicants
            </h3>
            <FaUserGraduate className="w-12 h-12 text-white mb-4" />
            <ul className="space-y-2 text-white text-opacity-75">
              <li className="flex items-center">
                <FaBriefcase className="mr-2 text-lg text-white" />
                Apply for Jobs
              </li>
              <li className="flex items-center">
                <FaPlusCircle className="mr-2 text-lg text-white" />
                Create Profile
              </li>
              <li className="flex items-center">
                <FaEye className="mr-2 text-lg text-white" />
                See All Applications
              </li>
            </ul>
            <Link
              to="/applicant/login"
              className="mt-auto bg-white hover:bg-gray-100 hover:text-green-500 text-green-700 font-bold py-2 px-4 rounded-full flex items-center justify-center shadow-md transition duration-300"
            >
              Apply Now
              <FaChevronRight className="ml-2 text-green-700" />
            </Link>
          </div>

          <div className="flex flex-col items-center py-8 px-10 space-y-6 bg-gray-800 rounded-3xl shadow-md transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white text-center">
              Organizations
            </h3>
            <FaBuilding className="w-12 h-12 text-white mb-4" />
            <ul className="space-y-2 text-white text-opacity-75">
              <li className="flex items-center">
                <FaPlusCircle className="mr-2 text-lg text-white" />
                Post Jobs
              </li>
              <li className="flex items-center">
                <FaEye className="mr-2 text-lg text-white" />
                Manage Jobs
              </li>
              <li className="flex items-center">
                <FaEye className="mr-2 text-lg text-white" />
                See All Applicants
              </li>
            </ul>
            <Link
              to="/organization/login"
              className="mt-auto bg-white hover:bg-gray-100 text-[#517da0] font-bold py-2 px-4 rounded-full flex items-center justify-center shadow-md transition duration-300"
            >
              Register Now
              <FaChevronRight className="ml-2 text-[#517da0]" />
            </Link>
          </div>
        </div>

        <section className="section flex flex-wrap justify-evenly py-40 items-center">
          <div className="w-full max-w-3xl px-4">
            <h2
              className="text-2xl font-semibold mb-4 text-green-500"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Explore Collaborative Articles
            </h2>
            <p className="text-gray-400">
              Dive deeper into the topics that matter to you. Explore a wide
              range of content categorized by industry, skill, or interest. Find
              curated articles, tutorials, and resources to help you learn and
              grow.
            </p>
          </div>

          <ul className="flex flex-wrap gap-4">
            {topics.map((topic, index) => (
              <li
                key={index}
                className="relative rounded-lg bg-gray-700 shadow-md px-4 py-2 hover:bg-gray-600 transition duration-300"
                onMouseEnter={() => setHoveredTopic(index)}
                onMouseLeave={() => setHoveredTopic(null)}
              >
                <Link
                  to={topic.href}
                  className={`text-green-500 font-bold ${topic.className}`}
                  target="_blank"
                >
                  {topic.name}
                </Link>
                {hoveredTopic === index && (
                  <p className="absolute bg-gray-600 text-green-500 p-3 rounded-lg mt-7 z-10">
                    {topic.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="bg-green-700 py-20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              Placement Opportunities
            </h2>
          </div>

          <Marquee
            direction="left"
            className="space-x-8 overflow-hidden rounded-lg shadow-md"
          >
            {companies.map((company, index) => (
              <div key={index} className="mr-8">
                <div className="w-32 h-32 p-1 bg-gray-800 rounded-lg shadow-md overflow-hidden flex justify-center items-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-24 max-w-full"
                  />
                </div>
              </div>
            ))}
          </Marquee>
         
        </div>
      </div>
    </>
  );
};

export default Home;
