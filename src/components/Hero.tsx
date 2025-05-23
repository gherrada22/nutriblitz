import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-green-100 opacity-70"></div>
        <div className="absolute -left-20 top-1/3 w-72 h-72 rounded-full bg-yellow-100 opacity-60"></div>
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full bg-green-200 opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown-800 leading-tight">
              Power Your Day with Premium <span className="text-green-600">Nutrition</span>
            </h1>
            <p className="mt-4 text-xl text-brown-700 max-w-lg">
              Delicious superfood powder shakes, packed with essential nutrients for optimal health and vitality.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Shop Now
              </button>
              <button className="border-2 border-brown-700 text-brown-800 hover:bg-brown-700 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
                Learn More
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-yellow-300 to-green-400"></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-yellow-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-white rounded-full shadow-2xl overflow-hidden">
                <img 
                  src="/img/torta.png"
                  alt="NutriBlitz Shake" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
                <div className="bg-yellow-100 rounded-full p-2">
                  <span className="block text-center font-bold text-yellow-700">100% Natural</span>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce delay-300">
                <div className="bg-green-100 rounded-full p-2">
                  <span className="block text-center font-bold text-green-700">Vegan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;