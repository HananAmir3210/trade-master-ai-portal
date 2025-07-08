
import React from 'react';
import { Play, Monitor, Smartphone, Tablet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DemoSection = () => {
  return (
    <section id="demo" className="section-spacing relative overflow-hidden">
      <div className="max-w-8xl mx-auto container-padding relative">
        <div className="text-center mb-20 animate-fade-in space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            See <span className="gradient-text">TradeMaster AI</span> in Action
          </h2>
          <p className="subheadline-text max-w-3xl mx-auto mb-10">
            Experience AI-driven trading analysis that transforms raw data into actionable insights.
          </p>
          
          <Button 
            size="lg" 
            className="professional-button text-base px-10 py-4 group rounded-full"
          >
            <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>

        {/* Premium demo visual */}
        <div className="relative mb-20 animate-scale-in">
          <div className="premium-card rounded-2xl p-4 premium-hover">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&h=800&fit=crop"
                alt="TradeMaster AI Dashboard Demo"
                className="w-full h-auto opacity-80"
              />
              {/* Professional play button overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center group cursor-pointer hover:bg-black/30 transition-all duration-300">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          {/* Premium floating UI elements */}
          <div className="absolute -top-4 -left-4 glass-effect rounded-xl p-4 floating-element">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
              <span className="text-white/60 font-normal text-sm">AI Active</span>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 glass-effect rounded-xl p-4 floating-element" style={{ animationDelay: '2s' }}>
            <div className="text-center">
              <div className="text-2xl font-medium text-white">+127%</div>
              <div className="text-xs text-white/60">Performance</div>
            </div>
          </div>

          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 glass-effect rounded-xl p-4 floating-element" style={{ animationDelay: '1s' }}>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-lg font-medium text-white">847</div>
                <div className="text-xs text-white/60">Analyzed</div>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="text-center">
                <div className="text-lg font-medium text-white">92%</div>
                <div className="text-xs text-white/60">Success</div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium device compatibility */}
        <div className="text-center animate-fade-in space-y-10">
          <h3 className="text-2xl md:text-3xl font-medium text-white/70">
            Available on all your devices
          </h3>
          <div className="flex justify-center items-center space-x-12 lg:space-x-20">
            <div className="flex flex-col items-center text-white/60 group">
              <Monitor className="w-12 h-12 mb-3 text-white/40 group-hover:text-white/60 transition-colors duration-300" />
              <span className="text-sm font-normal">Desktop</span>
            </div>
            <div className="flex flex-col items-center text-white/60 group">
              <Tablet className="w-12 h-12 mb-3 text-white/40 group-hover:text-white/60 transition-colors duration-300" />
              <span className="text-sm font-normal">Tablet</span>
            </div>
            <div className="flex flex-col items-center text-white/60 group">
              <Smartphone className="w-12 h-12 mb-3 text-white/40 group-hover:text-white/60 transition-colors duration-300" />
              <span className="text-sm font-normal">Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
