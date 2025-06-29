import React from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    date: "2023 - Present",
    dateColor: "bg-blue-700",
    iconColor: "text-purple-400",
    points: [
      "Developed and maintained responsive web applications using React and Next.js",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Optimized application performance, reducing load times by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Web Development Intern",
    company: "StartUp Hub",
    date: "2022 - 2023",
    dateColor: "bg-green-700",
    iconColor: "text-cyan-400",
    points: [
      "Built RESTful APIs using Node.js and Express.js",
      "Implemented user authentication and authorization systems",
      "Worked with MongoDB for database design and optimization",
      "Participated in agile development processes and daily standups",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-content flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-20"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">
        <span className="text-blue-400">Experience</span>
        <div className="w-24 h-1 bg-green-400 mt-2 mx-auto"></div>
      </h1>

      <div className="flex flex-col gap-6 w-full max-w-4xl">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-[#0f172a] rounded-xl p-6 shadow-md">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <Briefcase className={exp.iconColor} size={22} />
                <h2 className="text-lg font-semibold">{exp.title}</h2>
              </div>
              <div
                className={`flex items-center gap-2 ${exp.dateColor} px-3 py-1 rounded-full text-sm`}
              >
                <Calendar size={16} />
                {exp.date}
              </div>
            </div>
            <p className="text-gray-400 mb-4">{exp.company}</p>
            <ul className="space-y-2">
              {exp.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 bg-gradient-to-r from-green-400 to-green-600"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
