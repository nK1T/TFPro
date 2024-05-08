import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// Import your components
import Home from "./pages/Public/Home";
import Header from "./components/Header"; // Import Header component
import Footer from "./components/Footer";

import ApplicantLayout from "./layouts/ApplicantLayout";
import OrganizationLayout from "./layouts/OrganizationLayout";

import ApplicantLoginPage from "./components/Applicant/ApplicantLoginPage";
import OrganizationLoginPage from "./components/Organization/OrganizationLoginPage";

// Applicant Components
import ApplicantDashboard from "./components/Applicant/ApplicantDashboard";
import JobListings from "./components/Applicant/JobListings";
import ApplicantProfile from "./components/Applicant/ApplicantProfile";
import ApplicantProfile2 from "./components/Applicant/ApplicantProfile2";
import JobApplications from "./components/Applicant/JobApplications";
import SavedJobs from "./components/Applicant/SavedJobs";
import ChangePassword from "./components/Applicant/ChangePassword";
// import ApplicantSignupPage from "./components/Applicant/ApplicantSignupPage";

// Organization Components
import OrganizationDashboard from "./components/Organization/OrganizationDashboard";
import OrganizationProfile from "./components/Organization/OrganizationProfile";
import CreateJobListing from "./components/Organization/CreateJobListing";
import Applications from "./components/Organization/Applications";
// import OrganizationSignupPage from "./components/Organization/OrganizationSignupPage";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const navigate = useNavigate();

  if (isLoading) {
    // Show loading spinner or message while authentication status is being checked
    return <div>Loading...</div>;
  }

  return (
    <>
      <BrowserRouter>
        {" "}
        {/* Ensure that the App component is wrapped within BrowserRouter */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Public Routes */}
          <Route
            path="/applicant/login"
            element={
              isAuthenticated ? (
                <Navigate to="/applicant/*" />
              ) : (
                <ApplicantLoginPage />
              )
            }
          />
          <Route
            path="/organization/login"
            element={
              isAuthenticated ? (
                <Navigate to="/organization/*" />
              ) : (
                <OrganizationLoginPage />
              )
            }
          />

          {/* Protected Routes */}
          {isAuthenticated && (
            <>
              {/* Applicant Routes (nested under /applicant) */}
              <Route path="/applicant/*" element={<ApplicantLayout />}>
                <Route path="dashboard" element={<ApplicantDashboard />} />
                <Route path="job-listings" element={<JobListings />} />
                <Route path="profile" element={<ApplicantProfile />} />
                <Route path="profile2" element={<ApplicantProfile2 />} />
                <Route path="job-applications" element={<JobApplications />} />
                <Route path="saved-jobs" element={<SavedJobs />} />
                <Route path="change-password" element={<ChangePassword />} />
              </Route>
              {/* Organization Routes (nested under /organization) */}
              <Route path="/organization/*" element={<OrganizationLayout />}>
                <Route path="login" element={<OrganizationLoginPage />} />
                <Route path="dashboard" element={<OrganizationDashboard />} />
                <Route path="profile" element={<OrganizationProfile />} />
                <Route
                  path="create-job-listing"
                  element={<CreateJobListing />}
                />
                <Route path="applications" element={<Applications />} />
              </Route>
            </>
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;








