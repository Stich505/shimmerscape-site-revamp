
import React from 'react';

interface TelegramIconProps {
  size?: number | string;
  className?: string;
}

const TelegramIcon: React.FC<TelegramIconProps> = ({ size = 20, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M21.5 4.5L2.5 12.5L11.5 14.5L14.5 21.5L21.5 4.5Z"></path>
      <path d="M11.5 14.5L14.25 10.5"></path>
    </svg>
  );
};

export default TelegramIcon;
