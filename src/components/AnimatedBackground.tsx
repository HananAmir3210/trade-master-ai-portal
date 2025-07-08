
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main dark background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      
      {/* Primary gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Floating gradient shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-float blur-xl" />
      <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-accent/30 to-primary/30 animate-float blur-xl" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 animate-float blur-xl" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-gradient-to-r from-accent/25 to-primary/25 animate-float blur-xl" style={{ animationDelay: '0.5s' }} />
      
      {/* Additional floating elements for depth */}
      <div className="absolute top-1/3 left-1/3 w-16 h-16 rounded-full bg-primary/10 animate-float blur-lg" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-20 h-20 rounded-full bg-accent/15 animate-float blur-lg" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default AnimatedBackground;
