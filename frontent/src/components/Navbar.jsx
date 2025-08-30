import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`px-6 py-4 flex justify-between items-center shadow-lg transition-all duration-500 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md" : "bg-gray-900/50"
      }`}
    >
      {/* Logo / Name with Gradient */}
      <h1 className="text-3xl font-extrabold bg-clip-text text-transparent 
                     bg-gradient-to-r from-red-500 via-green-400 to-pink-500 animate-gradient-x">
        Gram Panchayat Longwala
      </h1>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-lg font-semibold">
        <Link
          to="#photos"
          className="relative hover:text-yellow-400 transition-transform transform hover:-translate-y-1 duration-300"
        >
          Photos
        </Link>
        <Link
          to="#news"
          className="relative hover:text-yellow-400 transition-transform transform hover:-translate-y-1 duration-300"
        >
          Latest News
        </Link>
        <Link
          to="#members"
          className="relative hover:text-yellow-400 transition-transform transform hover:-translate-y-1 duration-300"
        >
          Members
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;






