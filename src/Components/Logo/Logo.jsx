import React from "react";
import { Link } from "react-router";


const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
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
    </Link>
  );
};

export default Logo;
