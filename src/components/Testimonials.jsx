import React, { useEffect } from "react";
import { FaUser, FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false, // whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Title */}
      <h1 className="text-white bg-black text-4xl sm:text-6xl lg:text-8xl text-center pt-10 pb-10 lg:pb-20 font-extrabold px-4">
        Testimonials
      </h1>

      <div className="bg-black relative px-4 lg:px-0">
        {/* Vertical line - only visible on desktop */}
        <div className="hidden lg:block bg-gradient-to-b from-green-600 to-gray-600 w-1 h-full absolute left-1/2 transform -translate-x-1/2"></div>

        {/* Mobile/Tablet: Stack vertically */}
        <div className="lg:hidden space-y-8 max-w-2xl mx-auto pb-10">
          {/* Testimonial 1 */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-white/10 rounded-3xl shadow-md hover:shadow-lg shadow-gray-500 hover:scale-105 transition-all duration-300 p-5 border border-gray-600"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUser className="text-gray-400 text-4xl bg-black p-2 border-2 border-gray-600 rounded-full flex-shrink-0" />
              <h2 className="text-gray-400 text-xl font-bold">Momina Saeed</h2>
            </div>
            <FaQuoteLeft className="text-green-500 text-4xl mb-3" />
            <p className="text-sm text-gray-500 leading-relaxed">
              I have had the opportunity to see Faraz Ahmad work as a
              Front-End Web Developer, and I must say he is truly talented in
              his field. He has a strong command over modern front-end
              technologies and always focuses on writing clean, responsive, and
              user-friendly code. His attention to detail and creativity in
              designing interfaces make his work stand out. He is dedicated,
              hardworking, and always eager to learn new skills, which makes him
              a valuable asset for any project or team.
            </p>
          </div>


          {/* Testimonial 2 */}
          <div
            data-aos="fade-up"
            className="bg-white/10 rounded-3xl shadow-md hover:shadow-lg shadow-gray-500 hover:scale-105 transition-all duration-300 p-5 border border-gray-600"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUser className="text-gray-400 text-4xl bg-black p-2 border-2 border-gray-600 rounded-full flex-shrink-0" />
              <h2 className="text-gray-400 text-xl font-bold">Muhammad Umair</h2>
            </div>
            <FaQuoteLeft className="text-green-500 text-4xl mb-3" />
            <p className="text-sm text-gray-500 leading-relaxed">
              I have had the chance to work with Faraz Ahmad and have
              been impressed by his professionalism, technical skills, and
              dedication. He possesses a strong grasp of web development
              concepts and demonstrates both creativity and precision in his
              work. Faraz approaches every task with a problem-solving mindset
              and ensures that the outcomes are of high quality. What stands out
              most is his eagerness to learn and his ability to adapt quickly to
              new challenges. He is reliable, hardworking, and consistently
              maintains a positive and collaborative attitude. I'm confident
              that with his skills and determination, he will achieve great
              success in his career.
            </p>
          </div>

          {/* Testimonial 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white/10 rounded-3xl shadow-md hover:shadow-lg shadow-gray-500 hover:scale-105 transition-all duration-300 p-5 border border-gray-600"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUser className="text-gray-400 text-4xl bg-black p-2 border-2 border-gray-600 rounded-full flex-shrink-0" />
              <h2 className="text-gray-400 text-xl font-bold">Daniyal Khalid</h2>
            </div>
            <FaQuoteLeft className="text-green-500 text-4xl mb-3" />
            <p className="text-sm text-gray-500 leading-relaxed">
              I've had the opportunity to work with Faraz Ahmad on
              frontend development projects, and I'm consistently impressed by
              his skills and work ethic. Faraz has a strong eye for detail and a
              solid understanding of modern frontend technologies. He writes
              clean, efficient code and always focuses on creating user-friendly
              and responsive designs. He's professional, easy to work with, and
              always meets deadlines. I highly recommend Faraz for any frontend
              development work — he's a reliable and talented developer. Best
              regards, Rabia
            </p>
          </div>

        </div>

        {/* Desktop: Original zigzag layout */}
        <div className="hidden lg:block pb-20">
          {/* Testimonial 1 - Right side */}
          <div
            data-aos="fade-left"
            className="bg-white/10 w-[480px] ml-[calc(50%+2rem)] min-h-[360px] rounded-3xl shadow-md hover:shadow-lg shadow-gray-500 mb-8 hover:scale-105 transition-all duration-300 p-5 border border-gray-600"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUser className="text-gray-400 text-5xl bg-black p-3 border-2 border-gray-600 rounded-full" />
              <h2 className="text-gray-400 text-2xl font-bold">Momina Saeed</h2>
            </div>
            <FaQuoteLeft className="text-green-500 text-5xl p-3 rounded-full" />
            <p className="text-sm text-gray-500 leading-relaxed">
              I have had the opportunity to see Faraz Ahmad work as a
              Front-End Web Developer, and I must say he is truly talented in
              his field. He has a strong command over modern front-end
              technologies and always focuses on writing clean, responsive, and
              user-friendly code. His attention to detail and creativity in
              designing interfaces make his work stand out. He is dedicated,
              hardworking, and always eager to learn new skills, which makes him
              a valuable asset for any project or team.
            </p>
          </div>

          {/* Testimonial 2 - Left side */}
          <div
            data-aos="fade-right"
            className="bg-white/10 ml-30 w-[480px] min-h-[360px] rounded-3xl shadow-md hover:shadow-lg shadow-gray-500 mb-8 hover:scale-105 transition-all duration-300 p-5 border border-gray-600"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUser className="text-gray-400 text-5xl bg-black p-3 border-2 border-gray-600 rounded-full" />
              <h2 className="text-gray-400 text-2xl font-bold">Muhammad Umair</h2>
            </div>
            <FaQuoteLeft className="text-green-500 text-5xl p-3 rounded-full" />
            <p className="text-sm text-gray-500 leading-relaxed">
              I have had the chance to work with Faraz Ahmad and have
              been impressed by his professionalism, technical skills, and
              dedication. He possesses a strong grasp of web development
              concepts and demonstrates both creativity and precision in his
              work. Faraz approaches every task with a problem-solving mindset
              and ensures that the outcomes are of high quality. What stands out
              most is his eagerness to learn and his ability to adapt quickly to
              new challenges. He is reliable, hardworking, and consistently
              maintains a positive and collaborative attitude. I'm confident
              that with his skills and determination, he will achieve great
              success in his career.
            </p>
          </div>

          {/* Testimonial 3 - Right side */}
          <div
            data-aos="fade-left"
            className="bg-white/10 ml-[calc(50%+2rem)] w-[480px] min-h-[360px] rounded-3xl shadow-md hover:shadow-lg shadow-gray-500 mb-8 hover:scale-105 transition-all duration-300 p-5 border border-gray-600"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUser className="text-gray-400 text-5xl bg-black p-3 border-2 border-gray-600 rounded-full" />
              <h2 className="text-gray-400 text-2xl font-bold">Daniyal Khalid</h2>
            </div>
            <FaQuoteLeft className="text-green-500 text-5xl p-3 rounded-full" />
            <p className="text-sm text-gray-500 leading-relaxed">
              I've had the opportunity to work with Faraz Ahmad on
              frontend development projects, and I'm consistently impressed by
              his skills and work ethic. Faraz has a strong eye for detail and a
              solid understanding of modern frontend technologies. He writes
              clean, efficient code and always focuses on creating user-friendly
              and responsive designs. He's professional, easy to work with, and
              always meets deadlines. I highly recommend Faraz for any frontend
              development work — he's a reliable and talented developer. Best
              regards, Rabia
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Testimonials;