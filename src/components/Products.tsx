import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  color: string;
  bgColor: string;
  price: number;
  image: string;
}

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<number>(1);
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Impulso Maca',
      description: 'Polvo de maca energizante con propiedades adaptógenas para mejorar la resistencia y vitalidad.',
      color: 'yellow-600',
      bgColor: 'yellow-100',
      price: 24.99,
      image: 'https://images.pexels.com/photos/6544097/pexels-photo-6544097.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      name: 'Poder Cacao',
      description: 'Rico polvo de cacao antioxidante que mejora el estado de ánimo y proporciona energía sostenida.',
      color: 'brown-600',
      bgColor: 'brown-100',
      price: 22.99,
      image: 'https://images.pexels.com/photos/6544095/pexels-photo-6544095.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      name: 'Energía Plátano',
      description: 'Nutritiva harina de plátano para la salud digestiva y dulzura natural en tus batidos.',
      color: 'yellow-500',
      bgColor: 'yellow-50',
      price: 19.99,
      image: 'https://images.pexels.com/photos/992824/pexels-photo-992824.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      name: 'Base Avena',
      description: 'Saludable polvo de avena que proporciona carbohidratos complejos para energía duradera.',
      color: 'amber-600',
      bgColor: 'amber-50',
      price: 18.99,
      image: 'https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];
  
  const product = products.find(p => p.id === selectedProduct) || products[0];
  
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <span className="text-green-500 font-medium">NUESTROS PRODUCTOS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 text-center mt-2">
            Superalimentos Premium en Polvo
          </h2>
          <div className="w-16 h-1 bg-green-500 rounded mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className={`h-80 bg-${product.bgColor} flex items-center justify-center p-8`}>
                <img 
                  src={product.image}
                  alt={product.name} 
                  className="max-h-full object-contain mx-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-2xl font-bold text-${product.color}`}>{product.name}</h3>
                  <span className="text-xl font-semibold text-brown-800">${product.price}</span>
                </div>
                <p className="text-brown-600 mb-6">{product.description}</p>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors duration-300">
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {products.map(p => (
                <button
                  key={p.id}
                  className={`relative p-4 rounded-xl transition-all duration-300 ${
                    selectedProduct === p.id 
                      ? `bg-${p.bgColor} ring-2 ring-${p.color}` 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedProduct(p.id)}
                >
                  <div className="aspect-square rounded-lg overflow-hidden mb-2">
                    <img 
                      src={p.image} 
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <span className={`block text-center font-medium ${
                    selectedProduct === p.id ? `text-${p.color}` : 'text-brown-700'
                  }`}>
                    {p.name}
                  </span>
                  {selectedProduct === p.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rotate-45"></div>
                  )}
                </button>
              ))}
            </div>
            
            <div className="mt-8 bg-green-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-brown-800 mb-4">
                Por Qué Nuestros Polvos Son Especiales
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: '100% Orgánico', description: 'Ingredientes orgánicos certificados de granjas sostenibles' },
                  { title: 'Sin Aditivos', description: 'Libre de sabores, colores y conservantes artificiales' },
                  { title: 'Rico en Nutrientes', description: 'Repleto de vitaminas, minerales y antioxidantes' },
                  { title: 'Vegano y Sin Gluten', description: 'Apto para diversas restricciones y preferencias dietéticas' }
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-brown-800">{item.title}</h4>
                      <p className="text-sm text-brown-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <button className="bg-transparent border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300">
                  Ver Todos los Productos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;