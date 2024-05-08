import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import HeaderIMG from "../assets/HeaderIMG.png";

function Header() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <header className="bg-emerald-100 text-black px-4 flex justify-between items-center">
      <Link to="/">
        <img src={HeaderIMG} alt="Header Image" className="w-[50px] h-auto" />
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link
          to="/jobs"
          className="hover:text-[#286758] text-black font-bold text-xl"
        >
          Jobs
        </Link>
        <Link
          to="/courses"
          className="hover:text-[#286758] text-black font-bold text-xl"
        >
          Courses
        </Link>
        <Link
          to="/services"
          className="hover:text-[#286758] text-black font-bold text-xl"
        >
          Services
        </Link>
        <Link
          to="/about"
          className="hover:text-[#286758] text-black font-bold text-xl"
        >
          About Us
        </Link>
      </nav>
      <div className="flex items-center space-x-2">
        {isAuthenticated ? (
          <div className="flex items-center space-x-2">
            <img
              src={user.picture}
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-lg">{user.name}</span>
          </div>
        ) : (
          <>
            {/* <Link
              to="/login"
              className="bg-[#286758] hover:bg-white hover:text-black text-white text-lg px-4 py-1 rounded-full font-bold"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-transparent border border-[#286758] text-black text-lg hover:bg-[#286758] hover:text-white px-4 py-1 rounded-full font-bold"
            >
              Sign Up
            </Link> */}
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
