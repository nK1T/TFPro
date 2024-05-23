import React from "react";

const EditProfileForm = ({
  contact,
  summary,
  setContact,
  setSummary,
  handleSaveProfile,
}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-400">
          Edit Profile
        </h2>
        <form onSubmit={handleSaveProfile}>
          <label
            htmlFor="contact"
            className="text-lg font-medium mb-2 block text-white"
          >
            Contact:
          </label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="py-1 px-2 rounded-md mb-4 w-full bg-gray-800 text-white"
          />
          <label
            htmlFor="summary"
            className="text-lg font-medium mb-2 block text-white"
          >
            Summary:
          </label>
          <textarea
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="py-1 px-2 rounded-md mb-4 w-full h-24 bg-gray-800 text-white"
          />
          <div className="flex justify-end">
            <button
              onClick={handleSaveProfile}
              className="bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
