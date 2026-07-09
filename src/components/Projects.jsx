import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import githubLogo from "../assets/logos/github.png";
import projects from "../Data/projectData";

function Projects() {
  return (
    <>
      <h1
        id="projects"
        className="text-white bg-black text-4xl sm:text-6xl lg:text-8xl text-center pt-6 sm:pt-8 lg:pt-10 pb-10 lg:pb-20 font-extrabold px-4 lg:px-0"
      >
        MY PROJECTS
      </h1>

      <div className="bg-black pb-10 lg:pb-20 relative px-4">
        {projects.map((data, index) => (
          <div
            key={index}
            className="sticky top-3 z-10 flex flex-col items-center justify-center
                      border-1 border-gray-700 rounded-xl lg:rounded-3xl bg-black 
                      mx-2 sm:mx-8 lg:mx-50 py-4 lg:py-5 mb-[10px]"
          >
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl pt-2 lg:pt-3 font-bold px-4 lg:px-0">
              {data.name}
            </h1>

            <img
              className="w-[80%] rounded-[30px] p-4 lg:p-7 pb-2 
                        hover:scale-105 hover:cursor-pointer transition-transform
                        border border-gray-600 lg:border-none"
              loading="lazy"
              src={data.image}
              alt={data.name}
            />

            <p className="pb-3 text-gray-400 text-sm sm:text-base lg:text-lg text-center px-4 lg:px-0">
              {data.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 px-4 lg:px-0">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white h-10 sm:h-11 lg:h-12 w-full sm:w-32 lg:w-36 rounded-xl lg:rounded-2xl border border-gray-500
                     bg-white/10 shadow-[0_0_5px_rgba(255,255,255,0.8)]
                       hover:shadow-[0_0_10px_rgba(255,255,255,1)]
                       transition-all duration-300 flex items-center gap-2 px-4 justify-center"
              >
                View Code
                <img
                  loading="lazy"
                  className="size-4 lg:size-6"
                  src={githubLogo}
                  alt="GitHub Logo"
                />
              </a>

              <a
                href={data.liveDemo}
                loading="lazy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white h-10 sm:h-11 lg:h-12 w-full sm:w-32 lg:w-36 rounded-xl lg:rounded-2xl border border-gray-500
                        bg-white/10 shadow-[0_0_5px_rgba(255,255,255,0.8)]
                        hover:shadow-[0_0_10px_rgba(255,255,255,1)]
                        transition-all duration-300 flex items-center gap-2 px-4 justify-center"
              >
                View Demo{" "}
                <FaArrowUpRightFromSquare className="text-green-400" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;