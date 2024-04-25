// src/dummyData.js
export default {
  applicant: {
    name: "John Doe",
    email: "john.doe@example.com",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
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
  },
  jobs: [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Solutions",
      location: "Remote",
      description:
        "Develop and maintain scalable web applications using modern technologies",
      requirements: ["JavaScript", "React", "Node.js"],
    },
    {
      id: 2,
      title: "Front-end Developer",
      company: "Creative Agency",
      location: "San Francisco, CA",
      description:
        "Build interactive and user-friendly interfaces for web applications",
      requirements: ["HTML", "CSS", "JavaScript", "React"],
    },
  ],
};
