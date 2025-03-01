// src/components/ProductCard.jsx

const ProductCard = ({ title, price, image }) => {
    return (
      <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-lg font-semibold text-gray-800 mt-4">{title}</h2>
        <p className="text-blue-600 font-bold mt-2">₹{price}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600">
          View Details
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  