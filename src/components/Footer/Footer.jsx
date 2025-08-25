import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-10 px-[8vw] md:px-[7vw] lg:px-[16vw] text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-xl text-semibold text-purple-500">
          Devendra Pratap Singh
        </h1>
        {/* navigation links */}
        <nav className="flex flex-wrap justify-center items-center gap-5 py-2">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 font-semibolt text-center text-white"
            >
              {item.name}
            </button>
          ))}
        </nav>
        {/* social media icons */}
        <div className="flex flex-wrap justify-center items-center mt-3 gap-5">
          {[
            { icon: <FaFacebook />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaYoutube />, link: "#" },
            { icon: <FaLinkedin />, link: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="text-xl hover:text-purple-500"
            >
              {item.icon}
            </a>
          ))}
        </div>
        {/* copyright section */}
        <p className="text-sm font-semibold mt-4 text-gray-400">
          © 2025 Devendra Pratap Singh — Crafted with passion and protected with pride.

        </p>
      </div>
    </footer>
  );
};

export default Footer;
