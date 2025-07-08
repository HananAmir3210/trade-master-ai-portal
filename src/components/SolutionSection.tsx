
import React from 'react';
import { Brain, TrendingUp, Shield, Zap } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Brain className="w-12 h-12 text-white/40" />,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze your trading patterns and provide actionable insights for continuous improvement."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-white/40" />,
      title: "Performance Tracking",
      description: "Comprehensive metrics and visualizations help you understand your progress and identify areas for optimization."
    },
    {
      icon: <Shield className="w-12 h-12 text-white/40" />,
      title: "Risk Management",
      description: "Built-in risk assessment tools help you maintain discipline and protect your capital in volatile markets."
    },
    {
      icon: <Zap className="w-12 h-12 text-white/40" />,
      title: "Real-time Insights",
      description: "Get instant feedback on your trades and strategies, enabling faster adaptation and better decision-making."
    }
  ];

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding relative">
        <div className="text-center mb-20 animate-fade-in space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            Meet <span className="gradient-text">TradeMaster AI</span>
          </h2>
          <p className="subheadline-text max-w-3xl mx-auto">
            Advanced intelligence that transforms how you analyze and evolve your trading strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Solutions */}
          <div className="space-y-10">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-start space-x-6 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0 p-4 glass-effect rounded-2xl group-hover:bg-white/10 transition-colors duration-300">
                  {solution.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-white/90 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="body-text leading-relaxed text-sm">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Premium Visual */}
          <div className="relative animate-scale-in">
            <div className="premium-card rounded-2xl p-6 premium-hover">
              <div className="aspect-video bg-gradient-to-br from-white/5 to-white/10 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop"
                  alt="TradeMaster AI Dashboard"
                  className="rounded-xl w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white/60 font-normal">AI Analysis Active</span>
                </div>
                <div className="text-white font-medium text-lg">+247.3%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
