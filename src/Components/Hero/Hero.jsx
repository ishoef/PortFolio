import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div
      id="hero"
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-[#e2e8f0] font-sans pt-20 md:pt-28 lg:pt-36 lg:pb-32"
    >
      <section className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 py-12">
        {/* Left Content */}
        <motion.div
          className="max-w-2xl text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
              Hi there
            </span>
            <span className="block mt-2">
              I'm a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400">
                Full Stack
              </span>{" "}
              Developer
            </span>
          </h1>

          <p className="text-[#94a3b8] mt-6 text-lg md:text-xl leading-relaxed">
            I specialize in creating{" "}
            <span className="text-white">
              fast, reliable, and user-friendly
            </span>{" "}
            applications with clean code practices.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-lg transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-medium transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Side - Terminal Style */}
        <motion.div
          className="flex justify-center md:justify-end"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {" "}
          <img
            src="https://i.ibb.co/r2946Ddt/new.jpg"
            alt="Profile"
            className="rounded-xl w-40 h-50 sm:w-56 sm:h-66 md:w-64 md:h-84 object-cover border-4 border-[#14b8a6] shadow-lg"
          />{" "}
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
