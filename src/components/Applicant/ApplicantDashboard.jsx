import { MdMenu } from "react-icons/md";
import { useState } from "react";

function Dashboard() {
  const [showMenu, setShowMenu] = useState(false); // State for Menu visibility

  const handleMenuClick = () => setShowMenu(!showMenu); // Toggle Menu visibility

  // Replace these with actual data when available
  const applicationsSubmitted = 5; // Dummy value
  const interviewsScheduled = 2; // Dummy value
  const offersReceived = 1; // Dummy value

  return (
    <div className="bg-black text-white min-h-screen flex flex-col relative rounded-3xl">
      {/* Welcome Section with Flexbox for Alignment */}
      <section className="flex items-center justify-between p-5">
        <h1 className="text-4xl font-bold text-blue-400 text-center">
          Welcome, <span className="text-gray-200">Shivanshu Chobey</span>
        </h1>
        {/* Menu Button */}
        <MdMenu
          className="text-white text-3xl cursor-pointer"
          onClick={handleMenuClick}
        />
      </section>

      {/* Progress Tracker Section */}
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-green-400">
          Progress Tracker
        </h2>

        {/* Progress Bars */}
        <div className="mb-4">
          <p className="text-base mb-1">Applications Submitted</p>
          <div className="bg-gray-600 h-3 rounded-full">
            <div
              className="bg-green-400 h-3 rounded-full"
              style={{ width: `${applicationsSubmitted * 20}%` }}
            ></div>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-base mb-1">Interviews Scheduled</p>
          <div className="bg-gray-600 h-3 rounded-full">
            <div
              className="bg-blue-400 h-3 rounded-full"
              style={{ width: `${interviewsScheduled * 20}%` }}
            ></div>
          </div>
        </div>
        <div>
          <p className="text-base mb-1">Offers Received</p>
          <div className="bg-gray-600 h-3 rounded-full">
            <div
              className="bg-yellow-400 h-3 rounded-full"
              style={{ width: `${offersReceived * 20}%` }}
            ></div>
          </div>
        </div>
      </section>

      {/* Menu Options (Conditional Rendering) */}
      {showMenu && (
        <div
          className="absolute top-16 right-4 w-48 shadow-lg rounded-lg bg-slate-900 text-white z-50"
          onClick={() => setShowMenu(false)} // Close Menu on click anywhere
        >
          <ul className="list-none p-2 text-white cursor-pointer">
            <li className="hover:bg-gray-100 px-2 py-1">Edit Profile</li>
            <li className="hover:bg-gray-100 px-2 py-1">Change Password</li>
            <li className="hover:bg-gray-100 px-2 py-1">Logout</li>
          </ul>
        </div>
      )}

      {/* Placeholder Section (Replace with future functionalities) */}
      <section className="bg-black text-white flex justify-center items-center py-8">
        <div className="max-w-6xl text-center">
          <p className="text-xl text-gray-400">
            More functionalities coming soon!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
