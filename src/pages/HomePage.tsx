import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import BrandPromises from '../components/BrandPromises';
import WhyChooseUs from '../components/WhyChooseUs';
import Newsletter from '../components/Newsletter';
import FounderMessage from '../components/FounderMessage';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <BrandPromises />
      <WhyChooseUs />
      <FounderMessage />
      <Newsletter />
    </div>
  );
};

export default HomePage;