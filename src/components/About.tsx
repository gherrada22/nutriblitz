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
          src="/img/history.png" 
          alt="NutriBlitz Founders" 
          className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
            <div className="absolute top-0 left-0 -ml-4 -mt-4 w-full h-full bg-green-100 rounded-lg transform -rotate-3 z-0"></div>
            <div className="absolute bottom-0 right-0 mb-4 mr-4 bg-white rounded-lg shadow-lg p-4">
              <p className="text-brown-800 font-bold">Est. 2018</p>
            </div>
          </div>
          
          <div>
            <p className="text-brown-700 mb-6">
              Founded in 2025, NUTRIBLITZ was created in response to the growing demand for fast food options without compromising nutritional quality. 
            </p>
            <p className="text-brown-700 mb-6">
              Our products are formulated with premium ingredients, such as: cocoa, maca, oats and banana, enriched with vitamins and minerals. Aimed at professionals and active people who prioritize their health without sacrificing their time, NUTRIBLITZ is more than a supplement: it is a strategic ally for an active and balanced lifestyle.
            </p>
            <h4 className="text-xl font-bold text-brown-800 mt-8 mb-4">Our Mission</h4>
            <p className="text-brown-700 mb-6">
              Our mission is to empower professionals and people with fast-paced lifestyles by offering instant fortified supplements that not only nourish the body, but also optimize time and productivity.
            </p>
             <h4 className="text-xl font-bold text-brown-800 mt-8 mb-4">Our Vision</h4>
             <p className="text-brown-700 mb-6">
              To be a leader in food innovation by 2027, recognized for revolutionizing consumer habits with fortified products that combine science, quality and convenience, adapted to a world on the move
            </p>
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