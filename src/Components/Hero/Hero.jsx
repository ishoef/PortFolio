import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const fullText = "Front-End Developer";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 150;
    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? fullText.slice(0, index - 1)
        : fullText.slice(0, index + 1);

      setTypedText(updatedText);
      setIndex(isDeleting ? index - 1 : index + 1);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex(0);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div
      id="hero"
      className="bg-[#0f172a] text-[#cbd5e1] font-mono pt-16 md:pt-24 lg:pt-32"
    >
      <section className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-16 py-10">
        {/* Left Content */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[#22c55e] text-sm md:text-base">
            &gt;_console.log("Hello World!")
          </p>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#14b8a6] to-[#6366f1] bg-clip-text text-transparent">
              Ismail Nayef
            </span>
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl mt-3 border-r-2 border-[#3b82f6] pr-2 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {typedText}
            <span className="text-[#3b82f6] ml-1 animate-pulse">|</span>
          </motion.h2>

          <motion.p
            className="text-[#94a3b8] mt-4 text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Passionate about creating innovative web solutions that make a
            difference. I specialize in building scalable applications using
            modern technologies and clean code practices.
          </motion.p>

          {/* Buttons + Socials */}
          <motion.div
            className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <a
              href="/resume.pdf"
              download="Ismail_Nayef_Resume.pdf"
              className="border border-[#3b82f6] bg-[#3b82f6]/10 hover:bg-[#3b82f6] text-white px-5 py-2 rounded-lg text-sm sm:text-base"
            >
              Download Resume
            </a>
            <a href="#" className="text-[#94a3b8] hover:text-[#3b82f6] text-xl">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-[#94a3b8] hover:text-[#3b82f6] text-xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-[#94a3b8] hover:text-[#3b82f6] text-xl">
              <i className="fab fa-twitter"></i>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="https://i.ibb.co/r2946Ddt/new.jpg"
            alt="Profile"
            className="rounded-xl w-40 h-50 sm:w-56 sm:h-66 md:w-64 md:h-84 object-cover border-4 border-[#14b8a6] shadow-lg"
          />
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
