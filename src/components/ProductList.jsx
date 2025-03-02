// src/components/ProductList.jsx
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

const ProductList = () => {
  // const products = [
  //   { id: 1, title: 'Engineering Mathematics', price: 400, image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c', location: 'Mumbai', date: '2025-03-02' },
  //   { id: 2, title: 'Scientific Calculator', price: 250, image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952', location: 'Pune', date: '2025-03-01' },
  //   { id: 3, title: 'Physics Notebook', price: 150, image: 'https://www.schoolchamp.net/image/cache/catalog/product/stationary/notebook/practical/practical-notebook-physics-22-x-28-cms-180-pages-classmate-924x1042.webp', location: 'Delhi', date: '2025-02-28' },
  //   { id: 4, title: 'Backpack', price: 600, image: 'https://safaribags.com/cdn/shop/files/3_4bde5165-92cd-4305-b571-dea21fe6568e.jpg?v=1707731843', location: 'Bangalore', date: '2025-02-27' }
  // ];
  
  const [products,setProduct] = useState([]);

  

  const fetchProduct = async()=>{
    try{
      const response = await axios.get(`https://campusbazzarbackend.onrender.com/api/posts/get`);
      
      if(response &&  response.data && response.data.posts.length > 0)
          setProduct(response.data.posts);
      else 
          setProduct([]);
    }catch(err){
      console.error('Error at Fetch Products',err);
    }
  }

  useEffect(()=>{
    fetchProduct();
  },[]);

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Listings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
