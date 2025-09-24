
import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ShoppingCart } from 'lucide-react';

const ShopPage: React.FC = () => {
  const featuredProducts = products.filter(p => p.category !== 'dosa');
  const dosaProducts = products.filter(p => p.category === 'dosa');

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-shadow-lg">
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our range of traditional and nutritious products, crafted with care.
            </p>
        </div>

        {/* Featured Products Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Dosa Mixes Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dosaProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
