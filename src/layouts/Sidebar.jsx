import {
  AiFillDashboard,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import {
  MdListAlt,
  MdAssignmentInd,
  MdDescription,
  MdStar,
} from "react-icons/md";

function Sidebar() {
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
    { label: "Profile2", path: "/applicant/profile2", icon: <MdDescription /> },
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
    {
      label: "Logout",
      path: "/",
      icon: <AiOutlineLogout />,
      color: "!text-red-500",
      alert: "Logout successfully!",
    },
  ];

  return (
    <aside className="w-64 bg-black rounded-3xl m-5">
      <div className="py-4 px-6">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Dashboard</h2>
        <ul className="space-y-2">
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.path}
                className={`flex items-center py-2 px-4 text-white hover:text-blue-500 hover:bg-gray-700 hover:scale-110 transition-colors ${
                  link.color || ""
                }`}
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

export default Sidebar;
