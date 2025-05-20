import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 300 300" 
        className="mr-2"
      >
        <g transform="translate(75, 50)">
          <path d="M75 0 L150 50 L75 100 L0 50 Z" fill="#C3D64F" />
          <path d="M75 10 L140 55 L75 90 L10 55 Z" fill="#8CB32E" />
          <g transform="translate(40, 40)">
            <path d="M10 0 Q50 20 35 50 Q20 30 10 0 Z" fill="#8CB32E" />
          </g>
          <g transform="translate(0, 40) scale(-1, 1)">
            <path d="M10 0 Q50 20 35 50 Q20 30 10 0 Z" fill="#C3D64F" />
          </g>
        </g>
      </svg>
      <span className="text-2xl font-bold">
        <span className="text-brown-800">Nutri</span>
        <span className="text-green-600">Blitz</span>
      </span>
    </div>
  );
};

export default Logo;