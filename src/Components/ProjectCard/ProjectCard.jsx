import { ExternalLink, Code2 } from "lucide-react";
import { Link } from "react-router";

export default function ProjectCard({ project }) {
  const {
    id,
    subtitle,
    type,
    description,
    previewImage,
    tecknologys,
    liveUrl,
  } = project || {};

  const words = description?.split(" ") || [];
  const shortDescription =
    words.length > 20 ? words.slice(0, 20).join(" ") + "..." : description;

  return (
    <div
      className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl p-6 shadow-lg border border-gray-800 
      w-full max-w-3xl mx-auto flex flex-col" // 🔹 flex layout
    >
      {/* Preview Image */}
      <div className="rounded-xl overflow-hidden shadow-md mb-6">
        <img
          src={previewImage}
          alt="Project Preview"
          className="w-full object-cover"
        />
      </div>

      {/* Project Info */}
      <div>
        <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-3">
          {subtitle}
          <span className="bg-emerald-700 text-white px-3 py-1 rounded-full text-sm">
            {type || "No Type"}
          </span>
        </h2>
        {/* 🔹 Description with See More */}
        <p className="text-gray-300 mt-2">
          {shortDescription}
          {words.length > 20 && (
            <Link
              to={`/Project-details/${id}`}
              className="cursor-pointer text-emerald-400 ml-2 hover:underline"
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
              className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full text-sm"
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
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-4 py-2 rounded-lg shadow-md transition"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
          <a
            href={`Projects/${id}`}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium px-4 py-2 rounded-lg shadow-md transition"
          >
            <Code2 size={18} />
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
