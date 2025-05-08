
import React from 'react';

const ShimmerBackground = () => {
  return (
    <>
      <div className="shimmer-background"></div>
      
      {/* Decorative elements with more saturated colors */}
      <div className="fixed top-[10%] left-[5%] w-64 h-64 rounded-full bg-purple-500/30 filter blur-3xl animate-float"></div>
      <div className="fixed top-[40%] right-[10%] w-72 h-72 rounded-full bg-blue-600/30 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="fixed bottom-[15%] left-[20%] w-56 h-56 rounded-full bg-pink-500/30 filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
    </>
  );
};

export default ShimmerBackground;
