
import React from 'react';
import { Play, Monitor, Smartphone, Tablet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DemoSection = () => {
  return (
    <section id="demo" className="py-24 bg-dark relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-neon/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See <span className="gradient-text">TradeMaster AI</span> in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the power of AI-driven trading analysis. Watch how our platform transforms 
            raw trading data into actionable insights.
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-dark font-semibold text-lg px-8 py-4 glow-effect group"
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Live Demo
          </Button>
        </div>

        {/* Main demo visual */}
        <div className="relative mb-16 animate-scale-in">
          <div className="bg-gradient-to-br from-dark-card to-dark-lighter rounded-3xl p-2 border border-primary/20 glow-effect">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=700&fit=crop"
                alt="TradeMaster AI Dashboard Demo"
                className="w-full h-auto"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-dark/50 flex items-center justify-center group cursor-pointer hover:bg-dark/30 transition-colors">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform glow-effect">
                  <Play className="w-8 h-8 text-dark ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating UI elements */}
          <div className="absolute -top-4 -left-4 bg-dark-card border border-primary/30 rounded-xl p-4 animate-float">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">AI Analysis: Active</span>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-dark-card border border-primary/30 rounded-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">+127%</div>
              <div className="text-xs text-gray-400">Performance</div>
            </div>
          </div>

          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-dark-card border border-primary/30 rounded-xl p-4 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center space-x-4 text-sm">
              <div className="text-center">
                <div className="text-lg font-semibold text-white">847</div>
                <div className="text-xs text-gray-400">Trades Analyzed</div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-lg font-semibold text-white">92%</div>
                <div className="text-xs text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Device compatibility */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-gray-300">
            Available on all your devices
          </h3>
          <div className="flex justify-center items-center space-x-12">
            <div className="flex flex-col items-center text-gray-400">
              <Monitor className="w-12 h-12 mb-2 text-primary" />
              <span>Desktop</span>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <Tablet className="w-12 h-12 mb-2 text-primary" />
              <span>Tablet</span>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <Smartphone className="w-12 h-12 mb-2 text-primary" />
              <span>Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
