import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostAdForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    images: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files : value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Ad Posted:', formData);

    const response = await axios.post(`https://campusbazzarbackend.onrender.com/api/posts/add`,{
    
    });

    navigate('/'); // Navigate back to the homepage or wherever you want
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md mt-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Post Your Ad</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg h-28"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          >
            <option value="">Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Real Estate">Real Estate</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Images</label>
          <input
            type="file"
            name="images"
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            multiple
            accept="image/*"
          />
        </div>
        <button type="submit" className="bg-[#002f34] text-white px-5 py-2 rounded-lg w-full">
          Post Ad
        </button>
      </form>
      <button onClick={() => navigate('/')} className="mt-5 text-sm text-gray-500 w-full text-center">
        Cancel
      </button>
    </div>
  );
};

export default PostAdForm;
