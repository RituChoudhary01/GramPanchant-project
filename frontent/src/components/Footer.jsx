import React from "react";

const Footer = ({ panchayat }) => {
  return (
    <footer className="bg-black text-white py-12 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left: Panchayat Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">Gram Panchayat Longwala</h3>
          <p className="text-gray-400">
            Phone: {panchayat.contact || "+91 1234567890"}
          </p>
          <p className="text-gray-400">
            Email: {panchayat.email || "info@panchayat.com"}
          </p>
        </div>

        {/* Middle: Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a href={panchayat.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
            Facebook
          </a>
          <a href={panchayat.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            Twitter
          </a>
          <a href={panchayat.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
            Instagram
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right text-gray-500">
          © 2025 Gram Panchayat. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;




