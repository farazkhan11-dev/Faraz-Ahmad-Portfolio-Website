import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-2 px-6 border-t flex items-center justify-center border-white/10">
        <div className=" text-center text-gray-500 text-sm p-5">
          © {new Date().getFullYear()} Designed and Built with precision &
          passion by Faraz Ahmad
        </div>
      </footer>
    </>
  );
}

export default Footer;