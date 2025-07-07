
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark opacity-95" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-neon/20 animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-neon/30 to-primary/30 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-primary/10 to-neon/10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-gradient-to-r from-neon/25 to-primary/25 animate-float" style={{ animationDelay: '0.5s' }} />
      
      {/* Geometric lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C896" />
            <stop offset="100%" stopColor="#00FFAA" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="10%" x2="40%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-glow" />
        <line x1="60%" y1="20%" x2="90%" y2="10%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <line x1="20%" y1="80%" x2="50%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <line x1="70%" y1="70%" x2="90%" y2="90%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
