import React, { useEffect } from "react";
import Hero from "../../Components/Hero/Hero";
import AboutMe from "../About/About";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import ContactSection from "../ContactSection/ContactSection";

const Home = () => {
  
  useEffect(() => {
    document.title = "Home | Portfolio";
  }, []);

  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
};

export default Home;
