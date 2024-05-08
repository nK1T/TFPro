import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { MdDownload, MdEdit } from "react-icons/md";
import profilePhoto from "../../assets/BRANDMARK (1).png";

const OrganizationProfile = () => {
  const organizationData = {
    name: "TALENTFINER",
    email: "info@talentfiner.com",
    phone: "+1 (123) 456-7890",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    description:
      "We are a leading organization in our industry in the region. We're proud to have a 3.7 rating on Glassdoor from our employees. We are hiring talented individuals to join our team.",
    location: "Your City, Country",
    website: "https://www.talentfiner.com",
    industry: "Your Industry",
    missionStatement: "Our mission is to...",
    services: ["Service 1", "Service 2", "Service 3"],
  };

  const editProfile = () => {
    // Functionality for editing profile goes here
    alert("Editing profile...");
  };

  const downloadProfile = () => {
    // Functionality for downloading profile goes here
    alert("Downloading profile...");
  };

  return (
    <div className="bg-black text-white px-4 py-8 rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold text-center text-green-400">
          Organization Profile
        </h1>
        <button
          onClick={editProfile}
          className="flex items-center text-sm text-black bg-286758 py-1 px-2 rounded-md hover:bg-000000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-286758"
        >
          <MdEdit className="mr-2" />
          Edit Profile
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-286758 shadow-lg rounded-lg p-4">
          <div className="flex flex-col md:flex-row md:items-center">
            <img
              src={profilePhoto}
              alt="Organization Logo"
              className="w-32 h-32 bg-white rounded-full mr-4 md:mr-8 mb-4 md:mb-0"
            />
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-2 text-green-400">
                Organization Information
              </h2>
              <p className="text-lg font-medium mb-2">
                Name: {organizationData.name}
              </p>
              <p className="text-lg font-medium mb-2">
                Email: {organizationData.email}
              </p>
              <p className="text-lg font-medium mb-2">
                Phone: {organizationData.phone}
              </p>
              <p className="text-lg font-medium mb-2">
                Location: {organizationData.location}
              </p>
              <div className="flex items-center mb-2">
                <p className="text-lg font-medium mr-2">Industry:</p>
                <p className="text-lg">{organizationData.industry}</p>
              </div>
              <div className="flex">
                <a
                  href={organizationData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4 text-blue-500 hover:text-blue-700"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href={organizationData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-500"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
          <p className="text-lg font-medium mt-4">
            Description: {organizationData.description}
          </p>
        </div>
        <div className="bg-286758 shadow-lg rounded-lg p-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-green-400">
              Mission Statement
            </h2>
            <p className="text-lg">{organizationData.missionStatement}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-green-400">Services</h2>
            <ul className="list-disc pl-4">
              {organizationData.services.map((service, index) => (
                <li key={index} className="text-lg font-medium">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="flex items-center justify-center px-4 py-2 bg-286758 text-black rounded-md hover:bg-000000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-286758"
          onClick={downloadProfile}
        >
          <MdDownload className="mr-2 h-5 w-5" />
          Download Profile
        </button>
      </div>
    </div>
  );
};

export default OrganizationProfile;
