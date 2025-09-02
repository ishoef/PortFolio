import React, { useEffect } from "react";

const ModernLoader = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="flex flex-col items-center">
        {/* Spinning Gradient Circle */}
        <div className="w-20 h-20 border-4 border-teal-400 border-t-transparent border-r-transparent rounded-full animate-spin shadow-lg shadow-teal-500/50"></div>

        {/* Loading Text */}
        <p className="mt-6 text-xl text-teal-400 font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default ModernLoader;
