import React, { useRef } from "react";
import photo from "../assets/images/contact.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_esbft3h",
        "template_tvbast1",
        form.current,
        "TISOY2DjABjpkw4Nq"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      });
  };
  return (
    <div id="contact" className="relative w-full bg-black">
      {/* Background Image */}
      <img
        loading="lazy"
        className="h-[100vh] w-full object-cover"
        src={photo}
        alt="Contact Background"
      />

      {/* Top & Bottom Blur Overlays */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm z-10"></div>

      {/* Grid Container */}
      <div className="absolute inset-0 z-20 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 gap-10 mt-20">
        {/* Left Column */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6">
            Contact Me
          </h1>

          {/* Button Positioned Between Heading and Email */}
          <div className="mb-6">
            <button className="text-white px-5 py-3 rounded-full border border-gray-500 bg-white/10 shadow-[0_0_5px_rgba(255,255,255,0.8)] hover:shadow-[0_0_10px_rgba(255,255,255,1)] transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0 hover:cursor-pointer">
              <span
                className="h-2 w-2 rounded-full bg-green-400 animate__animated animate__flash animate__infinite"
                style={{ animationDuration: "2s" }}
              ></span>
              Available For Work
            </button>
          </div>

          <a
            href="mailto:farazkhan6812@gmail.com"
            className="text-green-400 text-2xl sm:text-3xl lg:text-4xl font-bold hover:underline"
          >
            farazkhan6812@gmail.com
          </a>
        </div>

        {/* Right Column - Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white/10 backdrop-blur-md border hover:shadow-lg hover:shadow-gray-500 border-white/20 rounded-xl p-6 w-full max-w-xl shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        >
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-bold rounded-md hover:shadow-[0_0_15px_white] transition-all duration-300 hover:cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;