import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skill = () => {
  return (
    <section
      id="skills"
      className="py-10 pb-15 px-[8vw] md:px-[7vw] lg:px-[16vw] font-sans skills-gradient bg-cover bg-no-repeat scroll-mt-20 clip-path-custom"
    >
      {/* section-title */}
      <div className="">
        <h2 className="text-4xl  text-center text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded"></div>
        <p className="text-center text-gray-400 mt-3 font-semibold">
          A collection of my technical skills & expertise honed through various
          projects and experiences.
        </p>
      </div>
      {/* categories-title */}
      <div className="flex flex-wrap justify-between gap-2 lg:gap-3 py-5">
        {SkillsInfo.map((category) => (
          <div className="bg-gray-900 backdrop-blur-md px-4 sm:px-10 py-6 sm:py-4 mb-8 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_10px_rgba(130,69,236,0.3)]">
            <h3 className="text-gray-400 font-semibold text-center text-2xl md:text-xl mb-3 p-1 lg:text-1xl">
              {category.title}
            </h3>
            {/* skill items 3 per row on larger screen */}
            
            <Tilt>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex justify-center items-center bg-tranparent border-2 border-gray-700 rounded-3xl py-4 lg:px-2 sm:py-2 sm:px-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="h-4 w-5 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-400 ml-1">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
