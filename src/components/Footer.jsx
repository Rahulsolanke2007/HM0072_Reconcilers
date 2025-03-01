const Footer = () => {
    return (
      <footer className="bg-white text-[#002f34]">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-2 md:grid-cols-4 gap-8 border-b">
          <div>
            <h3 className="font-bold mb-3">POPULAR LOCATIONS</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold mb-3">TRENDING LOCATIONS</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Bhubaneshwar</li>
              <li>Hyderabad</li>
              <li>Chandigarh</li>
              <li>Nashik</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold mb-3">ABOUT US</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Tech@OLX</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold mb-3">OLX</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Blog</li>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
              <li>Vulnerability Disclosure Program</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="bg-[#002f34] text-white py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <img src="/logo.png" alt="OLX Logo" className="h-8" />
              <span className="text-sm">CarTradeTech GROUP</span>
            </div>
  
            <div className="flex space-x-4">
              <span>Help</span>
              <span>Sitemap</span>
            </div>
  
            <div className="flex space-x-4">
              <img
                src="/google-play.png"
                alt="Google Play"
                className="h-10 cursor-pointer"
              />
              <img
                src="/app-store.png"
                alt="App Store"
                className="h-10 cursor-pointer"
              />
            </div>
  
            <p className="text-sm">&copy; 2006-2025 OLX</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  