import React, { useEffect, useRef } from 'react';
import { Users, Clock, BookOpen, Zap, Target, Award } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
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

  const benefits = [
    {
      icon: BookOpen,
      title: 'Traditional Wisdom',
      description: 'Recipes passed down through generations, refined with modern nutritional science for optimal health benefits.',
      stats: '200+ Years of Traditional Knowledge',
      color: 'text-electric-mint',
      glowClass: 'glow-mint',
      borderColor: 'border-electric-mint/20'
    },
    {
      icon: Users,
      title: 'Family-Focused Nutrition',
      description: 'Products designed for every family member, from growing children to elderly parents, ensuring complete wellness.',
      stats: '1000+ Happy Families',
      color: 'text-electric-orange',
      glowClass: 'glow-orange',
      borderColor: 'border-electric-orange/20'
    },
    {
      icon: Clock,
      title: 'Convenient Health',
      description: 'Easy-to-prepare nutrition that fits into busy modern lifestyles without compromising on quality or taste.',
      stats: '5 Minutes Preparation Time',
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
            radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #1a3b2e 0%, #0f2419 50%, #2a1810 100%)
          `
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass glow-gold mb-6 pulse-glow">
            <Target className="h-8 w-8 text-pure-gold" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-shadow">
            Why Choose <span className="gradient-text">Vedham Eldix</span>?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            We combine the best of traditional Indian nutrition with modern convenience, 
            creating products that nourish your family while honoring ancestral wisdom.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-orange to-pure-gold mx-auto rounded-full glow-orange" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className={`group relative glass rounded-2xl p-8 neon-border hover:${benefit.glowClass} transition-all duration-500 transform hover:-translate-y-2 border ${benefit.borderColor} card-3d reveal gpu-accelerated`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${benefit.color === 'text-electric-mint' ? 'from-electric-mint to-pine-green' : benefit.color === 'text-electric-orange' ? 'from-electric-orange to-vibrant-coral' : 'from-pure-gold to-electric-orange'}`} />
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl glass ${benefit.glowClass} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Stats */}
                <div className={`inline-block glass px-4 py-2 rounded-full text-sm font-semibold border ${benefit.borderColor} ${benefit.color}`}>
                  {benefit.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="glass rounded-2xl p-8 lg:p-12 text-center neon-border glow-mint reveal">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass glow-mint mb-6">
            <Award className="h-8 w-8 text-electric-mint" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white text-shadow">
            Ready to Experience <span className="gradient-text">Traditional Nutrition</span>?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of families who have made the switch to natural, preservative-free nutrition 
            that honors tradition while meeting modern needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919842909360"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <Zap className="h-5 w-5" />
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;