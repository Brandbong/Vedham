import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Leaf, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Particles */}
      <div ref={particlesRef} className="particles" />
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <div className="w-32 h-32 rounded-full glow-mint float" 
             style={{ background: 'linear-gradient(135deg, #00ffa1, #1a3b2e)', animationDelay: '0s' }} />
      </div>
      <div className="absolute top-40 right-20 opacity-20">
        <div className="w-24 h-24 rounded-full glow-orange float" 
             style={{ background: 'linear-gradient(135deg, #ff6b35, #ffd700)', animationDelay: '2s' }} />
      </div>
      <div className="absolute bottom-32 left-1/4 opacity-25">
        <div className="w-16 h-16 rounded-full glow-gold float" 
             style={{ background: 'linear-gradient(135deg, #ffd700, #ff6b35)', animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto pt-20">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-shadow">
            Nutrition Rooted in{' '}
            <span className="gradient-text">Tradition</span>,<br />
            Crafted for{' '}
            <span className="gradient-text-mint">Today</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed text-shadow">
            Discover the wisdom of traditional nutrition, crafted for modern families. 
            Our preservative-free, plant-based products bring the ancient health secrets to your kitchen.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 glass px-6 py-3 rounded-full neon-border">
              <Leaf className="h-5 w-5 text-electric-mint" />
              <span className="text-white font-medium">100% Natural</span>
            </div>
            <div className="flex items-center space-x-2 glass px-6 py-3 rounded-full neon-border">
              <Shield className="h-5 w-5 text-electric-mint" />
              <span className="text-white font-medium">Plant-Based</span>
            </div>
            <div className="flex items-center space-x-2 glass px-6 py-3 rounded-full neon-border">
              <Heart className="h-5 w-5 text-electric-mint" />
              <span className="text-white font-medium">Preservative-Free</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/shop"
              className="group btn-premium text-lg px-10 py-5 flex items-center space-x-3 gpu-accelerated"
            >
              <span>Shop Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/about"
              className="group glass hover:bg-white/20 text-white border-2 border-electric-mint/30 hover:border-electric-mint/60 px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 gpu-accelerated"
            >
              Our Story
            </Link>
          </div>

          {/* Quick Contact */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300">
            <div className="flex items-center space-x-2">
              <span>WhatsApp:</span>
              <a 
                href="https://wa.me/919842909360" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gradient-text hover:text-electric-mint font-semibold transition-colors"
              >
                Message Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric-mint/50 rounded-full flex justify-center glow-mint">
          <div className="w-1 h-3 bg-electric-mint rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
