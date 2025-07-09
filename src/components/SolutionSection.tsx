
import React from 'react';
import { Brain, TrendingUp, Shield, Zap } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Brain className="w-14 h-14 text-primary" />,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze your trading patterns and provide actionable insights for continuous improvement."
    },
    {
      icon: <TrendingUp className="w-14 h-14 text-accent" />,
      title: "Performance Tracking",
      description: "Comprehensive metrics and visualizations help you understand your progress and identify areas for optimization."
    },
    {
      icon: <Shield className="w-14 h-14 text-primary" />,
      title: "Risk Management",
      description: "Built-in risk assessment tools help you maintain discipline and protect your capital in volatile markets."
    },
    {
      icon: <Zap className="w-14 h-14 text-accent" />,
      title: "Real-time Insights",
      description: "Get instant feedback on your trades and strategies, enabling faster adaptation and better decision-making."
    }
  ];

  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      {/* Premium background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="max-w-7xl mx-auto container-padding relative">
        <div className="text-center mb-24 animate-fade-in space-y-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Meet <span className="gradient-text">TradeMaster AI</span>
          </h2>
          <p className="subheadline-text text-muted-foreground max-w-4xl mx-auto">
            The intelligent trading companion that transforms how you analyze, learn, and evolve your trading strategies. 
            Every trade becomes a stepping stone to mastery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left side - Solutions */}
          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-start space-x-8 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0 p-4 bg-primary/10 rounded-3xl border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                  {solution.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="body-text leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Premium Visual */}
          <div className="relative animate-scale-in">
            <div className="premium-card rounded-3xl p-8 premium-glow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop"
                  alt="TradeMaster AI Dashboard"
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground font-medium">AI Analysis Active</span>
                </div>
                <div className="text-primary font-bold text-xl">+247.3%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium CTA */}
        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 rounded-full subtle-border bg-card/30 text-accent text-lg font-semibold tracking-wide">
            <Zap className="w-6 h-6 mr-3" />
            Transform Your Trading Today
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
