
import React from 'react';

const ShimmerBackground = () => {
  return (
    <>
      <div className="shimmer-background"></div>
      
      {/* Animated colorful background blobs with increased vibrancy */}
      <div className="fixed top-[5%] left-[2%] w-48 md:w-64 h-48 md:h-64 rounded-full bg-purple-500/25 filter blur-3xl animate-float"></div>
      <div className="fixed top-[30%] right-[5%] w-56 md:w-72 h-56 md:h-72 rounded-full bg-blue-600/25 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="fixed bottom-[10%] left-[10%] w-36 md:w-56 h-36 md:h-56 rounded-full bg-pink-500/25 filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Additional colorful elements */}
      <div className="fixed top-[50%] left-[35%] w-40 md:w-60 h-40 md:h-60 rounded-full bg-indigo-500/20 filter blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      <div className="fixed bottom-[30%] right-[20%] w-28 md:w-48 h-28 md:h-48 rounded-full bg-cyan-500/20 filter blur-3xl animate-float" style={{ animationDelay: '2.5s' }}></div>
      <div className="fixed top-[15%] right-[25%] w-24 md:w-40 h-24 md:h-40 rounded-full bg-orange-500/15 filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Add a subtle overlay for text contrast */}
      <div className="fixed inset-0 bg-black/15 z-[1]"></div>
      
      {/* Subtle animated particles */}
      <div className="fixed inset-0 z-[1] overflow-hidden opacity-30">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ShimmerBackground;
