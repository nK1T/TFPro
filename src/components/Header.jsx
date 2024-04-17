// import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white px-4 py-4 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-2xl font-bold text-white">TALENTFINER Pro</h1>
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link to="/jobs" className="hover:text-green-500 text-white">
          Jobs
        </Link>
        <Link to="/courses" className="hover:text-green-500 text-white">
          Courses
        </Link>
        <Link to="/services" className="hover:text-green-500 text-white">
          Services
        </Link>
        <Link to="/about" className="hover:text-green-500 text-white">
          About Us
        </Link>
      </nav>
      <div className="flex items-center space-x-2">
        <Link
          to="/login"
          className="bg-green-500 hover:bg-green-600 hover:text-white text-white px-4 py-2 rounded-full font-bold"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-transparent border border-green-500 text-white hover:bg-green-500 hover:text-white px-4 py-2 rounded-full font-bold"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Header;
