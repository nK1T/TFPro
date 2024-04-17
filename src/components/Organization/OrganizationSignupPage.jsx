// OrganizationSignupPage.jsx

// import React from "react";
import { Link } from "react-router-dom";

function OrganizationSignupPage() {
  // Function to handle signup with OAuth
  const handleSignup = () => {
    // Add logic here to handle signup with OAuth for organization
    console.log("Signup with OAuth for organization");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Organization Signup
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Add your signup form fields here */}
          </div>

          <div>
            <button
              onClick={handleSignup}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Signup with OAuth
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/organization/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Login here
          </Link>
          .
        </p>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or signup as an applicant{" "}
          <Link
            to="/applicant/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default OrganizationSignupPage;
