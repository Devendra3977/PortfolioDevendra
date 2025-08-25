import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./BlurBlob";
import './index.css'
 

const App = () => {
  return (
    
    <div className="bg-[#050414]">
      <BlurBlob position={{top:"35%", left:"20%"}} size={{height : "40%", width:"30%"}}></BlurBlob>
      <div
        className="absolute inset-0
  [background-image:linear-gradient(to_right,_#4f4f4f2e_1px,_transparent_1px),linear-gradient(to_bottom,_#4f4f4f2e_1px,_transparent_1px)] 
  [background-size:14px_24px] 
  [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,_#000_70%,_transparent_100%)]"
      ></div>

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skill />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
