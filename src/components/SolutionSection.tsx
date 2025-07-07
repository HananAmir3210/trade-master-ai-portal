
import React from 'react';
import { Brain, TrendingUp, Shield, Zap } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze your trading patterns and provide actionable insights for continuous improvement."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Performance Tracking",
      description: "Comprehensive metrics and visualizations help you understand your progress and identify areas for optimization."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Risk Management",
      description: "Built-in risk assessment tools help you maintain discipline and protect your capital in volatile markets."
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Real-time Insights",
      description: "Get instant feedback on your trades and strategies, enabling faster adaptation and better decision-making."
    }
  ];

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-neon/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet <span className="gradient-text">TradeMaster AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The intelligent trading companion that transforms how you analyze, learn, and evolve your trading strategies. 
            Every trade becomes a stepping stone to mastery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Solutions */}
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-start space-x-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-2xl border border-primary/20">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Visual */}
          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-dark-card to-dark-lighter rounded-3xl p-8 border border-primary/20 glow-effect">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-neon/20 rounded-2xl flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop"
                  alt="TradeMaster AI Dashboard"
                  className="rounded-2xl w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">AI Analysis Active</span>
                </div>
                <div className="text-primary font-semibold">+247.3%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary text-lg font-medium">
            <Zap className="w-5 h-5 mr-2" />
            Transform Your Trading Today
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
