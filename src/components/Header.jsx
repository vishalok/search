import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <header className="bg-white shadow-md py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-lg font-bold text-indigo-600">
          <a href="# " className="text-3xl">Marrfa</a>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li><a href="# " className="text-lg text-gray-700 hover:text-indigo-600">Home</a></li>
            <li><a href="# " className="text-lg text-gray-700 hover:text-indigo-600">About</a></li>
            <li><a href="# " className="text-lg text-gray-700 hover:text-indigo-600">Blog</a></li>
            <li><a href="# " className="text-lg text-gray-700 hover:text-indigo-600">Contact</a></li>
          </ul>
        </nav>
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden ">
          <ul className="flex flex-col items-center mt-4 space-y-4">
            <li><a href="# " className="text-lg text-gray-700 hover:text-indigo-600">Home</a></li>
            <li><a href="# " className="text-lg text-gray-700 hover:text-indigo-600">About</a></li>
            <li><a href="# " className="text-lg text-gray-700 hover:text-indigo-600">Blog</a></li>
            <li><a href="# " className="text-lg text-gray-700 hover:text-indigo-600">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
