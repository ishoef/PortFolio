import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const HireMePage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            👋 Hi, I’m <span className="text-orange-500">Your Name</span>
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            I’m a{" "}
            <span className="text-orange-500 font-semibold">
              Front-End Developer
            </span>
            with expertise in building modern, responsive, and user-friendly web
            applications.
          </p>
          <a
            href="#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg transition duration-200"
          >
            Hire Me
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Developer at work"
            className="rounded-2xl shadow-lg w-72 sm:w-96 object-cover"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white dark:bg-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            My Skills & Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <FaReact size={40} className="text-sky-500" />
              <p>React.js</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiTailwindcss size={40} className="text-cyan-400" />
              <p>Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaNodeJs size={40} className="text-green-500" />
              <p>Node.js</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiMongodb size={40} className="text-green-600" />
              <p>MongoDB</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaHtml5 size={40} className="text-orange-600" />
              <p>HTML5</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaCss3Alt size={40} className="text-blue-600" />
              <p>CSS3</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaGithub size={40} className="text-gray-700 dark:text-white" />
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-4xl mx-auto py-16 px-6 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Let’s Work Together 🚀
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Interested in working with me? Fill out the form below or reach out
          directly.
        </p>

        <form className="flex flex-col gap-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default HireMePage;
