import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AiFillDashboard,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import {
  MdAssignmentInd,
  MdDescription,
} from "react-icons/md";

function SidebarOrg() {
  const [selectedPath, setSelectedPath] = useState(window.location.pathname);
  const navigate = useNavigate();

  const organizationNavigationLinks = [
    {
      label: "Home",
      path: "/organization/dashboard",
      icon: <AiFillDashboard />,
    },
    {
      label: "Profile",
      path: "/organization/profile",
      icon: <AiOutlineUser />,
    },
    {
      label: "Create Job Listing",
      path: "/organization/create-job-listing",
      icon: <MdDescription />,
    },
    {
      label: "Applications",
      path: "/organization/applications",
      icon: <MdAssignmentInd />,
    },
    {
      label: "Logout",
      path: "/",
      icon: <AiOutlineLogout />,
      color: "red",
    },
  ];

  const handleClick = (path) => {
    setSelectedPath(path);
    navigate(path);
  };

  return (
    <aside className="w-64 bg-black rounded-3xl m-5 h-full">
      <div className="py-4 px-6">
        <h2 className="text-2xl font-bold text-green-400 mb-4">
          Organization Dashboard
        </h2>
        <ul className="space-y-2">
          {organizationNavigationLinks.map((link) => (
            <li key={link.label}>
              <a
                href="#"
                onClick={() => handleClick(link.path)}
                className={`flex items-center py-2 px-4 text-white hover:text-blue-500 hover:bg-gray-700 hover:scale-110 transition-colors ${
                  selectedPath === link.path && "bg-gray-800 text-green-400"
                }`}
                style={{ color: link.label === "Logout" ? "red" : null }}
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default SidebarOrg;
