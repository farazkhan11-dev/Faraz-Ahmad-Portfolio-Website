import "./App.css";
import 'animate.css';
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Carousel3D from "./components/MySkills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <About/>
      <Carousel3D />
      <Projects/>
      <Education/>
      <Testimonials />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;