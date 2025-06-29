import React from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const Education = () => {
  const coursework = [
    { name: "Data Structures", color: "green-700" },
    { name: "Algorithms", color: "blue-700" },
    { name: "Database Systems", color: "purple-700" },
    { name: "Software Engineering", color: "yellow-600" },
    { name: "Web Development", color: "cyan-700" },
    { name: "Machine Learning", color: "pink-700" },
  ];

  return (
    <section className="min-h-content flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20">
      <h1 className="text-4xl font-bold mb-10 text-center">
        <span className="text-blue-400">Education</span>
        <div className="w-24 h-1 bg-green-400 mt-2 mx-auto"></div>
      </h1>

      <div className="bg-[#0f172a] rounded-xl p-8 shadow-md w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-400 rounded p-1">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h2 className="text-xl font-semibold">
              Bachelor of Science in Computer Science
            </h2>
          </div>
          <div className="flex items-center gap-2 border border-green-700 bg-green-700/20 px-3 py-1 rounded-full text-sm">
            <Calendar size={16} />
            2019 - 2023
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4 text-gray-400">
          <MapPin size={16} />
          <span>University of Technology</span>
        </div>

        <p className="mb-4 text-gray-300">
          Graduated with honors, focusing on software engineering, data
          structures, algorithms, and web development. Completed capstone
          project on machine learning applications in web development.
        </p>

        <div>
          <h3 className="text-green-400 font-semibold mb-2">
            Relevant Coursework:
          </h3>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span
                key={course.name}
                className={`px-3 py-1 border border-${course.color} bg-${course.color}/20 rounded-full text-sm`}
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
