
import React from 'react';

const ShimmerBackground = () => {
  return (
    <>
      <div className="shimmer-background"></div>
      
      {/* Decorative elements with modified opacity for better text readability */}
      <div className="fixed top-[5%] left-[2%] w-48 md:w-64 h-48 md:h-64 rounded-full bg-purple-500/15 filter blur-3xl animate-float"></div>
      <div className="fixed top-[30%] right-[5%] w-56 md:w-72 h-56 md:h-72 rounded-full bg-blue-600/15 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="fixed bottom-[10%] left-[10%] w-36 md:w-56 h-36 md:h-56 rounded-full bg-pink-500/15 filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Add a subtle overlay for text contrast */}
      <div className="fixed inset-0 bg-black/15 z-[1]"></div>
    </>
  );
};

export default ShimmerBackground;
