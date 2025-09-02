import React, { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import Logo from "../Logo/Logo";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll spy using getBoundingClientRect
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      const buffer = 100; // adjust when the section is considered "active"

      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top - buffer <= 0) {
            current = link.id;
          }
        }
      });

      setActiveLink(current);
    };

    handleScroll(); // set on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname]);

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 fixed top-0 left-0 z-50 w-full shadow-md border-b border-gray-700">
      <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto flex justify-between items-center py-4">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-base font-medium transition-all duration-300 relative group ${
                activeLink === link.id
                  ? "text-teal-400"
                  : "text-gray-200 hover:text-teal-400"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 w-full h-[2px] bg-teal-400 transform transition-transform duration-300 ${
                  activeLink === link.id
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            className="ml-2 border-none bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-500 hover:to-teal-500 transition-all duration-300 text-white font-bold px-4 py-2 rounded-lg shadow"
          >
            Hire Me
          </button>
        </nav>

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

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-900 shadow-md border-b border-gray-700 transition-all duration-300 ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-5 py-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-base font-medium ${
                activeLink === link.id
                  ? "text-teal-400"
                  : "text-gray-200 hover:text-teal-400"
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            className="mt-2 w-10/12 text-center bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow"
          >
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
