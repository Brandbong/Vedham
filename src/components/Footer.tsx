import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Heart, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 255, 161, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #0f2419 0%, #1a3b2e 50%, #2a1810 100%)
          `
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo design.png" alt="Vedham Eldix Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold gradient-text">Vedham Eldix</h3>
                <p className="text-electric-mint text-sm">Nutrition Rooted in Tradition, Crafted for Today</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Founded by educator-turned-entrepreneur Vijaya Edison, we bring traditional wisdom 
              and modern nutrition science together for your family's wellness.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full border border-electric-mint/20">
                <Shield className="h-4 w-4 text-electric-mint" />
                <span className="text-sm font-semibold text-white">100% Natural</span>
              </div>
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full border border-electric-orange/20">
                <Heart className="h-4 w-4 text-electric-orange" />
                <span className="text-sm font-semibold text-white">No Preservatives</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="glass p-2 rounded-lg group-hover:glow-mint transition-all duration-300">
                  <MapPin className="h-4 w-4 text-electric-mint flex-shrink-0" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  46.Lakshminarayana St, Maruthi Nagar, Kanchipuram
                </span>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="glass p-2 rounded-lg group-hover:glow-orange transition-all duration-300">
                  <Mail className="h-4 w-4 text-electric-orange flex-shrink-0" />
                </div>
                <a href="mailto:Support@vedhameldix.com" className="text-sm text-gray-300 hover:gradient-text transition-all duration-300">
                  Support@vedhameldix.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="glass p-2 rounded-lg group-hover:glow-mint transition-all duration-300">
                  <MessageCircle className="h-4 w-4 text-electric-mint flex-shrink-0" />
                </div>
                <a 
                  href="https://wa.me/919842909360" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:gradient-text transition-all duration-300"
                >
                  WhatsApp Order
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">Quick Order</h4>
            <div className="space-y-4">
              <a 
                href="https://wa.me/919842909360"
                target="_blank"
                rel="noopener noreferrer"
                className="block btn-premium text-center font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                WhatsApp
              </a>
              <div className="text-center glass p-4 rounded-lg border border-electric-mint/20">
                <p className="text-sm text-gray-300 mb-1">GPay Available</p>
                <p className="font-semibold gradient-text">9842909360</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Vedham Eldix. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:gradient-text transition-all duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:gradient-text transition-all duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:gradient-text transition-all duration-300">Shipping Policy</a>
            </div>
          </div>
          
          {/* Animated accent line */}
          <div className="w-full h-0.5 bg-gray-700 mt-6 relative overflow-hidden rounded-full">
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-electric-orange via-pure-gold to-electric-mint w-full animate-pulse rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;