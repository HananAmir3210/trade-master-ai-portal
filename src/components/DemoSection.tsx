
import React from 'react';
import { Play, Monitor, Smartphone, Tablet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DemoSection = () => {
  return (
    <section id="demo" className="section-spacing bg-background relative overflow-hidden">
      {/* Premium background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3"></div>
      
      <div className="max-w-8xl mx-auto container-padding relative">
        <div className="text-center mb-24 animate-fade-in space-y-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            See <span className="gradient-text">TradeMaster AI</span> in Action
          </h2>
          <p className="subheadline-text text-muted-foreground max-w-4xl mx-auto mb-12">
            Experience the power of AI-driven trading analysis. Watch how our platform transforms 
            raw trading data into actionable insights.
          </p>
          
          <Button 
            size="lg" 
            className="professional-button text-lg px-12 py-6 group"
          >
            <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
            Watch Live Demo
          </Button>
        </div>

        {/* Premium demo visual */}
        <div className="relative mb-24 animate-scale-in">
          <div className="premium-card rounded-3xl p-4 professional-glow">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&h=800&fit=crop"
                alt="TradeMaster AI Dashboard Demo"
                className="w-full h-auto"
              />
              {/* Professional play button overlay */}
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center group cursor-pointer hover:bg-background/40 transition-all duration-300">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform professional-glow">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          {/* Premium floating UI elements */}
          <div className="absolute -top-6 -left-6 premium-card rounded-2xl p-6 floating-element">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-muted-foreground font-medium">AI Analysis: Active</span>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 premium-card rounded-2xl p-6 floating-element" style={{ animationDelay: '2s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">+127%</div>
              <div className="text-sm text-muted-foreground">Performance</div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 premium-card rounded-2xl p-6 floating-element" style={{ animationDelay: '1s' }}>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">847</div>
                <div className="text-sm text-muted-foreground">Trades Analyzed</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">92%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium device compatibility */}
        <div className="text-center animate-fade-in space-y-12">
          <h3 className="text-3xl md:text-4xl font-semibold text-muted-foreground">
            Available on all your devices
          </h3>
          <div className="flex justify-center items-center space-x-16 lg:space-x-24">
            <div className="flex flex-col items-center text-muted-foreground group">
              <Monitor className="w-16 h-16 mb-4 text-primary group-hover:text-accent transition-colors duration-300" />
              <span className="text-lg font-medium">Desktop</span>
            </div>
            <div className="flex flex-col items-center text-muted-foreground group">
              <Tablet className="w-16 h-16 mb-4 text-primary group-hover:text-accent transition-colors duration-300" />
              <span className="text-lg font-medium">Tablet</span>
            </div>
            <div className="flex flex-col items-center text-muted-foreground group">
              <Smartphone className="w-16 h-16 mb-4 text-primary group-hover:text-accent transition-colors duration-300" />
              <span className="text-lg font-medium">Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
