import { Link } from "react-router-dom";
import HeaderIMG from "../assets/HeaderIMG.png";

function Header() {
  return (
    <header className="bg-emerald-100 text-black px-4 flex justify-between items-center">
      <Link to="/">
        {/* <h1 className="text-2xl font-bold text-white">TALENTFINER Pro</h1> */}
        <img
          src={HeaderIMG}
          alt="Header Image"
          style={{ width: "100px", height: "auto" }}
        />
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link
          to="/jobs"
          className="hover:text-green-500 text-black font-bold text-xl"
        >
          Jobs
        </Link>
        <Link
          to="/courses"
          className="hover:text-green-500 text-black font-bold text-xl"
        >
          Courses
        </Link>
        <Link
          to="/services"
          className="hover:text-green-500 text-black font-bold text-xl"
        >
          Services
        </Link>
        <Link
          to="/about"
          className="hover:text-green-500 text-black font-bold text-xl"
        >
          About Us
        </Link>
      </nav>
      <div className="flex items-center space-x-2">
        <Link
          to="/login"
          className="bg-[#286758] hover:bg-white hover:text-black text-white text-xl px-4 py-2 rounded-full font-bold"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-transparent border border-green-500 text-black text-xl hover:bg-[#286758] hover:text-white px-4 py-2 rounded-full font-bold"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Header;
