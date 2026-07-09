import React, { useState } from "react";
import photo from "../assets/images/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import qr from "../assets/Images/qr-code.png";

export default function Header() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div id="home" className="w-full h-screen relative bg-black">
      {/* Background Image */}
      <div className="relative w-full bg-black">
        <img
          className="w-full h-full object-cover sm:object-contain"
          loading="lazy"
          src={photo}
          alt="My Picture"
        />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to- from-black to-transparent"></div>
      </div>

      {/* Navbar */}
      <div className="absolute top-5 left-5 md:left-15 flex flex-wrap gap-4 md:gap-6 text-gray-200 text-sm sm:text-base md:text-lg font-light z-20">
        <a href="#home" className="relative group">
          Home
        </a>
        <a href="#about" className="relative group">
          About
        </a>
        <a href="#projects" className="relative group">
          Projects
        </a>
        <a href="#contact" className="relative group">
          Contact
        </a>
      </div>

      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-16 z-10">
        <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-2">
          HI I'M
        </h1>
        <h1 className="text-white font-bold text-5xl sm:text-6xl lg:text-8xl mb-4">
          FARAZ AHMAD
        </h1>
        <h1 className="text-gray-400 font-bold text-2xl sm:text-3xl lg:text-6xl mb-6 max-w-[90%] sm:max-w-[70%]">
          <TypeAnimation
            sequence={[
              "FRONTEND DEVELOPER",
              2000,
              "REACT DEVELOPER",
              2000,
            ]}
            wrapper="span"
            speed={40}
            style={{ display: "inline-block" }}
            deletionSpeed={10}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white font-light text-sm sm:text-base lg:text-lg max-w-xl mb-8">
          I build responsive, dynamic, and user-focused interfaces.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <a href="#contact">
            <button className="text-white px-5 py-3 rounded-full border border-gray-500 bg-white/10 shadow hover:shadow-lg transition-all duration-300 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400 animate__animated animate__flash animate__infinite"></span>
              Available For Work
            </button>
          </a>

          <a href="/Faraz's resume (1).pdf" download="Faraz-Ahmad-Resume.pdf">
            <button className="text-white px-5 py-3 rounded-full border border-gray-500 bg-white/10 shadow hover:shadow-lg transition-all duration-300 flex items-center gap-2">
              Resume <FaArrowUpRightFromSquare className="text-green-400" />
            </button>
          </a>
          
          {/* Connect With Me Popup Trigger */}
          <button
            onClick={() => setShowPopup(true)}
            className="text-white px-5 py-3 rounded-full border border-gray-500 bg-white/10 shadow hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate__animated animate__flash animate__infinite"></span>
            Connect With Me
          </button>
        </div>
      </div>

      {/* POPUP OVERLAY */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 animate__animated animate__fadeIn">
          <div className="bg-white/10 backdrop-blur-xl border border-gray-500 rounded-2xl p-8 w-[90%] max-w-md text-center shadow-lg animate__animated animate__zoomIn">
            <h2 className="text-white text-3xl font-bold mb-2">
              FARAZ AHMAD
            </h2>

            {/* QR Code */}
            <div className="flex justify-center mb-6">
              <img
                src={qr}
                alt="QR Code"
                className="w-40 h-40 rounded-xl shadow-lg"
              />
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-6 py-2 rounded-full bg-white/20 border border-gray-500 text-white hover:bg-white/30 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}