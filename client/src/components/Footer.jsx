import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 px-6 sm:px-12 lg:px-24 mt-8 border-t max-w-[1080px] m-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        
        <div>
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} NeoMart.com — All rights reserved.
          </p>
        </div>

        <div className="text-sm sm:text-base">
          Developed with <span className="text-red-500">❤️</span> by Gaurav
        </div>
      </div>
    </footer>
  );
};

export default Footer;
