import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const FeaturedProducts: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuredProducts = products.slice(0, 4);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 70% 30%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 30% 70%, rgba(0, 255, 161, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #1a3b2e 0%, #0f2419 50%, #2a1810 100%)
          `
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass glow-mint mb-6">
            <Sparkles className="h-8 w-8 text-electric-mint" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-shadow">
            Featured <span className="gradient-text">Nutrition Products</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Discover our most popular traditional nutrition blends, carefully crafted 
            with premium ingredients for your family's wellness.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-orange to-pure-gold mx-auto rounded-full glow-orange" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center reveal">
          <Link
            to="/shop"
            className="group btn-premium text-lg px-10 py-5 inline-flex items-center space-x-3 gpu-accelerated"
          >
            <span>View All Products</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;