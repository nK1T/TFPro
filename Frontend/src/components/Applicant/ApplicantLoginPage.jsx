import { useAuth0 } from "@auth0/auth0-react";

const ApplicantLoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center bg-dark-green py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-slate-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-[#286758] mb-6">
          Applicant Login
        </h2>
        <button
          onClick={() => loginWithRedirect()}
          className="w-full border-none flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-gray-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Login with Auth0
        </button>
      </div>
    </div>
  );
};

export default ApplicantLoginPage;
