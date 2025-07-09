
import React from 'react';
import { ArrowRight, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-8xl mx-auto container-padding text-center">
        <div className="animate-fade-in space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full subtle-border bg-card/30 text-accent text-sm font-medium tracking-wide">
            <TrendingUp className="w-4 h-4 mr-3" />
            Early Access Available
          </div>

          {/* Main Headline */}
          <div className="space-y-8">
            <h1 className="headline-text">
              <span className="gradient-text">AI-Powered</span>
              <br />
              <span className="text-foreground">Trading Mastery</span>
            </h1>
            
            {/* Subheadline */}
            <p className="subheadline-text text-muted-foreground max-w-4xl mx-auto">
              Transform your trading journey with intelligent strategy tracking and AI-driven insights 
              that turn every trade into a learning opportunity.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/auth'}
              className="professional-button text-lg px-12 py-6 group"
            >
              Start Free Trial
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-lg px-12 py-6 transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto pt-16">
            <div className="flex flex-col items-center gap-3">
              <BarChart3 className="w-6 h-6 text-accent" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate Improvement</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <TrendingUp className="w-6 h-6 text-accent" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10,000+</div>
                <div className="text-sm text-muted-foreground">Trades Analyzed</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="text-accent font-bold text-lg">★</span>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Professional Traders</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 floating-element">
        <div className="w-1 h-12 bg-primary/30 rounded-full flex justify-center">
          <div className="w-0.5 h-4 bg-primary rounded-full mt-1 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
