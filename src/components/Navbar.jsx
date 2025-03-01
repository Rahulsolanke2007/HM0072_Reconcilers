import { useState } from 'react';
import { FaSearch, FaPlusCircle, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-2 md:py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-blue-600">OLX</h1>
          </div>

          {/* Search Bar - Hidden on mobile, visible from medium screens */}
          <div className="hidden md:flex w-1/2 border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-blue-500 px-4 text-white">
              <FaSearch />
            </button>
          </div>

          {/* Icons and Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              <span className="hidden lg:inline">ENGLISH</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              <span className="hidden lg:inline">❤</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              <span className="lg:inline">Login</span>
            </a>
            <a href="#" className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-2 rounded-full flex items-center font-medium">
              <FaPlusCircle className="mr-1" /> <span className="lg:inline">SELL</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="mt-3 md:hidden">
          <div className="flex border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-blue-500 px-4 text-white">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 py-3 border-t">
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">
              Login
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">
              English
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">
              Favorites
            </a>
            <a href="#" className="block py-2 text-gray-700 bg-yellow-400 px-3 rounded-full mt-2 inline-flex items-center">
              <FaPlusCircle className="mr-1" /> SELL
            </a>
          </div>
        )}
      </div>
      
      {/* Categories bar - Similar to the OLX design */}
      <div className="border-t mt-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center space-x-1 lg:space-x-4 overflow-x-auto text-sm">
            <a href="#" className="whitespace-nowrap flex items-center font-medium">
              ALL CATEGORIES <span className="ml-1">▼</span>
            </a>
            <a href="#" className="whitespace-nowrap px-1 hover:text-blue-500">Cars</a>
            <a href="#" className="whitespace-nowrap px-1 hover:text-blue-500">Motorcycles</a>
            <a href="#" className="whitespace-nowrap px-1 hover:text-blue-500">Mobile Phones</a>
            <a href="#" className="whitespace-nowrap px-1 hover:text-blue-500">For Sale: Houses & Apartments</a>
            <a href="#" className="whitespace-nowrap px-1 hover:text-blue-500">Scooters</a>
            <a href="#" className="whitespace-nowrap px-1 hover:text-blue-500 hidden lg:block">Commercial & Other Vehicles</a>
            <a href="#" className="whitespace-nowrap px-1 hover:text-blue-500 hidden lg:block">For Rent: Houses & Apartments</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;