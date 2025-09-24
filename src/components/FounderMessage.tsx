import React, { useEffect, useRef } from 'react';
import { Quote, Award, Users, Target, Heart } from 'lucide-react';

const FounderMessage: React.FC = () => {
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
    console.log('Found elements to observe:', elements);
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
            radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #2a1810 0%, #1a3b2e 50%, #0f2419 100%)
          `
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="relative reveal">
              <div className="aspect-w-4 aspect-h-5 lg:aspect-w-3 lg:aspect-h-4">
                <div className="relative rounded-2xl overflow-hidden glass glow-gold">
                  <img
                    src="/Founder.jpg"
                    alt="Vijaya Edison - Founder of Vedham Eldix"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/40 to-transparent" />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-pure-gold to-electric-orange rounded-full opacity-30 float" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-electric-mint to-pine-green rounded-full opacity-20 float" style={{ animationDelay: '1s' }} />
            </div>

            {/* Message Content */}
            <div className="relative reveal">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full glass glow-orange mb-4">
                  <Quote className="h-6 w-6 text-electric-orange" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-shadow">
                  A Message from Our <span className="gradient-text">Founder</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-electric-orange to-pure-gold rounded-full glow-orange" />
              </div>

              <blockquote className="text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 glass p-6 rounded-xl border border-electric-mint/20">
                "After two decades of teaching, I wanted to create natural, preservative-free nutrition 
                for every household. <span className="gradient-text font-semibold">Vedham means wisdom</span> - 
                food that nourishes both body and mind. Every product we craft carries the love of a mother 
                and the precision of a teacher."
              </blockquote>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-electric-orange to-pure-gold glow-orange" />
                  <div>
                    <p className="text-xl font-bold gradient-text">Vijaya Edison</p>
                    <p className="text-electric-mint font-medium">Founder & Nutrition Expert</p>
                    <p className="text-gray-400 text-sm">Former Educator, Nutrition Entrepreneur</p>
                  </div>
                </div>

                {/* Achievement Badges */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="glass text-electric-mint px-4 py-2 rounded-full text-sm font-medium border border-electric-mint/20 neon-border">
                    20+ Years Teaching Experience
                  </div>
                  <div className="glass text-electric-orange px-4 py-2 rounded-full text-sm font-medium border border-electric-orange/20 neon-border">
                    Traditional Recipe Expert
                  </div>
                  <div className="glass text-pure-gold px-4 py-2 rounded-full text-sm font-medium border border-pure-gold/20 neon-border">
                    Family Nutrition Specialist
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
            <div className="text-center p-6 glass rounded-xl neon-border hover:glow-mint transition-all duration-300 card-3d">
              <div className="text-3xl font-bold gradient-text mb-2">33+</div>
              <div className="text-gray-300 font-medium">Natural Ingredients</div>
              <div className="mt-2">
                <Heart className="h-6 w-6 text-electric-mint mx-auto" />
              </div>
            </div>
            <div className="text-center p-6 glass rounded-xl neon-border hover:glow-orange transition-all duration-300 card-3d">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-300 font-medium">Plant-Based</div>
              <div className="mt-2">
                <Target className="h-6 w-6 text-electric-orange mx-auto" />
              </div>
            </div>
            <div className="text-center p-6 glass rounded-xl neon-border hover:glow-gold transition-all duration-300 card-3d">
              <div className="text-3xl font-bold gradient-text mb-2">0</div>
              <div className="text-gray-300 font-medium">Preservatives</div>
              <div className="mt-2">
                <Award className="h-6 w-6 text-pure-gold mx-auto" />
              </div>
            </div>
            <div className="text-center p-6 glass rounded-xl neon-border hover:glow-mint transition-all duration-300 card-3d">
              <div className="text-3xl font-bold gradient-text mb-2">1000+</div>
              <div className="text-gray-300 font-medium">Happy Families</div>
              <div className="mt-2">
                <Users className="h-6 w-6 text-electric-mint mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;