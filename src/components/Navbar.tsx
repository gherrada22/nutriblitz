import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                ['Productos', 'products'],
                ['Beneficios', 'benefits'],
                ['Recetas', 'recipes'],
                ['Nosotros', 'about'],
                ['Contacto', 'contact']
              ].map(([label, href]) => (
                <li key={href}>
                  <a 
                    href={`#${href}`} 
                    className={`font-medium transition-colors duration-200 ${
                      isScrolled ? 'text-brown-700 hover:text-green-600' : 'text-brown-800 hover:text-green-500'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2">
              <ShoppingCart className={`w-6 h-6 ${isScrolled ? 'text-brown-700' : 'text-brown-800'}`} />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
            </button>
            
            <button 
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors duration-300 hidden md:block font-medium"
            >
              Comprar Ahora
            </button>
            
            <button 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-brown-700' : 'text-brown-800'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-brown-700' : 'text-brown-800'}`} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menú móvil */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 bg-white shadow-lg">
          <ul className="space-y-2">
            {[
              ['Productos', 'products'],
              ['Beneficios', 'benefits'],
              ['Recetas', 'recipes'],
              ['Nosotros', 'about'],
              ['Contacto', 'contact']
            ].map(([label, href]) => (
              <li key={href}>
                <a 
                  href={`#${href}`}
                  className="block px-3 py-2 text-brown-700 font-medium hover:bg-green-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button 
                className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md transition-colors duration-300 font-medium"
              >
                Comprar Ahora
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;