import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          Movie Library
        </div>
        <div className="flex space-x-4">
          {/* Link to Home (search movies) */}
          <Link to="/">
            <button className="px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-400">
              Search Movies
            </button>
          </Link>
          
          {/* Link to Profile (favorites page) */}
          <Link to="/profile">
            <button className="px-4 py-2 rounded text-white bg-gray-600 hover:bg-blue-400">
              Profile
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
