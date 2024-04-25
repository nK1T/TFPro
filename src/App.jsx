// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicantLayout from "./layouts/ApplicantLayout";
import OrganizationLayout from "./layouts/OrganizationLayout";
import Home from "./pages/Public/Home";
import Header from "./components/Header"; // Import Header component
import Footer from "./components/Footer";

// Applicant Components
import ApplicantDashboard from "./components/Applicant/ApplicantDashboard";
import JobListings from "./components/Applicant/JobListings";
import ApplicantProfile from "./components/Applicant/ApplicantProfile";
import ApplicantLoginPage from "./components/Applicant/ApplicantLoginPage";
import ApplicantSignupPage from "./components/Applicant/ApplicantSignupPage";

// Organization Components
import OrganizationDashboard from "./components/Organization/OrganizationDashboard";
import OrganizationProfile from "./components/Organization/OrganizationProfile";
import CreateJobListing from "./components/Organization/CreateJobListing";
import OrganizationLoginPage from "./components/Organization/OrganizationLoginPage";
import OrganizationSignupPage from "./components/Organization/OrganizationSignupPage";
import ApplicantProfile2 from "./components/Applicant/ApplicantProfile2";
import Applications from "./components/Organization/Applications";

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Render the Header component above all routes */}
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Home />} />

        {/* Applicant Routes (nested under /applicant) */}
        <Route path="/applicant" element={<ApplicantLayout />}>
          <Route path="login" element={<ApplicantLoginPage />} />
          <Route path="signup" element={<ApplicantSignupPage />} />
          <Route path="dashboard" element={<ApplicantDashboard />} />
          <Route path="job-listings" element={<JobListings />} />
          <Route path="profile" element={<ApplicantProfile />} />
          <Route path="profile2" element={<ApplicantProfile2 />} />
        </Route>

        {/* Organization Routes (nested under /organization) */}
        <Route path="/organization" element={<OrganizationLayout />}>
          <Route path="login" element={<OrganizationLoginPage />} />
          <Route path="signup" element={<OrganizationSignupPage />} />
          <Route path="dashboard" element={<OrganizationDashboard />} />
          <Route path="profile" element={<OrganizationProfile />} />
          <Route path="create-job-listing" element={<CreateJobListing />} />
          <Route path="applications" element={<Applications />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// import React, { useState, useContext } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import ApplicantLayout from "./layouts/ApplicantLayout";
// import OrganizationLayout from "./layouts/OrganizationLayout";
// import Home from "./pages/Public/Home";
// import Header from "./components/Header"; // Import Header component
// import Footer from "./components/Footer";

// // Applicant Components
// import ApplicantDashboard from "./components/Applicant/ApplicantDashboard";
// import JobListings from "./components/Applicant/JobListings";
// import ApplicantProfile from "./components/Applicant/ApplicantProfile";

// // Context (optional): Create a context to store login state
// const AuthContext = React.createContext(false);

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state (replace with your authentication logic)

//   const handleLogin = () => {
//     setIsLoggedIn(true); // Update login state after successful login (replace with actual logic)
//   };

//   return (
//     <BrowserRouter>
//       <AuthContext.Provider value={{ isLoggedIn, handleLogin }}>
//         <Header /> {/* Render the Header component above all routes */}
//         <Routes>
//           {/* Public Route */}
//           <Route path="/" element={<Home />} />

//           {/* Applicant Routes */}
//           <Route path="/applicant" element={<ApplicantLayout />}>
//             <Route
//               path="login"
//               element={
//                 isLoggedIn ? (
//                   <Navigate to="/applicant/dashboard" replace /> // Redirect if already logged in
//                 ) : (
//                   // Replace with your actual login form/component
//                   <div className="login-container">
//                     <h2>Applicant Login</h2>
//                     <button onClick={handleLogin}>Sign in with Google</button>
//                   </div>
//                 )
//               }
//             />
//             <Route
//               path="*"
//               element={
//                 isLoggedIn ? (
//                   <>
//                     <Route path="dashboard" element={<ApplicantDashboard />} />
//                     <Route path="job-listings" element={<JobListings />} />
//                     <Route path="profile" element={<ApplicantProfile />} />
//                   </>
//                 ) : (
//                   <Navigate to="/applicant/login" replace />
//                 )
//               }
//             />
//           </Route>

//           {/* Organization Routes (placeholder) */}
//           <Route path="/organization" element={<OrganizationLayout />}>
//             {" "}
//             {/* (optional) */}
//             <Route
//               path="*"
//               element={<div>Organization features coming soon!</div>}
//             />{" "}
//             {/* Placeholder for future organization routes */}
//           </Route>
//         </Routes>
//       </AuthContext.Provider>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
