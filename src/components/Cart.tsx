import React, { useState, useEffect } from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Maca Boost',
      price: 24.99,
      quantity: 1,
      image: 'https://images.pexels.com/photos/6544097/pexels-photo-6544097.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]);
  
  const updateQuantity = (id: number, change: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) } 
          : item
      )
    );
  };
  
  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('#cart-container') && !target.closest('#cart-toggle')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);
  
  return (
    <>
      <button 
        id="cart-toggle"
        className="fixed z-40 bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative">
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </div>
      </button>
      
      <div 
        id="cart-container"
        className={`fixed top-0 right-0 h-full z-50 w-full md:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
            <h2 className="text-xl font-bold text-brown-800">Your Cart</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-brown-600 hover:text-brown-800"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto px-6 py-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 mx-auto mb-4 text-green-300">
                  <ShoppingCart size={64} />
                </div>
                <h3 className="text-lg font-medium text-brown-800 mb-2">Your cart is empty</h3>
                <p className="text-brown-600 mb-6">Looks like you haven't added any products yet.</p>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex border-b border-gray-100 pb-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow ml-4">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-brown-800">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-brown-400 hover:text-brown-600"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-green-600 font-medium">${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-brown-600 hover:bg-gray-100"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="mx-3 w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-brown-600 hover:bg-gray-100"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-4">
              <div className="flex justify-between mb-4">
                <span className="text-brown-600">Subtotal</span>
                <span className="font-medium text-brown-800">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-brown-600">Shipping</span>
                <span className="font-medium text-brown-800">Calculated at checkout</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-lg font-bold text-brown-800">Total</span>
                <span className="text-lg font-bold text-green-600">${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors duration-300">
                Proceed to Checkout
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full mt-3 text-brown-600 hover:text-brown-800 font-medium"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Cart;