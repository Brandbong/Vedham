import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Location',
      details: '46.Lakshminarayana St, Maruthi Nagar, Kanchipuram',
      action: 'Get Directions',
      link: 'https://maps.google.com/?q=46.Lakshminarayana+St,+Maruthi+Nagar,+Kanchipuram',
      color: 'text-green-600 bg-green-50'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'Support@vedhameldix.com',
      action: 'Send Email',
      link: 'mailto:Support@vedhameldix.com?subject=Question%20from%20Website&body=Hello,%20I%20have%20a%20question.',
      color: 'text-orange-600 bg-orange-50'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: 'Quick responses via WhatsApp',
      action: 'Message Us',
      link: 'https://wa.me/919842909360?text=Hi%20Vedha%20Meldix,%20I%20have%20a%20question.',
      color: 'text-green-600 bg-green-50'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 2:00 PM' }
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
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-shadow">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto text-shadow">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 text-shadow">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a 
                        key={index} 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block glass rounded-xl p-6 neon-border hover:glow-mint transition-all duration-300 card-3d group"
                      >
                        <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-electric-mint to-electric-orange mb-4 glow-mint">
                          <IconComponent className="h-6 w-6 text-forest-green" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                        <p className="text-gray-200 mb-3">{info.details}</p>
                        <div className="inline-flex items-center text-electric-mint group-hover:text-electric-orange font-medium transition-colors">
                          {info.action}
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <div className="glass rounded-xl p-6 neon-border">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-electric-mint mr-3" />
                  <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-200">{schedule.day}</span>
                      <span className="font-medium text-electric-mint">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl p-8 neon-border">
                <h2 className="text-2xl font-bold text-white mb-6 text-shadow">Send Us a Message</h2>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 glass border border-electric-mint/30 rounded-lg focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors text-white placeholder-gray-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 glass border border-electric-mint/30 rounded-lg focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors text-white placeholder-gray-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 glass border border-electric-mint/30 rounded-lg focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors text-white placeholder-gray-300"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 glass border border-electric-mint/30 rounded-lg focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors text-white"
                        >
                          <option value="" className="bg-forest-green text-white">Select a subject</option>
                          <option value="product-inquiry" className="bg-forest-green text-white">Product Inquiry</option>
                          <option value="bulk-order" className="bg-forest-green text-white">Bulk Order</option>
                          <option value="nutritional-advice" className="bg-forest-green text-white">Nutritional Advice</option>
                          <option value="partnership" className="bg-forest-green text-white">Partnership Opportunity</option>
                          <option value="feedback" className="bg-forest-green text-white">Feedback</option>
                          <option value="other" className="bg-forest-green text-white">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 glass border border-electric-mint/30 rounded-lg focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors resize-vertical text-white placeholder-gray-300"
                        placeholder="Please describe how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-premium py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 glass rounded-full mb-4 glow-mint">
                      <svg className="w-8 h-8 text-electric-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-electric-mint mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-200">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Order Section */}
        <div className="mt-16">
          <div className="glass rounded-2xl p-8 neon-border glow-orange text-center">
            <h2 className="text-2xl font-bold mb-4 text-white text-shadow">Need to Place an Order Quickly?</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto text-shadow">
              For immediate assistance with orders or product information, reach out to us on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919842909360?text=Hi,%20I%20would%20like%20to%20place%20a%20quick%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;