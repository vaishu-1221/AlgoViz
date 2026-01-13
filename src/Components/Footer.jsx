import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-bar text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">
            AlgoVisualizer
          </h2>
          <p className="text-sm text-gray-700 mt-2">
            Visualize algorithms. Learn smarter.
          </p>
        </div>

        {/* Center */}
        <div className="flex gap-6 text-sm text-gray-700">
          <a href="#" className="hover:text-bar transition">
            Sorting
          </a>
          <a href="#" className="hover:text-bar transition">
            Graph
          </a>
          <a href="#" className="hover:text-bar transition">
            About
          </a>
        </div>

        {/* Right */}
        <div className="text-sm text-gray-700 text-center md:text-right">
          © {new Date().getFullYear()} AlgoVisualizer<br />
          Built with ❤️ for DSA learners
        </div>

      </div>
    </footer>
  );
};

export default Footer;
