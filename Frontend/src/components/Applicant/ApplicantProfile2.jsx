import { MdDownload, MdEdit } from "react-icons/md";
import profilePhoto from "../../assets/Screenshot 2024-04-23 125658.png"; // Import your profile photo

const applicantData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1234567890",
  linkedin: "https://www.linkedin.com/in/john-doe-12345678",
  summary:
    "Highly motivated software engineer with 2+ years of experience in web development. Skilled in React, Node.js, HTML, CSS, and JavaScript. Seeking a challenging role to utilize my skills and contribute to a growing team.",
  skills: [
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Proficient" },
    { name: "Node.js", level: "Intermediate" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Proficient" },
  ],
  experience: [
    {
      company: "Acme Inc.",
      position: "Software Engineer",
      duration: "2 years",
      description: "Developed web applications using React and Node.js",
    },
    {
      company: "StartUp XYZ",
      position: "Front-end Developer",
      duration: "1 year",
      description: "Built responsive websites with HTML, CSS, and JavaScript",
    },
  ],
  education: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      graduationYear: 2020,
    },
  ],
  projects: [
    {
      title: "Personal Portfolio Website",
      url: "https://johndoeportfolio.com",
    },
    {
      title: "E-commerce Platform",
      url: "https://github.com/johndoe/e-commerce-app",
    },
  ],
  awards: ["Dean's List (2018-2020)"],
  languages: ["English (fluent)", "Spanish (conversational)"],
};

const progressColorMap = {
  Beginner: "#cccccc",
  Intermediate: "#ffc107",
  Advanced: "#4caf50",
};

const SkillBar = ({ name, level }) => {
  const progressStyle = {
    width: `${
      level === "Advanced" ? 100 : level === "Intermediate" ? 50 : 25
    }%`,
    backgroundColor: progressColorMap[level],
  };

  return (
    <div className="flex items-center mb-2">
      <p className="text-md mr-2">{name}</p>
      <div className="w-full h-2 rounded-full bg-gray-200">
        <div className="h-full rounded-full" style={progressStyle}></div>
      </div>
      <p
        className={`text-md ml-2 ${
          level === "Advanced"
            ? "text-green-400"
            : level === "Intermediate"
            ? "text-yellow-400"
            : "text-red-400"
        }`}
      >
        {level}
      </p>
    </div>
  );
};

