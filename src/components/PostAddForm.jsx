import React, { useState } from 'react';

const PostAdForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    images: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ad Posted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Post Your Ad</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
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
            <label className="block text-sm font-medium">Price</label>
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
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Category</label>
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
            <label className="block text-sm font-medium">Images</label>
            <input
              type="file"
              name="images"
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              multiple
              accept="image/*"
            />
          </div>
          <button type="submit" className="bg-[#002f34] text-white px-4 py-2 rounded-lg w-full">Post Ad</button>
        </form>
        <button onClick={onClose} className="mt-4 text-sm text-gray-500">Cancel</button>
      </div>
    </div>
  );
};

export default PostAdForm;
