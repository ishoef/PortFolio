import React from "react";
import { FaSeedling, FaHeart } from "react-icons/fa";

function AboutMe() {
  return (
    <section
      id="about"
      className="bg-[#0f172a] text-[#f1f5f9] py-12 md:py-16 lg:py-20"
    >
      <div className="w-11/12 md:w-9/12 lg:w-7/12 mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
          About <span className="text-[#3b82f6]">Me</span>
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#22c55e] to-[#3b82f6] mx-auto mb-10 sm:mb-12 md:mb-16 rounded-full"></div>

        {/* Content Grid */}
        <div className="bg-[#1e293b] p-5 sm:p-8 md:p-12 lg:p-16 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 shadow-xl border border-[#0f172a] border-opacity-30">
          {/* Left Column */}
          <div>
            <h3 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-semibold text-[#22c55e] mb-4">
              <FaSeedling /> My Journey
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#94a3b8] leading-relaxed">
              My programming journey began during my college years when I
              discovered the magic of turning ideas into reality through code.
              What started as curiosity quickly became a passion that drives me
              every day.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#94a3b8] mt-4 leading-relaxed">
              I love working on challenging projects that push the boundaries of
              what's possible on the web. Whether it's building responsive user
              interfaces, designing scalable backend systems, or optimizing
              application performance, I find joy in solving complex problems
              with elegant solutions.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-semibold text-[#3b82f6] mb-4">
              <FaHeart /> Beyond Code
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#94a3b8] leading-relaxed">
              When I'm not coding, you'll find me playing basketball,
              experimenting with digital art, or exploring new hiking trails. I
              believe that diverse experiences outside of programming make me a
              better developer by bringing fresh perspectives to my work.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
              <span className="bg-[#22c55e]/10 text-[#22c55e] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                🏀 Basketball
              </span>
              <span className="bg-[#3b82f6]/10 text-[#3b82f6] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                🧠 Digital Art
              </span>
              <span className="bg-[#6366f1]/10 text-[#6366f1] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                🥾 Hiking
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
