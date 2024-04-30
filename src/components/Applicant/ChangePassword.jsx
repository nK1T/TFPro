import React, { useState } from "react";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState(""); // State for Current Password
  const [newPassword, setNewPassword] = useState(""); // State for New Password
  const [confirmPassword, setConfirmPassword] = useState(""); // State for Confirm Password
  const [success, setSuccess] = useState(false); // State for password change success
  const [error, setError] = useState(null); // State for error message

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent Default Form Submission Behavior

    // Implement your logic for changing password here

    // For demonstration, set success message after 1 second
    setTimeout(() => {
      setSuccess(true);
    }, 1000);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between items-center p-4 rounded-3xl">
      {/* Change Password Form */}
      <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-center">Change Password</h1>

        <div className="flex flex-col space-y-1">
          <label htmlFor="currentPassword" className="text-sm font-medium">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="newPassword" className="text-sm font-medium">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#286758] py-2 rounded-lg text-black font-bold hover:bg-slate-600 border-none"
        >
          Change Password
        </button>

        {/* Success Message (Optional) */}
        {success && (
          <p className="text-green-500 text-center mt-2">
            Password changed successfully!
          </p>
        )}

        {/* Error Message (Optional) */}
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </form>
    </div>
  );
}

export default ChangePassword;
