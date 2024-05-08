import {
  AiFillDashboard,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import {
  MdListAlt,
  MdAssignmentInd,
  MdStar,
} from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for programmatic navigation
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 for logout functionality

function Sidebar() {
  const [selectedPath, setSelectedPath] = useState(window.location.pathname); // Initial selected path based on current URL

  const { logout } = useAuth0(); // Destructure logout function from useAuth0 hook

  const navigationLinks = [
    {
      label: "Home",
      path: "/applicant/dashboard",
      icon: <AiFillDashboard />,
    },
    {
      label: "Job Listings",
      path: "/applicant/job-listings",
      icon: <MdListAlt />,
    },
    { label: "Profile", path: "/applicant/profile", icon: <AiOutlineUser /> },
    // {
    //   label: "Profile2",
    //   path: "/applicant/profile2",
    //   icon: <MdDescription />,
    // },
    {
      label: "Job Applications",
      path: "/applicant/job-applications",
      icon: <MdAssignmentInd />,
    },
    { label: "Saved Jobs", path: "/applicant/saved-jobs", icon: <MdStar /> },
    {
      label: "Edit Profile",
      path: "/applicant/profile",
      icon: <AiOutlineUser />,
    },
    {
      label: "Change Password",
      path: "/applicant/change-password",
      icon: <AiOutlineUser />,
    },
    // {
    //   label: "Logout",
    //   path: "/",
    //   icon: <AiOutlineLogout />,
    //   color: "red",
    //   alert: "Logout successfully!",
    // },
  ];

  const navigate = useNavigate(); // Utilize useNavigate for programmatic navigation

  const handleClick = (path) => {
    setSelectedPath(path);
    // Programmatic navigation using useNavigate
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    // Additional logic if needed
  };

  return (
    <aside className="w-64 bg-black rounded-3xl m-5 h-full">
      <div className="py-4 px-6">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Dashboard</h2>
        <ul className="space-y-2">
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <a
                href="#"
                onClick={() => handleClick(link.path)}
                className={`flex items-center py-2 px-4 text-white hover:text-blue-500 hover:bg-gray-700 hover:scale-110 transition-colors ${
                  selectedPath === link.path && "bg-gray-800 !text-green-400"
                }`}
                style={{ color: link.color }}
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                <span>{link.label}</span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              onClick={handleLogout}
              className="flex items-center py-2 px-4 text-white hover:text-blue-500 hover:bg-gray-700 hover:scale-110 transition-colors"
              style={{ color: "red" }}
            >
              <AiOutlineLogout />
              <span className="ml-2">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
