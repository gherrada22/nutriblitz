import React from 'react';
import Logo from './Logo';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brown-800 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-brown-200 mb-6">
              Premium superfood powders for optimal health and vitality. Made with 100% organic ingredients.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Instagram size={20} />, href: '#' },
                { icon: <Facebook size={20} />, href: '#' },
                { icon: <Twitter size={20} />, href: '#' },
                { icon: <Linkedin size={20} />, href: '#' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-brown-700 flex items-center justify-center transition-colors duration-300 hover:bg-green-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { text: 'Products', href: '#products' },
                { text: 'Benefits', href: '#benefits' },
                { text: 'Recipes', href: '#recipes' },
                { text: 'About Us', href: '#about' },
                { text: 'Contact', href: '#contact' }
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-brown-200 hover:text-green-300 transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {[
                { 
                  icon: <Mail size={16} />, 
                  text: 'comercial@nutriblitz.com.pe',
                  href: 'mailto:comercial@nutriblitz.com.pe' 
                },
                { 
                  icon: <Phone size={16} />, 
                  text: '+51 985443209',
                  href: 'tel:+51985443209' 
                },
                { 
                  icon: <MapPin size={16} />, 
                  text: 'Calle Los Álamos 173, Chorrillos',
                  href: '#' 
                }
              ].map((contact, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brown-700 flex items-center justify-center mr-3">
                    {contact.icon}
                  </div>
                  <a href={contact.href} className="text-brown-200 hover:text-green-300 transition-colors duration-200">
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Business Hours</h3>
            <ul className="space-y-3">
              {[
                { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                { day: 'Sunday', hours: 'Closed' }
              ].map((schedule, i) => (
                <li key={i} className="flex justify-between">
                  <span className="text-brown-300">{schedule.day}</span>
                  <span className="text-white font-medium">{schedule.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-brown-700 rounded-lg">
              <h4 className="font-bold text-green-300 mb-2">Customer Support</h4>
              <p className="text-brown-200 text-sm">
                Our team is available during business hours to assist you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brown-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-brown-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} NutriBlitz. All rights reserved.
            </p>
            <div className="flex flex-wrap space-x-4 text-sm">
              <a href="#" className="text-brown-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-brown-300 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-brown-300 hover:text-white transition-colors duration-200">Shipping Policy</a>
              <a href="#" className="text-brown-300 hover:text-white transition-colors duration-200">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;