// // import React from "react";
// import { useHistory } from "react-router-dom";
// import { useOAuth } from "react-oauth";

// const ApplicantLoginPage = () => {
//   const history = useHistory();
//   const { initiateOAuth } = useOAuth();

//   const handleLogin = async () => {
//     try {
//       const accessToken = await initiateOAuth("applicant");
//       // Store accessToken in localStorage or sessionStorage
//       // Redirect to applicant dashboard or another page
//       history.push("/applicant/dashboard");
//     } catch (error) {
//       console.error("OAuth login error:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Applicant Login</h2>
//       <button onClick={handleLogin}>Login with OAuth</button>
//     </div>
//   );
// };

// export default ApplicantLoginPage;

const ApplicantLoginPage = () => {
  return (
    <div>ApplicantLoginPage</div>
  )
}

export default ApplicantLoginPage