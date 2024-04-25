import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="h-auto overflow-hidden bg-gradient-to-r from-gray-900 to-black py-8">
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-between text-white">
        <div className="flex-grow md:flex-grow-0 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            Add some information about your company here.
          </p>
        </div>
        <div className="flex-grow md:flex-grow-0 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Add your contact information here.</p>
        </div>
        <div className="flex-grow md:flex-grow-0 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-grow md:flex-grow-0">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <AiFillFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <AiOutlineTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <AiFillInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <AiFillYoutube className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <AiFillLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="flex-grow md:flex-grow-0 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="my-8 border-gray-700" />
      <div className="text-center text-gray-400 py-4">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
