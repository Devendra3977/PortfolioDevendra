import React from "react";
import Typewriter from "typewriter-effect";
import ProfilePic from '../../assets/devprofile.jpeg';
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <section
      id="about"
      className="px-[7vw] md:px-[7vw] lg:px-[16vw] mt-8 md:mt-16 scroll-mt-20 pb-15"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left size content */}
        <div className="md:w-1/2 text-left md:text:left mt-4 md:mt-0">
          {/* {greetings} */}
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
            Hi, I am
          </h3>
          {/* {name} */}
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Devendra Pratap Singh
          </h3>
          {/* {skills heading typing efect} */}
          <h3 className="text-xl md:text-3xl sm:text-2xl font-semibold text-[#8245ec] leading-tight">
            <span className="text-white">I am a&nbsp;</span>
            <span className="inline-block">
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer",
                    "Web Developer",
                    "UX/UI Designer",
                    "Coder",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
          {/* {about me} */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 leading-relaxed mb-5 mt-2">
           I'm a passionate MERN Stack Developer with a strong focus on building responsive, full-stack web applications. I enjoy solving problems, writing clean code, and continuously learning new technologies to grow as a developer. My projects reflect a strong understanding of both front-end design and back-end logic. I'm excited to contribute to impactful products and collaborate with innovative teams.
          </p>

        {/* {resume button} */}
        <a 
        href="#"
        rel="noopener noreferrer"
        target="_blank"
        className="inline-block text-white py-2 px-5 rounded-full mt-2 mb-8 text-lg font-bold transition duration-300 transform hover:scale-105"
        style={{
          background:"linear-gradient(90deg, #8245ec, #a855f7)",
          boxShadow:"0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 30px #8245ec",
        }}
        >
          DOWNLOAD CV
        </a>
        </div>
        {/* {right side} */}
        <div className="md:w-1/2  flex justify-center md:justify-end">
        <Tilt
        scale={1.05}
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        transitionSpeed={1000}
        >
          <img 
            src={ProfilePic}
            className=" h-[210px] w-[200px] sm:w-[200px] sm:h-[230px] lg:w-100 lg:h-100 rounded-full  drop-shadow-[0_10px_20px_rgba(130,67,236,0.5)] border-2 border-purple-700"
          />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
