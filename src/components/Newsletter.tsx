import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-20 bg-green-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -right-20 top-10 w-40 h-40 rounded-full bg-green-500 opacity-40"></div>
        <div className="absolute -left-10 bottom-10 w-32 h-32 rounded-full bg-yellow-400 opacity-30"></div>
        <div className="absolute right-1/4 bottom-0 w-24 h-24 rounded-full bg-green-700 opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
              Join the NutriBlitz Community
            </h2>
            <p className="text-brown-600">
              Subscribe to our newsletter for exclusive recipes, special offers, and wellness tips.
            </p>
          </div>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                    disabled={loading}
                  />
                  {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
                </div>
                <button
                  type="submit"
                  className={`bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              <div className="mt-4 text-center text-brown-600 text-sm">
                We respect your privacy. Unsubscribe at any time.
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brown-800 mb-2">Thank You for Subscribing!</h3>
              <p className="text-brown-600">
                You're now part of the NutriBlitz community. Check your inbox soon for a special welcome gift!
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-block text-green-600 hover:text-green-700 font-medium"
              >
                Subscribe another email
              </button>
            </div>
          )}
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-white">
          {[
            {
              title: "10% Off First Order",
              description: "New subscribers receive a 10% discount code for their first purchase."
            },
            {
              title: "Weekly Recipes",
              description: "Get fresh, exclusive recipes using our superfood powders every week."
            },
            {
              title: "Exclusive Offers",
              description: "Be the first to know about new products, promotions, and limited editions."
            }
          ].map((benefit, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6H4V18H20V6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 6L12 14L4 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-green-100">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;