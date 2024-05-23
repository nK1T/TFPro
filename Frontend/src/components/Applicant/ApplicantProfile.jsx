
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { MdEdit } from "react-icons/md";
// import { useAuth0 } from "@auth0/auth0-react";

// const ApplicantProfile = () => {
//   const { user } = useAuth0();
//   const { email, name, picture } = user;

//   const [formData, setFormData] = useState({
//     contactNo: "",
//     summary: "",
//   });
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/store-contact");
//         const data = response.data;
//         setFormData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:5000/store-contact", {
//         name,
//         email,
//         picture,
//         ...formData,
//       });
//       setShowForm(false);
//       alert("Profile updated!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("Failed to update profile. Please try again later.");
//     }
//   };

//   const editProfile = () => {
//     setShowForm(true);
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
//           className="flex items-center text-sm text-white bg-gray-800 py-1 px-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
//         >
//           <MdEdit className="mr-2" />
//           Edit Profile
//         </button>
//       </div>

//       {/* Profile Content Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           {/* Personal Information Section */}
//           <div className="flex flex-col md:flex-row md:items-center bg-gray-800 shadow-lg rounded-lg p-4">
//             {/* Profile Photo */}
//             <img
//               src={picture}
//               alt="Profile"
//               className="w-32 h-32 rounded-full mr-4 md:mr-8 mb-4 md:mb-0"
//             />

//             <div className="flex-grow">
//               <h2 className="text-2xl font-bold mb-2 text-green-400 flex items-center">
//                 Personal Information
//               </h2>
//               <p className="text-lg font-medium mb-2">Name: {name}</p>
//               <p className="text-lg font-medium mb-2">Email: {email}</p>
//               <p className="text-lg font-medium mb-2">Contact: {formData.contactNo}</p>
//               <p className="text-lg font-medium mb-2">Summary: {formData.summary}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Form Modal */}
//       {showForm && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
//           <div className="bg-gray-800 p-8 rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="contact" className="block mb-1">
//                   Contact:
//                 </label>
//                 <input
//                   type="text"
//                   id="contact"
//                   name="contactNo"
//                   value={formData.contactNo}
//                   onChange={handleChange}
//                   className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-900 text-white"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="summary" className="block mb-1">
//                   Summary:
//                 </label>
//                 <textarea
//                   id="summary"
//                   name="summary"
//                   value={formData.summary}
//                   onChange={handleChange}
//                   className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-900 text-white"
//                 />
//               </div>
//               <div className="text-right">
//                 <button
//                   type="submit"
//                   className="px-4  py-2 bg-286758 text-black rounded-md hover:bg-green-600 hover:text-white border-none"
//                 >
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setShowForm(false)}
//                   className="px-4 py-2 bg-red-600 text-white rounded-md ml-2 hover:bg-red-700 border-none"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApplicantProfile;

import axios from "axios";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";

