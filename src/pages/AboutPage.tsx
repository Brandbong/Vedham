import React from 'react';
import { Award, Users, Heart, Target, Leaf, BookOpen } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Natural & Pure',
      description: 'We source only the finest natural ingredients, ensuring every product is free from harmful chemicals and preservatives.'
    },
    {
      icon: BookOpen,
      title: 'Traditional Wisdom',
      description: 'Our recipes are based on centuries-old traditional knowledge, passed down through generations of wellness experts.'
    },
    {
      icon: Heart,
      title: 'Family First',
      description: 'Every product is created with families in mind, providing nutrition that supports health from childhood through senior years.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards of quality, combining traditional methods with modern safety and hygiene practices.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'Vijaya Edison started Vedham Eldix with a vision to bring natural nutrition to every household' },
    { year: '2021', title: 'First Products', description: 'Launched our signature Nutri Meal and ABC Malt with overwhelming positive response' },
    { year: '2022', title: 'Expansion', description: 'Introduced specialized dosa mixes and weight management products' },
    { year: '2023', title: 'Community Growth', description: 'Reached 500+ satisfied families across Tamil Nadu' },
    { year: '2024', title: 'Recognition', description: 'Received local awards for promoting traditional nutrition and health' },
    { year: '2025', title: 'Digital Presence', description: 'Launched online platform to serve families across India' }
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
      
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-shadow">
              About <span className="gradient-text">Vedham Eldix</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200 text-shadow">
              Rooted in tradition, crafted for today's families. We bring the wisdom of ancient nutrition 
              to modern kitchens with love, care, and uncompromising quality.
            </p>
          </div>
        </div>

        {/* Founder Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 text-shadow">
                  The Story Behind <span className="gradient-text-mint">Vedham Eldix</span>
                </h2>
                <div className="space-y-4 text-gray-200 leading-relaxed text-shadow">
                  <p>
                    <strong className="text-electric-mint">Vijaya Edison</strong>, our founder, spent over two decades 
                    as an educator, nurturing young minds and understanding the importance of proper nutrition 
                    in child development. As a teacher, she witnessed firsthand how poor nutrition affected 
                    students' concentration, energy levels, and overall well-being.
                  </p>
                  <p>
                    Driven by a mother's instinct and an educator's insight, Vijaya began researching traditional 
                    Indian nutrition practices. She discovered that our ancestors had perfected the art of 
                    combining multiple grains, nuts, and natural ingredients to create complete nutritional profiles.
                  </p>
                  <p>
                    The name <strong className="text-electric-mint">"Vedham"</strong> means wisdom in Sanskrit - 
                    representing the ancient knowledge that forms the foundation of our products. Every recipe 
                    is a careful balance of taste, nutrition, and tradition, designed to nourish both body and mind.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="glass px-4 py-2 rounded-full neon-border">
                    <span className="text-electric-mint font-medium">20+ Years Teaching Experience</span>
                  </div>
                  <div className="glass px-4 py-2 rounded-full neon-border">
                    <span className="text-electric-orange font-medium">Traditional Recipe Expert</span>
                  </div>
                  <div className="glass px-4 py-2 rounded-full neon-border">
                    <span className="text-pure-gold font-medium">Family Wellness Advocate</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="/Founder.jpg"
                  alt="Vijaya Edison - Founder of Vedham Eldix"
                  className="w-full rounded-2xl shadow-2xl card-3d"
                />
                <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl neon-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">1000+</div>
                    <div className="text-sm text-gray-200">Happy Families</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 text-shadow">
                Our <span className="gradient-text-mint">Core Values</span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto text-shadow">
                These principles guide every decision we make and every product we create
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 neon-border hover:glow-mint transition-all duration-300 transform hover:-translate-y-1 card-3d"
                  >
                    <div className="bg-gradient-to-r from-electric-mint to-electric-orange w-12 h-12 rounded-lg flex items-center justify-center mb-4 glow-mint">
                      <IconComponent className="h-6 w-6 text-forest-green" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-200 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="glass rounded-2xl p-8 neon-border glow-mint">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 mr-3 text-electric-mint" />
                  <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  To make traditional, natural nutrition accessible to every Indian family by combining 
                  ancestral wisdom with modern convenience. We strive to eliminate harmful preservatives 
                  and chemicals from family nutrition while maintaining the authentic taste and benefits 
                  of time-tested recipes.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 neon-border glow-orange">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 mr-3 text-electric-orange" />
                  <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  To become India's most trusted brand for traditional nutrition products, helping families 
                  across the nation rediscover the power of natural, preservative-free foods. We envision 
                  a future where every household has access to products that nourish both body and soul.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 text-shadow">
                Our <span className="gradient-text-mint">Journey</span>
              </h2>
              <p className="text-lg text-gray-200 text-shadow">
                From a teacher's vision to a trusted nutrition brand
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-electric-mint to-electric-orange" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-electric-orange to-electric-mint rounded-full border-4 border-forest-green shadow-lg z-10 glow-mint" />

                    {/* Content */}
                    <div
                      className={`glass rounded-xl neon-border p-6 max-w-md ${
                        index % 2 === 0 ? 'mr-auto pr-12' : 'ml-auto pl-12'
                      }`}
                    >
                      <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-200">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass rounded-2xl p-12 neon-border glow-mint">
              <h2 className="text-3xl font-bold mb-4 text-white text-shadow">Ready to Experience Traditional Nutrition?</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto text-shadow">
                Join our family of satisfied customers and discover the difference that natural, 
                traditional nutrition can make in your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919842909360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;