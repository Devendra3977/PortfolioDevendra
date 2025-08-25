import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handelOpenModal = (project) => {
    setSelectedProject(project);
  };
  const handeCloseModal = (project) => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-15 pb-15 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans  skills-gradient bg-cover bg-no-repeat relative scroll-mt-20"
    >
      {/* dection title */}
      <div className="text-center mb-16">
        <h2 className="text-white text-4xl font-bold">PROJECTS</h2>
        <div className="w-32 sm:w-40 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 font-semibold mt-4 text-lg">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>
      {/* project grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
            onClick={() => handelOpenModal(project)}
          >
            <div className="p-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 rounded-xl object-cover"
              />
            </div>
            <div className="p-3">
              <h1 className="text-xl text-white font-bold bm-2 ">
                {project.title}
              </h1>
              <p className="text-gray-400 line-clamp-3 mb-2 pt-2">
                {project.description}
              </p>
              <div className="mb-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] inline-block text-xs font-semibold text-purple-500 px-2 py-2 mr-2 mb-2 rounded-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* project model for click */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 p-2 flex justify-center items-center bg-black bg-opacity-90">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[90%] lg:w-full max-w-xl overflow-hidden relative">
            <div className="flex justify-end p-2 px-5">
              <button
                onClick={handeCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex jsutify-center bg-gray-900 px-3 ">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
            </div>
            <div className="lg:p-6 p-4">
              <h3 className="font-bold lg:text-3xl text-white mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400 mb-3">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] inline-block text-xs font-semibold text-purple-500 px-2 py-2 mr-2 mb-2 rounded-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                className="w-1/2 bg-gray-800 hover:bg-purple-500 text-gray-400 lg:px-4 lg:py-2 px-2 py-1 lg:text-xl text-sm font-bold text-center rounded hover:text-white">
                View Code
                </a>
                 <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer"
                className="w-1/2 bg-purple-600 hover:bg-purple-800 text-gray-800 lg:px-4 lg:py-2 px-2 py-1 lg:text-xl text-sm font-bold text-center rounded hover:text-gray-200">
                View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
