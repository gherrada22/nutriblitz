import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      content: "I've tried countless protein powders, but NutriBlitz is in a league of its own. The Maca Boost gives me sustained energy throughout my workouts without any crash. Plus, it tastes amazing with just water – no chalky aftertaste!",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Busy Professional",
      content: "As someone with a hectic schedule, NutriBlitz has been a game-changer for my mornings. The Cacao Power blend is my go-to breakfast that keeps me full and focused until lunch. The convenience and quality are unmatched!",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Yoga Instructor",
      content: "The natural ingredients in NutriBlitz align perfectly with my holistic approach to health. I love that there are no artificial additives, and my clients have noticed a difference in their energy levels when incorporating these shakes into their routine.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-yellow-50 to-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <span className="text-green-600 font-medium">HAPPY CUSTOMERS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 text-center mt-2">
            What People Are Saying
          </h2>
          <div className="w-16 h-1 bg-green-500 rounded mt-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-700 ${
                  activeIndex === index ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-green-100">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-brown-800">{testimonial.name}</h3>
                      <p className="text-green-600 mb-4">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="relative">
                      <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-green-100" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.7662 12.86C3.84678 12.86 3.07448 12.5533 2.4493 11.94C1.85651 11.3266 1.56012 10.4467 1.56012 9.3C1.56012 8.2333 1.8032 7.2 2.28938 6.2C2.80796 5.1733 3.48441 4.2333 4.31876 3.38C5.15311 2.5266 6.11513 1.78 7.20484 1.14L8.00378 2.38C7.21498 2.88 6.53359 3.42 5.95963 4C5.38566 4.58 4.94677 5.1533 4.64297 5.72C4.33917 6.2867 4.18726 6.8533 4.18726 7.42C4.29499 7.3467 4.56592 7.31 5.00003 7.31C5.71423 7.31 6.30551 7.5567 6.77386 8.05C7.24221 8.5167 7.39762 9.2 7.39762 10.08V10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0734 12.86 10.3011 12.5533 9.67589 11.94C9.0851 11.3266 8.7887 10.4467 8.7887 9.3C8.7887 8.2333 9.03178 7.2 9.51796 6.2C10.0365 5.1733 10.713 4.2333 11.5474 3.38C12.3817 2.5266 13.3437 1.78 14.4334 1.14L15.2324 2.38C14.4436 2.88 13.7622 3.42 13.1882 4C12.6143 4.58 12.1754 5.1533 11.8716 5.72C11.5678 6.2867 11.4159 6.8533 11.4159 7.42C11.5236 7.3467 11.7945 7.31 12.2286 7.31C12.9428 7.31 13.5341 7.5567 14.0025 8.05C14.4708 8.5167 14.6242 9.2 14.6242 10.08V10.3Z" fill="currentColor"></path>
                      </svg>
                      <p className="relative text-lg text-brown-700 italic">{testimonial.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-2 focus:outline-none transition-colors duration-300 ${
                  activeIndex === index ? 'bg-green-500' : 'bg-gray-300 hover:bg-green-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { count: '10k+', label: 'Happy Customers' },
                { count: '24', label: 'Countries Shipped To' },
                { count: '4.9', label: 'Average Rating' },
                { count: '98%', label: 'Would Recommend' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-green-600 mb-2">{stat.count}</span>
                  <span className="text-brown-700">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;