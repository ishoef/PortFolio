import { ExternalLink, Code2 } from "lucide-react";
import { Link } from "react-router";

export default function ProjectCard({ project }) {
  const {
    id,
    subtitle,
    type,
    description,
    previewImage,
    tecknologys = [],
    liveUrl,
  } = project || {};

  const words = description?.split(" ") || [];
  const shortDescription =
    words.length > 20 ? words.slice(0, 20).join(" ") + "..." : description;

  return (
    <div
      className="bg-gradient-to-b from-[#0a0f1c] to-[#111827] 
      rounded-2xl p-6 shadow-xl border border-gray-800 
      w-full max-w-3xl mx-auto flex flex-col text-gray-200"
    >
      {/* 🔹 Preview Image */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-6 border border-gray-700">
        <img
          src={previewImage}
          alt="Project Preview"
          className="w-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* 🔹 Project Info */}
      <div>
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center gap-3">
          {subtitle}
          <span className="bg-gray-800/80 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-gray-700">
            {type || "No Type"}
          </span>
        </h2>

        <p className="text-gray-400 mt-3 leading-relaxed">
          {shortDescription}
          {words.length > 20 && (
            <Link
              to={`/Projects/${id}`}
              className="cursor-pointer text-blue-400 ml-2 hover:text-blue-300 hover:underline transition-colors"
            >
              See More
            </Link>
          )}
        </p>
      </div>

      {/* 🔹 Bottom Section (Tech + Buttons) */}
      <div className="mt-auto">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 my-6">
          {tecknologys.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-900 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between border-t border-gray-700 pt-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white hover:text-blue-200 font-medium px-4 py-2 rounded-lg border border-gray-700 shadow-md transition-all duration-300"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
          <a
            href={`/Projects/${id}`}
            className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white font-medium px-4 py-2 rounded-lg border border-gray-700 shadow-md transition-all duration-300"
          >
            <Code2 size={18} />
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
