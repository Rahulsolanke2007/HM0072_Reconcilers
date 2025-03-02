import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ 
  _id, 
  images, 
  userId,
  price, 
  title, 
  createdAt, 
  category,
  description,
  likeCount,
  isFeatured = false
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail`, { state: {  images, price, title, createdAt,category,description,likeCount,userId,_id } });
  };

  return (
    <div 
      onClick={handleCardClick} 
      className="relative flex flex-col border rounded-md overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={images[0]} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow-md hover:bg-gray-100">
          <Heart size={20} className="text-gray-700" />
        </button>
        {isFeatured && (
          <div className="absolute bottom-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 uppercase">
            Featured
          </div>
        )}
      </div>
      <div className="p-3 pb-1">
        <div className="text-xl font-bold text-[#002f34]">
          ₹ {price.toLocaleString()}
        </div>
      </div>
      <div className="px-3 pb-1">
        <p className="text-sm text-[#002f34] line-clamp-2 h-10">
          {title}
        </p>
      </div>
      <div className="px-3 pb-3 mt-auto flex justify-between text-xs text-gray-500">
        <span className="uppercase truncate max-w-[60%]">{userId.address}</span>
        <span className="uppercase">{createdAt}</span>
      </div>
    </div>
  );
};

const ProductList = ({ title, products }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {title && (
        <h2 className="text-2xl font-bold text-[#002f34] mb-4">
          {title}
        </h2>
      )}
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

export default ProductCard;
