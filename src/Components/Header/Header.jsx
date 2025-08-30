import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import Logo from "../Logo/Logo";
import { Link } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="bg-gray-900 fixed top-0 left-0 z-50 w-full shadow-md border-b border-gray-700">
      <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto flex justify-between items-center py-4">
        {/* Logo Section */}
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-[#cbd5e1] hover:text-[#3b82f6] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hire Me Button (Desktop Only) */}
        <div className="hidden lg:block">
          <Link
            to="hireme"
            className="border-none bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] hover:bg-gradient-to-l transition-all duration-300 ease-in-out text-white font-bold px-4 py-2 rounded"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? (
              <IoMdClose className="text-3xl" />
            ) : (
              <TiThMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-900 shadow-md border-b border-gray-700 transform transition-all duration-300 ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="block text-[#cbd5e1] hover:text-[#3b82f6] transition-colors"
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {link.label}
            </a>
          ))}

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="mt-4 w-10/12 text-center bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] text-white font-bold px-4 py-2 rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
