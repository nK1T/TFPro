import { Link } from "react-router-dom";

function ApplicantSignupPage() {
  // Function to handle signup with OAuth
  const handleSignup = () => {
    // Add logic here to handle signup with OAuth for applicant
    console.log("Signup with OAuth for applicant");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Applicant Signup
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
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Signup with OAuth
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/applicant/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Login here
          </Link>
          .
        </p>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or signup as an organization{" "}
          <Link
            to="/organization/signup"
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

export default ApplicantSignupPage;
