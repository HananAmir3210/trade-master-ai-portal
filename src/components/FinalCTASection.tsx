
import React from 'react';
import { ArrowRight, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-dark via-dark-lighter to-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-neon/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-neon/20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-neon/20 to-primary/20 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-primary/30 bg-primary/10 text-primary text-lg font-medium mb-8">
            <Star className="w-5 h-5 mr-2" />
            Join 500+ Professional Traders
          </div>

          {/* Main headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Master <br />
            <span className="gradient-text">Your Trading?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop trading on gut feelings. Start making data-driven decisions with AI-powered insights 
            that transform your trading performance.
          </p>

          {/* Email capture form */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-dark-card border-gray-600 text-white placeholder-gray-400 focus:border-primary h-14 text-lg"
              />
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-dark font-semibold px-8 h-14 glow-effect group"
              >
                <Zap className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Free Trial
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-3">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>

          {/* Social proof */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 bg-primary rounded-full border-2 border-dark flex items-center justify-center text-dark font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-gray-400 ml-2">500+ active traders</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-400">4.9/5 average rating</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-600"></div>
            <div className="text-gray-400">
              <span className="text-primary font-bold">95%</span> see improvement in 30 days
            </div>
          </div>

          {/* Final CTA */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-neon hover:from-primary-dark hover:to-primary text-dark font-bold text-xl px-12 py-6 rounded-2xl glow-effect group"
          >
            Transform Your Trading Now
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 mb-4">Trusted by traders worldwide</p>
            <div className="flex justify-center items-center gap-8 text-gray-500">
              <span className="font-semibold">SOC 2 Compliant</span>
              <span>•</span>
              <span className="font-semibold">Bank-level Security</span>
              <span>•</span>
              <span className="font-semibold">30-day Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
