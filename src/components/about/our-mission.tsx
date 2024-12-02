import React from 'react';

const OurMission = () => {
  return (
    <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="p-3 bg-blue-100 rounded-full">
          <svg 
            className="w-6 h-6 text-blue-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M13 10V3L4 14h7v7l9-11h-7z" 
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-blue-600">Our Mission</h2>
      </div>
      <p className="text-gray-600 text-center leading-relaxed">
        To empower women by providing accessible, innovative, ensuring early intervention, 
        individualized treatment, and a supportive community to improve well-being and resilience
      </p>
    </div>
  );
};

export default OurMission;