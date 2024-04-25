// import React from "react";
import { Outlet } from "react-router-dom";

function OrganizationLayout() {
  return (
    <div className="organization-layout bg-gray-900 text-white min-h-screen">
      <header className="py-4 px-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Job Portal - Organization</h1>
        {/* Add additional header content (e.g., company logo) */}
      </header>
      <nav className="py-4 px-6">
        <ul className="flex space-x-4">
          <li>
            <a href="/organization/dashboard" className="hover:text-blue-500">
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/organization/create-job-listing"
              className="hover:text-blue-500"
            >
              Post Jobs
            </a>
          </li>
          <li>
            <a
              href="/organization/applications"
              className="hover:text-blue-500"
            >
              Applications
            </a>
          </li>
          <li>
            <a href="/organization/profile" className="hover:text-blue-500">
              Company Profile
            </a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <main className="px-6 py-4">
        <Outlet />
      </main>
    </div>
  );
}

export default OrganizationLayout;
