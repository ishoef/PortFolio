import React, { useState } from "react";
import { Link } from "react-router"; // You may want to change this to 'react-router-dom'
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#020617]">
      <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="bg-green-500 p-1 rounded-lg mr-3">
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-[#cbd5e1] hover:text-[#3b82f6]">
            About
          </a>
          <a href="#Skills" className="text-[#cbd5e1] hover:text-[#3b82f6]">
            Skills
          </a>
          <a href="#education" className="text-[#cbd5e1] hover:text-[#3b82f6]">
            Education
          </a>
          <a href="#experience" className="text-[#cbd5e1] hover:text-[#3b82f6]">
            Experience
          </a>
          <a href="#projects" className="text-[#cbd5e1] hover:text-[#3b82f6]">
            Projects
          </a>
          <a href="#contact" className="text-[#cbd5e1] hover:text-[#3b82f6]">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <TiThMenu className="text-2xl" />
          </button>
        </div>

        {/* Hire Me Button */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] text-white font-bold px-4 py-2 rounded">
            Hire Me
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto md:hidden pb-4 space-y-2">
          <a
            href="#about"
            className="block text-[#cbd5e1] hover:text-[#3b82f6]"
          >
            About
          </a>
          <a
            href="#Skills"
            className="block text-[#cbd5e1] hover:text-[#3b82f6]"
          >
            Skills
          </a>
          <a
            href="#education"
            className="block text-[#cbd5e1] hover:text-[#3b82f6]"
          >
            Education
          </a>
          <a
            href="#experience"
            className="block text-[#cbd5e1] hover:text-[#3b82f6]"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="block text-[#cbd5e1] hover:text-[#3b82f6]"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-[#cbd5e1] hover:text-[#3b82f6]"
          >
            Contact
          </a>
          <button className="w-full mt-2 bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] text-white font-bold px-4 py-2 rounded">
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
