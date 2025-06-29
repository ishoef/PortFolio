import React from "react";
import { Link, NavLink } from "react-router";
import { TiThMenu } from "react-icons/ti";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className=" bg-[#020617]">
      <div className="w-9/12 mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <div className="bg-green-500 p-1 rounded-lg mr-3">
            {/* You can replace this with an actual logo image if preferred */}
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white">Ismail Nayef</h3>
        </div>
        <nav className="flex space-x-6">
          <Link to="/about" className="text-[#cbd5e1] hover:text-[#3b82f6]">
            About
          </Link>
          <Link href="#Skills" className="text-[#cbd5e1] hover:text-[#3b82f6]">
            Skills
          </Link>
          <Link to="/education" className="text-[#cbd5e1] hover:text-[#3b82f6]">
            Education
          </Link>
          <Link
            to="/experience"
            className="text-[#cbd5e1] hover:text-[#3b82f6]"
          >
            Experience
          </Link>
          <Link to="/projects" className="text-[#cbd5e1] hover:text-[#3b82f6]">
            Projects
          </Link>
          <Link to="/contact" className="text-[#cbd5e1] hover:text-[#3b82f6]">
            Contact
          </Link>
        </nav>
        <button className="bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] text-white font-bold px-4 py-2 rounded">
          Hire Me
        </button>
      </div>
    </header>
  );
};

export default Header;