const ApplicantProfile3 = () => {
  const {
    name,
    email,
    phone,
    linkedin,
    summary,
    skills,
    experience,
    education,
    projects,
    awards,
    languages,
  } = applicantData;

  const downloadResume = () => {
    // Simulate resume download (replace with actual resume generation logic)
    alert("Downloading resume...");
  };

  const editProfile = () => {
    // Functionality for editing profile goes here
    alert("Editing profile...");
  };

  return (
    <div className="bg-gray-900 text-white py-8">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-8 px-4">
        <h1 className="text-3xl font-bold">Applicant Profile</h1>
        <div className="flex items-center">
          <button
            onClick={editProfile}
            className="flex items-center text-sm text-white bg-gray-600 py-1 px-2 rounded-md mr-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
          >
            <MdEdit className="mr-1" />
            Edit Profile
          </button>
          <button
            onClick={downloadResume}
            className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <MdDownload className="mr-1 h-5 w-5" />
            Download Resume
          </button>
        </div>
      </div>

      {/* Profile Content Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          {/* Personal Information Section */}
          <div className="flex flex-col items-center">
            {/* Profile Photo */}
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-medium mb-2 text-green-400">
              Personal Information
            </h2>
            <p className="text-lg font-medium mb-2">Name: {name}</p>
            <p className="text-lg font-medium mb-2">Email: {email}</p>
            <p className="text-lg font-medium mb-2">Phone: {phone}</p>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* Summary Section */}
          <div className="mt-6">
            <h2 className="text-xl font-medium mb-2 text-green-400">Summary</h2>
            <p className="text-lg">{summary}</p>
          </div>

          {/* Skills Section */}
          <div className="mt-6">
            <h2 className="text-xl font-medium mb-2 text-green-400">Skills</h2>
            {skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          {/* Projects Section */}
          <div>
            <h2 className="text-xl font-medium mb-2 text-green-400">
              Projects
            </h2>
            {projects.map((project) => (
              <div key={project.title} className="mb-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  {project.title}
                </a>
              </div>
            ))}
          </div>

          {/* Awards Section (if applicable) */}
          {awards.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-medium mb-2 text-green-400">
                Awards
              </h2>
              <ul className="list-disc pl-4">
                {awards.map((award) => (
                  <li key={award} className="text-lg text-red-400">
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Languages Section (if applicable) */}
          {languages.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-medium mb-2 text-green-400">
                Languages
              </h2>
              <ul className="list-disc pl-4">
                {languages.map((lang) => (
                  <li key={lang} className="text-lg text-red-400">
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Experience Section */}
          <div className="mt-6">
            <h2 className="text-xl font-medium mb-2 text-blue-400">
              Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.company} className="mb-4">
                <h3 className="text-lg font-medium mb-1">{exp.company}</h3>
                <p className="text-md text-blue-400">
                  {exp.position} ({exp.duration})
                </p>

                <p className="text-gray-500">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-6">
            <h2 className="text-xl font-medium mb-2 text-blue-400">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.institution} className="mb-4">
                <h3 className="text-lg font-medium mb-1">{edu.institution}</h3>
                <p className="text-md text-blue-400">
                  {edu.degree} ({edu.graduationYear})
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantProfile3;

















































// import { MdDownload, MdEdit } from "react-icons/md";
// import profilePhoto from "../../assets/Screenshot 2024-04-23 125658.png"; // Import your profile photo
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// import { useAuth0 } from "@auth0/auth0-react";

// const applicantData = {
//   name: "Shivanshu Chobey",
//   email: "shivanshu.chobey@gmail.com",
//   phone: "+91-8120138215",
//   linkedin: "https://www.linkedin.com",
//   summary:
//     "Highly motivated software engineer with 2+ years of experience in web development. Skilled in React, Node.js, HTML, CSS, and JavaScript. Seeking a challenging role to utilize my skills and contribute to a growing team.",
//   skills: [
//     { name: "JavaScript", level: "Advanced" },
//     { name: "React", level: "Proficient" },
//     { name: "Node.js", level: "Intermediate" },
//     { name: "HTML", level: "Advanced" },
//     { name: "CSS", level: "Proficient" },
//   ],
//   experience: [
//     {
//       company: "Acme Inc.",
//       position: "Software Engineer",
//       duration: "2 years",
//       description: "Developed web applications using React and Node.js",
//     },
//     {
//       company: "StartUp XYZ",
//       position: "Front-end Developer",
//       duration: "1 year",
//       description: "Built responsive websites with HTML, CSS, and JavaScript",
//     },
//   ],
//   education: [
//     {
//       institution: "University of Technology",
//       degree: "Bachelor of Science in Computer Science",
//       graduationYear: 2020,
//     },
//   ],
//   projects: [
//     {
//       title: "Personal Portfolio Website",
//       url: "https://johndoeportfolio.com",
//     },
//     {
//       title: "E-commerce Platform",
//       url: "https://github.com/johndoe/e-commerce-app",
//     },
//   ],
//   awards: ["Dean's List (2018-2020)"],
//   languages: ["English (fluent)", "Spanish (conversational)"],
// };

// const progressColorMap = {
//   Beginner: "#cccccc",
//   Intermediate: "#ffc107",
//   Proficient: "#2196f3",
//   Advanced: "#4caf50",
// };

// const SkillBar = ({ name, level }) => {
//   const progressStyle = {
//     width: `${
//       level === "Advanced" ? 100 : level === "Intermediate" ? 50 : 25
//     }%`,
//     backgroundColor: progressColorMap[level],
//   };

//   return (
//     <div className="flex items-center mb-2">
//       <p className="text-md mr-2">{name}</p>
//       <div className="w-full h-2 rounded-full bg-gray-200">
//         <div className="h-full rounded-full" style={progressStyle}></div>
//       </div>
//       <p
//         className={`text-md ml-2 ${
//           level === "Advanced"
//             ? "text-green-400"
//             : level === "Intermediate"
//             ? "text-yellow-400"
//             : "text-blue-400" // Changed color to blue for Proficient
//         } font-medium`}
//       >
//         {level}
//       </p>
//     </div>
//   );
// };

// const ApplicantProfile = () => {
//     const { isAuthenticated, loginWithRedirect, user } = useAuth0();

//   const {
//     name,
//     email,
//     phone,
//     linkedin,
//     summary,
//     skills,
//     experience,
//     education,
//     projects,
//     awards,
//     languages,
//   } = applicantData;

//   const downloadResume = () => {
//     // Simulate resume download (replace with actual resume generation logic)
//     alert("Downloading resume...");
//   };

//   const editProfile = () => {
//     // Functionality for editing profile goes here
//     alert("Editing profile...");
//   };

//   return (
//     <div className="bg-black text-white px-4 py-8 rounded-3xl">
//       {/* Title Section */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-4xl font-bold text-center text-green-400">
//           Applicant Profile
//         </h1>
//         <button
//           onClick={editProfile}
//           className="flex items-center text-sm text-black bg-286758 py-1 px-2 rounded-md hover:bg-000000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-286758"
//         >
//           <MdEdit className="mr-2" />
//           Edit Profile
//         </button>
//       </div>

//       {/* Profile Content Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           {/* Personal Information Section */}
//           <div className="flex flex-col md:flex-row md:items-center bg-286758 shadow-lg rounded-lg p-4">
//             {/* Profile Photo */}
//             <img
//               src={user.picture}
//               alt="Profile"
//               className="w-32 h-32 rounded-full mr-4 md:mr-8 mb-4 md:mb-0"
//             />

//             <div className="flex-grow">
//               <h2 className="text-2xl font-bold mb-2 text-green-400 flex items-center">
//                 Personal Information
//                 <span className="ml-4">
//                   <a href={linkedin} target="_blank" rel="noreferrer">
//                     <FontAwesomeIcon
//                       icon={faLinkedin}
//                       className="text-blue-500 hover:text-blue-700 mr-2"
//                     />
//                   </a>
//                   <a href={""} target="_blank" rel="noreferrer">
//                     <FontAwesomeIcon
//                       icon={faGithub}
//                       className="text-white hover:text-gray-500"
//                     />
//                   </a>
//                 </span>
//               </h2>
//               <p className="text-lg font-medium mb-2">Name: {user.name}</p>
//               <p className="text-lg font-medium mb-2">Email: {user.email}</p>
//               <p className="text-lg font-medium mb-2">Phone: {phone}</p>
//             </div>
//           </div>

//           {/* Summary Section */}
//           <div className="bg-286758 shadow-lg rounded-lg p-4 mt-4">
//             <h2 className="text-2xl font-bold mb-2 text-green-400">Summary</h2>
//             <p className="text-lg">{summary}</p>
//           </div>
//           {/* Skills Section */}
//           <div className="bg-286758 shadow-lg rounded-lg p-4 mt-4">
//             <h2 className="text-2xl font-bold mb-2 text-green-400">Skills</h2>
//             {skills.map((skill) => (
//               <SkillBar
//                 key={skill.name}
//                 name={skill.name}
//                 level={skill.level}
//               />
//             ))}
//           </div>
//           {/* Projects Section */}
//           <div className="bg-286758 shadow-lg rounded-lg p-4 mt-4">
//             <h2 className="text-2xl font-bold mb-2 text-green-400">Projects</h2>
//             {projects.map((project) => (
//               <div key={project.title} className="mb-2">
//                 <a
//                   href={project.url}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-blue-500 underline hover:text-blue-700"
//                 >
//                   {project.title}
//                 </a>
//               </div>
//             ))}
//           </div>
//           {/* Awards Section (if applicable) */}
//           {awards.length > 0 && (
//             <div className="bg-286758 shadow-lg rounded-lg p-4 mt-4">
//               <h2 className="text-2xl font-bold mb-2 text-green-400">Awards</h2>
//               <ul className="list-disc pl-4">
//                 {awards.map((award) => (
//                   <li key={award} className="text-lg font-medium">
//                     {award}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {/* Languages Section (if applicable) */}
//           {languages.length > 0 && (
//             <div className="bg-286758 shadow-lg rounded-lg p-4 mt-4">
//               <h2 className="text-2xl font-bold mb-2 text-green-400">
//                 Languages
//               </h2>
//               <ul className="list-disc pl-4">
//                 {languages.map((lang) => (
//                   <li key={lang} className="text-lg font-medium">
//                     {lang}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         <div>
//           {/* Experience Section */}
//           <div className="bg-286758 shadow-lg rounded-lg p-4">
//             <h2 className="text-2xl font-bold mb-2 text-blue-400">Experience</h2>
//             {experience.map((exp) => (
//               <div key={exp.company} className="mb-4">
//                 <h3 className="text-lg font-bold mb-1">{exp.company}</h3>
//                 <p className="text-md text-blue-400">
//                   {exp.position} ({exp.duration})
//                 </p>

//                 <p className="text-gray-300">{exp.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* Education Section */}
//           <div className="bg-286758 shadow-lg rounded-lg p-4 mt-4">
//             <h2 className="text-2xl font-bold mb-2 text-blue-400">Education</h2>
//             {education.map((edu) => (
//               <div key={edu.institution} className="mb-4">
//                 <h3 className="text-lg font-bold mb-1">{edu.institution}</h3>
//                 <p className="text-md text-blue-400">
//                   {edu.degree} ({edu.graduationYear})
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Download Resume Button */}
//           <button
//             className="flex items-center justify-center px-4 py-2 bg-286758 text-black rounded-md hover:bg-000000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-286758 mt-4"
//             onClick={downloadResume}
//           >
//             <MdDownload className="mr-2 h-5 w-5" />
//             Download Resume
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplicantProfile;


