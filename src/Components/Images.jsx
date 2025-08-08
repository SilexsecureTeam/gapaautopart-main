import React from 'react';
import { Truck, Shield, Headphones, Lock } from 'lucide-react'; // Updated icon set
import engine from '../assets/engine.png';
import part from '../assets/part.png';
import care from '../assets/care.png';
import acc from '../assets/acc.png';
import ele from '../assets/ele.png';
import bat from '../assets/bat.png';
import tool from '../assets/tool.png';
import offer from '../assets/offer.png';

const tools = [
  { text: 'Engine Oil', image: engine },
  { text: 'Car Part', image: part },
  { text: 'Car Care', image: care },
  { text: 'Car Accessories', image: acc },
  { text: 'Car Electricals', image: ele },
  { text: 'Battery', image: bat },
  { text: 'Tools', image: tool },
  { text: 'Offers', image: offer },
];

const features = [
  {
    icon: <Truck className="w-12 h-12 text-blue-600 border border-blue-600 rounded-full p-2" />,
    title: 'Nationwide Shipping',
    description: 'Shipping To All Parts of The Country',
  },
  {
    icon: <Shield className="w-12 h-12 text-green-600 border border-green-600 rounded-full p-2" />, // Matches "Safe Shopping"
    title: 'Safe Shopping',
    description: 'Payment 100% Secure',
  },
  {
    icon: <Headphones className="w-12 h-12 text-red-600 border border-red-600 rounded-full p-2" />, // Perfect for "Online Support"
    title: 'Online Support',
    description: 'Contact Us 24 Hours a Day',
  },
];

const Images = () => {
  return (
    <div className="mx-auto max-w-[1300px] px-4 md:px-8 py-3">
      {/* Grid for tools */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.text}
              className="w-26 h-26 md:w-40 md:h-40 lg:w-50 lg:h-50 object-contain"
            />
            <p className="font-semibold text-center uppercase">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Flex for features */}
      <div className="mt-8 flex flex-col sm:flex-row justify-around gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4 p-4  rounded-lg">
            {feature.icon}
            <div>
              <h3 className="font-semibold text-lg uppercase">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
