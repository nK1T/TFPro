// ApplicantLayout.js

// import React from "react";
import { Outlet } from "react-router-dom";

function ApplicantLayout() {
  return (
    <div className="applicant-layout bg-gray-900 text-white min-h-screen">
      <header className="py-4 px-6 border-b border-gray-800 flex justify-between">
        <h1 className="text-2xl font-bold">Job Portal - Applicant</h1>
        {/* Add additional header content (e.g., user profile link) */}
        <nav className="py-4 px-6">
          <ul className="flex space-x-4">
            <li>
              <a href="/applicant/dashboard" className="hover:text-blue-500">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/applicant/job-listings" className="hover:text-blue-500">
                Job Listings
              </a>
            </li>
            <li>
              <a href="/applicant/Profile" className="hover:text-blue-500">
                Profile
              </a>
            </li>
            <li>
              <a href="/applicant/Profile2" className="hover:text-blue-500">
                Profile2
              </a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </header>

      <main className="px-6 py-4">
        <Outlet />
        {/* Renders child components nested within ApplicantLayout */}
      </main>
    </div>
  );
}

export default ApplicantLayout;
