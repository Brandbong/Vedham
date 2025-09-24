import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Leaf, Zap } from 'lucide-react';
import { Product } from '../types';
import { addToCart } from '../utils/cart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Show a brief success animation
    const button = e.currentTarget as HTMLButtonElement;
    const originalContent = button.innerHTML;
    button.innerHTML = '<span class="flex items-center justify-center"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Added!</span>';
    button.classList.add('bg-electric-mint', 'text-forest-green');
    setTimeout(() => {
      button.innerHTML = originalContent;
      button.classList.remove('bg-electric-mint', 'text-forest-green');
    }, 1500);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="card-3d glass rounded-2xl overflow-hidden neon-border hover:glow-mint transition-all duration-500 gpu-accelerated">
        {/* Product Image */}
        <div className="relative aspect-w-4 aspect-h-3 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-green/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-electric-orange to-pure-gold text-forest-green px-3 py-1 rounded-full text-xs font-bold capitalize glow-orange">
              {product.category}
            </span>
          </div>

          {/* Natural Badge */}
          <div className="absolute top-3 right-3">
            <div className="glass p-2 rounded-full glow-mint">
              <Leaf className="h-4 w-4 text-electric-mint" />
            </div>
          </div>

          {/* Floating Price Tag */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <div className="bg-gradient-to-r from-electric-orange to-vibrant-coral text-white px-3 py-1 rounded-full text-sm font-bold glow-orange">
              ₹{product.price}
            </div>
          </div>
        </div>

        {/* Product Content */}
        <div className="p-6 bg-gradient-to-br from-forest-green/80 to-pine-green/80">
          {/* Product Name & Rating */}
          <div className="mb-3">
            <h3 className="text-lg font-bold text-white group-hover:gradient-text transition-all duration-300 mb-2">
              {product.name}
            </h3>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-pure-gold text-pure-gold" />
              ))}
              <span className="text-sm text-gray-300 ml-2">(4.8)</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Key Benefits */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {product.benefits.slice(0, 2).map((benefit, index) => (
                <span
                  key={index}
                  className="glass text-electric-mint px-2 py-1 rounded-md text-xs font-medium border border-electric-mint/20"
                >
                  {benefit.split(' ').slice(0, 2).join(' ')}
                </span>
              ))}
            </div>
          </div>

          {/* Price & Weight */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold gradient-text">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                )}
              </div>
              <span className="text-sm text-gray-400">{product.weight}</span>
            </div>
            <div className="glass p-2 rounded-full">
              <Zap className="h-4 w-4 text-electric-mint" />
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full btn-premium py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2 group-hover:scale-105 transition-all duration-300"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;