import React from 'react';

const Shimmer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <div className="flex w-full md:w-auto space-x-2">
            <div className="animate-pulse w-full md:w-64 h-10 bg-gray-200 rounded"></div>
            <div className="animate-pulse w-32 h-10 bg-lime-200 rounded"></div>
          </div>
          <div className="animate-pulse w-48 h-10 bg-orange-200 rounded"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        {[...Array(8)].map((_, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-md h-full animate-pulse"
          >
            <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="flex justify-between items-center">
                <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;