const ApplicantProfile = () => {
  const { user } = useAuth0();
  const { email, name, picture } = user;

  const [formData, setFormData] = useState({
    contactNo: "",
    summary: "",
  });
  const [educationFormData, setEducationFormData] = useState({
    institution: "",
    degree: "",
    fieldOfStudy: "",
    graduationYear: ""
  });
  const [experienceFormData, setExperienceFormData] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: ""
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/store-contact");
        const data = response.data;
        setFormData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleContactSummarySubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/store-contact", {
        name,
        email,
        picture,
        ...formData,
      });
      alert("Contact and summary updated!");
    } catch (error) {
      console.error("Error updating contact and summary:", error);
      alert("Failed to update contact and summary. Please try again later.");
    }
  };

  const handleEducationSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/education", educationFormData);
      alert("Education details updated!");
    } catch (error) {
      console.error("Error updating education details:", error);
      alert("Failed to update education details. Please try again later.");
    }
  };

  const handleExperienceSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/experience", { email, ...experienceFormData, });
      alert("Experience details updated!");
    } catch (error) {
      console.error("Error updating experience details:", error);
      alert("Failed to update experience details. Please try again later.");
    }
  };

  const editProfile = () => {
    setShowForm(true);
  };

  return (
    <div className="bg-black text-white px-4 py-8 rounded-3xl">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold text-center text-green-400">
          Applicant Profile
        </h1>
        <button
          onClick={editProfile}
          className="flex items-center text-sm text-white bg-gray-800 py-1 px-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          <MdEdit className="mr-2" />
          Edit Profile
        </button>
      </div>

      {/* Profile Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {/* Personal Information Section */}
          <div className="flex flex-col md:flex-row md:items-center bg-gray-800 shadow-lg rounded-lg p-4">
            {/* Profile Photo */}
            <img
              src={picture}
              alt="Profile"
              className="w-32 h-32 rounded-full mr-4 md:mr-8 mb-4 md:mb-0"
            />

            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-2 text-green-400 flex items-center">
                Personal Information
              </h2>
              <p className="text-lg font-medium mb-2">Name: {name}</p>
              <p className="text-lg font-medium mb-2">Email: {email}</p>
              <p className="text-lg font-medium mb-2">Contact: {formData.contactNo}</p>
              <p className="text-lg font-medium mb-2">Summary: {formData.summary}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleContactSummarySubmit}>
              <div className="mb-4">
                <label htmlFor="contact" className="block mb-1">
                  Contact:
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, contactNo: e.target.value }))}
                  className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-900 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="summary" className="block mb-1">
                  Summary:
                </label>
                <textarea
                  id="summary"
                  name="summary"
                  value={formData.summary}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, summary: e.target.value }))}
                  className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-900 text-white"
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="px-4 py-2 bg-286758 text-black rounded-md hover:bg-green-600 hover:text-white border-none"
                >
                  Save Contact & Summary
                </button>
              </div>
            </form>
            <form onSubmit={handleEducationSubmit}>
              {/* Education Section */}
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2 text-green-400">Education</h3>
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <input
                    type="text"
                    name="institution"
                    value={educationFormData.institution}
                    onChange={(e) => setEducationFormData((prevData) => ({ ...prevData, institution: e.target.value }))}
                    placeholder="Institution"
                    className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-900 text-white mr-2 mb-2 md:mb-0"
                  />
                  <input
                    type="text"
                    name="degree"
                    value={educationFormData.degree}
                    onChange={(e) => setEducationFormData((prevData) => ({ ...prevData, degree: e.target.value }))}
                    placeholder="Degree"
                    className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-900 text-white mr-2 mb-2 md:mb-0"
                  />
                  <input
                    type="text"
                    name="fieldOfStudy"
                    value={educationFormData.fieldOfStudy}
                    onChange={(e) => setEducationFormData((prevData) => ({ ...prevData, fieldOfStudy: e.target.value }))}
                    placeholder="Field of Study"
                    className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-900 text-white mr-2 mb-2 md:mb-0"
                  />
                  <input
                    type="text"
                    name="graduationYear"
                    value={educationFormData.graduationYear}
                    onChange={(e) => setEducationFormData((prevData) => ({ ...prevData, graduationYear: e.target.value }))}
                    placeholder="Graduation Year"
                    className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-900 text-white mb-2 md:mb-0"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 border-none"
                >
                  Add Education
                </button>
              </div>
            </form>
            <form onSubmit={handleExperienceSubmit}>
              {/* Experience Section */}
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2 text-green-400">Experience</h3>
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <input
                    type="text"
                    name="company"
                    value={experienceFormData.company}
                    onChange={(e) => setExperienceFormData((prevData) => ({ ...prevData, company: e.target.value }))}
                    placeholder="Company"
                    className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-900 text-white mr-2 mb-2 md:mb-0"
                  />
                  <input
                    type="text"
                    name="position"
                    value={experienceFormData.position}
                    onChange={(e) => setExperienceFormData((prevData) => ({ ...prevData, position: e.target.value }))}
                    placeholder="Position"
                    className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-900 text-white mr-2 mb-2 md:mb-0"
                  />
                  <input
                    type="text"
                    name="startDate"
                    value={experienceFormData.startDate}
                    onChange={(e) => setExperienceFormData((prevData) => ({ ...prevData, startDate: e.target.value }))}
                    placeholder="Start Date"
                    className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-900 text-white mr-2 mb-2 md:mb-0"
                  />
                  <input
                    type="text"
                    name="endDate"
                    value={experienceFormData.endDate}
                    onChange={(e) => setExperienceFormData((prevData) => ({ ...prevData, endDate: e.target.value }))}
                    placeholder="End Date"
                    className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-900 text-white mb-2 md:mb-0"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 border-none"
                >
                  Add Experience
                </button>
              </div>
            </form>
            <div className="text-right">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-red-600 text-white rounded-md ml-2 hover:bg-red-700 border-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicantProfile;

