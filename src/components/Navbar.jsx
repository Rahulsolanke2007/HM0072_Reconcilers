import { useState } from 'react';
import { Search, Plus, ChevronDown, Heart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState('India');
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  
  const locations = ['India', 'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai'];
  const languages = ['ENGLISH', 'हिन्दी', 'తెలుగు', 'தமிழ்', 'മലയാളം', 'ಕನ್ನಡ'];
  const categories = [
    'All Categories',
    'Cars',
    'Motorcycles',
    'Mobile Phones',
    'For Sale: Houses & Apartments',
    'Scooters',
    'Commercial & Other Vehicles',
    'For Rent: Houses & Apartments',
    'Electronics & Appliances',
    'Jobs',
    'Furniture'
  ];

  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setIsLocationDropdownOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Main Navbar */}
      <div className="w-full border-b">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-[#002f34] text-3xl font-bold">
                <span className="text-[#3a77ff]">O</span>
                <span className="text-[#23e5db]">L</span>
                <span className="text-[#ffce32]">X</span>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            
            {/* Desktop Search and Location */}
            <div className="hidden md:flex flex-grow mx-6">
              <div className="flex w-full">
                {/* Location selector */}
                <div className="relative">
                  <div 
                    className="flex items-center border-2 border-r-0 rounded-l-md px-3 py-2 bg-white h-full cursor-pointer"
                    onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                  >
                    <span className="outline-none w-20 sm:w-28 text-[#002f34]">
                      {location}
                    </span>
                    <ChevronDown size={20} className="text-[#002f34]" />
                  </div>
                  
                  {/* Location dropdown */}
                  {isLocationDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-md shadow-lg z-10">
                      {locations.map((loc) => (
                        <div 
                          key={loc} 
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleLocationSelect(loc)}
                        >
                          {loc}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Search input */}
                <div className="flex flex-grow items-center">
                  <input 
                    type="text" 
                    placeholder="Find Cars, Mobile Phones and more..."
                    className="w-full border-2 border-r-0 py-2 px-4 outline-none focus:border-[#23e5db]"
                  />
                  <button className="bg-[#002f34] border-2 border-[#002f34] p-2 rounded-r-md">
                    <Search size={22} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right side links */}
            <div className="hidden md:flex items-center space-x-5">
              {/* Language selector */}
              <div className="relative">
                <button 
                  className="text-[#002f34] font-semibold text-sm flex items-center"
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                >
                  ENGLISH
                  <ChevronDown size={18} className="ml-1" />
                </button>
                
                {/* Language dropdown */}
                {isLanguageDropdownOpen && (
                  <div className="absolute top-full right-0 mt-1 w-36 bg-white border rounded-md shadow-lg z-10">
                    {languages.map((lang) => (
                      <div 
                        key={lang} 
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-semibold text-sm"
                        onClick={() => setIsLanguageDropdownOpen(false)}
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Favorites */}
              <button className="text-[#002f34]">
                <Heart size={22} />
              </button>
              
              {/* Login */}
              <Link to="/login" className="text-[#002f34] font-semibold">
                Login
              </Link>
              
              {/* Sell button */}
              <a 
                href="/post-ad" 
                className="flex items-center bg-[#fff7e6] hover:bg-[#ffce32] text-[#002f34] font-semibold px-4 py-2 rounded-full border-2 border-[#ffce32]"
              >
                <Plus size={20} className="mr-1" /> SELL
              </a>
            </div>
          </div>
          
          {/* Mobile Search - visible on mobile only */}
          <div className="mt-3 md:hidden">
            <div className="flex w-full">
              <input 
                type="text" 
                placeholder="Search..."
                className="w-full border-2 border-r-0 py-2 px-4 outline-none"
              />
              <button className="bg-[#002f34] border-2 border-[#002f34] p-2 rounded-r-md">
                <Search size={22} className="text-white" />
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 py-2 space-y-3">
              <a href="/login" className="block py-2 text-[#002f34] font-medium">
                Login
              </a>
              <button className="block py-2 text-[#002f34] font-medium flex items-center">
                ENGLISH <ChevronDown size={18} className="ml-1" />
              </button>
              <button className="block py-2 text-[#002f34] font-medium flex items-center">
                <Heart size={20} className="mr-1" /> Favorites
              </button>
              <a 
                href="/post-ad" 
                className="inline-flex items-center bg-[#fff7e6] hover:bg-[#ffce32] text-[#002f34] font-medium px-4 py-2 rounded-full border-2 border-[#ffce32]"
              >
                <Plus size={20} className="mr-1" /> SELL
              </a>
            </div>
          )}
        </div>
      </div>
      
      {/* Categories bar */}
      <div className="w-full border-b bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center overflow-x-auto py-2 space-x-6 text-sm no-scrollbar">
            {/* Categories dropdown */}
            <div className="relative">
              <button 
                className="whitespace-nowrap font-bold text-[#002f34] flex items-center"
                onClick={() => setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen)}
              >
                ALL CATEGORIES <ChevronDown size={18} className="ml-1" />
              </button>
              
              {isCategoriesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border rounded-md shadow-lg z-10 max-h-96 overflow-y-auto">
                  {categories.map((category) => (
                    <div 
                      key={category} 
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setIsCategoriesDropdownOpen(false)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <a href="/cars" className="whitespace-nowrap text-[#002f34] hover:text-[#3a77ff]">Cars</a>
            <a href="/motorcycles" className="whitespace-nowrap text-[#002f34] hover:text-[#3a77ff]">Motorcycles</a>
            <a href="/mobile-phones" className="whitespace-nowrap text-[#002f34] hover:text-[#3a77ff]">Mobile Phones</a>
            <a href="/houses-apartments" className="whitespace-nowrap text-[#002f34] hover:text-[#3a77ff]">For Sale: Houses & Apartments</a>
            <a href="/scooters" className="whitespace-nowrap text-[#002f34] hover:text-[#3a77ff]">Scooters</a>
            <a href="/commercial-vehicles" className="whitespace-nowrap text-[#002f34] hover:text-[#3a77ff] hidden lg:block">Commercial & Other Vehicles</a>
            <a href="/rent-houses-apartments" className="whitespace-nowrap text-[#002f34] hover:text-[#3a77ff] hidden lg:block">For Rent: Houses & Apartments</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;