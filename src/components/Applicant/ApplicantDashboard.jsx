import { useState } from "react";
import { MdMenu } from "react-icons/md";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false); // Menu state

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="bg-gray-800 text-white min-h-screen flex flex-col relative rounded-xl">
        {/* Welcome Section */}
        <h1 className="text-4xl font-bold mb-4 text-blue-400 text-center p-5">
          Welcome, <span className="text-gray-200">Shivanshu Chobey</span>
          {/* Menu Button */}
          <MdMenu
            className="text-white text-3xl absolute right-4 top-5 cursor-pointer"
            onClick={handleMenuClick}
          />
        </h1>

        {/* Job Applications and Saved Jobs Section */}
        <div className="flex justify-between w-full mb-4 p-3">
          <div className="bg-gray-700 shadow-lg rounded-lg p-4 w-1/2 mr-2">
            <h2 className="text-2xl tex font-bold mb-2 text-green-400">
              Job Applications
            </h2>
            <ul className="list-disc pl-4">
              <li className="text-lg">
                Software Engineer at Acme Inc. (Submitted on 2024-04-23) -
                Pending
              </li>
              <li className="text-lg">
                Front-end Developer at StartUp XYZ (Submitted on 2024-04-20) -
                Rejected
              </li>
            </ul>
          </div>
          <div className="bg-gray-700 shadow-lg rounded-lg p-4 w-1/2 ml-2">
            <h2 className="text-2xl font-bold mb-2 text-green-400">
              Saved Jobs
            </h2>
            <ul className="list-disc pl-4">
              <li className="text-lg">Full Stack Developer at Tech Company</li>
              <li className="text-lg">UI/UX Designer at Design Agency</li>
            </ul>
          </div>

          {/* Menu Options */}
          {showMenu && (
            <div className="absolute top-16 right-4 w-48 shadow-lg rounded-lg bg-white z-50">
              <ul className="list-none p-2 text-black cursor-pointer">
                <li className="hover:bg-gray-100 px-2 py-1">Edit Profile</li>
                <li className="hover:bg-gray-100 px-2 py-1">Change Password</li>
                <li className="hover:bg-gray-100 px-2 py-1">Logout</li>
              </ul>
            </div>
          )}
        </div>

        {/* Applications and Interviews Section */}
        <div className="bg-gray-900 text-white flex justify-center items-center py-8">
          <div className="max-w-6xl grid grid-cols-2 gap-4">
            <div className="bg-gray-800 shadow-lg rounded-lg p-20">
              <h2 className="text-2xl font-bold mb-2 text-green-400">
                Recent Applications
              </h2>
              <ul>
                <li className="border-b border-gray-700 py-2">Application 1</li>
                <li className="border-b border-gray-700 py-2">Application 2</li>
                <li className="border-b border-gray-700 py-2">Application 3</li>
                <li className="border-b border-gray-700 py-2">Application 4</li>
              </ul>
            </div>
            <div className="bg-gray-800 shadow-lg rounded-lg p-20">
              <h2 className="text-2xl font-bold mb-2 text-green-400">
                Upcoming Interviews
              </h2>
              <ul>
                <li className="border-b border-gray-700 py-2">Interview 1</li>
                <li className="border-b border-gray-700 py-2">Interview 2</li>
                <li className="border-b border-gray-700 py-2">Interview 3</li>
                <li className="border-b border-gray-700 py-2">Interview 4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
