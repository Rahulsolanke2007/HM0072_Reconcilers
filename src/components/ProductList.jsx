// src/components/ProductList.jsx
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    { title: 'Engineering Mathematics', price: 400, image: 'https://via.placeholder.com/300' },
    { title: 'Scientific Calculator', price: 250, image: 'https://via.placeholder.com/300' },
    { title: 'Physics Notebook', price: 150, image: 'https://via.placeholder.com/300' },
    { title: 'Backpack', price: 600, image: 'https://via.placeholder.com/300' },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Listings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
