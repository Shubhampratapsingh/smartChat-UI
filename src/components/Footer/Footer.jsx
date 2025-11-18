import React from "react";

const Footer = () => {
  return (
    <footer className="relative border-t border-gray-200 backdrop-blur-md bg-white/70">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/30">
              AI
            </div>
            <p className="text-sm text-gray-600">
              SmartChat © 2024. Designed for innovators.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
