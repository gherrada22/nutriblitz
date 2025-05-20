import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Recipes from './components/Recipes';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { initSmoothScrolling } from './utils/scroll';
import analytics from './utils/analytics';

function App() {
  useEffect(() => {
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize analytics
    analytics.init();
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Products />
      <Benefits />
      <Recipes />
      <Testimonials />
      <About />
      <Newsletter />
      <Footer />
      <Cart />
    </div>
  );
}

export default App;