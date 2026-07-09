import React from "react";
import "../App.css";

// ✅ Use your downloaded images
import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/css.png";
import jsLogo from "../assets/logos/js.png";
import reactLogo from "../assets/logos/react.png";
import tailwindLogo from "../assets/logos/tailwind.png";
import cppLogo from "../assets/logos/cpp.png";
import gitLogo from "../assets/logos/git.png";
import githubLogo from "../assets/logos/github.png";

const skills = [
  { logo: htmlLogo, name: "HTML", text: "Crafting structured web layouts" },
  { logo: cssLogo, name: "CSS", text: "Designing responsive, modern UIs" },
  { logo: jsLogo, name: "JavaScript", text: "Interactive and dynamic logic" },
  { logo: reactLogo, name: "React", text: "Component-based frontends" },
  { logo: tailwindLogo, name: "Tailwind", text: "Utility-first styling" },
  { logo: cppLogo, name: "C++", text: "Efficient programming foundation" },
  { logo: gitLogo, name: "Git", text: "Version tracking & branching" },
  { logo: githubLogo, name: "GitHub", text: "Collaboration & hosting" },
];

function SkillsCarousel() {
  return (
    <>
      <h1 className="text-white bg-black text-8xl text-center  font-extrabold">
        MY SKILLS
      </h1>
      <div className="carousel-container">
        <div className="carousel hover:cursor-pointer">
          {skills.map((skill, i) => (
            <div key={i} className="carousel-card" style={{ "--i": i }}>
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <h3>{skill.name}</h3>
              <p>{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SkillsCarousel;