import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import desired icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
          {/* Section 1: Ismail Nayef Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-green-500 p-2 rounded-lg mr-3">
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
            <p className="text-gray-400 leading-relaxed mb-6">
              Passionate full-stack developer creating innovative web solutions
              with modern technologies and clean code practices.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-3 border border-gray-600 rounded-md hover:border-green-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl text-gray-400 hover:text-green-500" />
              </a>
              <a
                href="#"
                className="p-3 border border-gray-600 rounded-md hover:border-green-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl text-gray-400 hover:text-green-500" />
              </a>
              <a
                href="#"
                className="p-3 border border-gray-600 rounded-md hover:border-green-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl text-gray-400 hover:text-green-500" />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Get In Touch */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <p>
                <a
                  href="mailto:johndoe@example.com"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  johndoe@example.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </p>
              <p className="text-gray-400">Available for freelance work</p>
              <div className="flex items-center">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-500 font-medium">
                  Currently available for hire
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Ismail Nayef. All rights reserved.
            Built with ❤️ and lots of ☕
          </p>
          <div className="flex space-x-3">
            <span className="bg-purple-600 text-white px-3 py-1 rounded-md text-xs font-semibold">
              Next.js
            </span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs font-semibold">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
