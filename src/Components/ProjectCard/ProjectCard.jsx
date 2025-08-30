import { ExternalLink, Code2 } from "lucide-react";

export default function ProjectCard() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl p-6 shadow-lg border border-gray-800 w-full max-w-3xl mx-auto">
      {/* Preview Image */}
      <div className="rounded-xl overflow-hidden shadow-md mb-6">
        <img
          src="https://img.freepik.com/premium-vector/ecommerce-project-banner-landing-page-template-website_541075-1532.jpg"
          alt="Project Preview"
          className="w-full object-cover"
        />
      </div>

      {/* Project Info */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-3">
          Secure Nest
          <span className="bg-emerald-700 text-white px-3 py-1 rounded-full text-sm">
            Full Stack
          </span>
        </h2>
        <p className="text-gray-300 mt-2">
          A secure, responsive insurance management platform with Firebase
          authentication, role-based dashboards, policy and claim management,
          blog system, and real-time data integration.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          "React",
          "Axios",
          "Tailwind CSS",
          "Node.js",
          "MongoDB",
          "Express",
          "Mongoose",
        ].map((tech, idx) => (
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
          href="#"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-4 py-2 rounded-lg shadow-md transition"
        >
          <ExternalLink size={18} />
          Live Demo
        </a>
        <a
          href="Project-details"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium px-4 py-2 rounded-lg shadow-md transition"
        >
          <Code2 size={18} />
          View Details
        </a>
      </div>
    </div>
  );
}
