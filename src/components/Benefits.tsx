import React from 'react';
import { Zap, BarChart, Heart, Clock } from 'lucide-react';

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const Benefits: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      icon: <Zap size={24} />,
      title: 'Sustained Energy',
      description: 'Combat fatigue for 4-6 hours thanks to maca and cacao.',
      color: 'yellow-400'
    },
    {
      icon: <BarChart size={24} />,
      title: 'Quick & Easy',
      description: 'Mix with water, milk, or fruits. Ready in 60 seconds!',
      color: 'green-500'
    },
    {
      icon: <Heart size={24} />,
      title: 'Smart Nutrition',
      description: 'Fortified with iron, vitamin B12, and fiber.',
      color: 'green-600'
    },
    {
      icon: <Clock size={24} />,
      title: 'Guaranteed Satiety',
      description: 'Forget about morning cravings.',
      color: 'brown-400'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-brown-50 to-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <span className="text-green-600 font-medium">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 text-center mt-2">
            Benefits That Transform Your Day
          </h2>
          <div className="w-16 h-1 bg-green-500 rounded mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-full bg-${benefit.color} bg-opacity-20 flex items-center justify-center mb-4`}>
                <div className={`text-${benefit.color}`}>{benefit.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-brown-800 mb-2">{benefit.title}</h3>
              <p className="text-brown-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-green-600 font-medium">QUALITY COMMITMENT</span>
              <h3 className="text-2xl md:text-3xl font-bold text-brown-800 mt-2 mb-4">
                We Never Compromise on Ingredient Quality
              </h3>
              <p className="text-brown-600 mb-6">
                At NutriBlitz, we believe what goes into your body matters. That's why we use only the highest quality organic ingredients, free from pesticides, GMOs, artificial flavors, and preservatives.
              </p>
              <ul className="space-y-3">
                {[
                  'Premium organic ingredients from sustainable farms',
                  'Rigorous quality and purity testing',
                  'No artificial additives or fillers',
                  'Transparent sourcing and manufacturing',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-1">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-brown-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg self-start">
                Learn More
              </button>
            </div>
            <div className="bg-green-100 relative hidden md:block">
              <img 
                src="https://images.pexels.com/photos/5966431/pexels-photo-5966431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Organic ingredients" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-yellow-600 mix-blend-multiply opacity-30"></div>
              <div className="absolute bottom-8 left-8 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 1L12 6H17L13.5 9.5L15 15L10 12L5 15L6.5 9.5L3 6H8L10 1Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-green-600 font-bold">4.9/5 Stars</p>
                    <p className="text-brown-700 text-sm">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;