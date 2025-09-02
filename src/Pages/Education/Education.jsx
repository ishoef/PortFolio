import React from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const coursework = [
  { name: "Data Structures", color: "green" },
  { name: "Algorithms", color: "blue" },
  { name: "Database Systems", color: "purple" },
  { name: "Software Engineering", color: "yellow" },
  { name: "Web Development", color: "cyan" },
  { name: "Machine Learning", color: "pink" },
];

// Helper to generate Tailwind classes dynamically
const getColorClasses = (color) => {
  const colors = {
    green: "border-green-700 bg-green-700/20 text-green-700",
    blue: "border-blue-700 bg-blue-700/20 text-blue-700",
    purple: "border-purple-700 bg-purple-700/20 text-purple-700",
    yellow: "border-yellow-600 bg-yellow-600/20 text-yellow-600",
    cyan: "border-cyan-700 bg-cyan-700/20 text-cyan-700",
    pink: "border-pink-700 bg-pink-700/20 text-pink-700",
  };
  return colors[color] || "border-gray-500 bg-gray-500/20 text-gray-500";
};

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-0"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 text-center">
        <span className="text-blue-400">Education</span>
        <div className="w-20 sm:w-24 h-1 bg-green-400 mt-2 mx-auto rounded-full"></div>
      </h1>

      {/* Card */}
      <div className="bg-[#0f172a] rounded-xl p-5 sm:p-8 md:p-10 shadow-md w-full max-w-4xl mx-auto">
        {/* Header: Degree & Date */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4 md:gap-0">
          <div className="flex items-center gap-3">
            <div className="bg-green-400 rounded p-1">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Bachelor of Science in Computer Science
            </h2>
          </div>
          <div className="flex items-center gap-2 border border-green-700 bg-green-700/20 px-3 py-1 rounded-full text-sm">
            <Calendar size={16} />
            2019 - 2023
          </div>
        </div>

        {/* University */}
        <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm sm:text-base">
          <MapPin size={16} />
          <span>University of Technology</span>
        </div>

        {/* Description */}
        <p className="mb-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Graduated with honors, focusing on software engineering, data
          structures, algorithms, and web development. Completed capstone
          project on machine learning applications in web development.
        </p>

        {/* Relevant Coursework */}
        <div>
          <h3 className="text-green-400 font-semibold mb-2 text-base sm:text-lg">
            Relevant Coursework:
          </h3>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span
                key={course.name}
                className={`px-3 py-1 rounded-full text-xs sm:text-sm ${getColorClasses(
                  course.color
                )}`}
              >
                {course.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
