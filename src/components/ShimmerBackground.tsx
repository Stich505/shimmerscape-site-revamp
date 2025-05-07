
import React from 'react';

const ShimmerBackground = () => {
  return (
    <>
      <div className="shimmer-background"></div>
      
      {/* Decorative elements */}
      <div className="fixed top-[10%] left-[5%] w-64 h-64 rounded-full bg-shimmer-accent/10 filter blur-3xl animate-float"></div>
      <div className="fixed top-[40%] right-[10%] w-72 h-72 rounded-full bg-shimmer-dark/10 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="fixed bottom-[15%] left-[20%] w-56 h-56 rounded-full bg-shimmer-medium/10 filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
    </>
  );
};

export default ShimmerBackground;
