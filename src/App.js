import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { useRef } from "react";
import Top from "./components/wa-top-btn/toTop";
import WaMe from "./components/wa-top-btn/whatsapp"

function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Navbar scrollToSection={scrollToSection} refs={{aboutRef,projectRef,contactRef}} />
      <Home/>
      <div ref={aboutRef}>
      <About/>
      </div>
      <div ref={projectRef}>
      <Projects/>
      </div>
      <div ref={contactRef}>
      <Contact/>
      </div>
      <Top/>
      <WaMe/>

    </>
  );
}

export default App;
