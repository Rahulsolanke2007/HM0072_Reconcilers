import React from 'react';
import { Heart } from 'lucide-react';

// Product Card Component
const ProductCard = ({ 
  id, 
  image, 
  price, 
  title, 
  location, 
  date, 
  isFeatured = false 
}) => {
  return (
    <div className="relative flex flex-col border rounded-md overflow-hidden hover:shadow-md transition-shadow">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        
        {/* Favorite Button */}
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow-md hover:bg-gray-100">
          <Heart size={20} className="text-gray-700" />
        </button>
        
        {/* Featured Tag */}
        {isFeatured && (
          <div className="absolute bottom-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 uppercase">
            Featured
          </div>
        )}
        
        {/* OLX Logo - only shown for selected items */}
        {id % 2 === 0 && (
          <div className="absolute bottom-2 right-2">
            <div className="bg-white text-[#002f34] text-xs font-bold px-1 py-0.5 rounded">
              <span className="text-[#3a77ff]">O</span>
              <span className="text-[#23e5db]">L</span>
              <span className="text-[#ffce32]">X</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Price */}
      <div className="p-3 pb-1">
        <div className="text-xl font-bold text-[#002f34]">
          ₹ {price.toLocaleString()}
        </div>
      </div>
      
      {/* Title */}
      <div className="px-3 pb-1">
        <p className="text-sm text-[#002f34] line-clamp-2 h-10">
          {title}
        </p>
      </div>
      
      {/* Location and Date */}
      <div className="px-3 pb-3 mt-auto flex justify-between text-xs text-gray-500">
        <span className="uppercase truncate max-w-[60%]">{location}</span>
        <span className="uppercase">{date}</span>
      </div>
    </div>
  );
};

// Product List Component
const ProductList = ({ title, products }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Section Title */}
      {title && (
        <h2 className="text-2xl font-bold text-[#002f34] mb-4">
          {title}
        </h2>
      )}
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard