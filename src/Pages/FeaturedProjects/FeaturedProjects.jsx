import React from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/images/ecommerce.jpg", // replace with actual image path
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    tags: ["Next.js", "Socket.io", "PostgreSQL"],
    image: "/images/task.jpg",
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather application with data visualization",
    tags: ["React", "Chart.js", "Weather API"],
    image: "/images/weather.jpg",
  },
];

const tagColors = {
  React: "bg-green-600",
  "Node.js": "bg-blue-600",
  MongoDB: "bg-purple-600",
  Stripe: "bg-yellow-500",
  "Next.js": "bg-green-500",
  "Socket.io": "bg-blue-500",
  PostgreSQL: "bg-purple-700",
  "Chart.js": "bg-blue-400",
  "Weather API": "bg-purple-500",
};

const FeaturedProjects = () => {
  return (
    <section id="projects" className="bg-[#0e1c2f] text-white py-16">
      <div className="w-11/12 md:w-8/12 mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-2">
          Featured Projects
        </h2>
        <div className="h-1 w-24 bg-green-400 mx-auto mb-12" />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            // <div
            //   key={idx}
            //   className="bg-[#121f36] rounded-xl overflow-hidden shadow-lg"
            // >
            //   <img
            //     src={project.image}
            //     alt={project.title}
            //     className="w-full h-48 object-cover"
            //   />
            //   <div className="p-5">
            //     <h3 className="text-xl font-semibold text-green-400">
            //       {project.title}
            //     </h3>
            //     <p className="text-sm mt-2">{project.description}</p>
            //     <div className="flex flex-wrap gap-2 mt-4">
            //       {project.tags.map((tag) => (
            //         <span
            //           key={tag}
            //           className={`text-xs text-white px-2 py-1 rounded-full ${
            //             tagColors[tag] || "bg-gray-600"
            //           }`}
            //         >
            //           {tag}
            //         </span>
            //       ))}
            //     </div>
            //     <a
            //       href="#"
            //       className="w-full flex items-center justify-center mt-6 border border-green-400 bg-green-500/10 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300"
            //     >
            //       View Details
            //     </a>
            //   </div>
            // </div>

            <ProjectCard />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
