import React, { useState, useEffect, useRef } from 'react';
import { Mail, Gift, Bell, BookOpen, Send, Sparkles } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(255, 215, 0, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, #2a1810 0%, #1a3b2e 50%, #0f2419 100%)
          `
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 lg:p-12 relative overflow-hidden neon-border glow-orange reveal">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-electric-orange/20 to-pure-gold/20 rounded-full opacity-30 -translate-y-20 translate-x-20 float" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-electric-mint/20 to-pine-green/20 rounded-full opacity-30 translate-y-16 -translate-x-16 float" style={{ animationDelay: '2s' }} />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8 reveal">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass glow-orange mb-4 pulse-glow">
                  <Mail className="h-8 w-8 text-electric-orange" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-shadow">
                  Stay Connected with <span className="gradient-text">Wellness Tips</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Subscribe to receive exclusive recipes, nutrition tips, and special offers 
                  from our traditional wellness experts.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 reveal">
                <div className="text-center p-4 glass rounded-xl border border-electric-mint/20 hover:glow-mint transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 glass rounded-full mb-3 glow-mint">
                    <Gift className="h-6 w-6 text-electric-mint" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Exclusive Offers</h4>
                  <p className="text-sm text-gray-300">Get first access to new products and special discounts</p>
                </div>
                
                <div className="text-center p-4 glass rounded-xl border border-electric-orange/20 hover:glow-orange transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 glass rounded-full mb-3 glow-orange">
                    <BookOpen className="h-6 w-6 text-electric-orange" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Traditional Recipes</h4>
                  <p className="text-sm text-gray-300">Ancient recipes and modern preparation techniques</p>
                </div>
                
                <div className="text-center p-4 glass rounded-xl border border-pure-gold/20 hover:glow-gold transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 glass rounded-full mb-3 glow-gold">
                    <Bell className="h-6 w-6 text-pure-gold" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Health Tips</h4>
                  <p className="text-sm text-gray-300">Expert nutrition advice for your family's wellness</p>
                </div>
              </div>

              {/* Newsletter Form */}
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto reveal">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-4 glass border border-electric-mint/30 rounded-xl focus:ring-2 focus:ring-electric-mint focus:border-transparent outline-none text-white placeholder-gray-400 transition-all duration-300"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-premium px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap flex items-center justify-center space-x-2"
                    >
                      <Send className="h-4 w-4" />
                      <span>Subscribe Now</span>
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 mt-3 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <div className="max-w-md mx-auto text-center reveal">
                  <div className="inline-flex items-center justify-center w-16 h-16 glass rounded-full mb-4 glow-mint">
                    <svg className="w-8 h-8 text-electric-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold gradient-text mb-2">Thank You!</h3>
                  <p className="text-gray-300">
                    You've successfully subscribed to our wellness newsletter. 
                    Check your inbox for a welcome message!
                  </p>
                </div>
              )}

              {/* Social Proof */}
              <div className="text-center mt-8 reveal">
                <p className="text-sm text-gray-400 mb-2">Trusted by 1000+ health-conscious families</p>
                <div className="flex justify-center items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-pure-gold fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-400 ml-2">4.9/5 customer satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;