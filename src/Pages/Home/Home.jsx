// import React, { useEffect, useRef, useState } from "react";
// import Hero from "../../Components/Hero/Hero";
// import AboutMe from "../About/About";
// import Skills from "../Skills/Skills";
// import Education from "../Education/Education";
// import Experience from "../Experience/Experience";
// import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
// import ContactSection from "../ContactSection/ContactSection";
// import { useLocation } from "react-router";

// const Home = () => {
//   useEffect(() => {
//     document.title = "Ismail Nayef";
//   }, []);

//   const [loading, setLoading] = useState(true);
//   const location = useLocation();

//   const homeSectionRef = useRef(null);
//   const aboutSectionRef = useRef(null);
//   const skillsSectionRef = useRef(null);
//   const educationSectionRef = useRef(null);
//   const experienceSectionRef = useRef(null);
//   const projectsSectionRef = useRef(null);
//   const contactSectionRef = useRef(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (!loading && location.hash) {
//       const id = location.hash.substring(1);
//       const sectionRefs = {
//         home: homeSectionRef,
//         about: aboutSectionRef,
//         skills: skillsSectionRef,
//         projects: projectsSectionRef,
//         contact: contactSectionRef,
//       };

//       const targetRef = sectionRefs[id];

//       if (targetRef && targetRef.current) {
//         targetRef.current.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location, loading]);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <>
//       <Hero />
//       <AboutMe />
//       <Skills />
//       <Education />
//       <Experience />
//       <FeaturedProjects />
//       <ContactSection />
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useRef, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import AboutMe from "../About/About";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import ContactSection from "../ContactSection/ContactSection";
import { useLocation } from "react-router";
import ModernLoader from "../../Components/Loader/ModernLoader";

const Home = () => {
  useEffect(() => {
    document.title = "Ismail Nayef";
  }, []);

  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Section refs
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const educationSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  // Fake loader (2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to section if hash exists
  useEffect(() => {
    if (!loading && location.hash) {
      const id = location.hash.substring(1); // remove "#"
      const sectionRefs = {
        home: homeSectionRef,
        about: aboutSectionRef,
        skills: skillsSectionRef,
        education: educationSectionRef,
        experience: experienceSectionRef,
        projects: projectsSectionRef,
        contact: contactSectionRef,
      };

      const targetRef = sectionRefs[id];
      if (targetRef?.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location, loading]);

  if (loading) {
    return (
      // <p className="min-h-screen flex justify-center items-center">Loding...</p>
      <ModernLoader />
    );
  }

  return (
    <>
      <section ref={homeSectionRef} id="home" className="scroll-mt-8">
        <Hero />
      </section>

      <section ref={aboutSectionRef} id="about" className="scroll-mt-8">
        <AboutMe />
      </section>

      <section ref={skillsSectionRef} id="skills" className="scroll-mt-8">
        <Skills />
      </section>

      <section
        ref={educationSectionRef}
        id="education"
        className="scroll-mt-8"
      >
        <Education />
      </section>

      <section
        ref={experienceSectionRef}
        id="experience"
        className="scroll-mt-8"
      >
        <Experience />
      </section>

      <section ref={projectsSectionRef} id="projects" className="scroll-mt-8">
        <FeaturedProjects />
      </section>

      <section ref={contactSectionRef} id="contact" className="scroll-mt-8">
        <ContactSection />
      </section>
    </>
  );
};

export default Home;
