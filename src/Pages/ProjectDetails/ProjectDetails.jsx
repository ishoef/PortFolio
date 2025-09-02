import axios from "axios";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Lock,
  Newspaper,
  SunMoon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

export default function ProjectDetails() {
  // gets current route
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top-left
  }, [pathname]); // runs whenever route changes

  const { id } = useParams();
  console.log(id);
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    axios
      .get("/projects.json")
      .then((res) => setProjectsData(res.data))
      .catch((error) => console.log("Projects Data", error));
  }, []);

  const projectDetail = projectsData.find((pjct) => pjct.id === id);
  console.log(projectDetail);

  const {
    title,
    subtitle,
    type,
    description,
    previewImage,
    liveUrl,
    frontendUrl,
    backendUrl,
    features,
    tecknologys,
    techStack,
    projectLinks,
  } = projectDetail || {};

  return (
    <div className="pt-32 w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="text-emerald-400 font-semibold text-sm">
            FULL STACK
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">
            {title || "No Title"} <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {subtitle}
            </span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            {description || "No Description"}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href={liveUrl}
              target="_blanck"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg font-medium shadow-md hover:opacity-90 transition"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
            <a
              href={frontendUrl}
              target="_blanck"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 px-5 py-2 rounded-lg font-medium shadow-md transition"
            >
              <Github size={18} /> Frontend Code
            </a>
            <a
              href={backendUrl}
              target="_blanck"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 px-5 py-2 rounded-lg font-medium shadow-md transition"
            >
              <Github size={18} /> Backend Code
            </a>
          </div>
        </div>

        {/* Right Preview Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={previewImage}
            alt="Project Preview"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Key Features */}
      <div className="max-w-7xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-emerald-400">Key Features</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Newspaper className="text-purple-400" />,
              text: "Article Publishing – Create, edit, and manage your own articles with tags and categories",
            },
            {
              icon: <Lock className="text-emerald-400" />,
              text: "Secure Authentication – Email/password & Google OAuth login/register",
            },
            {
              icon: <SunMoon className="text-yellow-400" />,
              text: "Dark Mode – Seamless light/dark theme toggle",
            },
            {
              icon: <CheckCircle2 className="text-pink-400" />,
              text: "Personal Dashboard – Track your articles, likes, and comments",
            },
            {
              icon: <CheckCircle2 className="text-sky-400" />,
              text: "Explore & Search – Browse featured articles, categories, and top contributors",
            },
            {
              icon: <CheckCircle2 className="text-green-400" />,
              text: "Comments & Likes – Engage with articles through comments and likes",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg p-4 flex items-start gap-3 shadow-md hover:bg-gray-700 transition"
            >
              {feature.icon}
              <p className="text-gray-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-16 grid lg:grid-cols-2 gap-12">
        {/* Tech Stack */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4">Technology Stack</h3>
          <div className="mb-4">
            <h4 className="font-semibold text-purple-400">Frontend</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "React",
                "Tailwind CSS",
                "Axios",
                "React Router",
                "Content API",
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-400">Backend</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "Node.js",
                "Express",
                "MongoDB",
                "Mongoose",
                "JWT",
                "REST API",
                "Bcrypt",
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Links */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold mb-4">Project Links</h3>
          <div className="flex flex-col gap-3">
            <a
              href={liveUrl}
              target="_blanck"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium px-5 py-3 rounded-lg shadow-md hover:opacity-90 transition"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
            <a
              href={frontendUrl}
              target="_blanck"
              className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium px-5 py-3 rounded-lg shadow-md transition"
            >
              <Github size={18} /> Frontend Code
            </a>
            <a
              href={backendUrl}
              target="_blanck"
              className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium px-5 py-3 rounded-lg shadow-md transition"
            >
              <Github size={18} /> Backend Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
