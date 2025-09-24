import React, { useEffect, useRef } from 'react';
import { Leaf, Shield, Heart, Award, Zap } from 'lucide-react';

const BrandPromises: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const promises = [
    {
      icon: Leaf,
      title: '100% Natural, Plant-Based Ingredients',
      description: 'Sourced directly from nature with no artificial additives or synthetic compounds',
      color: 'text-electric-mint',
      glowClass: 'glow-mint',
      borderColor: 'border-electric-mint/20'
    },
    {
      icon: Shield,
      title: 'No Preservatives. No Chemicals',
      description: 'Pure, clean nutrition without harmful preservatives or chemical processing',
      color: 'text-electric-orange',
      glowClass: 'glow-orange',
      borderColor: 'border-electric-orange/20'
    },
    {
      icon: Heart,
      title: 'Nutritionally Balanced for All Ages',
      description: 'Carefully formulated to meet nutritional needs from children to elderly',
      color: 'text-vibrant-coral',
      glowClass: 'glow-coral',
      borderColor: 'border-vibrant-coral/20'
    },
    {
      icon: Award,
      title: 'Traditional Recipes, Global Standards',
      description: 'Ancient wisdom meets modern quality standards for premium nutrition',
      color: 'text-pure-gold',
      glowClass: 'glow-gold',
      borderColor: 'border-pure-gold/20'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(0, 255, 161, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #0f2419 0%, #2d4a3d 50%, #1e3329 100%)
          `
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass glow-mint mb-6 pulse-glow">
            <Zap className="h-8 w-8 text-electric-mint" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-shadow">
            Our <span className="gradient-text">Brand Promises</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Every product carries our commitment to quality, tradition, and your family's health
          </p>
        </div>

        {/* Promises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((promise, index) => {
            const IconComponent = promise.icon;
            return (
              <div
                key={index}
                className={`group glass rounded-2xl p-6 neon-border hover:${promise.glowClass} transition-all duration-500 transform hover:-translate-y-2 border ${promise.borderColor} card-3d reveal gpu-accelerated`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-xl glass ${promise.glowClass} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-6 w-6 ${promise.color}`} />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  {promise.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {promise.description}
                </p>

                {/* Animated underline */}
                <div className="w-full h-0.5 bg-gray-700 mt-4 relative overflow-hidden rounded-full">
                  <div className={`absolute inset-y-0 left-0 bg-gradient-to-r from-electric-orange to-pure-gold w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal">
          <div className="inline-flex items-center space-x-4 glass px-8 py-6 rounded-xl neon-border glow-mint">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-electric-mint to-pine-green rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
              <div className="w-8 h-8 bg-gradient-to-r from-electric-orange to-vibrant-coral rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
              <div className="w-8 h-8 bg-gradient-to-r from-vibrant-coral to-pure-gold rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
              <div className="w-8 h-8 bg-gradient-to-r from-pure-gold to-electric-orange rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold gradient-text">Quality Guaranteed</div>
              <div className="text-xs text-gray-400">1000+ satisfied families</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPromises;