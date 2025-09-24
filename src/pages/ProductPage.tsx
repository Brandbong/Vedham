import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Share2, Star, Leaf, Shield } from 'lucide-react';
import { products } from '../data/products';
import { addToCart } from '../utils/cart';
import ProductCard from '../components/ProductCard';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'usage'>('description');

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.id !== id && p.category === product?.category).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        {/* Animated Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 255, 161, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, #0f2419 0%, #2d4a3d 50%, #1e3329 100%)
            `
          }}
        />
        
        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-4 text-shadow">Product not found</h2>
          <Link to="/shop" className="text-electric-mint hover:text-electric-orange transition-colors">
            Return to shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const tabs = [
    { id: 'description' as const, label: 'Description' },
    { id: 'ingredients' as const, label: 'Ingredients' },
    { id: 'usage' as const, label: 'Usage Instructions' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 161, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #0f2419 0%, #2d4a3d 50%, #1e3329 100%)
          `
        }}
      />
      
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">Product <span className="gradient-text">Details</span></h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Explore the features, ingredients, and benefits of our natural products.
            </p>
            <Link 
              to="/shop" 
              className="inline-flex items-center space-x-2 text-electric-mint hover:text-electric-orange transition-colors mt-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Shop</span>
            </Link>
          </div>

          {/* Product Details */}
          <div className="glass rounded-2xl overflow-hidden mb-12 neon-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="p-8">
                <div className="aspect-square rounded-xl overflow-hidden glass card-3d">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="inline-block glass text-electric-mint px-3 py-1 rounded-full text-sm font-medium capitalize mb-4 border border-electric-mint/30">
                    {product.category}
                  </span>
                  <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-shadow">
                    {product.name}
                  </h1>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-pure-gold text-pure-gold" />
                    ))}
                    <span className="text-gray-200 ml-2 text-shadow">(4.8/5 from 124 reviews)</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-4">
                    <span className="text-4xl font-bold gradient-text">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-2xl text-gray-400 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                  <span className="text-gray-200">{product.weight}</span>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center space-x-2 glass px-3 py-2 rounded-lg border border-electric-mint/30">
                    <Leaf className="h-4 w-4 text-electric-mint" />
                    <span className="text-sm font-medium text-electric-mint">100% Natural</span>
                  </div>
                  <div className="flex items-center space-x-2 glass px-3 py-2 rounded-lg border border-electric-orange/30">
                    <Shield className="h-4 w-4 text-electric-orange" />
                    <span className="text-sm font-medium text-electric-orange">No Preservatives</span>
                  </div>
                  <div className="flex items-center space-x-2 glass px-3 py-2 rounded-lg border border-pure-gold/30">
                    <Heart className="h-4 w-4 text-pure-gold" />
                    <span className="text-sm font-medium text-pure-gold">Family Safe</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="font-semibold text-white mb-3 text-shadow">Key Benefits</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-electric-mint rounded-full glow-mint" />
                        <span className="text-gray-200">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <label className="font-medium text-white text-shadow">Quantity:</label>
                    <div className="flex items-center glass border border-electric-mint/30 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-gray-300 hover:text-electric-mint transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 border-x border-electric-mint/30 text-white">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 text-gray-300 hover:text-electric-mint transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 btn-premium py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span>Add to Cart</span>
                    </button>
                    
                    <button className="glass hover:bg-electric-mint/10 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 border border-electric-mint/30 hover:border-electric-mint/60">
                      <Heart className="h-5 w-5" />
                      <span>Save</span>
                    </button>
                    
                    <button className="glass hover:bg-electric-mint/10 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 border border-electric-mint/30 hover:border-electric-mint/60">
                      <Share2 className="h-5 w-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>

                {/* Quick Order Options */}
                <div className="border-t border-electric-mint/20 pt-6">
                  <p className="text-sm text-gray-200 mb-3 text-shadow">Quick Order Options:</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="https://wa.me/919842909360"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 glass hover:bg-electric-mint/10 text-white py-3 px-4 rounded-lg font-medium text-center transition-all duration-300 transform hover:scale-105 border border-electric-mint/30 hover:border-electric-mint/60"
                    >
                      WhatsApp Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="glass rounded-2xl overflow-hidden mb-12 neon-border">
            {/* Tab Navigation */}
            <div className="border-b border-electric-mint/20">
              <div className="flex space-x-8 px-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 font-medium transition-colors relative ${
                      activeTab === tab.id
                        ? 'text-electric-mint border-b-2 border-electric-mint'
                        : 'text-gray-300 hover:text-electric-mint'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-shadow">Product Description</h3>
                  <p className="text-gray-200 leading-relaxed mb-6 text-shadow">{product.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3 text-shadow">Health Benefits</h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-electric-mint rounded-full mt-2 flex-shrink-0 glow-mint" />
                            <span className="text-gray-200">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3 text-shadow">Product Features</h4>
                      <ul className="space-y-2 text-gray-200">
                        <li>• 100% Natural ingredients</li>
                        <li>• No artificial preservatives</li>
                        <li>• Suitable for all ages</li>
                        <li>• Easy to prepare</li>
                        <li>• Traditional recipe base</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-shadow">Ingredients List</h3>
                  <p className="text-gray-200 mb-6 text-shadow">
                    All ingredients are carefully sourced and naturally processed to maintain their nutritional value.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {product.ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className="glass border border-electric-mint/30 rounded-lg p-3 text-center hover:glow-mint transition-all duration-300"
                      >
                        <span className="text-electric-mint font-medium">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'usage' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-shadow">How to Use</h3>
                  <div className="glass border border-pure-gold/30 rounded-lg p-6 mb-6 glow-gold">
                    <p className="text-gray-200 leading-relaxed">{product.usage}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3 text-shadow">Best Time to Consume</h4>
                      <ul className="space-y-2 text-gray-200">
                        <li>• Morning: For energy boost</li>
                        <li>• Evening: As healthy snack</li>
                        <li>• Post-workout: For recovery</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3 text-shadow">Storage Instructions</h4>
                      <ul className="space-y-2 text-gray-200">
                        <li>• Store in cool, dry place</li>
                        <li>• Keep container tightly closed</li>
                        <li>• Use within 6 months of opening</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 text-shadow">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;