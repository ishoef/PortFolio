import React from "react";
import { Link } from "react-router";

function Hero() {
  return (
    <div className="bg-[#0f172a] text-[#cbd5e1] font-mono">
      <section className="w-9/12 mx-auto flex flex-col md:flex-row justify-between items-center  py-26">
        <div className="max-w-xl">
          <p className="text-[#22c55e]"> &gt;_console.log("Hello World!")</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#14b8a6] to-[#6366f1] bg-clip-text text-transparent">
              Ismail Nayef
            </span>
          </h1>
          <h2 className="text-2xl mt-2 border-r-2 border-[#3b82f6] pr-2">
            Full Stack Developer
          </h2>
          <p className="text-[#94a3b8] mt-4">
            Passionate about creating innovative web solutions that make a
            difference. I specialize in building scalable applications using
            modern technologies and clean code practices.
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <a href="#" className="border border-[#3b82f6] bg-[#3b82f6]/10 hover:bg-primary text-white px-4 py-2 rounded">
              Download Resume
            </a>
            <a href="#" className="text-[#94a3b8] hover:text-[#3b82f6]">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-[#94a3b8] hover:text-[#3b82f6]">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-[#94a3b8] hover:text-[#3b82f6]">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <img
            src="https://i.ibb.co/r2946Ddt/new.jpg"
            alt="Profile"
            className="rounded w-64 h-84 object-cover border-4 border-[#14b8a6] shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
