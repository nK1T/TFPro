import { Outlet } from "react-router-dom";
import SidebarOrg from "./SidebarOrg";

function OrganizationLayout() {
  return (
    <div className="organization-layout bg-gray-900 text-white min-h-screen flex">
      <SidebarOrg />
      <div className="flex-1">
        <header className="py-4 px-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold">Job Portal - Organization</h1>
          {/* Add additional header content (e.g., company logo) */}
        </header>
        <main className="px-6 py-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default OrganizationLayout;
