import React from "react";

function Education() {
  return (
    <>
      <div className="bg-black">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl text-center pt-6 sm:pt-8 lg:pt-10 pb-10 lg:pb-20 font-extrabold px-4 lg:px-0">
          <div className="flex flex-col">
            <span>Education</span>
            <span>&</span>
            <span>Certifications</span>
          </div>
        </h1>

        {/* Education */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-5  sm:ml-6 lg:ml-20 px-4 sm:px-0">
          <div className="bg-gray-500 md:h-30 md:w-0.5  mx-auto sm:mx-0"></div>
          <div>
            <h1 className="text-white text-xl sm:text-2xl">
              Bachelors of Science in Computer Science
            </h1>
            <h2 className="text-gray-300 text-sm sm:text-md font-bold">
              University of Central Punjab, Lahore
            </h2>
            <p className="text-green-400 text-sm sm:text-base">
              2025 - Present
            </p>
          </div>
        </div>

        {/* Certification 1 */}
        <div className="flex flex-col sm:flex-row md:mr-25 lg:mr-2 items-start sm:items-center justify-center gap-5 mt-8 sm:mt-10 sm:-ml-2 lg:-ml-10 px-4 sm:px-0">
          <div className="bg-gray-500 md:h-30 md:w-0.5 w-full h-0.5 mx-auto sm:mx-0"></div>
          <div>
            <h1 className="text-white text-xl sm:text-2xl">
              Introduction to GEN AI Studio
            </h1>
            <h2 className="text-gray-300 text-sm sm:text-md font-bold">
              By Simplilearn
            </h2>
            <p className="text-green-400 text-sm sm:text-base">
              Credential ID 8460348
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Education;