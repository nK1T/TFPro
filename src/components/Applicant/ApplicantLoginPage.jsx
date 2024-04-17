// ApplicantLoginPage.jsx

// import React from "react";
import { Link } from "react-router-dom";

function ApplicantLoginPage() {
  // Function to handle login with OAuth
  const handleLogin = () => {
    // Add logic here to handle login with OAuth for applicant
    console.log("Login with OAuth for applicant");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Applicant Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Add your login form fields here */}
          </div>

          <div>
            <button
              onClick={handleLogin}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login with OAuth
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          Dont have an account?{" "}
          <Link
            to="/applicant/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Signup here
          </Link>
          .
        </p>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or login as an organization{" "}
          <Link
            to="/organization/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default ApplicantLoginPage;
