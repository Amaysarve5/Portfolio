import React from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="relative z-10 min-h-screen">
      <div className="relative lg:pt-10 pt-[1px]">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;