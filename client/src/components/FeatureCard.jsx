import React from 'react';
import { Cloud, Monitor, Database } from 'lucide-react';

const FeatureCard = ({ number, title, description, icon: Icon }) => (
  <div className="bg-white rounded-lg p-6 relative shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <div className="text-4xl font-bold text-black absolute -top-4 -left-2">
      {number.padStart(2, '0')}
    </div>
    <div className="bg-gray-200 rounded-full p-2 inline-block mb-4">
      <Icon className="text-gray-800" size={24} />
    </div>
    <h3 className="text-gray-800 text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm mb-4">{description}</p>
    <a href="#" className="text-blue-900 font-bold text-sm hover:underline">
      Learn More &rarr;
    </a>
  </div>
);

const FeatureSection = () => {
  const features = [
    {
      number: '1',
      title: 'Integrate our program',
      description: 'You can integrate our program into your product by just copy and paste our "special" js code',
      icon: Cloud,
    },
    {
      number: '2',
      title: 'Optimizing on dashboard',
      description: 'You can integrate our program into your product by just copy and paste our "special" js code',
      icon: Monitor,
    },
    {
      number: '3',
      title: 'Let our program work',
      description: 'You can integrate our program into your product by just copy and paste our "special" js code',
      icon: Database,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen py-16 px-4">
      <div className="w-full">
        <h2 className="text-gray-800 text-center text-2xl font-semibold mb-12">
        Say goodbye to confusion and hello to straightforward <br/> solutions for your charitable initiatives.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
