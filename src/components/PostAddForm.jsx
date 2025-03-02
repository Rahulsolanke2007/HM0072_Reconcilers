// // import axios from "axios";
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const PostAdForm = () => {
// //   const [formData, setFormData] = useState({
// //     title: "",
// //     price: 0,
// //     description: "",
// //     category: "",
// //     images: null,
// //   });

// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     const { name, value, files } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: name === 'price' ? Number(value) : files ? files : value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     try {
// //       e.preventDefault();
// //       console.log("Ad Posted:", formData);

// //       const data = new FormData();
// //       data.append('title', formData.title);
// //       data.append('price', formData.price);
// //       data.append('description', formData.description);
// //       data.append('category', formData.category);

// //       Array.from(formData.images).forEach((image) => {
// //         data.append('images', image);
// //       });


// //       console.log('Ad Data',data);

// //       const token = localStorage.getItem('token');

// //       const response = await fetch('https://campusbazzarbackend.onrender.com/api/posts/add', {
// //         method: 'POST',
// //         body: data,
// //         headers: {
// //           Authorization: `Bearer ${token}`, // No need for 'Content-Type', fetch sets it automatically for FormData
// //         },
// //       });

// //       const result = await response.json();

// //       console.log("response", result);

// //       navigate("/"); // Navigate back to the homepage or wherever you want
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   return (
// //     <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md mt-12">
// //       <h2 className="text-3xl font-bold mb-6 text-center">Post Your Ad</h2>
// //       <form onSubmit={handleSubmit} className="space-y-5">
// //         <div>
// //           <label className="block text-sm font-medium mb-1">Title</label>
// //           <input
// //             type="text"
// //             name="title"
// //             value={formData.title}
// //             onChange={handleChange}
// //             className="w-full border p-2 rounded-lg"
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-medium mb-1">Price</label>
// //           <input
// //             type="number"
// //             name="price"
// //             value={formData.price}
// //             onChange={handleChange}
// //             className="w-full border p-2 rounded-lg"
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-medium mb-1">Description</label>
// //           <textarea
// //             name="description"
// //             value={formData.description}
// //             onChange={handleChange}
// //             className="w-full border p-2 rounded-lg h-28"
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-medium mb-1">Category</label>
// //           <select
// //             name="category"
// //             value={formData.category}
// //             onChange={handleChange}
// //             className="w-full border p-2 rounded-lg"
// //             required
// //           >
// //             <option value="">Select a category</option>
// //             <option value="Electronics">Electronics</option>
// //             <option value="Pen">Pen & Pencil</option>
// //             <option value="Bags">Bags</option>
// //             <option value="Study Material">Study Material</option>            
// //             <option value="Cloths">Cloths</option>
// //             <option value="Books">Books & Notebooks</option>
// //           </select>
// //         </div>
// //         <div>
// //           <label className="block text-sm font-medium mb-1">Images</label>
// //           <input
// //             type="file"
// //             name="images"
// //             onChange={handleChange}
// //             className="w-full border p-2 rounded-lg"
// //             multiple
// //             accept="image/*"
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="bg-[#002f34] text-white px-5 py-2 rounded-lg w-full"
// //         >
// //           Post Ad
// //         </button>
// //       </form>
// //       <button
// //         onClick={() => navigate("/")}
// //         className="mt-5 text-sm text-gray-500 w-full text-center"
// //       >
// //         Cancel
// //       </button>
// //     </div>
// //   );
// // };

// // export default PostAdForm;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const PostAdForm = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     price: 0,
//     description: "",
//     category: "",
//     images: null,
//   });
//   const [loading, setLoading] = useState(false); // Spinner state

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === 'price' ? Number(value) : files ? files : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Show spinner
//     try {
//       const data = new FormData();
//       data.append('title', formData.title);
//       data.append('price', formData.price);
//       data.append('description', formData.description);
//       data.append('category', formData.category);

//       Array.from(formData.images || []).forEach((image) => {
//         data.append('images', image);
//       });

//       const token = localStorage.getItem('token');

//       const response = await fetch('https://campusbazzarbackend.onrender.com/api/posts/add', {
//         method: 'POST',
//         body: data,
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const result = await response.json();
//       console.log("Response:", result);

//       if (response.ok) {
//         navigate("/");
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false); // Hide spinner
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md mt-12">
//       <h2 className="text-3xl font-bold mb-6 text-center">Post Your Ad</h2>
//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div>
//           <label className="block text-sm font-medium mb-1">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-lg"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Price</label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-lg"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-lg h-28"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Category</label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-lg"
//             required
//           >
//             <option value="">Select a category</option>
//             <option value="Electronics">Electronics</option>
//             <option value="Pen">Pen & Pencil</option>
//             <option value="Bags">Bags</option>
//             <option value="Study Material">Study Material</option>            
//             <option value="Cloths">Cloths</option>
//             <option value="Books">Books & Notebooks</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Images</label>
//           <input
//             type="file"
//             name="images"
//             onChange={handleChange}
//             className="w-full border p-2 rounded-lg"
//             multiple
//             accept="image/*"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-[#002f34] text-white px-5 py-2 rounded-lg w-full flex justify-center"
//           disabled={loading}
//         >
//           {loading ? (
//             <div className="spinner border-t-4 border-blue-500 border-solid rounded-full h-5 w-5 animate-spin"></div>
//           ) : (
//             "Post Ad"
//           )}
//         </button>
//       </form>
//       <button
//         onClick={() => navigate("/")}
//         className="mt-5 text-sm text-gray-500 w-full text-center"
//       >
//         Cancel
//       </button>
//     </div>
//   );
// };

// export default PostAdForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostAdForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    images: null,
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'price' ? Number(value) : files ? files : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("price", formData.price);
      data.append("description", formData.description);
      data.append("category", formData.category);

      Array.from(formData.images || []).forEach((image) => {
        data.append("images", image);
      });

      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://campusbazzarbackend.onrender.com/api/posts/add",
        {
          method: "POST",
          body: data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();
      console.log("Response:", result);

      if (response.ok) {
        toast.success("Ad Posted Successfully!");
        setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
      } else {
        toast.error("Failed to post the ad. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md mt-12">
      <ToastContainer position="top-center" autoClose={2000} />
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
            <option value="Pen">Pen & Pencil</option>
            <option value="Bags">Bags</option>
            <option value="Study Material">Study Material</option>
            <option value="Cloths">Cloths</option>
            <option value="Books">Books & Notebooks</option>
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
        <button
          type="submit"
          className="bg-[#002f34] text-white px-5 py-2 rounded-lg w-full flex justify-center"
          disabled={loading}
        >
          {loading ? (
            <div className="spinner border-t-4 border-blue-500 border-solid rounded-full h-5 w-5 animate-spin"></div>
          ) : (
            "Post Ad"
          )}
        </button>
      </form>
      <button
        onClick={() => navigate("/")}
        className="mt-5 text-sm text-gray-500 w-full text-center"
      >
        Cancel
      </button>
    </div>
  );
};

export default PostAdForm;

