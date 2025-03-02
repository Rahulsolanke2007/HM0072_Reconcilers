import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useLocation } from "react-router-dom";

const CardDetail = () => {

  // useEffect(()=>{
  //   console.log('images',images);
  // },[]);
  const {state} = useLocation(); 

  const {  images, price, title, createdAt,category,description,likeCount,userId,_id } = state;

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleLocate = () => {
    const query = encodeURIComponent(userId.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
      {/* Left Side - Image Slider */}
      <div className="relative w-full md:w-1/2">
        <img
          src={images[currentImage]}
          alt="Product"
          className="w-full h-80 object-cover rounded-lg shadow-md"
        />
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Right Side - Product Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        {/* Product Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">₹{price}</h2>
          <p className="text-gray-600 mt-3">{description}</p>
        </div>

        {/* Owner Information */}
        <div className="mt-6 p-4 border-t flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Seller Information</h3>
            <p className="text-gray-700">{userId.name}</p>
            <p className="text-gray-500">📞 {userId.mobileNo}</p>
            <p className="text-gray-500 flex items-center">
              <MapPin size={16} className="mr-1 text-red-500" /> {userId.address}
            </p>
          </div>
          <button
            onClick={handleLocate}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition flex items-center shadow-md"
          >
            <MapPin size={18} className="mr-2" /> Locate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
