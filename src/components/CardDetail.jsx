import React, { useState } from "react";

const CardDetail = () => {
  // Dummy product data
  const product = {
    images: [
      "https://t4.ftcdn.net/jpg/06/34/25/63/360_F_634256300_1J563CXPkUJR2nteelgbfQxQz4MvFT5h.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRviRD5-NJ781r1WEytfypBvsra_GUYdli2oA&s",
      `https://www.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819881.jpg`,
    ],
    price: 25000,
    description: "High-performance gaming laptop with RTX 3060, 16GB RAM, and 512GB SSD.",
    owner: {
      name: "Rahul Sharma",
      phone: "+91 9876543210",
      location: "Mumbai, India",
    },
  };

  const { images, price, description, owner } = product;
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleLocate = () => {
    const query = encodeURIComponent(owner.location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Image Slider */}
      <div className="relative">
        <img
          src={images[currentImage]}
          alt="Product"
          className="w-full h-64 object-cover rounded-lg"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
        >
          ❯
        </button>
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-800">₹{price}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      {/* Owner Information */}
      <div className="mt-6 p-4 border-t flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Seller Information</h3>
          <p className="text-gray-700">{owner.name}</p>
          <p className="text-gray-500">📞 {owner.phone}</p>
          <p className="text-gray-500">📍 {owner.location}</p>
        </div>
        <button
          onClick={handleLocate}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          📍 Locate
        </button>
      </div>
    </div>
  );
};

export default CardDetail;
