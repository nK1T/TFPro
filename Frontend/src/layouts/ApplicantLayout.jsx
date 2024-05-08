import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 for logout functionality

function ApplicantLayout() {
    const { user, isAuthenticated } = useAuth0();

  return (
    <div className="applicant-layout bg-gray-900 text-white min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 px-0 py-0">
        <header className="py-4 px-6 border-b border-gray-800 flex justify-between">
          <h1 className="text-2xl font-bold">
            Job Portal - Applicant
          </h1>
          {/* Add additional header content (e.g., user profile link) */}
        </header>

        {/* Render child components */}
        <Outlet />
      </main>
    </div>
  );
}

export default ApplicantLayout;
