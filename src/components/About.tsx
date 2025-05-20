import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <span className="text-green-600 font-medium">OUR STORY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 text-center mt-2">
            The NutriBlitz Journey
          </h2>
          <div className="w-16 h-1 bg-green-500 rounded mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="NutriBlitz Founders" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-0 left-0 -ml-4 -mt-4 w-full h-full bg-green-100 rounded-lg transform -rotate-3 z-0"></div>
            <div className="absolute bottom-0 right-0 mb-4 mr-4 bg-white rounded-lg shadow-lg p-4">
              <p className="text-brown-800 font-bold">Est. 2018</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-brown-800 mb-6">From Kitchen Experiment to Premium Brand</h3>
            <p className="text-brown-700 mb-6">
              NutriBlitz began in 2018 as a kitchen experiment by Sofia and Marco, two nutritionists passionate about creating superfood blends that were both delicious and functional.
            </p>
            <p className="text-brown-700 mb-6">
              Frustrated by the artificial ingredients and excessive sugars in conventional protein powders, they set out to create a truly clean alternative using only whole food ingredients. After months of testing, they perfected their first formula – the now-legendary Maca Boost.
            </p>
            <p className="text-brown-700 mb-6">
              What started as homemade blends for friends and family quickly gained popularity through local farmers' markets and wellness events. Today, NutriBlitz has grown into a premium brand trusted by health enthusiasts, athletes, and busy professionals around the world.
            </p>
            <h4 className="text-xl font-bold text-brown-800 mt-8 mb-4">Our Mission</h4>
            <p className="text-brown-700 mb-6">
              We're committed to making nutrition simple, accessible, and enjoyable for everyone. With NutriBlitz, you don't have to choose between convenience, taste, and health – you can have all three.
            </p>
            <div className="mt-8">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-brown-800 text-center mb-10">Our Values</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Quality",
                  description: "We never compromise on ingredients and source only the finest organic superfoods."
                },
                {
                  title: "Sustainability",
                  description: "Our packaging is eco-friendly, and we partner with farms that use sustainable practices."
                },
                {
                  title: "Transparency",
                  description: "We're open about where our ingredients come from and how our products are made."
                },
                {
                  title: "Community",
                  description: "We give back by supporting nutrition education in underserved communities."
                }
              ].map((value, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-green-600 text-xl font-bold">{i + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-brown-800 mb-3">{value.title}</h4>
                  <p className="text-brown-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;