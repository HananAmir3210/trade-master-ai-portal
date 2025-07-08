
import React from 'react';
import { ArrowRight, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-8xl mx-auto container-padding text-center">
        <div className="animate-fade-in space-y-16">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect text-white/70 text-sm font-normal tracking-wide">
            <TrendingUp className="w-4 h-4 mr-3 text-white/50" />
            Now Available
          </div>

          {/* Main Headline */}
          <div className="space-y-12">
            <h1 className="headline-text">
              <span className="text-white">AI-Powered</span>
              <br />
              <span className="gradient-text">Trading Intelligence</span>
            </h1>
            
            {/* Subheadline */}
            <p className="subheadline-text max-w-4xl mx-auto">
              Advanced analytics and machine learning transform your trading decisions. 
              Professional-grade insights for the modern trader.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/auth'}
              className="professional-button text-base px-10 py-4 group rounded-full"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="accent-button text-base px-10 py-4 rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto pt-20">
            <div className="flex flex-col items-center gap-3">
              <BarChart3 className="w-5 h-5 text-white/40" />
              <div className="text-center">
                <div className="text-3xl font-semibold text-white tracking-tight">95%</div>
                <div className="text-sm text-white/50 font-normal">Accuracy Rate</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <TrendingUp className="w-5 h-5 text-white/40" />
              <div className="text-center">
                <div className="text-3xl font-semibold text-white tracking-tight">10K+</div>
                <div className="text-sm text-white/50 font-normal">Trades Analyzed</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-5 h-5 flex items-center justify-center">
                <span className="text-white/40 font-normal text-base">★</span>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-white tracking-tight">500+</div>
                <div className="text-sm text-white/50 font-normal">Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 floating-element">
        <div className="w-px h-16 bg-white/20 rounded-full flex justify-center">
          <div className="w-px h-6 bg-white/40 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
