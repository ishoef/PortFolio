// File: Skills.jsx

import React from "react";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "MongoDB", level: 65 },
  { name: "Express js", level: 60 },
];

const frontend = [
  "React",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
];
const backend = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
];
const tools = ["Git", "Vercel", "Figma", "VS Code", "Netlify"];

const Skills = () => {
  return (
    <section id="Skills" className="min-h-content bg-[#0f172a] py-20">
      <div className="w-9/12 mx-auto flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-10">
        <h1 className="text-4xl font-bold mb-10 text-center">
          <span className="text-cyan-400">Skills</span> &{" "}
          <span className="text-blue-400">Technologies</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          {/* Technical Skills */}
          <div className="bg-[#0f172a] rounded-xl p-6 shadow-md">
            <h2 className="text-green-400 text-xl font-semibold mb-6">
              Technical Skills
            </h2>
            {skills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#0f172a] rounded-xl p-6 shadow-md">
              <h2 className="text-blue-400 text-xl font-semibold mb-4">
                Frontend
              </h2>
              <div className="flex flex-wrap gap-2">
                {frontend.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border border-blue-700 bg-blue-700/20 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#0f172a] rounded-xl p-6 shadow-md">
              <h2 className="text-green-400 text-xl font-semibold mb-4">
                Backend
              </h2>
              <div className="flex flex-wrap gap-2">
                {backend.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border border-green-700 bg-green-700/10 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#0f172a] rounded-xl p-6 shadow-md">
              <h2 className="text-purple-400 text-xl font-semibold mb-4">
                Tools & Others
              </h2>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 border border-purple-700 bg-purple-700/10 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
